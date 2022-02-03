import Header from "../models/Header"
import "../utils/mongoose"

export const resolvers = {
    Query: {
        allNav: async (root,args) => Header.find({nav:{$exists: true}})
        , 
        findNavLang: async (root,args) =>{
            return Header.findOne({"nav.lang":args.lang})
        },
        allSkills: async (root,args) => Header.find({skill:{$exists: true}})
        ,
        findAboutMeLang: async (root,args) => {
            return Header.findOne({"aboutMe.lang": args.lang})
        },
        findPortfolioLang: async(root,args) => {
            return Header.findOne({$and:[{"portfolio.name": args.name},{"portfolio.lang": args.lang}]})
        }
    },
    Mutation: {
        addNavLang: (root, args) => {
            const newNav = new Header({nav:{...args}})
            return newNav.save()
        },
        addSkill:(root,args) => {
            const newSkill = new Header({skill:{...args}})
            return newSkill.save()
        },
        addAboutMeLang: (root,args) => {
            const newAboutMe = new Header({aboutMe:{...args}})
            return newAboutMe.save()
        },
        addPortfolioLang: (root,args) => {
            const newPortfolio = new Header({portfolio:{...args}})
            return newPortfolio.save()
        }
    }

    
}
