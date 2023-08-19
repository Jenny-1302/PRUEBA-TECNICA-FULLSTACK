import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = "http://localhost:4000/api/elementos/"

  constructor(private http: HttpClient) { }

  getTareas(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteTarea(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveTarea(tarea: any): Observable<any> {
    return this.http.post(this.url, tarea);
  }

  getOneTarea(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editTarea(id: string, tarea: Producto): Observable<any> {
    return this.http.put(this.url + id, tarea);
  }


}
