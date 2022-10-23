import { Schema } from "mongoose"
import { CreateIngredienteDTO } from "src/ingrediente/dto/ingrediente.dto";

export const MedicineSchema =new Schema({
    name:String,
    posology: String,
    ingredients: Array<CreateIngredienteDTO>,
    expirationDate:Date,
});