import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../interface/usuario';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule,RouterLink],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent implements OnInit{
  Form: FormGroup;
  id: number;
  usersf!:Usuario;
  operacion: string = 'Agregar ';

  constructor(private _usuarioService: UsuarioService, private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute){
    this.Form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: [null, Validators.required],
      numero: [null, Validators.required],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this._usuarioService.seleccionar(id).subscribe((data: Usuario[]) => {
      this.usersf=data[0];
      this.Form.setValue({
        nombre: this.usersf.nombre,
        apellido: this.usersf.apellido,
        correo: this.usersf.correo,
        numero: this.usersf.numero
      })
    })
  }

  addProduct() {
     const Users: Usuario = {
      nombre: this.Form.value.nombre,
      apellido: this.Form.value.apellido,
      correo: this.Form.value.correo,
      numero: this.Form.value.numero
    }
    Users.id_usuario=this.id;
    if (this.id !== 0) {
      // Es editar 
      this._usuarioService.update(Users).subscribe(() => {
        this.router.navigate(['/']);
      })

    } else {
      // Es agregagar
      this._usuarioService.agregar(Users).subscribe(() => {
        console.log("Se ha insertado correctamente");
        this.router.navigate(['/']);
      })
    }




  }
}
