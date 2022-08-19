import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public editFlightForm!: FormGroup

  constructor(
    private flightsService: FlightsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editFlightForm = new FormGroup({
      flightId: new FormControl('', Validators.required),
      airline: new FormControl(''),
      departureDate: new FormControl(''),
      departureTime: new FormControl(''),
      arrivalDate: new FormControl(''),
      arrivalTime: new FormControl(''),
      boardingTime: new FormControl(''),
      gateNumber: new FormControl(''),
      destination: new FormControl(''),
      maxNumberOfSeats: new FormControl('')
    });
  }

  get f() { return this.editFlightForm.controls; }

  submit() {
    this.flightsService.updateFlight(this.editFlightForm.value).subscribe(() => {
      console.log(this.editFlightForm.value);
      console.log(this.editFlightForm.valid);
      console.log("Flight updated successfully!");
      this.router.navigateByUrl('flights/index');
    });
  }

}
