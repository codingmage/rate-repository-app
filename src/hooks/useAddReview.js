import { useMutation } from "@apollo/client";
import { NEW_REVIEW } from "../graphql/mutations";

const useAddReview = () => {
    
    const [mutate, result] = useMutation(NEW_REVIEW/*  , {onError: (error) => {
      console.log(JSON.stringify(error, null, 2));}, onCompleted: () => {
        console.log("completed")}
  } */);

    const createReview = async ({owner, name, rating, review}) => {
      const newReview = { ownerName: owner, repositoryName: name, rating:Number(rating), text: review}
      return await mutate({variables: {review: newReview}})
    };
    return [createReview, result];
};

export default useAddReview
