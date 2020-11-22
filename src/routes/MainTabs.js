import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import {
  Ionicons,
  Foundation,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import Home from "../screens/Home";
import Jobs from "../screens/Jobs";
import Courses from "../screens/Courses";

const { Navigator, Screen } = createBottomTabNavigator();

function MainTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },

        inactiveBackgroundColor: "#5B5959",
        activeBackgroundColor: "#4A4848",
        inactiveTintColor: "#DFDDDD",
        activeTintColor: "#FFFFFF",
      }}
    >
      <Screen
        name="Vagas"
        component={Jobs}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name="work"
                size={size}
                color={focused ? "#FFFFFF" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Cursos"
        component={Courses}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign
                name="play"
                size={size}
                color={focused ? "#FFFFFF" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Foundation
                name="home"
                size={36}
                color={focused ? "#FFFFFF" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favoritos"
        component={View}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name="favorite"
                size={size}
                color={focused ? "#FFFFFF" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Configuração"
        component={View}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="md-person"
                size={size}
                color={focused ? "#FFFFFF" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default MainTabs;
