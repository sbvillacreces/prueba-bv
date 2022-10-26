export class CreateMedicineDTO{
    name: string;
    posology: number;
    ingredients: Array<string>;
    expirationDate:Date;
}