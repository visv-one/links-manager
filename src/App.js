import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Tags from './Components/Tags';
import { Home, TagsGrid } from './Pages';
import AddUrlForm from './Components/AddUrlForm';
import { Grommet, Box, Nav, Anchor } from 'grommet';
import { Tag, Link as LinkIcon } from 'grommet-icons';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import client from './Helpers/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet plain>
        <Box
          background="darkslategrey"
          direction="row"
          justify="between"
          pad="small"
        >
          <header>
            <h1 className="logo">
              <Anchor href="/">Links Manager</Anchor>
            </h1>
          </header>
          <Nav direction="row">
            <Anchor href="/tags" color="white" icon={<Tag />} hoverIndicator />
            <Anchor href="/add-url" color="white" icon={<LinkIcon />} hoverIndicator />
          </Nav>
        </Box>

        <Router>
          <Switch>
            <Route path="/add-url">
              <AddUrlForm />
            </Route>
            <Route path="/tags">
              <TagsGrid />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </Grommet>
    </ApolloProvider>
  );
}

export default App;