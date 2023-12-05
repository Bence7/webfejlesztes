import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarComponent } from './components/car/car.component';
import { ListcarsComponent } from './components/listcars/listcars.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { SelectCarComponent } from './components/select-car/select-car.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    CarComponent,
    ListcarsComponent,
    AddcarComponent,
    UpdateComponent,
    ListusersComponent,
    AdduserComponent,
    UpdateUserComponent,
    SelectCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
