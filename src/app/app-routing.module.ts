import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/glucometrias/listar/listar.component';
import { AgregarComponent } from './components/glucometrias/agregar/agregar.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'glucometrias', component:ListarComponent
  },
  {
    path: 'agregar-glucometria', component: AgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
