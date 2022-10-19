import { CreateIngredienteDTO } from "src/ingrediente/dto/ingrediente.dto";

export class CreateMedicineDTO{
    name: string;
    posology: number;
    ingredients: Array<CreateIngredienteDTO>;
    expirationDate:Date;
}