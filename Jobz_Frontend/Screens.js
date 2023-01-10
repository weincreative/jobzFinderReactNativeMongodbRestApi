import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

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

import users from "./data/users";
import { useAuth } from "./AuthContext";

const size = 27;
const fill = "black";

function Screens() {
  const [Auth] = useAuth();
  const userAllInformation = users.find((e) => e.userEmail == Auth);
  if (!userAllInformation)
    userAllInformation =
      "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png";

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
            if (focused) return <HomeClick size={size} fill={fill} />;
            return <Home size={size} fill={"grey"} />;
          },
        }}
      />
      <Tab.Screen
        name="MyNetwork"
        component={NetworkScreen}
        options={{
          headerTitle: "MyNetwork",
          tabBarLabel: "mynetwork",
          tabBarIcon: ({ focused }) => {
            if (focused) return <NetworkClick size={size} fill={fill} />;
            return <Network size={size} fill={"grey"} />;
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerTitle: "Notifications",
          tabBarLabel: "notifications",
          tabBarIcon: ({ focused }) => {
            if (focused) return <NotificationsClick size={size} fill={fill} />;
            return <Notifications size={size} fill={"grey"} />;
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
            if (focused) return <JobsClick size={size} fill={fill} />;
            return <Jobs size={size} fill={"grey"} />;
          },
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={MessengerScreen}
        options={{
          headerTitle: "Messenger",
          tabBarLabel: "messenger",
          tabBarIcon: ({ focused }) => {
            if (focused) return <MessengerClick size={size} fill={fill} />;
            return <Messenger size={size} fill={"grey"} />;
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
            if (focused)
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 21,
                  }}
                  source={{
                    uri: userAllInformation.userPhoto,
                  }}
                />
              );
            return (
              <Image
                style={{
                  width: size,
                  height: size,
                  borderWidth: 2,
                  borderColor: "transparent",
                  borderRadius: 21,
                }}
                source={{
                  uri: userAllInformation.userPhoto,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default Screens;
