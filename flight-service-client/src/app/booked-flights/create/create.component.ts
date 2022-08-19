import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { BookedFlightsService } from '../booked-flights.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newBookingForm!: FormGroup

  passengerId!: number;
  flightId!: number;
  
  constructor(
    private bookedFlightsService: BookedFlightsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBookingForm = new FormGroup({
      passengerId: new FormControl('', Validators.required),
      flightId: new FormControl('', Validators.required)
    })
  }

  get f() { return this.newBookingForm.controls; }

  submit() {
    this.passengerId = this.newBookingForm.controls['passengerId'].value
    this.flightId = this.newBookingForm.controls['flightId'].value;

    this.bookedFlightsService.createBooking(this.passengerId, this.flightId).subscribe(() => {
      console.log(this.newBookingForm.value);
      console.log(this.newBookingForm.valid);
      console.log("Booking created successfully!");
      this.router.navigateByUrl('booked-flights/index');
    });
  }

}
