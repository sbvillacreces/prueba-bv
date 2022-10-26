import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Medicine } from './interfaces/medicine.interface';
import { CreateMedicineDTO } from './dto/medicine.dto';


@Injectable()
export class MedicineService {

constructor(@InjectModel('Medicine') private readonly medicineModel:Model<Medicine>){}

//this function will return all the existing medicines  
async getMedicines(): Promise<Medicine[]> {
    const medicines = await this.medicineModel.find();
    return medicines;
}

//this function will return an especified medicine by it ID 
async getMedicine(medicineId: string): Promise<Medicine> {
    const medicine = await this.medicineModel.findById(medicineId);
    return medicine;
}

//this function will return the created medicine
async createMedicine(createMedicineDTO: CreateMedicineDTO): Promise<Medicine> {
    const medicine = new this.medicineModel(createMedicineDTO);
    return await medicine.save();
}

//this function will return the response if a medicine has been deleted
async deleteMedicine(medicineId: string): Promise<Medicine> {
    const delMedicine = await this.medicineModel.findByIdAndDelete(medicineId);
    return delMedicine;
}

//this function will return the updated medicine ({new:true})
async updateMedicine(medicineId: string,createMedicineDTO:CreateMedicineDTO): Promise<Medicine> {
    const updMedicine = await this.medicineModel.findByIdAndUpdate(medicineId,createMedicineDTO,{new:true});
    return updMedicine;
}

}
