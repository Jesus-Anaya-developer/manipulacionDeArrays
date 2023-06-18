import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioUnoComponent } from './components/ejercicio-uno/ejercicio-uno.component';
import { AppComponent } from './app.component';

//se agregan las rutas a los componentes
const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: AppComponent },
  { path: 'Ejercicio1', component: EjercicioUnoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
