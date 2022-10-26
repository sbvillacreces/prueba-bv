//declaring the schema of medicine to mongoose 
import { Schema } from "mongoose"

export const MedicineSchema =new Schema({
    name:String,
    posology: String,
    ingredients: Array<String>,
    expirationDate:Date,
});