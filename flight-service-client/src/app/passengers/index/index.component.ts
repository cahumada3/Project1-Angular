import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../passengers.service';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private passengersService: PassengersService) { }

  ngOnInit(): void {
    this.retrievePassengers();
  }

  retrievePassengers() : void{
    this.passengersService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  delete(id:number){
    this.passengersService.deletePassenger(id).subscribe(p => {
         this.passengers = this.passengers.filter(item => item.id !== id);
         console.log('Passenger deleted successfully!');
    })
  }

}
