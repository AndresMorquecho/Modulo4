import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { ScreenList} from "./screens/LaptopsList"


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen

          name='Laptops list'
          component={ScreenList}
        
        
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

