import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {
  setCar(id:Number) {
    this.router.navigate(["/users/",id,"selectcar"])
  }
  users: Array<User> = []

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe((response) => { this.users = response },
    (error)=>{console.error(error)}
    );
  }

  updateUserById(id: Number) {
    this.router.navigate(["/users/update", id])
  }
  deleteUserById(id: Number) {
    this.userservice.delete(id).subscribe((response) => {
      console.log(response)
      this.userservice.getAll().subscribe((response) => { this.users = response })
    }, (error) => {
      console.error(console.error(error))
    }
    )
  }
}
