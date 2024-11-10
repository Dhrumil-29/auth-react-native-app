import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export type AuthRouteParamlist = {
  Login: undefined;
  Signup: undefined;
};
const Stack = createNativeStackNavigator<AuthRouteParamlist>();
const AuthRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;
