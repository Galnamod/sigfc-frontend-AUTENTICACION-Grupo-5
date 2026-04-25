import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'// <--- 1. IMPORTAR AQUÍ

@Component({
  selector: 'app-login',
  imports: [RouterLink], 
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}

