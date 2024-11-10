import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

// lets define types
export type AppRouteParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppRouteParamList>();
const AppRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default AppRoute;
