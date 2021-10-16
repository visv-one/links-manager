import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTags } from "../Features/tagsSlice";

function Tags({id, name}) {

    const dispatch = useDispatch();

    const Span = styled.span`
        padding: 5px 10px;
        background-color: #dea;
        border-radius: 10px;
        margin-right: 5px;
        font-size: 16px;
        cursor: pointer;
    `;

    const selectTag = function () {
        dispatch(addTags({id, name}));
    }

    return (
        <Span onClick={() => selectTag()}>{name}</Span>
    )
}

function SubTopicWithTags({subTag}) {
    return (
        <div>
            <h4><strong>{subTag.name}</strong></h4>
            {subTag.tags.map(tag => <Tags key={tag.id} id={tag.id} name={tag.name} />)}
        </div>
    )
}

export default SubTopicWithTags;