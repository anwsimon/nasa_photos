const resolvers = {
  Query: {
    get5Photos: async (_, __, {dataSources}) => {
      return dataSources.nasaAPI.get5Photos()
    },
  },
};

module.exports = resolvers
