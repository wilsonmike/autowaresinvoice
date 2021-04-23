import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipstationService } from '../shipstation.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  lineX: any = [];
  lineShop: any = [];
  term = '';
  searchline = '';

  constructor(private service: ShipstationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLine();
    this.getLineShopify();
  }

  getLine = () => {
    this.service.getLine1().subscribe((response) => {
      this.lineX = response;
      this.lineX.orders.sort((b, a) => ((a || {}).orderDate || '').localeCompare((b || {}).orderDate || ''));
    });
  }
  getLineShopify = () => {
    this.service.getLineShopify().subscribe((response) => {
      this.lineShop = response;
      this.lineShop.orders.sort((b, a) => ((a || {}).orderDate || '').localeCompare((b || {}).orderDate || ''));
    });
  }
  public removeSlashes(side: string): string {
    if (side) {
      side.replace(/\//g, '');
      return side.replace('<br/>', '');
    }
}

}
