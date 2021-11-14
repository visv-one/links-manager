const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

async function startServer() {
    const app = express();

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        introspection: true, //OPTIONAL
        playground: true, //OPTIONAL
        cors: false
    });

    await apolloServer.start();

    app.use(cors({ origin: '*' }));

    apolloServer.applyMiddleware({ app, path: '/api/v1' });

    app.use((req, res) => {
        res.send("Hello from express apollo server")
    });

    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    }).then(() => console.log("DB connected!"));

    app.listen(4000, () => console.log('Server runnning on port 4000'));
}

startServer();