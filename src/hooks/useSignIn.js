import { useApolloClient, useMutation } from "@apollo/client";
import { USER_SIGNIN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage();

    const client = useApolloClient()
    
    const [mutate, result] = useMutation(USER_SIGNIN/*  , {onError: (error) => {
      console.log(JSON.stringify(error, null, 2));}, onCompleted: () => {
        console.log("completed")}
  } */);

    const signIn = async ({ username, password}) => {
      const credentials = { username: username, password: password}
      //mutate({variables: {username, password}})
      //await mutate({variables: {username, password}})
      const response = await mutate({variables: {credentials}})
      await authStorage.setAccessToken(response.data.authenticate.accessToken)
      client.resetStore();
      return response
      // call the mutate function here with the right arguments
    };
    return [signIn, result];
};

export default useSignIn

