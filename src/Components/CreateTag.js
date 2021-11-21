import React, { useCallback, useState } from 'react';
import { Box, Button, TextInput, Select, Grid, Tabs, Tab } from 'grommet';
import { useSelector, useDispatch } from "react-redux";
import PrimaryTopicDropdown from "./PrimaryTopicDropdown";
import SubTopicDropdown from './SubTopicDropdown';

function CreateTag() {

    const [primaryTopic, setPrimaryTopic] = useState({});
    const [tag, setTag] = React.useState('');
    const [subTopic, setSubTopic] = React.useState({});

    return (
        <Box pad="medium">
            <h2>Create Tag</h2>
            <TextInput
                placeholder="Tag Name"
                style={{ marginBottom: '20px', maxWidth: '300px' }}
                value={tag}
                onChange={event => setTag(event.target.value)}
            />
            <div style={{ marginBottom: '20px', maxWidth: '300px' }}>
                <PrimaryTopicDropdown 
                    placeholder="Select Primary Topic" 
                    topic={primaryTopic}
                    setTopic={setPrimaryTopic} 
                />
            </div>
            {primaryTopic.id && <div style={{ marginBottom: '20px', maxWidth: '300px' }}>
                <SubTopicDropdown 
                    primaryId={primaryTopic.id}
                    placeholder="Select Sub Topic" 
                    topic={subTopic}
                    setTopic={setSubTopic} 
                />
            </div>}
            <Button
                disabled={tag && primaryTopic.id && subTopic.id ? false : true}
                style={{ marginTop: '20px' }}
                alignSelf="start"
                primary
                label="Submit"
            />
        </Box>
    )
}

export default CreateTag;