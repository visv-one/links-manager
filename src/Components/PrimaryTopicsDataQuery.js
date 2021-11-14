import React from "react";
import { Box } from 'grommet';
import { gql, useQuery } from '@apollo/client';
import SubTopicWithTags from './SubTopicWithTags';

const GET_PRIMARY_TOPICS_DATA = gql`
    query GetPrimaryTopicData($id: ID!) {
        getPrimaryTopicDetails(id: $id) {
            subTopics {
                id
                name
                tags {
                    id
                    name
                }
            }
        }
    }
`;

function PrimaryTopicsDataQuery({ id }) {

    const { loading, error, data } = useQuery(GET_PRIMARY_TOPICS_DATA, {
        variables: { id }
    });

    return (
        <Box>
            {loading && (<div>loading topic data</div>)}
            {error && (<div>error topic data</div>)}
            {!data && (<div style={{ padding: 10 }}>no topic data</div>)}
            <h3 style={{marginBottom: 0}}>Choose Tags from Sub Topic</h3>
            {data && data.getPrimaryTopicDetails.subTopics.map((subTopic, index) => (
                <SubTopicWithTags key={index} subTopic={subTopic} />
            ))}
        </Box>
    )

}

export default PrimaryTopicsDataQuery;
