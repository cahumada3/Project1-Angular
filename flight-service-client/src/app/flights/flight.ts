export interface Flight {
    id: number; 
    airline: string;
    departureDate: string; 
    departureTime: string;
    arrivalDate: string; 
    arrivalTime: string;
    boardingTime: string; 
    gateNumber: string;
    destination: string; 
    maxNumberOfSeats: number;
}

export interface FlightDTO {
    airline: string;
    departureDate: string; 
    departureTime: string;
    arrivalDate: string; 
    arrivalTime: string;
    boardingTime: string; 
    gateNumber: string;
    destination: string; 
    maxNumberOfSeats: number;
}


