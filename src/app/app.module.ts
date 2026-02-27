import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeDashboardComponent } from './shared/components/home-dashboard/home-dashboard.component';
import { UsersDashboardComponent } from './shared/components/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';
import { FairyDashboardComponent } from './shared/components/fairy-dashboard/fairy-dashboard.component';




import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserFormComponent } from './shared/components/users-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/components/users-dashboard/user-details/user-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import { GetConfirmComponent } from './shared/get-confirm/get-confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDashboardComponent,
    UsersDashboardComponent,
    ProductsDashboardComponent,
    FairyDashboardComponent,
    PageNotFoundComponent,
    UserFormComponent,
    UserDetailsComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
