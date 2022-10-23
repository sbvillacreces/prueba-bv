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

  getIngredientes(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(`${this.BASE_URL}/ingrediente/ingredientes`);
  }

  getIngrediente(id:string):Observable<Ingrediente> {
    return this.http.get<Ingrediente>(`${this.BASE_URL}/ingrediente/getIngrediente/${id}`);
  }

  createIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(`${this.BASE_URL}/ingrediente/createIngrediente`, ingrediente);
  }

  updateIngrediente(id: string, ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.put<Ingrediente>(`${this.BASE_URL}/ingrediente/updateIngrediente?ingredienteId=${id}`, ingrediente);

  }

  deleteIngrediente(id: string): Observable<Ingrediente> {
    return this.http.delete<Ingrediente>(`${this.BASE_URL}/ingrediente/deleteIngrediente?ingredienteId=${id}`);
  }


}
