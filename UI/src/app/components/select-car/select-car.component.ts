import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.css']
})
export class SelectCarComponent implements OnInit {
  unSelectCar(id: Number) {
    this.carservice.deleteId(id).subscribe((response) => { 
      console.log(response) 
      this.carservice.getAvailableCars().subscribe((response) => { this.availablecars = response })
      this.carservice.getSelectedCars(this.asd).subscribe((response) => { this.selectedcars = response })
    },
    (error) => { console.error(error) });
  }

  selectCar(id: Number) {
    this.userservice.addCarToUser(this.asd, id).subscribe((response) => { 
      console.log(response) 
      this.carservice.getAvailableCars().subscribe((response) => { this.availablecars = response })
      this.carservice.getSelectedCars(this.asd).subscribe((response) => { this.selectedcars = response })
    },
      (error) => { console.error(error) }
    )
  }

  private routeSub: Subscription | undefined;
  asd: Number = -1

  constructor(private carservice: CarService, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }
  
  availablecars: Array<Car> = []
  selectedcars: Array<Car> = []
  
  ngOnInit(): void {
    this.carservice.getAvailableCars().subscribe((response) => { this.availablecars = response })
    this.routeSub = this.route.params.subscribe(params => {
      this.asd = params['id'] //log the value of id
      console.log(this.asd)
    })
    this.carservice.getSelectedCars(this.asd).subscribe((response) => { this.selectedcars = response })

  }
}