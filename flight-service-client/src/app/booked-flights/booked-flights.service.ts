import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { BookedFlight } from './booked-flight';
import { PassengersRoutingModule } from '../passengers/passengers-routing.module';
import { Flight } from '../flights/flight';

@Injectable({
  providedIn: 'root'
})
export class BookedFlightsService {
  private bookedFlightUrl = 'https://localhost:7128/api/Flights';

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*','Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

    getBooking(id: number): Observable<BookedFlight> {
      let url = `${this.bookedFlightUrl}/Passenger/${id}`;
      console.log("booking: " + id);
      return this.http.get<BookedFlight>(url, this.httpOptions);
    }

    getBookings(): Observable<BookedFlight[]> {
      let url = `${this.bookedFlightUrl}/Passengers`
      return this.http.get<BookedFlight[]>(url, this.httpOptions);   
    }

    createBooking(passengerId: number, flightId: number): Observable<BookedFlight> {
      let url = `${this.bookedFlightUrl}/${flightId}/Passenger/${passengerId}`;
      return this.http.post<BookedFlight>(url, this.httpOptions);
    }

    deleteBooking(id: number): Observable<BookedFlight> {
      let url =  `${this.bookedFlightUrl}/Passengers/${id}`;
      return this.http.delete<BookedFlight>(url, this.httpOptions);
    }
   
}
