const projectResolver = {
    Query: {
        projectsByUser: (_, { id }, {dataSources}) =>{
            return dataSources.projectInvAPI.projectsByUser(id)
        },
        projectByDirector:(_,{directorId},{dataSources})=>{
            return dataSources.projectInvAPI.projectByDirector(directorId)
        },
        projectById:(_,{projectId},{dataSources})=>{
            return dataSources.projectInvAPI.projectById(projectId)
        }
    },
    Mutation: {
        createProject: (_, {project}, {dataSources})=>{
            return dataSources.projectInvAPI.createProject(project)
        },
        editProject:(_,{id,project},{dataSources})=>{
            return dataSources.projectInvAPI.editProject(id,project)
        }
    }

};

module.exports = projectResolver;