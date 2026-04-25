import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modales',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './modales.html',
  styleUrl: './modales.css'
})
export class ModalesComponent {
  nombreUsuario = "Carlos";
  rol = "Administrador";
  cargo = "Presidente";
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}