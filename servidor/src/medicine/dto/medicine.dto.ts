import { CreateIngredienteDTO } from "src/ingrediente/dto/ingrediente.dto";

export class CreateMedicineDTO{
    name: string;
    posology: number;
    ingredients: Array<string>;
    expirationDate:Date;
}