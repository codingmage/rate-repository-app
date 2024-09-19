import { View, StyleSheet, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import Subheading from "./Subheading";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: (Constants.statusBarHeight + 10),
    padding: 16,
    backgroundColor: theme.colors.backgroundSecondary
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Pressable onPress={() => Alert.alert("No other tabs yet!")}>
            <Subheading>Repositories</Subheading>
        </Pressable>
    </View>
    )
};

export default AppBar;