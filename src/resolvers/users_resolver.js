const usersResolver = {
    Query: {
        userById: (_, {id}, { dataSources}) =>{
            return dataSources.projectInvAPI.userById(id)
        }
    },
    Mutation: 
    {
        createUser:(_,{user},{dataSources})=>
        {
            return dataSources.projectInvAPI.createUser(user)
        },
        editUser:(_,{id,user},{dataSources})=>{
            return dataSources.projectInvAPI.editUser(id,user)
        },
        projec2User:(_,{idUser,idproject},{dataSources})=>{
            return dataSources.projectInvAPI.projec2User(idUser,idproject)
        },  
        reProject :(_,{idUser,idproject},{dataSources})=>{
            return dataSources.projectInvAPI.reProject(idUser,idproject)
        }      
    }

};

module.exports = usersResolver;