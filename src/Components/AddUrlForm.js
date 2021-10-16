import React from 'react';
import { Box, Button, TextInput } from 'grommet';

function AddUrlForm() {
    const [urlValue, setUrlValue] = React.useState('');
    const [ivalue, setIvalue] = React.useState('');
    return (
        <Box pad="medium">
            <h2>Add URL</h2>
            <TextInput
                placeholder="Please add URL"
                style={{ marginBottom: '20px', maxWidth: '300px' }}
                value={urlValue}
                onChange={event => setUrlValue(event.target.value)}
            />
            <TextInput
                placeholder="Please add Tags"
                style={{ marginBottom: '20px', maxWidth: '300px' }}
                value={ivalue}
                onChange={event => setIvalue(event.target.value)}
            />
            <Button
                primary
                alignSelf="start"
                label="Submit"
            />
        </Box>
    )
}


export default AddUrlForm;