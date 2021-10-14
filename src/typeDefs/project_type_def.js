const { gql } = require('apollo-server');

const projectTypeDefs = gql `
    type Project {
        id_proyecto: String!
        nombre: String
        integrantes: [String]
        director: String
        presupuesto: Int
        objetivos: [String]
        estado: String
        fecha_inicio: [String]
        fecha_final: [String]
        estadoFase: String
        avances: [String]
        notas_desempeno: String
    }

    input ProjectInput{
        id_proyecto: String!
        nombre: String
        integrantes: [String]
        director: String
        presupuesto: Int
        objetivos: [String]
        estado: String
        estadoFase: String
        avances: [String]
        notas_desempeno: String
    }

    input EditInput{
        nombre: String
        integrantes: [String]
        director: String
        presupuesto: Int
        objetivos: [String]
        estado: String
        estadoFase: String
        avances: [String]
        notas_desempeno: String
    }
    extend type Query{
        projectsByUser(id: String!): [Project]
        projectByDirector(directorId:String!):[Project]
        projectById(projectId:String!):Project
        allProjects(id:String):[Project]
    }
    type Mutation{
        createProject(project: ProjectInput!): Project
        editProject(id:String!,project:EditInput!):Project
        deleteProject(id:String!):String
    }
`;

module.exports = projectTypeDefs;
