const { gql } = require('apollo-server');
const usersTypeDefs = gql `
    type User {
        id: String!
        nombre: String
        apellido: String
        correo: String
        password: String
        role: String
        telefono: String
        carrera: String
        fecha_ingreso: String
        id_proyectos: [String]
    }
    
    input UserInput{
        id: String!
        nombre: String
        apellido: String
        correo: String
        password: String
        role: String
        telefono: String
        carrera: String
        fecha_ingreso: String
        id_proyectos: [String]
    }

    input UserEdit{
        nombre: String
        apellido: String
        correo: String
        password: String
        role: String
        telefono: String
        carrera: String
        fecha_ingreso: String
        id_proyectos: [String]
    }
    type token{
        token:String
    }

    type Query {
        userById(id:String): User
        allUsers(id:String):[User]
    }

    type Mutation{
        createUser(user: UserInput!): User
        editUser( id: String, user: UserEdit!):User
        projec2User(idUser: String!, idproject:String!):User
        reProject(idUser: String!, idproject:String!):User
        deleteUser(id:String!):token
    }
`;

module.exports = usersTypeDefs;
