import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredienteFormComponent } from './components/ingrediente-form/ingrediente-form.component';
import { IngredienteListComponent } from './components/ingrediente-list/ingrediente-list.component';
import { IngredienteUpdateComponent } from './components/ingrediente-update/ingrediente-update.component';
import { MedicineFormComponent } from './components/medicine-form/medicine-form.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { MedicineUpdateComponent } from './components/medicine-update/medicine-update.component';
import { HomePageComponent } from './components/home-page/home-page.component';

//definition of routes that we will be using in the app and their components
const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'ingrediente/ingredientes',
    component:IngredienteListComponent
  },
  {
    path:'ingrediente/createIngrediente',
    component:IngredienteFormComponent
  },
  {
    path:'ingrediente/updateIngrediente/:ingredienteId',
    component:IngredienteUpdateComponent
  },
  {
    path:'medicine/medicines',
    component:MedicineListComponent
  },
  {
    path:'medicine/createMedicine',
    component:MedicineFormComponent
  },
  {
    path:'medicine/updateMedicine/:medicineId',
    component:MedicineUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
