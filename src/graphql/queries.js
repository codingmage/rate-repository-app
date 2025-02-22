import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            node {
                description
                forksCount
                fullName
                id
                language
                ownerAvatarUrl
                ratingAverage
                reviewCount
                stargazersCount
            }
        }
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      description
      forksCount
      fullName
      id
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
    }
    }
  }
`

// other queries...