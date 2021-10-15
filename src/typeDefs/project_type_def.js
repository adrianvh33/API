const { gql } = require('apollo-server');

const projectTypeDefs = gql `
    type Project {
        id_proyecto: String!
        nombre: String
        integrantes: [String]
        director: String
        presupuesto: Int
        objetivos: String
        estado: String
        fecha_inicio: String
        fecha_final: String
        estadoFase: String
        avances: [String]
        notas_desempeno: [String]
    }

    input AvanceInput{
        avance: String!
    }

    input ProjectInput{
        id_proyecto: String!
        nombre: String
        integrantes: [String]
        director: String
        presupuesto: Int
        objetivos: [String]
        estado: String
        fecha_final: String
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
        addAdvance(id:String!,avance:AvanceInput!):Project
        editAdvance(id:String!,indexAvance:String!,avance:AvanceInput!):Project
        deleteAdvance (id:String!,indexAvance:String!):Project
    }
`;

module.exports = projectTypeDefs;
