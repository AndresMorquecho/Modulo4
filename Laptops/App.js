
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { ScreenList} from "./screens/LaptopsList"
import {LaptopsForm} from "./screens/LaptopsForms"

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Laptopslist'>
        <Stack.Screen

          name='Laptopslist'
          component={ScreenList}
        
        
        />

        <Stack.Screen

        name='LaptopsForm'
        component={LaptopsForm}


        />        

      </Stack.Navigator>

    </NavigationContainer>

  );
}

