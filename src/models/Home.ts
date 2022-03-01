import { Schema,model,models } from 'mongoose';

const HomeSchema = new Schema({
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
    },
    required: {
        form: String,
        name: String,
        email: String,
        subject: String,
        comments: String,
        lang: String
    },
    regex: {
        form: String,
        name: String,
        email: String,
        subject: String,
        comments: String,
        lang: String
    },
    placeholder: {
        form: String,
        name: String,
        email: String,
        subject: String,
        comments: String,
        lang: String,
        submit: String
    }
})

export default models.Home || model("Home", HomeSchema);

