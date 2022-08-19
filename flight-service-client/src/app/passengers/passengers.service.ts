import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { Passenger, PassengerDTO } from './passenger';
@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  private passengerUrl = 'https://localhost:7128/api/Passengers';
  //private passengerUrl = 'api/Passengers';

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*','Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.passengerUrl, this.httpOptions);   
  }

  getPassenger(id: number): Observable<Passenger> {
    let url = `${this.passengerUrl}/${id}`;
    return this.http.get<Passenger>(url, this.httpOptions);
  }

  createPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.passengerUrl, passenger, this.httpOptions);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let url = `${this.passengerUrl}/${passenger.id}`;
    return this.http.put<Passenger>(url, passenger, this.httpOptions);
  }

  deletePassenger(id: number): Observable<Passenger> {
    console.log("Error", id);
    return this.http.delete<Passenger>(`${this.passengerUrl}/${id}`, this.httpOptions);
  }
  
}
