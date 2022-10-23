import { Document } from "mongoose";
import { CreateIngredienteDTO } from "src/ingrediente/dto/ingrediente.dto";


export interface Medicine extends Document{
    name:String;
    posology: String;
    ingredients: Array<CreateIngredienteDTO>;
    expirationDate:Date;
}