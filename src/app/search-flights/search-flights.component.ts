import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit{

  searchResult: FlightRm[] = [
    {
      airline: "American Airlines",
      remainingNumberOfSeats: 500,
      departure: {time: Date.now().toString(), place: "Los Angeles"},
      arrival:{time: Date.now().toString(), place: "Istanbul"},
      price: "350"
    },
    {
      airline: "British Airways",
      remainingNumberOfSeats: 500,
      departure: {time: Date.now().toString(), place: "Los Angeles"},
      arrival:{time: Date.now().toString(), place: "Istanbul"},
      price: "350"
    },
    {
      airline: "Deutsche BA",
      remainingNumberOfSeats: 60,
      departure: {time: Date.now().toString(), place: "Munchen"},
      arrival:{time: Date.now().toString(), place: "Schiphol"},
      price: "600"
    }


    // "British Airways",
    // "Lufthansa"
  ]

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNumberOfSeats: number;
}

export interface TimePlaceRm {
  place: string;
  time: string;
}



