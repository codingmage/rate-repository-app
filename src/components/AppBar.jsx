import { View, StyleSheet, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import Subheading from "./Subheading";

import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: (Constants.statusBarHeight + 10),
    padding: 16,
    backgroundColor: theme.colors.backgroundSecondary,
    // ...
  },
  tabs: {
    flexDirection: "row", 
    gap: 10
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.tabs} onPress={() => Alert.alert("No other tabs yet!")}>
            <Link to="/">
              <Subheading>Repositories</Subheading>
            </Link>
            <Link to="sign-in">
              <Subheading>Sign In</Subheading>
            </Link>
        </Pressable>
    </View>
    )
};

export default AppBar;