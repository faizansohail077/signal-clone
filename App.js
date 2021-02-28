import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Home from './screens/Home/Home';
import Addchat from './screens/Addchat/Addchat';
import ChatScreen from './screens/ChatScreen/ChatScreen';


const Stack = createStackNavigator()

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Addchat" component={Addchat} />
        <Stack.Screen name="Chat" component={ChatScreen} />

      </Stack.Navigator>

      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
