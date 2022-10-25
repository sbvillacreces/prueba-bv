import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Medicine } from 'src/app/interfaces/medicine';
import { MedicineService } from 'src/app/services/medicine.service';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Ingrediente } from 'src/app/interfaces/ingrediente';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css']
})
export class MedicineFormComponent implements OnInit {

  medicineForm!: FormGroup;
  ingredientes: Ingrediente[] = [];
  numberItems:number=0;
  medicine: Medicine = {
    name: '',
    posology: '',
    expirationDate: new Date,
    ingredients: []
  };
  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ingredienteService:IngredienteService
  ) { }

  ngOnInit(): void {
    this.getIngredientes();
  }

  getIngredientes() {
    const params = this.activatedRoute.snapshot.params;
    this.ingredienteService.getIngredientes()
      .subscribe(
        res => {
          this.ingredientes = res;
          this.medicineForm = this.buildForm(res);
          this.numberItems=res.length;

        },
        err => console.log(err)
      )
  }

  private buildForm(value:Ingrediente[]) {
    return new FormGroup({
      medicineName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]),
      posology: new FormControl('', [Validators.required, Validators.minLength(3)]),
      expirationDate: new FormControl('', [Validators.required]),
      ingredientesD: new FormControl(value, [Validators.required]),
    });
  }

  submitMedicine(value:any) {
    this.medicine._id=value._id;
    this.medicine.name=value.medicineName;
    this.medicine.expirationDate=value.expirationDate;
    this.medicine.ingredients=value.ingredientesD;
    this.medicine.posology=value.posology;
    this.medicineService.createMedicine(this.medicine).subscribe(
      res => {
        this.router.navigate(['/medicine/medicines']);
        Swal.fire('The medicine has been saved succesfully', '', 'success');
      },
      err => {
        console.log(err);
        Swal.fire('The medicine can not be saved', '', 'error');

      }
    )
  }

  get medicineName() {
    return this.medicineForm.get('medicineName');
  }
}
