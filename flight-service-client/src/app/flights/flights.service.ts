import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { Flight, FlightDTO } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private flightUrl = 'https://localhost:7128/api/Flights';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightUrl, this.httpOptions);   
  }

  getFlight(id: number): Observable<Flight> {
    let url = `${this.flightUrl}/${id}`;
    return this.http.get<Flight>(url, this.httpOptions);
  }

  createFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.flightUrl, flight, this.httpOptions);
  }

  updateFlight(flight: Flight): Observable<Flight> {
    let url = `${this.flightUrl}/${flight.id}`;
    return this.http.put<Flight>(url, flight, this.httpOptions);
  }

  deleteFlight(id: number): Observable<Flight> {
    return this.http.delete<Flight>(`${this.flightUrl}/${id}`, this.httpOptions);
  }
}
