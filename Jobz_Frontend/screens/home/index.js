import { StyleSheet, View, Text, Button } from "react-native";
import { useAuth } from "../../AuthContext";
import { useUser } from "../../CorrectUserContext";

function Home() {
  const [auth] = useAuth();
  const [userData] = useUser();
  return (
    <View style={styles.container}>
      <Text>Hoş geldiniz.. [ {userData.userEmail} ]</Text>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
