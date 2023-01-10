import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import ProfileDetailScreens from "./components/ProfileDetail";
import ProfileEditcreens from "./components/ProfileEdit";

const Stack = createNativeStackNavigator();

function Profile() {
  //f3f2ef
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProfileDetail" component={ProfileDetailScreens} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditcreens} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
export default Profile;
