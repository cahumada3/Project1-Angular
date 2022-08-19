import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newFlightForm!: FormGroup

  constructor(
    private flightsService: FlightsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      airline: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      arrivalDate: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      boardingTime: new FormControl('', Validators.required),
      gateNumber: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      maxNumberOfSeats: new FormControl('', Validators.required)
    });
  }

  get f() { return this.newFlightForm.controls; }

  submit() {
    this.flightsService.createFlight(this.newFlightForm.value).subscribe(() => {
      console.log(this.newFlightForm.value);
      console.log(this.newFlightForm.valid);
      console.log("Flight created successfully!");
      this.router.navigateByUrl('flights/index');
    });
  }

}
