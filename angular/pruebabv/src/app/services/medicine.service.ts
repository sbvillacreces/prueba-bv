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

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.BASE_URL}/medicine/medicines`);
  }

  getMedicine(id:string):Observable<Medicine> {
    return this.http.get<Medicine>(`${this.BASE_URL}/medicine/getMedicine/${id}`);
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.BASE_URL}/medicine/createMedicine`, medicine);
  }

  updateMedicine(id: string, medicine: Medicine): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.BASE_URL}/medicine/updateMedicine?medicineId=${id}`, medicine);

  }

  deleteMedicine(id: string): Observable<Medicine> {
    return this.http.delete<Medicine>(`${this.BASE_URL}/medicine/deleteMedicine?medicineId=${id}`);
  }

}
