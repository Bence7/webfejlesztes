import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-selectedcars',
  templateUrl: './selectedcars.component.html',
  styleUrls: ['./selectedcars.component.css']
})
export class SelectedcarsComponent {
  selectCar(id: Number) {
    this.userservice.addCarToUser(this.asd,id).subscribe((response)=>{console.log(response)},
    (error)=>{console.error(error)}
    )
  }

  private routeSub: Subscription | undefined;
  asd: Number = -1

  constructor(private carservice: CarService, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }
  cars: Array<Car> = []
  ngOnInit(): void {
    this.carservice.getAll().subscribe((response) => { this.cars = response })
    this.routeSub = this.route.params.subscribe(params => {
      this.asd = params['id'] //log the value of id
    })
  }
}
