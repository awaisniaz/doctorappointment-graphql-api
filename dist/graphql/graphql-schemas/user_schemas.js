"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usertypeDef = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.usertypeDef = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n type login{\n    email:String,\n    name:String,\n    photo:String,\n    token:String,\n    type:String,   \n\n }\n input userlogin{\n    email:String!,\n    password:String!\n }\n type Query{\n    login(input:userlogin!):login\n }\n\n\n type register{\n   email:String,\n   name:String,\n   photo:String,\n   password:String,\n   type:String,  \n}\ninput registeruser{\n   email:String,\n   name:String,\n   photo:String,\n   password:String,\n   type:String,  \n}\n\ntype Mutation {\n   createUser(input:registeruser):register\n}\n\n\n"], ["\n type login{\n    email:String,\n    name:String,\n    photo:String,\n    token:String,\n    type:String,   \n\n }\n input userlogin{\n    email:String!,\n    password:String!\n }\n type Query{\n    login(input:userlogin!):login\n }\n\n\n type register{\n   email:String,\n   name:String,\n   photo:String,\n   password:String,\n   type:String,  \n}\ninput registeruser{\n   email:String,\n   name:String,\n   photo:String,\n   password:String,\n   type:String,  \n}\n\ntype Mutation {\n   createUser(input:registeruser):register\n}\n\n\n"])));
var templateObject_1;
//# sourceMappingURL=user_schemas.js.map