import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Custom Modules.
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';





import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { NotpagefoundComponent } from '../notpagefound/notpagefound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    NotpagefoundComponent,
    AccountSettingsComponent,
    CertificatesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
    
   ]

})
export class PagesModule { }
