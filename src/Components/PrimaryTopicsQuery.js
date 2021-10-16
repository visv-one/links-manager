import React, { useState, useEffect, useCallback } from "react";
import { Select, Box } from 'grommet';
import { gql, useQuery } from '@apollo/client';
import { addTopic } from "../Features/topicSlice";
import { useSelector, useDispatch } from "react-redux";

const GET_PRIMARY_TOPICS = gql`
    query {
        getAllPrimaryTopics {
            id
            name
        }
    }
`;

function PrimaryTopicsQuery() {

    const primaryTopic = useSelector((state) => state.topic.value);

    const { loading, error, data = {} } = useQuery(GET_PRIMARY_TOPICS);

    const [primaryTopicsList, setPrimaryTopicsList] = useState([]);
    
    const [topicName, setTopicName] = useState(primaryTopic);

    const dispatch = useDispatch();

    const setTagValue = useCallback(({id, name}) => {
        setTopicName({ id, name });
        dispatch(addTopic({ id, name }));
    }, [dispatch]);


    useEffect(() => {
        if (Object.keys(data).length) {
            setPrimaryTopicsList(data.getAllPrimaryTopics);
        }
    }, [data]);

    if (loading) return 'Loading Primary Topic ...';
    if (error) return `Error! ${error.message}`;
    if (!data) return 'Data yet to recieve.';

    const Rendererd = (option, index, options, { active, disabled, selected }) => (
        <Box key={option.id} pad={"small"}>
            {option.name}
        </Box>
    );

    return (
        <Box>
            <h3>Choose Primary Topic</h3>
            <Select
                labelKey="name"
                valueKey="id"
                options={primaryTopicsList}
                value={topicName}
                onChange={({ value, option }) => {
                    setTagValue(value);
                }}
            >
                {Rendererd}
            </Select>
        </Box>
    )

}

export default PrimaryTopicsQuery;
