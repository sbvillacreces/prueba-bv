import { Document } from "mongoose";


export interface Medicine extends Document{
    name:String;
    posology: String;
    ingredients: Array<String>;
    expirationDate:Date;
}