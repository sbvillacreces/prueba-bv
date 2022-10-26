import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-ingrediente-form',
  templateUrl: './ingrediente-form.component.html',
  styleUrls: ['./ingrediente-form.component.css']
})
export class IngredienteFormComponent implements OnInit {
  //variables
  ingredienteForm!: FormGroup;

  ingrediente: Ingrediente = {
    name: ''
  };

  constructor(
    private ingredienteService: IngredienteService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.ingredienteForm = this.buildForm();
  }
//biulding the form
  private buildForm() {
    return new FormGroup({
      ingredienteName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]),
    });
  }

//saving the new ingredient
  submitIngrediente(value: any) {
    this.ingrediente._id = value._id;
    this.ingrediente.name = value.ingredienteName;
    this.ingredienteService.createIngrediente(this.ingrediente).subscribe(
      res => {
        this.router.navigate(['/ingrediente/ingredientes']);
        Swal.fire('The ingrediente has been saved succesfully', '', 'success');
      },
      err => {
        console.log(err);
        Swal.fire('The ingrediente can not be saved', '', 'error');

      }
    )
  }
//getting the name of the ingredient
  get ingredienteName() {
    return this.ingredienteForm.get('ingredienteName');
  }

}
