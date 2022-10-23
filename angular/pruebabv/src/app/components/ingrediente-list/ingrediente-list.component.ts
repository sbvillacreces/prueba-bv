import { Component, OnInit } from '@angular/core';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import  Swal from'sweetalert2';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {

  constructor(private ingredienteService: IngredienteService) { }

  ingredientes: Ingrediente[] = [];
  numberItems:number=0;
 
  ngOnInit(): void {
    this.getIngredientes();
  }

  getIngredientes() {
    this.ingredienteService.getIngredientes()
      .subscribe(
        res => {
          this.ingredientes = res;
          this.numberItems=res.length;

        },
        err => console.log(err)
      )
  }

  deletedButtonClicked(id: string){
    Swal.fire({
      title: 'Are you sure you want to delete this ingredient?',
      showDenyButton: true,
      showCancelButton: false,
      showConfirmButton:true,
      denyButtonText: 'Delete',
      confirmButtonText:'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Ingredient not deleted', '', 'info')
      } else if (result.isDenied) {
        Swal.fire('Ingredient deleted!', '', 'success'),
        this.deleteIngrediente(id)
      }
    })
  }

  deleteIngrediente(id: string) {
    this.ingredienteService.deleteIngrediente(id)
      .subscribe(
        res => {
          this.getIngredientes() 
        },
        err => {console.log(err),
        Swal.fire('Ingredient can not be deleted', '', 'error')}
      )
  }
}