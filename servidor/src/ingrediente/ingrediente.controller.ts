import { Controller, Post, Get, Delete, Res, HttpStatus, Body,Param,NotFoundException, Query,Put} from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDTO } from './dto/ingrediente.dto';

@Controller('ingrediente')

export class IngredienteController {

    constructor(private ingredienteService: IngredienteService) { }

    @Post('/createIngrediente')

    async createIngrediente(@Res() res, @Body() createIngredienteDTO: CreateIngredienteDTO) {
        const ingrediente = await this.ingredienteService.createIngrediente(createIngredienteDTO);
        return res.status(HttpStatus.OK).json({
            ingredient: ingrediente,
            message: 'Created',
        });
    }

    @Get('/ingredientes')
    async getIngredientes(@Res() res) {
        const ingredientes = await this.ingredienteService.getIngredientes();
        return res.status(HttpStatus.OK).json(
           ingredientes,
        );

    }

    @Get('getIngrediente/:ingredienteId')
    async getIngrediente(@Res() res,@Param('ingredienteId') ingredienteId) {
        const ingrediente = await this.ingredienteService.getIngrediente(ingredienteId);
        if(!ingrediente) {throw new NotFoundException('no ingredient');}
        return res.status(HttpStatus.OK).json(
           ingrediente,
        );
    }

    @Delete('/deleteIngrediente')
    async deleteIngrediente(@Res() res,@Query('ingredienteId') ingredienteId) {
        const ingredienteDeleted = await this.ingredienteService.deleteIngrediente(ingredienteId);
        if(!ingredienteDeleted) {throw new NotFoundException('no existing ingredient');}
        return res.status(HttpStatus.OK).json({
           message:'Ingrediente deleted',
           ingredienteDeleted
        });
    }

    @Put('/updateIngrediente')
    async updateIngrediente(@Res() res,@Body() createIngredienteDTO:CreateIngredienteDTO,@Query('ingredienteId') ingredienteId) {
        const ingredienteUpdated = await this.ingredienteService.updateIngrediente(ingredienteId,createIngredienteDTO);
        if(!ingredienteUpdated) {throw new NotFoundException('no existing ingredient to update');}
        return res.status(HttpStatus.OK).json({
           message:'Ingrediente updated',
           ingredienteUpdated
        });
    }
}
