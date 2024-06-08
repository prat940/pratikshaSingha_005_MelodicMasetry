import mongoose from "mongoose";

const classesSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Classes = mongoose.model("Classe", classesSchema);

export default Classes;