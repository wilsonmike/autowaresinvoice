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
  term = '';
  searchline = '';


  constructor(private service: ShipstationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getShopify();
  }

  getShopify = () => {
    this.service.getShippedShopify().subscribe((response) => {
      this.orderShopify = response;
      this.orderShopify.orders.sort((b, a) => ((a || {}).shipDate || '').localeCompare((b || {}).shipDate || ''));
      console.log(this.orderShopify.orders);
    });
  }

}
