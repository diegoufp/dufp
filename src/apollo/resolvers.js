import Home from "../models/Home"
import {dbConect} from "../utils/mongoose"

dbConect()

export const resolvers = {
    Query: {
        allNav: async (root,args) => await Home.find({nav:{$exists: true}})
        , 
        findNavLang: async (root,args) =>{
            return await Home.findOne({"nav.lang":args.lang})
        },
        allSkills: async (root,args) => await Home.find({skill:{$exists: true}})
        ,
        findAboutMeLang: async (root,args) => {
            return await Home.findOne({"aboutMe.lang": args.lang})
        },
        findPortfolioLang: async(root,args) => {
            const Portfolio = await Home.findOne({$and:[{"portfolio.name": args.name},{"portfolio.lang": args.lang}]});
            if(!Portfolio) return null;
            return Portfolio;
        },
        findRequiredLang: async (root,args) => {
            const Required = await Home.findOne({
                $and:[
                    {"required.lang": args.lang},
                    {"required.form": args.form}
                ]
            });
            if(!Required) return null;
            return Required
        },
        findRegexLang: async (root,args) => {
            const Regex = await Home.findOne({
                $and:[
                    {"regex.lang": args.lang},
                    {"regex.form": args.form}
                ]
            });
            if(!Regex) return null;
            return Regex
        },
        findPlaceholderLang: async (root,args) => {
            const Placeholder = await Home.findOne({
                $and:[
                    {"placeholder.lang": args.lang},
                    {"placeholder.form": args.form}
                ]
            });
            if(!Placeholder) return null;
            return Placeholder
        }
    },
    Mutation: {
        addNavLang: (root, args) => {
            const newNav = new Home({nav:{...args}})
            return newNav.save()
        },
        addSkill:(root,args) => {
            const newSkill = new Home({skill:{...args}})
            return newSkill.save()
        },
        addAboutMeLang: (root,args) => {
            const newAboutMe = new Home({aboutMe:{...args}})
            return newAboutMe.save()
        },
        addPortfolioLang: (root,args) => {
            const newPortfolio = new Home({portfolio:{...args}})
            return newPortfolio.save()
        },
        addRequiredLang: (root,args) => {
            const newRequired = new Home({required: {...args}})
            return newRequired.save()
        },
        addRegexLang: (root,args) => {
            const newRegex = new Home({regex: {...args}})
            return newRegex.save()
        },
        addPlaceholderLang: (root,args) => {
            const newPlaceholder = new Home({placeholder: {...args}})
            return newPlaceholder.save()
        }

    }

    
}
