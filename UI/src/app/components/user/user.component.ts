import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private userservice:UserService, private router: Router){}
  listUsers() {
    this.router.navigate(["/users/listusers"])
  }
  addUsers() {
    this.router.navigate(["/users/adduser"])
  }
  deleteAllUser() {
    this.userservice.deleteAll().subscribe((response)=>{console.log(response)},(error)=>{console.error(error)});
  }
}
