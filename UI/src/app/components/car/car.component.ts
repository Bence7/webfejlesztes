import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {
  addCar() {
    this.router.navigate(['cars/addcar'])
  }
  constructor(private carservice: CarService, private router: Router) { }
  deleteCarById() {
    throw new Error('Method not implemented.');
  }
  deleteAllCar() {
    this.carservice.deleteAll().subscribe((response) => {
      console.log("Delete succesfull:\n" + response);
    }, (error) => {
      // Handle login error
      console.error('Delete failed:', error);
    })
  }
  
  listCars() {
    this.router.navigate(["/cars/listcars"])
  }
}
