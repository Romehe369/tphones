import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://127.0.0.1/webServicesPHP/';
  }
  mostrarTodos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}mostrarTodos.php`);
  }
  agregar(usuario:Usuario): Observable<void>{
    return this.http.post<void>(`${this.url}agregar.php`, JSON.stringify(usuario));
  }
  eliminar(id_usuario:number): Observable<void>{
    return this.http.get<void>(`${this.url}eliminar.php?id_usuario=${id_usuario}`);
  }
  seleccionar(id_usuario:number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}seleccionar.php?id_usuario=${id_usuario}`);
  }
  update(usuario:Usuario):Observable<void>{
    return this.http.put<void>(`${this.url}update.php`, JSON.stringify(usuario));
  }
}
