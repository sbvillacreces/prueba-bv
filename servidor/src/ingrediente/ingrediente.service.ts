import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ingrediente } from './interfaces/ingrediente.interface';
import { CreateIngredienteDTO } from './dto/ingrediente.dto';
@Injectable()
export class IngredienteService {

    constructor(@InjectModel('Ingrediente') private readonly ingredienteModel: Model<Ingrediente>) { }

    //this function will return all the existing ingredients 
    async getIngredientes(): Promise<Ingrediente[]> {
        const ingredientes = await this.ingredienteModel.find();
        return ingredientes;
    }

    //this function will return an especified ingredient
    async getIngrediente(ingredienteId: string): Promise<Ingrediente> {
        const ingrediente = await this.ingredienteModel.findById(ingredienteId);
        return ingrediente;
    }

    //this function will return the created ingredient
    async createIngrediente(createIngredienteDTO: CreateIngredienteDTO): Promise<Ingrediente> {
        const ingrediente = new this.ingredienteModel(createIngredienteDTO);
        return await ingrediente.save();
    }

//this function will return the response if a ingredient has been deleted
    async deleteIngrediente(ingredienteId: string): Promise<Ingrediente> {
        const delIngrediente = await this.ingredienteModel.findByIdAndDelete(ingredienteId);
        return delIngrediente;
    }

    //this function will return the updated ingredient
    async updateIngrediente(ingredienteId: string,createIngredienteDTO:CreateIngredienteDTO): Promise<Ingrediente> {
        const updIngrediente = await this.ingredienteModel.findByIdAndUpdate(ingredienteId,createIngredienteDTO,{new:true});
        return updIngrediente;
    }


}
