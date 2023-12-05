import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { ListcarsComponent } from './components/listcars/listcars.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { UpdateComponent } from './components/update/update.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { SelectCarComponent } from './components/select-car/select-car.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'cars', component: CarComponent },
  { path: 'cars/listcars', component: ListcarsComponent },
  { path: 'cars/addcar', component: AddcarComponent },
  { path: 'cars/update/:id', component: UpdateComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/listusers', component: ListusersComponent },
  { path: 'users/adduser', component: AdduserComponent },
  { path: 'users/update/:id', component: UpdateUserComponent },
  { path: 'users/:id/selectcar', component: SelectCarComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
