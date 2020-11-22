import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

import MainTabs from "./MainTabs";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="MainTabs" component={MainTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
