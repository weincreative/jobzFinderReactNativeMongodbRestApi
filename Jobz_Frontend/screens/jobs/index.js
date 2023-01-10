import { SafeAreaView, View, Text } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import JobsListScreens from "./components/JobsList";
import JobsDetailsScreens from "./components/JobsDetails";
import JobsCreateScreens from "./components/JobsCreate";

const Stack = createNativeStackNavigator();

function Jobs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="JobsList" component={JobsListScreens} />
        <Stack.Screen name="JobsDetails" component={JobsDetailsScreens} />
        <Stack.Screen name="JobsCreate" component={JobsCreateScreens} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
export default Jobs;
