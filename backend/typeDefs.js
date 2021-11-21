const  { gql } = require('apollo-server-express');

const typeDefs = gql`
    type PrimaryTopic {
        id: ID
        name: String!
    }

    type SubTopic {
        id: ID
        name: String!
        primaryID: ID!
    }

    type Tag {
        id: ID
        name: String!
        subTopicID: ID!
    }

    type Url {
        id: ID
        url: String!
        tagIdList: [ID!]
        title: String
        description: String
        banner: String
    }

    type SubTopicWithTags {
        id: ID
        name: String!
        tags: [Tag]
    }

    type PrimaryBelongings {
        subTopics: [SubTopicWithTags]
    }

    type Query {
        getAllUrls: [Url]
        getAllPrimaryTopics: [PrimaryTopic]
        getAllSubTopicsOfPrimaryTopic(primaryId: ID): [SubTopic]
        getPrimaryTopicDetails(id: ID): PrimaryBelongings
        getAllUrlsWithTags(tags: [ID]): [Url]
    }

    input SubInput {
        name: String
        primaryID: ID
    }

    input TagInput {
        name: String
        subTopicID: ID
    }
    
    input UrlInput {
        url: String!
        tagIdList: [ID!]
    }

    type Mutation {
        createPrimaryTopic(name: String) : PrimaryTopic
        createSubTopic(
            name: String 
            primaryID: ID
        ) : SubTopic
        createTag(tag: TagInput) : Tag
        createUrl(urlInput: UrlInput) : Url
        deleteUrl(id: ID): Url
    }

`
module.exports = typeDefs;