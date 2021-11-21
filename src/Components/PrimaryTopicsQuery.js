import React, { useState, useEffect, useCallback } from "react";
import { Select, Box } from 'grommet';
import { gql, useQuery } from '@apollo/client';
import { addTopic } from "../Features/topicSlice";
import { setPrimaryTopic } from "../Features/primaryTopicsSlice";
import { useSelector, useDispatch } from "react-redux";
import { GET_PRIMARY_TOPICS } from "../App/api";
import PrimaryTopicDropdown from "./PrimaryTopicDropdown";

function PrimaryTopicsQuery() {

    const primaryTopic = useSelector((state) => state.topic.value);
    
    const [topic, setTopic] = useState(primaryTopic);

    const dispatch = useDispatch();

    const setTagValue = useCallback(({id, name}) => {
        setTopic({ id, name });
        dispatch(addTopic({ id, name }));
    }, [dispatch]);

    return (
        <Box>
            <h3>Choose Primary Topic</h3>
            <PrimaryTopicDropdown 
                placeholder="Select Primary Topic" 
                topic={topic}
                setTopic={setTagValue} 
            />
        </Box>
    )

}

export default PrimaryTopicsQuery;
