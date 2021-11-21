import React, { useEffect } from 'react';
import { Box, TextInput, Button } from 'grommet';
import { gql, useQuery, useMutation } from '@apollo/client';

const MUTATE_CREATE_PRIMARY_TOPIC = gql`
    mutation createPrimaryTopic($name: String!){
        createPrimaryTopic(name: $name) {
            id
            name
        }
    }
`

function CreatePrimaryTopic() {
    
    const [topic, setTopic] = React.useState('');

    const [createTopic, { data, loading, error }] = useMutation(MUTATE_CREATE_PRIMARY_TOPIC, {
        variables: {
            name: topic
        }
    });

    useEffect(() => {
        if (data) {
            setTopic('');
            alert('Primary Topic Created!');
        }
    }, [data]);

    return (
        <Box pad="medium">
            <h2>Create Primary Topic</h2>
            <TextInput
                placeholder="Primary Topic Name"
                style={{ marginBottom: '20px', maxWidth: '300px' }}
                value={topic}
                onChange={event => setTopic(event.target.value)}
            />
            <Button
                disabled={topic ? false : true}
                onClick={() => createTopic()}
                style={{ marginTop: '20px' }}
                alignSelf="start"
                primary
                label="Submit"
            />
        </Box>
    )
}

export default CreatePrimaryTopic;