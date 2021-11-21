import React, { useState, useEffect, useCallback } from 'react';
import { Box, Select } from 'grommet';
import { useQuery } from '@apollo/client';
import { GET_PRIMARY_TOPICS } from "../App/api";

function PrimaryTopicDropdown(props) {

    const { loading, error, data = {} } = useQuery(GET_PRIMARY_TOPICS);

    const [list, setList] = useState([]);

    const Rendererd = (option, index, options, { active, disabled, selected }) => (
        <Box key={option.id} pad={"small"}>
            {option.name}
        </Box>
    );

    useEffect(() => {
        if (Object.keys(data).length) {
            setList(data.getAllPrimaryTopics);
        }
    }, [data]);
    

    return ( 
        <Select
            labelKey="name"
            valueKey="id"
            options={list}
            value={props.topic}
            placeholder={props.placeholder}
            onChange={({ value, option }) => {

                props.setTopic(value);
            }}
        >
            {Rendererd}
        </Select>
    )
}

export default PrimaryTopicDropdown;