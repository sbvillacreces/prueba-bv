import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngredienteListComponent } from './components/ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './components/ingrediente-form/ingrediente-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IngredienteUpdateComponent } from './components/ingrediente-update/ingrediente-update.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { MedicineFormComponent } from './components/medicine-form/medicine-form.component';
import { MedicineUpdateComponent } from './components/medicine-update/medicine-update.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredienteListComponent,
    IngredienteFormComponent,
    IngredienteUpdateComponent,
    MedicineListComponent,
    MedicineFormComponent,
    MedicineUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
