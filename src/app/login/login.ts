import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';// <--- 1. IMPORTAR AQUÍ
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule], 
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  emailIngresado: string = '';
  passwordIngresada: string = '';
  testUser = {
    email: 'yael.varillas.a@uni.edu.pe',
    password: 'ñañel'
  };
  userPresident = {
    email: 'cjanjachit@uni.edu.pe',
    password: '123'
  };
  constructor(private router: Router) {}

  login() {
  // Con esto veremos en la consola (F12) qué está "leyendo" Angular
  console.log("Detectado Correo:", this.emailIngresado);
  console.log("Detectada Clave:", this.passwordIngresada);

  if (this.emailIngresado === this.userPresident.email && this.passwordIngresada === this.userPresident.password) {
    alert('¡Acceso concedido, Presidente Janjachi!');
    this.router.navigate(['/modales']);
  } 
  else if (this.emailIngresado === this.testUser.email && this.passwordIngresada === this.testUser.password) {
    alert('Acceso concedido como Administrador');
    this.router.navigate(['/modales']);
  } 
  else {
    alert('Error: Datos incorrectos o campos vacíos.');
  }
}
}

