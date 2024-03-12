import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from './constants/style';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
        }}>
          <Stack.Screen name='AllPlaces' component={AllPlaces} options={({ navigation }) => ({
            // title
            title: 'Your Favourite Places',
            // headerRight
            headerRight: ({tintColor}) => (
              <IconButton icon='add' size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')}/>
            ),
          })}
          />
          <Stack.Screen name='AddPlace' component={AddPlace} options={{
            // title
            title: 'Add a new Place'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}