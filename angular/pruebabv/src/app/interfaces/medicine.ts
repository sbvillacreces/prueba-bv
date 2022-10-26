//interface of medicine
export interface Medicine {
    _id?: string;
    name: string;
    posology: string;
    ingredients: Array<string>;
    expirationDate:Date;
}
