import { useState } from "react";

import { View, Button, Alert, Image, Text, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

import { Colors } from "../../constants/style";

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState();

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insuffient Permissions!', 'You need to grant camera permissions to use this app.');
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();
    
        if (!hasPermission) {
            console.log('No permission to access camera');
            return;
        }
    
        console.log('About to launch camera...');
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        console.log('Image object:', image); // Log the entire object to verify its structure
    
        if (!image.cancelled) {
            console.log('Image URI:', image.uri);
            setPickedImage(image.uri);
        } else {
            console.log('Image picking was cancelled');
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <Button title='Take Image' onPress={takeImageHandler} />
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});