import { Schema,model,models } from 'mongoose';

const headerSchema = new Schema({
    nav: {
        home: String,
        skills: String,
        portfolio: String,
        contact: String,
        lang: String
    },
    skill: {
        img: String,
        title: String
    },
    aboutMe: {
        presentation: String,
        name: String,
        stand: String,
        lang: String,
    },
    portfolio: {
        title: String,
        text: String,
        img: String,
        lang: String,
        more: String,
        name: String,
    }
})

export default models.Home || model("Header", headerSchema);

