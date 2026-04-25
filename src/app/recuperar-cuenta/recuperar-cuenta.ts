import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- ¡No olvides esto!

@Component({
  selector: 'app-recuperar-cuenta',
  standalone: true,
  imports: [RouterLink], // <--- Agrégalo aquí también
  templateUrl: './recuperar-cuenta.html',
  styleUrl: './recuperar-cuenta.css'
})
export class RecuperarCuenta {}