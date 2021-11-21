import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTags } from "../Features/tagsSlice";

const Span = styled.span`
padding: 5px 10px;
background-color: #dea;
border-radius: 4px;
display: inline-block;
margin-right: 5px;
font-size: 16px;
cursor: pointer;
`;

function Tags({id, name}) {

    const dispatch = useDispatch();

    const selectTag = function () {
        dispatch(addTags({id, name}));
    }

    return (
        <Span onClick={() => selectTag()}>{name}</Span>
    )
}

function SubTopicWithTags({subTopic}) {
    return (
        <div style={{marginTop: 20}}>
            <h4  style={{marginBottom: 15}}><strong>{subTopic.name}</strong></h4>
            {subTopic.tags.map(tag => <Tags key={tag.id} id={tag.id} name={tag.name} />)}
        </div>
    )
}

export default SubTopicWithTags;