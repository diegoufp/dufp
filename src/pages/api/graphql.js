import { ApolloServer} from 'apollo-server-micro'
import Cors from "micro-cors";
import { typeDefs } from '../../apollo/type_defs'
import { resolvers } from "../../apollo/resolvers"


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
    path: process.env.API_GQL,
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
