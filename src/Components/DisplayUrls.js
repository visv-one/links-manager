import React from "react";
import { Grid, Card } from 'grommet';
import styled from "styled-components";
import { gql, useQuery } from '@apollo/client';

const Span = styled.span`
padding: 5px 10px;
background-color: #dea;
border-radius: 10px;
margin-right: 5px;
font-size: 16px;
`;

const GET_DISPLAY_URLS = gql`
    query GetAllUrlsWithTags($tags: [ID]) {
        getAllUrlsWithTags(tags: $tags) {
            id
            url
            title
            description
            banner
        }
    }
`;

function DisplayUrls({ tagsSelected }) {
    const tagIds = tagsSelected.map(tags => tags.id);
    const { loading, error, data } = useQuery(GET_DISPLAY_URLS, {
        variables: { tags: tagIds }
    });
    console.log({ loading, error, data });
    return (
        <div className="meta-url-list">
            {tagsSelected.map(tag => <Span key={tag.id}>{tag.name}</Span>)}
            <hr />
            {loading && (<div>loading topic data</div>)}
            {error && (<div>error topic data</div>)}
            <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
                {data && data.getAllUrlsWithTags.map((urls) => (
                    <Card width="large" background="light-1" key={urls.id}>
                        <a href={urls.url} target="_blank" style={{margin: 0, textDecoration: 'none'}}>
                            <img style={{ width: 'auto', height: 150, margin: '0 auto', display: 'block' }} src={urls.banner} alt={urls.title} />
                            <div style={{ padding: 10 }}>
                                <h4>{urls.title}</h4>
                                <p>{urls.description}</p>
                            </div>
                        </a>
                    </Card>
                ))}
            </Grid>
        </div>
    )
}

export default DisplayUrls;