import React, { useEffect } from "react";
import { Grid, Box } from 'grommet';
import { useSelector } from "react-redux";
import PrimaryTopicsQuery from '../../Components/PrimaryTopicsQuery';
import PrimaryTopicsDataQuery from '../../Components/PrimaryTopicsDataQuery';
import DisplayUrls from '../../Components/DisplayUrls';

function Home() {

    const primaryTopic = useSelector((state) => state.topic.value);
    const tagsSelected = useSelector((state) => state.tags.value);

    return (
        <Grid
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
            areas={[
                { name: 'topic', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
            className="home-grid"
        >
            <Box gridArea="topic" background="light-2" pad="medium">
                <PrimaryTopicsQuery />
                {primaryTopic.id && (
                    <div style={{marginTop: 20}}>
                        <PrimaryTopicsDataQuery id={primaryTopic.id} />
                    </div>
                )}
            </Box>
            <Box gridArea="main" pad="medium">
                {tagsSelected && <DisplayUrls tagsSelected={tagsSelected} />}                
            </Box>
        </Grid>
    )

}

export default Home;
