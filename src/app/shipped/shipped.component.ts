import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipstationService } from '../shipstation.service';

@Component({
  selector: 'app-shipped',
  templateUrl: './shipped.component.html',
  styleUrls: ['./shipped.component.css']
})
export class ShippedComponent implements OnInit {
  orderShopify: any = [];
  orderAnniversary: any = [];
  term = '';
  searchline = '';


  constructor(private service: ShipstationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getShopify();
    this.getAnniversary();
  }

  getShopify = () => {
    this.service.getShippedShopify().subscribe((response) => {
      this.orderShopify = response;
      this.orderShopify.orders.sort((b, a) => ((a || {}).shipDate || '').localeCompare((b || {}).shipDate || ''));
      console.log(this.orderShopify);
    });
  }

  getAnniversary = () => {
    this.service.getAnniversaryShipped().subscribe((response) => {
      this.orderAnniversary = response;
      this.orderAnniversary.orders.sort((b, a) => ((a || {}).shipDate || '').localeCompare((b || {}).shipDate || ''));
      console.log(this.orderAnniversary);
    });
  }

}
