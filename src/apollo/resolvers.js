import Header from "../models/Header"
import "../utils/mongoose"

export const resolvers = {
    Query: {
        allNav: async (root,args) => Header.find(), 
    },
    Mutation: {
        addNavLang: async (root, args) => {
            const newNav = new Header({nav:{...args}})
            return newNav.save()
        }
    }

    
}
