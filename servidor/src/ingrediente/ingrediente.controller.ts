import { Controller, Post, Get, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDTO } from './dto/ingrediente.dto';

@Controller('ingrediente')

export class IngredienteController {

    constructor(private ingredienteService: IngredienteService) { }

    @Post('/create')
    
   async createPost(@Res() res, @Body() createIngredienteDTO: CreateIngredienteDTO) {
        const ingrediente = await this.ingredienteService.createIngrediente(createIngredienteDTO);
        return res.status(HttpStatus.OK).json({
            ingredient: ingrediente,
            message: 'Created',
        });
    }

}
