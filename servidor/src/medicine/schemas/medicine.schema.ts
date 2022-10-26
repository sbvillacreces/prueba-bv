import { Schema } from "mongoose"
import { CreateIngredienteDTO } from "src/ingrediente/dto/ingrediente.dto";

export const MedicineSchema =new Schema({
    name:String,
    posology: String,
    ingredients: Array<String>,
    expirationDate:Date,
});