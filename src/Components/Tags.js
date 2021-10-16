import React from 'react';
import { Box, Button, TextInput, Select, Grid } from 'grommet';

function Tags(props) {
    const [ivalue, setIvalue] = React.useState('');

    const [value, setValue] = React.useState('medium');

    return (
        <Box pad="medium">
            <h2>{props.title}</h2>
            <TextInput
                placeholder="Tag Name"
                style={{ marginBottom: '20px' }}
                value={ivalue}
                onChange={event => setIvalue(event.target.value)}
            />
            {props.type !== 'primary' && <Grid>
                <Select
                    options={['small', 'medium', 'large']}
                    alignSelf="stretch"
                    value={value}
                    onChange={({ option }) => setValue(option)}
                />
            </Grid>}
            <Button
                style={{ marginTop: '20px' }}
                alignSelf="start"
                primary
                label="Submit"
            />
        </Box>
    )
}

export default Tags;