import Tags from '../../Components/Tags';
import { Box, Grid } from 'grommet';
import { LinkNext } from 'grommet-icons';

function TagsGrid() {
    return (
        <Grid
            rows={['auto']}
            columns={['auto', 'auto', 'auto']}
            responsive={true}
            gap="small"
            areas={[
                { name: 'header', start: [0, 0], end: [0, 0] },
                { name: 'nav', start: [1, 0], end: [1, 0] },
                { name: 'main', start: [2, 0], end: [2, 0] },
            ]}
            style={{ margin: 20 }}
            className="grid_override"
        >
            <Box 
                gridArea="header" 
                style={{ position: 'relative' }} 
                background="light-2" 
                pad={{ horizontal: 'medium', vertical: 'small' }}
            >
                <Tags type="primary" title="Create Primary Topic Tag" />
                <LinkNext />
            </Box>
            <Box 
                gridArea="nav" 
                style={{ position: 'relative' }} 
                background="light-2" 
                pad={{ horizontal: 'medium', vertical: 'small' }} 
            >
                <Tags type="sub" title="Create Sub Topic Tag" />
                <LinkNext />
            </Box>
            <Box 
                gridArea="main" 
                background="light-2" 
                pad={{ horizontal: 'medium', vertical: 'small' }} 
            >
                <Tags type="tag" title="Create Tags" />
            </Box>
        </Grid>
    )
}

export default TagsGrid;