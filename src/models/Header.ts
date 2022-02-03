import { Schema,model,models } from 'mongoose';

const headerSchema = new Schema({
    nav: {
        home: String,
        skills: String,
        portfolio: String,
        contact: String,
        lang: String
    }
})

export default models.Home || model("Header", headerSchema);

