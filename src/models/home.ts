import { Schema,model,models } from 'mongoose';

const homeSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    city: {
        type: String,
        required: true,
        minlength: 5
    }
})

export default models.Home || model("Home", homeSchema)