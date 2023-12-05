import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-listcars',
  templateUrl: './listcars.component.html',
  styleUrls: ['./listcars.component.css']
})
export class ListcarsComponent implements OnInit {
  static users: import("c:/Users/jenei/OneDrive/Asztali gép/webbeadando/angular-16-client/src/app/models/user.model").User[];
  updateCarById(id:Number) {
    this.router.navigate(["/cars/update", id])
  }

  constructor(private carservice: CarService, private router :Router) { }
  cars: Array<Car> = [];
  ngOnInit(): void {
    this.carservice.getAll().subscribe((response) => { this.cars = response })
  }

  deleteCarById(id: Number) {
    this.carservice.delete(id).subscribe((response) => {
      console.log("Delete succesfull:\n" + response)
      this.carservice.getAll().subscribe((response) => { this.cars = response })
    }, (error) => {
      // Handle login error
      console.error('Delete failed:', error);
    })
  }
}
