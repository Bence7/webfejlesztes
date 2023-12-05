import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  userForm: FormGroup;
  submitForm() {
    if(this.userForm.valid){
      const user: User = this.userForm.value
      this.userservice.create(user).subscribe((response) => {
        console.log("User created succesfully:\n" + response)
      }, (error) => {
        console.error('User creation failed:', error);
      })
    }
  }

  constructor(private formBuilder: FormBuilder, private userservice: UserService) {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
