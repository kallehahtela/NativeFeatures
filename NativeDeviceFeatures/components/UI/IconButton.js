import { Pressable, StyleSheet } from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress }) {
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <FontAwesome6 name={icon} size={size} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: .7,
    }
})