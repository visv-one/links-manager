import { gql } from '@apollo/client';

const GET_PRIMARY_TOPICS = gql`
    query {
        getAllPrimaryTopics {
            id
            name
        }
    }
`;

const GET_SUB_TOPICS = gql`
    query getAllSubTopicsOfPrimaryTopic($primaryId: ID!) {
        getAllSubTopicsOfPrimaryTopic(primaryId: $primaryId) {
            id
            name
            primaryID
        }
    }
`;

const MUTATE_CREATE_SUB_TOPIC = gql`
    mutation createSubTopic(
        $name: String!
        $primaryID: ID!
    ) {
        createSubTopic(name: $name, primaryID: $primaryID) {
            id
            name
        }
    }
`;

export {
    GET_PRIMARY_TOPICS,
    GET_SUB_TOPICS,
    MUTATE_CREATE_SUB_TOPIC
}