import React, { useEffect, useCallback } from "react";
import { Select, Box } from 'grommet';
import { gql, useQuery } from '@apollo/client';

const GET_PRIMARY_TOPICS = gql`
    query {
        getAllPrimaryTopics {
            id
            name
        }
    }
`;

function Home() {

    // const { loading, error, data = {} } = useQuery(GET_PRIMARY_TOPICS);
    const { loading, error, data = {} } = {
        loading: false,
        error: false
    };
    console.log({ data });
    const [pTopic, setPTopic] = React.useState([{
        "__typename": "PrimaryTag",
        "id": "612b87a4a9af02834de5f6e5",
        "name": "Web development"
    }]);
    const [value, setValue] = React.useState({
        id: '',
        name: ''
    });

    const setTagValue = React.useCallback((value) => {
        setValue({ id: value.id, name: value.name });
    }, []);

    // useEffect(() => {
    //     if (Object.keys(data).length) {
    //         setPTopic(data.getAllPrimaryTopics);
    //     }
    // }, [data]);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (!data) return 'Data yet to recieve.';

    const Rendererd = (option, index, options, { active, disabled, selected }) => (
        <Box key={option.id} pad={"small"}>
            {option.name}
        </Box>
    )

    return (
        <div style={{ padding: 20 }}>

            <h2>Please Choose Primary Topic</h2>

            <Select
                options={pTopic}
                value={value}
                onChange={({ value, option }) => {
                    console.log({ value, option });
                    setTagValue(value);
                }}
            >
                {Rendererd}
            </Select>
        </div>
    )

}

export default Home;
