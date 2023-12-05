import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  carForm: FormGroup;
  private routeSub: Subscription | undefined;
  asd:Number=-1
  constructor(private formBuilder: FormBuilder, private carservice:CarService, private route:ActivatedRoute, private router:Router) {
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  this.routeSub = this.route.params.subscribe(params => {
    this.asd=params['id'] //log the value of id
  });

  }
  submitForm() {
    const mycar:Car={
      brand: this.carForm.value.brand,
      model: this.carForm.value.model
    }
    this.carservice.update(this.asd, mycar).subscribe((response)=>{
      console.log(response)
    },(error)=>{console.error(error)}
    )

  }
}
