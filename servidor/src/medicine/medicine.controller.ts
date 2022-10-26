import { Controller, Post, Get, Delete, Res, HttpStatus, Body,Param,NotFoundException, Query,Put } from '@nestjs/common';
import { CreateMedicineDTO } from './dto/medicine.dto';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {

    constructor(private medicineService: MedicineService) { }
//routes so the system can do the differents action CRUD
    @Post('/createMedicine')

    async createPost(@Res() res, @Body() createMedicineDTO: CreateMedicineDTO) {
        const medicine = await this.medicineService.createMedicine(createMedicineDTO);
        return res.status(HttpStatus.OK).json({
            medicine,
            message: 'Created',
        });
    }

    @Get('/medicines')
    async getmedicines(@Res() res) {
        const medicines = await this.medicineService.getMedicines();
        return res.status(HttpStatus.OK).json(
            medicines,
        );

    }

    @Get('getMedicine/:medicineId')
    async getMedicine(@Res() res,@Param('medicineId') medicineId) {
        const medicine = await this.medicineService.getMedicine(medicineId);
        if(!medicine) {throw new NotFoundException('no medicine');}
        return res.status(HttpStatus.OK).json(
            medicine,
        );
    }
 
    @Delete('/deleteMedicine')
    async deleteMedicine(@Res() res,@Query('medicineId') medicineId) {
        const medicineDeleted = await this.medicineService.deleteMedicine(medicineId);
        if(!medicineDeleted) {throw new NotFoundException('no existing medicine');}
        return res.status(HttpStatus.OK).json({
           message:'Medicine deleted',
           medicineDeleted
        });
    }

    @Put('/updateMedicine')
    async updateMedicine(@Res() res,@Body() createMedicineDTO:CreateMedicineDTO,@Query('medicineId') medicineId) {
        const medicineUpdated = await this.medicineService.updateMedicine(medicineId,createMedicineDTO);
        if(!medicineUpdated) {throw new NotFoundException('no existing medicine to update');}
        return res.status(HttpStatus.OK).json({
           message:'Medicine updated',
           medicineUpdated
        });
    }
}
