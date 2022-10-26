import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { Medicine } from 'src/app/interfaces/medicine';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator'
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import { IngredienteService } from 'src/app/services/ingrediente.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  constructor(private medicineService: MedicineService, private ingredienteService: IngredienteService) { }
//variables
  medicines: Medicine[] = [];
  medicineFiltered: Medicine[] = [];
  numberItems: number = 0;
  ingredientes: Ingrediente[] = [];
  search = '';
  cleanVisible=false;
  //pagination
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [3, 5, 10, 20, 30];

  ngOnInit(): void {
    this.getMedicines();
    this.getIngredientes();
  }
//getting all the medicines
  getMedicines() {
    this.medicineService.getMedicines()
      .subscribe(
        res => {
          this.medicines = res;
          this.numberItems = res.length;
        },
        err => console.log(err)
      )
  }
  //getting all the ingredients
  getIngredientes() {

    this.ingredienteService.getIngredientes()
      .subscribe(
        res => {
          this.ingredientes = res;
        },
        err => console.log(err)
      )
  }
  //warning if the delete button has been clicked, so the systema can confirm the decision
  deletedButtonClicked(id: string) {
    Swal.fire({
      title: 'Are you sure you want to delete this medicine?',
      showDenyButton: true,
      showCancelButton: false,
      showConfirmButton: true,
      denyButtonText: 'Delete',
      confirmButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Medicine not deleted', '', 'info')
      } else if (result.isDenied) {
        Swal.fire('Medicine deleted!', '', 'success'),
          this.deleteMedicine(id)
      }
    })
  }
//if the action is confirmed so the system proceed to delete it
  deleteMedicine(id: string) {
    this.medicineService.deleteMedicine(id)
      .subscribe(
        res => {
          this.getMedicines()
        },
        err => {
          console.log(err),
            Swal.fire('Medicine can not be deleted', '', 'error')
        }
      )
  }
  //pagination event
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
  //search function
  searchByIngredient(ingredienteSearch: string) {
    this.medicineFiltered = this.medicines;
    this.medicines = [];
    this.cleanVisible=true;
    this.medicineFiltered.forEach(element => {
      element.ingredients.forEach(ingredienteH => {
        this.ingredientes.forEach(elementI => {
          if (elementI._id == ingredienteH) {
            if (elementI.name.indexOf(ingredienteSearch) > -1) {
              this.medicines.push(element);
            }
          }
        })
      });
    });
  }
//cleaning the searching area
  clean() {
    this.search='';
    this.cleanVisible=false;
    this.getMedicines();
  }
}
