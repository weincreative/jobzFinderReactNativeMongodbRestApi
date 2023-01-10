import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { ProfileGhost, Messenger, MessengerClick } from "../../Icons";

const size = 30;
const fill = "black";

function Header() {
  return (
    <View
      style={{
        height: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <Text>OMER</Text>
    </View>
  );
}

export default Header;
