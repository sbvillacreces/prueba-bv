import { Module } from '@nestjs/common';
import { IngredienteController } from './ingrediente.controller';
import { IngredienteService } from './ingrediente.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredienteSchema } from './schemas/ingrediente.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
    {name:'Ingrediente', schema:IngredienteSchema}
  ])],
  controllers: [IngredienteController],
  providers: [IngredienteService],
  exports:[IngredienteService]
})
export class IngredienteModule {}
