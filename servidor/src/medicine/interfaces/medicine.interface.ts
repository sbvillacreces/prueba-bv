import { Document } from "mongoose";
import { CreateIngredienteDTO } from "src/ingrediente/dto/ingrediente.dto";


export interface Medicine extends Document{
    name:String;
    posology: String;
    ingredients: Array<String>;
    expirationDate:Date;
}