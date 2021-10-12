const projectResolver = {
    Query: {
        projectsByUser: (_, { id }, {dataSources}) =>{
            return dataSources.projectInvAPI.projectsByUser(id)
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