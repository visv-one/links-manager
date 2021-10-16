const  { gql } = require('apollo-server-express');

const typeDefs = gql`
    type PrimaryTag {
        id: ID
        name: String!
    }

    type SubTag {
        id: ID
        name: String!
        primaryID: ID!
    }

    type Tag {
        id: ID
        name: String!
        subTagID: ID!
    }

    type Url {
        id: ID
        url: String!
        tagIdList: [ID!]
        title: String
        description: String
        banner: String
    }

    type SubTagWithTags {
        id: ID
        name: String!
        tags: [Tag]
    }

    type PrimaryBelongings {
        subTags: [SubTagWithTags]
    }

    type Query {
        getAllUrls: [Url]
        getAllPrimaryTopics: [PrimaryTag]
        getPrimaryTopicDetails(id: ID): PrimaryBelongings
        getAllUrlsWithTags(tags: [ID]): [Url]
    }

    input SubInput {
        name: String
        primaryID: ID
    }

    input TagInput {
        name: String
        subTagID: ID
    }
    
    input UrlInput {
        url: String!
        tagIdList: [ID!]
    }

    type Mutation {
        createPrimaryTopic(name: String) : PrimaryTag
        createSubTopic(sub: SubInput) : SubTag
        createTag(tag: TagInput) : Tag
        createUrl(urlInput: UrlInput) : Url
        deleteUrl(id: ID): Url
    }

`
module.exports = typeDefs;