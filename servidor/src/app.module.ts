import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredienteController } from './ingrediente/ingrediente.controller';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    //declaration of the connection between NestJs and MongoDB
    MongooseModule.forRoot('mongodb://localhost/database',{useNewUrlParser:true}),
    IngredienteModule,
    MedicineModule
],
  controllers: [AppController, IngredienteController],
  providers: [AppService],
})
export class AppModule {}
