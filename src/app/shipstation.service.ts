import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { headingA, lowerA } from './keys';
const heading = headingA;
const lower = lowerA;
const encoded = btoa(heading + ':' + lower);

@Injectable({
  providedIn: 'root'
})
export class ShipstationService {
  shipstationBaseUrl = 'https://ssapi.shipstation.com/orders?';
  items = [];

  constructor(private router: Router, private http: HttpClient) { }
  getLine1 = () => {
    return this.http.get(`${this.shipstationBaseUrl}storeId=231686`, {
      headers: {
          Authorization: 'Basic ' + encoded,
      },
    });
  }
}
