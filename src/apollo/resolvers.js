import Home from "../models/Home"
import "../utils/mongoose"

export const resolvers = {
    Query: {
        allNav: async (root,args) => await Header.find({nav:{$exists: true}})
        , 
        findNavLang: async (root,args) =>{
            return await Header.findOne({"nav.lang":args.lang})
        },
        allSkills: async (root,args) => await Header.find({skill:{$exists: true}})
        ,
        findAboutMeLang: async (root,args) => {
            return await Header.findOne({"aboutMe.lang": args.lang})
        },
        findPortfolioLang: async(root,args) => {
            const Portfolio = await Header.findOne({$and:[{"portfolio.name": args.name},{"portfolio.lang": args.lang}]});
            if(!Portfolio) return null;
            return Portfolio;
        },
        findRequiredLang: async (root,args) => {
            const Required = await Header.findOne({
                $and:[
                    {"required.lang": args.lang},
                    {"required.form": args.form}
                ]
            });
            if(!Required) return null;
            return Required
        },
        findRegexLang: async (root,args) => {
            const Regex = await Header.findOne({
                $and:[
                    {"regex.lang": args.lang},
                    {"regex.form": args.form}
                ]
            });
            if(!Regex) return null;
            return Regex
        },
        findPlaceholderLang: async (root,args) => {
            const Placeholder = await Header.findOne({
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
        },
        addRequiredLang: (root,args) => {
            const newRequired = new Header({required: {...args}})
            return newRequired.save()
        },
        addRegexLang: (root,args) => {
            const newRegex = new Header({regex: {...args}})
            return newRegex.save()
        },
        addPlaceholderLang: (root,args) => {
            const newPlaceholder = new Header({placeholder: {...args}})
            return newPlaceholder.save()
        }

    }

    
}
