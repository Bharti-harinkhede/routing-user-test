import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './shared/components/home-dashboard/home-dashboard.component';
import { UsersDashboardComponent } from './shared/components/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';
import { FairyDashboardComponent } from './shared/components/fairy-dashboard/fairy-dashboard.component';
import { UserFormComponent } from './shared/components/users-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/components/users-dashboard/user-details/user-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
   {
path : 'users',
component : UsersDashboardComponent
  },
  {
    path: '',
    component: HomeDashboardComponent
  },
  {
path : 'home',
component : HomeDashboardComponent
  },
 
  {
path : 'users/adduser',
component : UserFormComponent
  },
  {
path : 'users/:userId',
component : UserDetailsComponent
  },
  {
path : 'users/:userId/edit',
component : UserFormComponent
  },
  {
path : 'products',
component : ProductsDashboardComponent
  },
  {
path : 'fairy',
component : FairyDashboardComponent
  },
  {
path : '**',
redirectTo : 'page-not-found',
// component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
