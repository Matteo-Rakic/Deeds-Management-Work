import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LandRegistrationComponent } from './admin/land-registration/land-registration.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandService } from './admin/land-registration/land-service';
import { AdminService } from './admin/admin-service';
import { RegisterLandComponent } from './admin/land-registration/register-land/register-land.component';
import { ImportLandComponent } from './admin/land-registration/import-land/import-land.component';
import { ViewLandComponent } from './admin/land-registration/view-land/view-land.component';
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';
import { LandItemComponent } from './admin/land-registration/view-land/land-item/land-item.component';
import { LandDetailComponent } from './admin/land-registration/view-land/land-detail/land-detail.component';
import { UpdateLandComponent } from './admin/land-registration/view-land/update-land/update-land.component';
import { CanDeactivateGuard } from './admin/land-registration/view-land/update-land/can-deactivate';
import { OptionStartComponent } from './admin/land-registration/option-start/option-start.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandRegistrationComponent, 
    ErrorPageComponent, 
    RegisterLandComponent, 
    ImportLandComponent, 
    ViewLandComponent, 
    NotLoggedInComponent, 
    LandItemComponent, 
    LandDetailComponent, 
    UpdateLandComponent, 
    OptionStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LandService, AdminService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
