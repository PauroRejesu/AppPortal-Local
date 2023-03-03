//MODULES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//COMPONENTS
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';




const routes: Routes = [

  // path: '/dashboard' PagesRouting --> GENERAL VISION OF MEDERI (POR FAVOR DEFINIR QUE SE VA A VISUALIZAR EN ESTE DASHBOARD A NIVEL GENERAL)
  // path: '/auth' AuthRouting --> AUTENTICATION AND RESET PASSWORD FOR USSERS (SE DEFINIRA QUE LOS USUARIOS PODRAN RESTABLECER SUS CONTRASEÑAS)
  // path: '/crashCart' CrashCartRouting  --> CRASH CART APLICATION (COMING UP)
  // path: '/ussersGestion' UssersGestionRouting --> PLATFORMS FOR USSER GESTIONS. (COM)

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NotpagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
