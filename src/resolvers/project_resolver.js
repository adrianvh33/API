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
        },
        allProjects:(_,{id},{dataSources})=>{
            return dataSources.projectInvAPI.allProjects(id)
        }
    },
    Mutation: {
        createProject: (_, {project}, {dataSources})=>{
            return dataSources.projectInvAPI.createProject(project)
        },
        editProject:(_,{id,project},{dataSources})=>{
            return dataSources.projectInvAPI.editProject(id,project)
        },
        deleteProject:(_,{id},{dataSources})=>{
            return dataSources.projectInvAPI.deleteProject(id)
        },

        addAdvance:(_,{id,avance},{dataSources})=>{
            return dataSources.projectInvAPI.addAdvance(id,avance)
        },

        editAdvance:(_,{id,indexAvance,avance},{dataSources})=>{
            return dataSources.projectInvAPI.editAdvance(id,indexAvance,avance)
        },

        deleteAdvance:(_,{id,indexAvance},{dataSources})=>{
            return dataSources.projectInvAPI.deleteAdvance(id,indexAvance)
        }

    }

};

module.exports = projectResolver;