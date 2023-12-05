import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-availablecars',
  templateUrl: './availablecars.component.html',
  styleUrls: ['./availablecars.component.css']
})
export class AvailablecarsComponent implements OnInit{
unSelectCar(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private carservice: CarService, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }
  cars: Array<Car> = []
  ngOnInit(): void {
    this.carservice.getAvailableCars().subscribe((response) => { this.cars = response })
  }
}
