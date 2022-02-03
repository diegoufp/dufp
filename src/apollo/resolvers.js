import Header from "../models/Header"
import "../utils/mongoose"

export const resolvers = {
    Query: {
        allNav: async (root,args) => Header.find(), 
        findNavLang: async (root,args) =>{
            return Header.findOne({"nav.lang":args.lang})
        }
    },
    Mutation: {
        addNavLang: (root, args) => {
            const newNav = new Header({nav:{...args}})
            return newNav.save()
        }
    }

    
}
