import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/glucometrias/listar/listar.component';
import { AgregarComponent } from './components/glucometrias/agregar/agregar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { GlucometriasComponent } from './components/glucometrias/glucometrias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'glucometrias', component: GlucometriasComponent, canActivate: [ AuthGuard ] },
  { path: 'glucometrias/listar', component: ListarComponent, canActivate: [ AuthGuard ] },
  { path: 'glucometrias/agregar', component: AgregarComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
