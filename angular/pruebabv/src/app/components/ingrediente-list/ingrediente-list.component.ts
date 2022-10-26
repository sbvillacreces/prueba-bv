import { Component, OnInit } from '@angular/core';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator'
@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {

  constructor(private ingredienteService: IngredienteService) { }
//variables
  ingredientes: Ingrediente[] = [];
  numberItems: number = 0;

  //pagination
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [3,5, 10, 20, 30];

  ngOnInit(): void {
    this.getIngredientes();
  }
//getting all the ingredients
  getIngredientes() {
    this.ingredienteService.getIngredientes()
      .subscribe(
        res => {
          this.ingredientes = res;
          this.numberItems = res.length;
        },
        err => console.log(err)
      )
  }
  //warning if the delete button has been clicked, so the systema can confirm the decision
  deletedButtonClicked(id: string) {
    Swal.fire({
      title: 'Are you sure you want to delete this ingredient?',
      showDenyButton: true,
      showCancelButton: false,
      showConfirmButton: true,
      denyButtonText: 'Delete',
      confirmButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Ingredient not deleted', '', 'info')
      } else if (result.isDenied) {
        Swal.fire('Ingredient deleted!', '', 'success'),
          this.deleteIngrediente(id)
      }
    })
  }
//if the action is confirmed so the system proceed to delete it
  deleteIngrediente(id: string) {
    this.ingredienteService.deleteIngrediente(id)
      .subscribe(
        res => {
          this.getIngredientes()
        },
        err => {
          console.log(err),
          Swal.fire('Ingredient can not be deleted', '', 'error')
        }
      )
  }
//pagination event
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}
