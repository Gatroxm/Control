import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// servicios
import { ControlDeabetesService } from './services/control-deabetes.service';
import { environment } from 'src/environments/environment';
import { ListarComponent } from './components/glucometrias/listar/listar.component';
import { AgregarComponent } from './components/glucometrias/agregar/agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ChartsModule } from 'ng2-charts';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { GlucometriasComponent } from './components/glucometrias/glucometrias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ListarComponent,
    AgregarComponent,
    LoadingComponent,
    RegistroComponent,
    LoginComponent,
    GlucometriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartsModule, 
    HttpClientModule
  ],
  providers: [ControlDeabetesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
