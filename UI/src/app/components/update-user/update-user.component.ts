import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ListcarsComponent } from '../listcars/listcars.component';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm: FormGroup;
  private routeSub: Subscription | undefined;
  asd: Number = -1

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private route: ActivatedRoute, private router: Router) {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  submitForm() {
    const myuser: User = {
      firstname: this.userForm.value.firstname,
      lastname: this.userForm.value.lastname,
      email: this.userForm.value.email,
    }

    this.userservice.update(this.asd, myuser).subscribe((response) => {
      console.log(response)
      this.ngOnInit
    }, (error) => { console.error(error) }
    )
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.asd = params['id']
    });
  }
}
