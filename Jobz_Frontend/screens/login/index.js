import { useState } from "react";
import { Alert } from "react-native";
import {
  TextInput,
  Button,
  VStack,
  Text,
  HStack,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { useAuth } from "../../AuthContext";
import { useUser } from "../../CorrectUserContext";

function Login() {
  const [userEmail, setUserEmail] = useState("omerbakiciol@gmail.com");
  const [userPassword, setUserPassword] = useState("w3noomhacker");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [auth, setAuth] = useAuth();
  const [userData, setUserData] = useUser();
  const [userObjectID, setUserObjectID] = useState();

  const handleLogin = async () => {
    setIsLoading(true);
    await axios({
      method: "POST",
      url: "http://000.000.000.000/auth/login",
      data: {
        userEmail,
        userPassword,
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
        setError(`[ERROR] : [${error.message}]`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <VStack spacing={20} style={{ padding: 16 }}>
      <VStack spacing={9}>
        <Text variant="h6"> Login</Text>
        <Text variant="subtitle1">Create an account</Text>
        <Text style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>
          {error}
        </Text>
      </VStack>
      <VStack spacing={5}>
        <TextInput
          label="E-Mail: "
          variant="outlined"
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <TextInput
          secureTextEntry={true}
          label="Password: "
          variant="outlined"
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <HStack justify="between">
          <Button
            title="Register instead"
            variant="text"
            compact
            onPress={handleRegister}
          />
          <Button title="Login" onPress={handleLogin} loading={isLoading} />
        </HStack>
      </VStack>
    </VStack>
  );
}
export default Login;
