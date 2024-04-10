import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interface/usuario';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  listusers:Usuario[] =[];
  dataUsers!: Usuario; // Valida que  no sea nul
  Form: FormGroup;

  constructor(private router: Router,private fb: FormBuilder,private _usuarioService: UsuarioService){
    // Este formulario es validado
    /*Form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required)
    });*/
    this.Form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: [null, Validators.required],
      numero: [null, Validators.required],
    })
  }
  ngOnInit(): void {
    this.MostrarTodos();
  }
  hayRegistros(){
    return true;
  }
  MostrarTodos() {
    this._usuarioService.mostrarTodos().subscribe((data: Usuario[]) => {
      this.listusers=data;
    })
  }
  Agregar(): void {
    //console.log(this.Form.value);
    const Users: Usuario = {
      nombre: this.Form.value.nombre,
      apellido: this.Form.value.apellido,
      correo: this.Form.value.correo,
      numero: this.Form.value.numero
    }
    this._usuarioService.agregar(Users).subscribe(() => {
      console.log("Se ha insertado correctamente");
      this.MostrarTodos();
      this.router.navigate(['/']);
    })
  }

  Eliminar(id_usuario: number) {
    this._usuarioService.eliminar(id_usuario).subscribe(() => {
      console.log("Se ha insertado correctamente");
      this.MostrarTodos();
      this.router.navigate(['/']);
    })
  }
  /*Seleccionar(id_usuario:number){
    this.router.navigate(['/main']);
  }*/

}
