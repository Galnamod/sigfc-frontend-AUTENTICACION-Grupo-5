import { Routes } from '@angular/router';
import { Login } from './login/login'; // (O login.component, según cómo lo guardaste)
import { Registro } from './registro/registro'; // <--- AGREGAMOS ESTO
import { RecuperarCuenta } from './recuperar-cuenta/recuperar-cuenta';
import { RestablecerPassword } from './restablecer-password/restablecer-password';
import { RegistroExitoso } from './registro-exitoso/registro-exitoso';
import { ModalesComponent } from './modales/modales';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro }, // <--- AGREGAMOS LA NUEVA RUTA
  { path: 'recuperar', component: RecuperarCuenta },
  { path: 'restablecer', component: RestablecerPassword},
  { path: 'registro-exitoso', component: RegistroExitoso},
  { path: 'modales', component: ModalesComponent }
];