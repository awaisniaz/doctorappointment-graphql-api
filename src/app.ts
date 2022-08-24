import express from 'express';
import './Database-connection/index'
import { user_resolver } from './graphql/graphql-resolvers/user_resolver';
import { usertypeDef } from './graphql/graphql-schemas/user_schemas';
import { ApolloServer } from 'apollo-server-express'
const resolvers = [user_resolver]
const typeDefs = [usertypeDef]
const server = new ApolloServer({ typeDefs, resolvers })
const app = express();
const port = 4000;

server.start()
    .then(res => {
        server.applyMiddleware({ app })
        app.listen({ port: port }, () => {
            console.log("🚀 Server is Ready")
        })
    })
