import { gql } from "apollo-server-express";
export const usertypeDef = gql`
 type login{
    email:String,
    name:String,
    photo:String,
    token:String,
    type:String,   

 }
 input userlogin{
    email:String!,
    password:String!
 }
 type Query{
    login(input:userlogin!):login
 }


 type register{
   email:String,
   name:String,
   photo:String,
   password:String,
   type:String,  
}
input registeruser{
   email:String,
   name:String,
   photo:String,
   password:String,
   type:String,  
}

type Mutation {
   createUser(input:registeruser):register
}


`