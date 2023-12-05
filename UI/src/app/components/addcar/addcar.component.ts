import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private carservice: CarService) {
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.carForm.valid) {
      const car: Car = this.carForm.value
      // You can send the form data to your endpoint here
      console.log('Sending data to endpoint:', car);
      this.carservice.create(car).subscribe((response) => {
        console.log("Car created succesfully:\n" + response)
      }, (error) => {
        // Handle login error
        console.error('Car creation failed:', error);
      })
    }
  }
}