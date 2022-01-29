import { ApolloServer, gql } from 'apollo-server-micro'
import Cors from "micro-cors";

const persons = [
  {
      name: "Midu",
      city: "Barcelona"
  },
  {
      name: "Youseff",
      city: "Mataro"
  },
  {
      name: "Itzi",
      city: "Ibiza"
  }
]

const typeDefs = gql`
  type Person {
    name: String!
    city: String!
  }
  type Query {
    allPersons: [Person]!
  }
`

const resolvers = {
  Query: {
    allPersons: () => persons
  },
}

const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default cors( async function handler(req, res) {
  
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
