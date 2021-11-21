import { Box, Tabs, Tab } from 'grommet';
import { LinkNext } from 'grommet-icons';
import { gql, useQuery } from '@apollo/client';
import AddUrlForm from '../../Components/AddUrlForm';
import CreatePrimaryTopic from '../../Components/CreatePrimaryTopic';
import CreateSubTopic from '../../Components/CreateSubTopic';
import CreateTag from '../../Components/CreateTag';

const GET_PRIMARY_TOPICS = gql`
    query {
        getAllPrimaryTopics {
            id
            name
        }
    }
`;

function TagsGrid() {
    
    const { loading, error, data: primaryTopicData = {} } = useQuery(GET_PRIMARY_TOPICS);

    return (
        <Box pad="medium">
            <Tabs justify="start" alignControls="start">
                <Tab title="Create Primary Topic">
                    <CreatePrimaryTopic />
                </Tab>
                <Tab title="Create Sub Topic">
                    <CreateSubTopic />
                    {/* <Box>
                        <Tags type="sub" title="Create Sub Topic" data={primaryTopicData} />
                    </Box> */}
                </Tab>
                <Tab title="Create Tag">
                    <Box>
                        <CreateTag type="tag" title="Create Tag" />
                    </Box>
                </Tab>
                <Tab title="Add URL">
                    <AddUrlForm />
                </Tab>
            </Tabs>
        </Box>
    )
}

export default TagsGrid;