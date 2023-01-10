import React, { useState } from "react";
import {
  TextInput,
  Button,
  VStack,
  Text,
  HStack,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useUser } from "../../CorrectUserContext";

function Register() {
  const [userName, setUserName] = useState("omerbakcol");
  const [userEmail, setUserEmail] = useState("omerbakcol@gmail.com");
  const [userPassword, setUserPassword] = useState("12345678");
  const [userPhone, setUserPhone] = useState("905546668099");
  const [userGender, setUserGender] = useState("erkek");
  const [userBirthday, setUserBirthday] = useState("1992-11-04");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [setAuth] = useAuth();
  const [setUserData] = useUser();

  const handleRegister = async () => {
    setIsLoading(true);
    await axios({
      method: "POST",
      url: "http://000.000.000.000/auth/register",
      data: {
        userName,
        userEmail,
        userPassword,
        userPhone,
        userGender,
        userBirthday,
      },
    })
      .then((res) => {
        axios({
          method: "GET",
          url: "http://000.000.000.000/users",
          headers: {
            Authorization: `Bearer ${res.data.accessToken}`,
          },
        }).then((k) => {
          k.data.map((user) => {
            if (user.userEmail == userEmail) {
              setUserData(user);
              setAuth([res.data.accessToken, userEmail, userPassword]);
            }
          });
        });
      })
      .catch((error) => {
        setError(`Register ERROR : [${error.message}]`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setUserBirthday(dayjs(date).format("YYYY-MM-DD"));
    setDatePickerVisibility(false);
    //hideDatePicker();
  };

  return (
    <VStack spacing={20} style={{ padding: 16 }}>
      <DateTimePickerModal
        backdropStyleIOS={"black"}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <VStack spacing={7}>
        <Text variant="h6"> Register</Text>
        <Text variant="subtitle1">Create an account</Text>
        <Text style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>
          {error}
        </Text>
      </VStack>
      <VStack spacing={5}>
        <TextInput
          label="Username: "
          variant="outlined"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          label="E-Mail: "
          variant="outlined"
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <TextInput
          label="Password: "
          variant="outlined"
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <TextInput
          label="Phone: "
          variant="outlined"
          value={userPhone}
          onChangeText={setUserPhone}
        />
        <TextInput
          label="Gender: "
          variant="outlined"
          value={userGender}
          onChangeText={setUserGender}
        />
        <TextInput
          showSoftInputOnFocus={false}
          onFocus={showDatePicker}
          label="Birthday: "
          variant="outlined"
          value={userBirthday}
          onChangeText={setUserBirthday}
        />
      </VStack>
      <HStack justify="between">
        <Button
          title="Login instead"
          variant="text"
          compact
          onPress={handleLogin}
        />
        <Button title="Register" onPress={handleRegister} loading={isLoading} />
      </HStack>
    </VStack>
  );
}
export default Register;
