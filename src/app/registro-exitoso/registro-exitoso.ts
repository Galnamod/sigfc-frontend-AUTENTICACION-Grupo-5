import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'// <--- 1. IMPORTAR AQUÍ

@Component({
  selector: 'app-registro-exitoso',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './registro-exitoso.html',
  styleUrl: './registro-exitoso.css',
})
export class RegistroExitoso {}
