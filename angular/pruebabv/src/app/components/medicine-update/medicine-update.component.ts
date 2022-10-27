import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/interfaces/medicine';
import { MedicineService } from 'src/app/services/medicine.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { __values } from 'tslib';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Ingrediente } from 'src/app/interfaces/ingrediente';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.css']
})
export class MedicineUpdateComponent implements OnInit {

  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ingredienteService:IngredienteService) { }
//variables
  medicines: Medicine[] = [];
  ingredientes: Ingrediente[] = [];
  numberItems: number = 0;
  medicineForm!: FormGroup;
  medicine: Medicine = {
    _id: '',
    name: '',
    posology: '',
    ingredients: [],
    expirationDate: new Date,
  };
  ngOnInit() {
    this.getIngredientes();
    
  }
//getting all the ingredients
  getIngredientes() {
    this.ingredienteService.getIngredientes()
      .subscribe(
        {
          next: res => {
            this.ingredientes = res;
            this.numberItems=res.length;
            this.formInit();
          },
          error:err => console.log(err)
        }
      )
  }
//initialize the form
  formInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.medicineService.getMedicine(params['medicineId'])
        .subscribe(
          {
            next:res => {
              this.medicine = res;
              this.medicineForm = this.formBuilder.group({
                medicineName: new FormControl(res.name, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.minLength(4)]),
                idMedicine: new FormControl(res._id),
                posology: new FormControl(res.posology, [Validators.required, Validators.minLength(3)]),
                expirationDate: new FormControl(res.expirationDate.toString().substring(0,10), [Validators.required]),
                ingredientesD: new FormControl(res.ingredients, [Validators.required]),
              });
            },
            error:err => console.log(err)
          }
        )
    }
  }
//send to the medicine service the id and the updated medicine
  updateMedicine(values: any) {
    this.medicine._id = values.idMedicine;
    this.medicine.name = values.medicineName;
    this.medicine.ingredients=values.ingredientesD;
    this.medicine.expirationDate=values.expirationDate;
    this.medicine.posology=values.posology;
    this.medicineService.updateMedicine(values.idMedicine || '', this.medicine)
      .subscribe(
        {
          next:res => {
            Swal.fire('The medicine has been updated succesfully', '', 'success');
            this.router.navigate(['/medicine/medicines'])
          },
          error:err => {
            console.log(err);
            Swal.fire('The medicine can not be updated succesfully', '', 'error')
          }
        }
      )
  }
//getting the name of the medicine
  get medicineName() {
    return this.medicineForm.get('medicineName');
  }


}
