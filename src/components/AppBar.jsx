import { View, StyleSheet, Pressable, Alert, ScrollView } from "react-native";
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
    gap: 20
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.tabs} horizontal>
        <Pressable onPress={() => Alert.alert("No other tabs yet!")}>
            <Link to="/">
              <Subheading>Repositories</Subheading>
            </Link>
        </Pressable>
        <Pressable onPress={() => Alert.alert("No other tabs yet!")}>
            <Link to="sign-in">
              <Subheading>Sign In</Subheading>
            </Link>
         </Pressable>
      </ScrollView>
    </View>
    )
};

export default AppBar;