import React from "react";
import { Box } from 'grommet';
import { gql, useQuery } from '@apollo/client';
import SubTopicWithTags from './SubTopicWithTags';

const GET_PRIMARY_TOPICS_DATA = gql`
    query GetPrimaryTopicData($id: ID!) {
        getPrimaryTopicDetails(id: $id) {
            subTags {
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
            <h3>Choose Tags from Sub Topic</h3>
            {data && data.getPrimaryTopicDetails.subTags.map((subTag, index) => (
                <SubTopicWithTags key={index} subTag={subTag} />
            ))}
        </Box>
    )

}

export default PrimaryTopicsDataQuery;
