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
        }          
    }

};

module.exports = usersResolver;