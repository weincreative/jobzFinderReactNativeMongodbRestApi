import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  TextInput,
  Button,
  VStack,
  Text,
  HStack,
} from "@react-native-material/core";
import users from "../../../data/users";
const JobsCreate = ({ route, navigation: { goBack } }) => {
  const [data, setData] = useState([users]);
  const { userAuth } = route.params;
  const jobAllInformation = users.find((k) => k.userEmail == userAuth);
  return (
    <View>
      <Text>JobsCreate</Text>
    </View>
  );
};

export default JobsCreate;

const styles = StyleSheet.create({});
