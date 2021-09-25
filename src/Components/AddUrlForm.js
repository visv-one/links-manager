import React from 'react';
import { Button, TextInput } from 'grommet';

function AddUrlForm() {
    const [urlValue, setUrlValue] = React.useState('');
    const [ivalue, setIvalue] = React.useState('');
    return (
        <div style={{padding: '20px'}}>
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
                style={{ width: 'auto' }}
                primary
                label="Submit"
            />
        </div>
    )
}


export default AddUrlForm;