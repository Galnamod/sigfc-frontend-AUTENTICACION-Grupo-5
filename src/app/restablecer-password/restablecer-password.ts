import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'// <--- 1. IMPORTAR AQUÍ

@Component({
  selector: 'app-restablecer-password',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './restablecer-password.html',
  styleUrl: './restablecer-password.css',
})
export class RestablecerPassword {}
