import React, { useState } from "react";
import { StyleSheet, ScrollView, Modal, Pressable, View } from "react-native";
import "react-native-gesture-handler";
import {
  TextInput,
  Button,
  VStack,
  Text,
  HStack,
} from "@react-native-material/core";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

import users from "../../../data/users";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={1024}
    />
  );
};

const ProfileEdit = ({ route, navigation: { goBack } }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  const [data, setData] = useState(users);
  const { userAuth } = route.params;
  const jobAllInformation = data.find((k) => k.userEmail == userAuth);

  const handleGuncelle = () => {
    setIsLoading(true);

    setData((current) =>
      current.map((obj) => {
        console.log(data);
        if (obj.userEmail === "omerbakiciol@gmail.com") {
          return { ...obj, userName: "omerrrrr" };
        }
        return obj;
      })
    );
    setIsLoading(false);
    console.log(data);
    /*     axios({
      method: "POST",
      url: "http://localhost:3001/auth/register",
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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(`Register error ${error.message}`);
      }); */
  };
  const [userName, setUserName] = useState(jobAllInformation.userName);
  const [userEmail, setUserEmail] = useState(jobAllInformation.userEmail);
  const [userPassword, setUserPassword] = useState(
    jobAllInformation.userPassword
  );
  const [userPhone, setUserPhone] = useState(jobAllInformation.userPhone);
  const [userGender, setUserGender] = useState(jobAllInformation.userGender);
  const [userBirthday, setUserBirthday] = useState(
    jobAllInformation.userBirthday
  );
  const [userAddress, setUserAddress] = useState(jobAllInformation.userAddress);
  const [userDrivingLicence, setUserDrivingLicence] = useState(
    jobAllInformation.userDrivingLicence
  );
  const [userMarried, setUserMarried] = useState(jobAllInformation.userMarried);
  const [userChilderens, setUserChilderens] = useState(
    jobAllInformation.userChilderens
  );
  const [userLanguages, setUserLanguages] = useState(
    jobAllInformation.userLanguages
  );
  const [userSkills, setUserSkills] = useState(jobAllInformation.userSkills);
  const [userHobbies, setUserHobbies] = useState(jobAllInformation.userHobbies);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    <ScrollView>
      <VStack spacing={20} style={{ padding: 16 }}>
        <DateTimePickerModal
          backdropStyleIOS={"black"}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <VStack spacing={7}>
          <Text variant="h6"> Profil Düzenleme</Text>
          <Text variant="subtitle1">Profil bilgilerini güncelleyin</Text>
          <UselessTextInput
            multiline
            numberOfLines={4}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={{ padding: 10 }}
          />
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

          <TextInput
            label="Address: "
            variant="outlined"
            value={userAddress}
            onChangeText={setUserAddress}
          />
          <TextInput
            label="Drivin Licence: "
            variant="outlined"
            value={userDrivingLicence}
            onChangeText={setUserDrivingLicence}
          />
          <TextInput
            label="Married: "
            variant="outlined"
            value={userMarried}
            onChangeText={setUserMarried}
          />
          <TextInput
            label="Childeren count: "
            variant="outlined"
            value={userChilderens}
            onChangeText={setUserChilderens}
          />
          <TextInput
            label="Languages: "
            variant="outlined"
            value={userLanguages}
            onChangeText={setUserLanguages}
          />
          <TextInput
            label="Skills: "
            variant="outlined"
            value={userSkills}
            onChangeText={setUserSkills}
          />
          <TextInput
            label="Hobbies: "
            variant="outlined"
            value={userHobbies}
            onChangeText={setUserHobbies}
          />
        </VStack>
        <HStack justify="between">
          <Button
            title="Geri Dön"
            variant="text"
            compact
            onPress={() => goBack()}
          />
          <Button title="Kaydet" onPress={handleGuncelle} loading={isLoading} />
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({});
