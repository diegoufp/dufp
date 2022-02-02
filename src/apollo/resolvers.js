import Home from "../models/home"
import "../utils/mongoose"
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
  ];
export const resolvers = {
    Query: {
        personCount: () => Home.collection.countDocuments(),
        allPersons: async(root,args) => Home.find({}),
        findPerson: (root, args) => {
        const {name} = args
        return Home.findOne({name})
        }
    },
    
}
