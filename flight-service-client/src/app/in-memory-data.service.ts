import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Passenger } from './passengers/passenger';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Passengers = [
      {
        id: 1,
        firstName: 'Brooke',
        lastName: 'Stocco',
        email: 'brooke@gmail.com'
      },

    ];
    return { Passengers };
  }

  genId(Passengers: Passenger[]): number {
    return Passengers.length > 0 ? Math.max(...Passengers.map(passenger => passenger.id)) + 1 : 11;
  }
}
