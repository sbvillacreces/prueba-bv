import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medicine } from '../interfaces/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
//this function will return all the existing medicines 
  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.BASE_URL}/medicine/medicines`);
  }
//this function will return an especified medicine by it ID 

  getMedicine(id:string):Observable<Medicine> {
    return this.http.get<Medicine>(`${this.BASE_URL}/medicine/getMedicine/${id}`);
  }
//this function will return the created medicine
  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.BASE_URL}/medicine/createMedicine`, medicine);
  }

//this function will return the updated medicine
  updateMedicine(id: string, medicine: Medicine): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.BASE_URL}/medicine/updateMedicine?medicineId=${id}`, medicine);

  }
//this function will return the response if a medicine has been deleted
  deleteMedicine(id: string): Observable<Medicine> {
    return this.http.delete<Medicine>(`${this.BASE_URL}/medicine/deleteMedicine?medicineId=${id}`);
  }

}
