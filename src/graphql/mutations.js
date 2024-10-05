import { gql } from "@apollo/client";

export const USER_SIGNIN = gql`
    mutation SignIn($credentials: AuthenticateInput!) {
        authenticate(credentials: $credentials) {
            accessToken
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