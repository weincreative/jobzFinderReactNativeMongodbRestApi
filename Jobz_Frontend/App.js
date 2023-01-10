import React, { useCallback, useRef } from "react";
import {
  SafeAreaView,
  useWindowDimensions,
  Button,
  Text,
  View,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Home,
  HomeClick,
  Network,
  NetworkClick,
  Jobs,
  JobsClick,
  Notifications,
  NotificationsClick,
  ProfileGhost,
  Messenger,
  MessengerClick,
} from "./Icons";

import HomeScreen from "./screens/home";
import JobsScreen from "./screens/jobs";
import NetworkScreen from "./screens/network";
import NotificationsScreen from "./screens/notifications";
import MessengerScreen from "./screens/messenger";
import ProfileScreen from "./screens/profile";
import RegisterScreen from "./screens/register";
import LoginScreen from "./screens/login";

import BottomSheet from "./components/shared/BottomSheet";

import AuthProvider, { useAuth } from "./AuthContext";
import UserProvider, { useUser } from "./CorrectUserContext";
import UserDetailProvider from "./CorrectUserDetailContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  const [auth] = useAuth();
  const [userData] = useUser();

  if (!auth) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        //tabBarActiveTintColor: "#000",
        //tabBarInactiveTintColor: "#262626",
        //tabBarActiveBackgroundColor: 'black'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          tabBarLabel: "home",
          tabBarIcon: ({ focused }) => {
            if (focused) return <HomeClick size={27} fill={"black"} />;
            return <Home size={27} fill={"grey"} />;
          },
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          headerTitle: "Jobs",
          tabBarLabel: "jobs",
          tabBarIcon: ({ focused }) => {
            if (focused) return <JobsClick size={27} fill={"black"} />;
            return <Jobs size={27} fill={"grey"} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          tabBarLabel: "profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={[
                  {
                    width: 27,
                    height: 27,
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 21,
                  },
                  { borderColor: focused ? "black" : "transparent" },
                ]}
                source={{
                  uri:
                    userData.userPhoto ||
                    "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const { height } = useWindowDimensions();
  const bottomSheetRef = useRef(null);

  const pressHandler = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  //<GestureHandlerRootView style={{ flex: 1 }}>

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>
            <UserDetailProvider>
              {/* <Button
            title="open"
            onPress={() => {
              pressHandler();
            }}
          /> */}
              <Navigator />

              <BottomSheet
                activeHeight={height * 0.5}
                ref={bottomSheetRef}
                backgroundColor={"white"}
                backDropColor={"black"}
              >
                <Text>BottomSheet is Here</Text>
              </BottomSheet>
            </UserDetailProvider>
          </UserProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
