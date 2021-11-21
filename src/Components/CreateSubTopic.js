import React, { useState, useEffect, useCallback } from 'react';
import { Box, TextInput, Button, Select } from 'grommet';
import { useMutation } from '@apollo/client';
import { MUTATE_CREATE_SUB_TOPIC } from "../App/api";
import PrimaryTopicDropdown from "./PrimaryTopicDropdown";

function CreateSubTopic() {
    
    const [subTopic, setSubTopic] = useState('');
    const [primaryTopic, setPrimaryTopic] = useState({});

    const [createSubTopic, { data, loading, error }] = useMutation(MUTATE_CREATE_SUB_TOPIC, {
        variables: {
            primaryID: primaryTopic.id,
            name: subTopic
        }
    });

    useEffect(() => {
        if (data) {
            setSubTopic('');
            setPrimaryTopic({});
            alert('Sub Topic Created!');
        }
    }, [data]);

    return (
        <Box pad="medium">
            <h2>Create Sub Topic</h2>
            <TextInput
                placeholder="Sub Topic Name"
                style={{ marginBottom: '20px', maxWidth: '300px' }}
                value={subTopic}
                onChange={event => setSubTopic(event.target.value)}
            />
            <div style={{ maxWidth: '300px' }}>
                <PrimaryTopicDropdown 
                    placeholder="Select Primary Topic" 
                    topic={primaryTopic}
                    setTopic={setPrimaryTopic} 
                />
            </div>
            <Button
                disabled={subTopic && primaryTopic.id ? false : true}
                onClick={() => createSubTopic()}
                style={{ marginTop: '20px' }}
                alignSelf="start"
                primary
                label="Submit"
            />
        </Box>
    )
}

export default CreateSubTopic;