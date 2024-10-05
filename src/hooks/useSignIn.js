import { useMutation } from "@apollo/client";
import { USER_SIGNIN } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(USER_SIGNIN/*  , {onError: (error) => {
      console.log(JSON.stringify(error, null, 2));}, onCompleted: () => {
        console.log("completed")}
  } */);

    const signIn = async ({ username, password}) => {
      const credentials = { username: username, password: password}
      //mutate({variables: {username, password}})
      //await mutate({variables: {username, password}})
      return await mutate({variables: {credentials}})
      // call the mutate function here with the right arguments
    };
  
    // console.log(result)
    return [signIn, result];
};

export default useSignIn

