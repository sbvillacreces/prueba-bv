import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredienteController } from './ingrediente/ingrediente.controller';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/database',{useNewUrlParser:true}),
    IngredienteModule
],
  controllers: [AppController, IngredienteController],
  providers: [AppService],
})
export class AppModule {}
