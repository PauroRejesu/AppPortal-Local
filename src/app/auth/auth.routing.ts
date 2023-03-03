import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ResetComponent } from './reset/reset.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'auth/reset', component: ResetComponent},
    {path: 'auth/login', component:LoginComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
