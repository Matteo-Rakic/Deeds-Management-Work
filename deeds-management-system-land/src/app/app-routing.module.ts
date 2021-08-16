import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ImportLandComponent } from './admin/land-registration/import-land/import-land.component';
import { LandRegistrationComponent } from './admin/land-registration/land-registration.component'
import { OptionStartComponent } from './admin/land-registration/option-start/option-start.component';
import { RegisterLandComponent } from './admin/land-registration/register-land/register-land.component';
import { LandDetailComponent } from './admin/land-registration/view-land/land-detail/land-detail.component';
import { CanDeactivateGuard } from './admin/land-registration/view-land/update-land/can-deactivate';
import { UpdateLandComponent } from './admin/land-registration/view-land/update-land/update-land.component';
import { ViewLandComponent } from './admin/land-registration/view-land/view-land.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', component: AppComponent},
  {path: '', redirectTo: '/admin-log-in', pathMatch: 'full'}, 
  {path: 'admin-log-in', component: AdminComponent},
  {path: 'land-hub', component: LandRegistrationComponent,
    children: [
      {path: '', component: OptionStartComponent},
      {path: 'register-land', component: RegisterLandComponent},
      {path: 'import-land', component: ImportLandComponent},
      {path: 'view-land', component: ViewLandComponent,
        children: [
          {path: ':id', component: LandDetailComponent},
          {path: ':id/edit-land', component: UpdateLandComponent, canDeactivate: [CanDeactivateGuard]}
        ]
      }
    ]
  },
  { path: 'not-logged-in', component: NotLoggedInComponent, data: {message: "You are not logged IN!"}},
  { path: 'not-found', component: ErrorPageComponent, data: {message: "Page not found!"} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
