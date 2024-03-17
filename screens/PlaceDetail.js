import { useEffect } from "react";

import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/style";

function PlaceDetail({route}) {
    function showOnMapHandler() {}

    const selectedPlaceId = route.params.placeId;

    useEffect(() => {
        // use selectedPlaceId to fetch data for a single place
    }, [selectedPlaceId]);

    return (
        <ScrollView>
            <Image style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>ADDRESS</Text>
                    <OutlinedButton icon='map' onPress={showOnMapHandler}>View on Map</OutlinedButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default PlaceDetail;

const styles = StyleSheet.create({
    image: {
        height: '35%',
        minHeight: 350,
        width: '100%',
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
});