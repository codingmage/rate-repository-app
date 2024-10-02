import { StatusBar } from "react-native-web";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./utils/apolloClient";
import Constants from "expo-constants";

const apolloClient = createApolloClient();

const App = () => {

  console.log(Constants.expoConfig);

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />    
    </>
  )
};

export default App;