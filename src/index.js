const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ProjectInvAPI = require('./dataSources/projectinv_api');

const server = new ApolloServer({
  typeDefs,
  resolvers,

  dataSources: () => ({
      projectInvAPI: new ProjectInvAPI(),
  }),

  introspection: true,
  playground: true,
});


server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});