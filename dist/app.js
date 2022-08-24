"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import './Database-connection/index'
var user_resolver_1 = require("./graphql/graphql-resolvers/user_resolver");
var user_schemas_1 = require("./graphql/graphql-schemas/user_schemas");
var apollo_server_express_1 = require("apollo-server-express");
var resolvers = [user_resolver_1.user_resolver];
var typeDefs = [user_schemas_1.usertypeDef];
var server = new apollo_server_express_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
var app = (0, express_1.default)();
var port = 4000;
server.start()
    .then(function (res) {
    server.applyMiddleware({ app: app });
    app.listen({ port: port }, function () {
        console.log("🚀 Server is Ready");
    });
});
//# sourceMappingURL=app.js.map