import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Contacts from './src/pages/contacts/'
import Information from './src/pages/information/'

const Stack = createStackNavigator();

export default function app(){
  return(
      //todo o conteúdo navegável fica aqui dentro
    <NavigationContainer>
      <Stack.Navigator>
        {/* aqui fica todas as pages */}
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}