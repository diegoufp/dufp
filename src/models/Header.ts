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
    }
})

export default models.Home || model("Header", headerSchema);

