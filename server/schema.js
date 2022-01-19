const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
    "Query to get photos array for the homepage "
    get5Photos: [Photo!]
    me: User
  }

  "A photo is comprised of various metadata"
  type Photo {
    date: String!
    "The photo's title"
    title: String!
    "The photo's url"
    url: String!
    "The track's media type"
    media_type: String
    "The track's explanation"
    explanation: String
  }
  "User data to manage liked photos"
  type User {
  id: ID!
  photos: [Photo]!
}

type Mutation {
  likePhotos(photoTitles: [String]!): PhotoUpdateResponse!
  unlikePhotos(photoTitle: String!): PhotoUpdateResponse!
  }

type PhotoUpdateResponse {
  success: Boolean!
  message: String
  photos: [Photo]
}
`;

module.exports = typeDefs
