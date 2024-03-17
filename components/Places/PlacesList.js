import { FlatList, View, Text, StyleSheet } from "react-native";

import { Colors } from '../../constants/style';

import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

function PlacesList({ places }) {
    const navigation = useNavigation();

    function selectPlaceHandler(id) {
        navigation.navigate('PlaceDetail', {
            placeId: id
        });
    }

    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places added yet - start adding some</Text>
            </View>
        );
    }

    return (
        <FlatList style={styles.list} data={places} keyExtractor={(item) => item.id} renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler}/>} />
    );
}

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary100,
    },
    list: {
        margin: 24,
    }
});