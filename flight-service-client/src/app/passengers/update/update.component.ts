import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../passengers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public editPassengerForm!: FormGroup
  

  constructor(
    private passengersService: PassengersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editPassengerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
  }
  
  get f() { return this.editPassengerForm.controls; }

  submit() {
    this.passengersService.updatePassenger(this.editPassengerForm.value).subscribe(() => {
      console.log(this.editPassengerForm.value);
      console.log(this.editPassengerForm.valid);
      console.log("Passenger updated successfully!");
      this.router.navigateByUrl('passengers/index');
    });
  }

}
