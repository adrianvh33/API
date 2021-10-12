const { gql } = require('apollo-server');
const usersTypeDefs = gql `
    type User {
        id: String!
        id_usuario: Int
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
        id_usuario: Int
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
        id_usuario: Int
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

    type Query {
        userById(id:String): User
    }

    type Mutation{
        createUser(user: UserInput!): User
        editUser( id: String, user: UserEdit!):User
    }
`;

module.exports = usersTypeDefs;
