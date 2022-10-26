import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ingrediente } from '../interfaces/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
//this function will return all the existing ingredients 
  getIngredientes(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(`${this.BASE_URL}/ingrediente/ingredientes`);
  }
    //this function will return an especified ingredient

  getIngrediente(id:string):Observable<Ingrediente> {
    return this.http.get<Ingrediente>(`${this.BASE_URL}/ingrediente/getIngrediente/${id}`);
  }
    //this function will return the created ingredient
  createIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(`${this.BASE_URL}/ingrediente/createIngrediente`, ingrediente);
  }
  
    //this function will return the updated ingredient
  updateIngrediente(id: string, ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.put<Ingrediente>(`${this.BASE_URL}/ingrediente/updateIngrediente?ingredienteId=${id}`, ingrediente);

  }

    //this function will return the response if a ingredient has been deleted
  deleteIngrediente(id: string): Observable<Ingrediente> {
    return this.http.delete<Ingrediente>(`${this.BASE_URL}/ingrediente/deleteIngrediente?ingredienteId=${id}`);
  }


}
