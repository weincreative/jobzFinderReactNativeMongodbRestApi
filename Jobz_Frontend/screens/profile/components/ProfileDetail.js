import React, { useCallback, useRef, useState } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from "react-native";
import {
  TextInput,
  Button,
  VStack,
  Text,
  HStack,
} from "@react-native-material/core";
import { PlusButton, Options2, LeftArrow, EditButton } from "../../../Icons";
import { useUser } from "../../../CorrectUserContext";

import users from "../../../data/users";
import { useAuth } from "../../../AuthContext";

import axios from "axios";

const ProfileDetail = ({ navigation }) => {
  const [auth, setAuth] = useAuth();
  const [userData, setUserData] = useUser();
  const [userDetailData, setUserDetailData] = useState("");

  const handleGetUserDetail = async () => {
    await axios({
      method: "GET",
      url: "http://000.000.000.000/works/" + userData._id,
      headers: {
        Authorization: `Bearer ${auth[0]}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setUserDetailData(res.data);
      })
      .catch((error) => {
        setError(`GetUserDetail ERROR : [${error.message}]`);
      });
  };

  const oturumuKapat = () => {
    setAuth(null);
    setUserData(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 44,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity onPress={oturumuKapat} style={{ marginRight: 8 }}>
          {/* <PlusButton size={22} fill={"black"} /> */}
          <Text style={{ fontSize: 12 }}>Oturumu kapat</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#f3f2ef" }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 414,
            height: 162,
            overflow: "hidden",
          }}
        >
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 414, height: 104 }}
                source={{
                  uri: userData.userBackgrounPhoto,
                }}
                resizeMode="center"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  top: 13,
                  right: 92,
                  position: "absolute",
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                CV oluştur
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProfileEdit", {
                  userAuth: userData.userEmail,
                })
              }
              style={{ top: 7, right: 50, position: "absolute", marginLeft: 8 }}
            >
              <EditButton size={30} fill={"black"} />
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                bottom: -45,
                left: 20,
                width: 120,
                height: 120,
                borderRadius: 60,
                overflow: "hidden",
                borderWidth: 4,
                borderColor: "white",
              }}
            >
              <Image
                style={{ width: 120, height: 120 }}
                source={{
                  uri: userData.userPhoto,
                }}
                resizeMode="center"
              />
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                backgroundColor: "#215af3",
                borderWidth: 2,
                borderColor: "white",
                alignItems: "center",
                left: 101,
                top: 20,
                height: 25,
                width: 25,
                borderRadius: 12.5,
              }}
            >
              <PlusButton style={{ marginTop: 1 }} size={20} fill={"white"} />
            </TouchableOpacity>
          </View>
        </View>

        {/*         <View style={{ backgroundColor: "white", marginBottom: 15 }}>
          <Text
            style={{
              marginLeft: 25,
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            {userData.userName.toUpperCase()}
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 15,
              fontSize: 14,
              fontWeight: "700",
            }}
          >
            {userAllInformation.userDetail.okul1.isim}
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 15,
              marginBottom: 15,
              fontSize: 14,
              fontWeight: "350",
            }}
          >
            {`${userAllInformation.userDetail.istecrubesi1.isadi} 'de`}{" "}
            {`  ${userAllInformation.userDetail.istecrubesi1.isgorev} olarak çalışıyor`}
          </Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({});
