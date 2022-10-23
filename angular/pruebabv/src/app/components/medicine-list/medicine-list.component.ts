import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { Medicine } from 'src/app/interfaces/medicine';
import  Swal from'sweetalert2';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  constructor(private medicineService:MedicineService) { }

  medicines:Medicine[]=[];
  numberItems:number=0;

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines() {
    this.medicineService.getMedicines()
      .subscribe(
        res => {
          this.medicines = res;
          console.log(res);
          
          this.numberItems=res.length;
        },
        err => console.log(err)
      )
  }
  deletedButtonClicked(id: string){
    Swal.fire({
      title: 'Are you sure you want to delete this medicine?',
      showDenyButton: true,
      showCancelButton: false,
      showConfirmButton:true,
      denyButtonText: 'Delete',
      confirmButtonText:'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Medicine not deleted', '', 'info')
      } else if (result.isDenied) {
        Swal.fire('Medicine deleted!', '', 'success'),
        this.deleteMedicine(id)
      }
    })
  }

  deleteMedicine(id: string) {
    this.medicineService.deleteMedicine(id)
      .subscribe(
        res => {
          this.getMedicines() 
        },
        err => {console.log(err),
        Swal.fire('Medicine can not be deleted', '', 'error')}
      )
  }

}
