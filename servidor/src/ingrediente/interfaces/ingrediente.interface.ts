//importing the necessary library to manage mongoose correctly (MongoDB understand it correctly)
import { Document } from "mongoose";
//interface of ingredient
export interface Ingrediente extends Document{
    name:String;
}