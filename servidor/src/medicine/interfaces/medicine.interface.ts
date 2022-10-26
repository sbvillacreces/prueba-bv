//importing the necessary library to manage mongoose correctly (MongoDB understand it correctly)
import { Document } from "mongoose";

//interface of medicine
export interface Medicine extends Document{
    name:String;
    posology: String;
    ingredients: Array<String>;
    expirationDate:Date;
}