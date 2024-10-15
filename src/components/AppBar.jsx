import { View, StyleSheet, Pressable, Alert, ScrollView } from "react-native";
import Constants from "expo-constants";
import Subheading from "./Subheading";

import theme from "../theme";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

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

  const {data, error, loading} = useQuery(GET_ME)

  if (error) {
    console.log(error)
  }

  const authStorage = useAuthStorage();

  const client = useApolloClient()

  const signUserOut = async () => {
    try {
      await authStorage.removeAccessToken()
      client.resetStore()
      Alert.alert("User signed out.")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.tabs} horizontal>
        <Pressable /* onPress={() => Alert.alert("No other tabs yet!")} */>
            <Link to="/">
              <Subheading>Repositories</Subheading>
            </Link>
        </Pressable>
        {
          loading ? null : (
            data.me ? (
              <Pressable onPress={signUserOut} /* onPress={() => Alert.alert("No other tabs yet!")} */>
                  <Subheading>Sign Out</Subheading>
              </Pressable>) : (
              <Pressable /* onPress={() => Alert.alert("No other tabs yet!")} */>
              <Link to="sign-in">
                <Subheading>Sign In</Subheading>
              </Link>
            </Pressable>)
        )}
      </ScrollView>
    </View>
    )
};

export default AppBar;