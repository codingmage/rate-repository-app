import { gql } from "@apollo/client";

export const USER_SIGNIN = gql`
    mutation SignIn($credentials: AuthenticateInput!) {
        authenticate(credentials: $credentials) {
            accessToken
        }
}

`

export const NEW_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
           repositoryId
        }
    }
`

/* export const USER_SIGNIN = gql`
    mutation {
        authenticate(credentials: { username: $username, password: $password }) {
            accessToken
        }
}

` */