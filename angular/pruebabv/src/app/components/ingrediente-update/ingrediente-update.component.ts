import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-ingrediente-update',
  templateUrl: './ingrediente-update.component.html',
  styleUrls: ['./ingrediente-update.component.css']
})
export class IngredienteUpdateComponent implements OnInit {

  ingredienteForm!: FormGroup;

  ingrediente: Ingrediente = {
    _id: '',
    name: ''
  };

  constructor(
    private ingredienteService: IngredienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,

  ) {
  }

  ngOnInit() {
    this.formInit();
  }
//initialize the form and get ingredients
  formInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.ingredienteService.getIngrediente(params['ingredienteId'])
        .subscribe(
          {
            next:res => {
              this.ingrediente = res;
              this.ingredienteForm = this.formBuilder.group({
                 ingredienteName: new FormControl(this.ingrediente.name, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.minLength(4)]),
                 idIngrediente: new FormControl(this.ingrediente._id, [Validators.required]),
                });
            },
            error:err => console.log(err)
          }
        )
    }
  }
//send to the ingredient service the id and the updated ingredient
  updateIngrediente(values: any) {
    this.ingrediente._id=values.idIngrediente;
    this.ingrediente.name=values.ingredienteName;
    this.ingredienteService.updateIngrediente(values.idIngrediente || '', this.ingrediente)
      .subscribe(
        {
          next: res => {
            Swal.fire('The ingrediente has been updated succesfully', '', 'success');
            this.router.navigate(['/ingrediente/ingredientes'])
          },
          error:err => {
            console.log(err);
            Swal.fire('The ingrediente can not be updated succesfully', '', 'error')
          }
        }    
      )
  }
//getting the name of the ingredient
  get ingredienteName() {
    return this.ingredienteForm.get('ingredienteName');
  }

}
