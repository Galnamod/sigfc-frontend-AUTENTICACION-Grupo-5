import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login'; // <-- Cambiamos 'LoginComponent' por 'Login'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login], // <-- Aquí también ponemos solo 'Login'
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sigfc-auth');
}