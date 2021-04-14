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
  term = '';
  searchline = '';

  constructor(private service: ShipstationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLine();
  }

  getLine = () => {
    this.service.getLine1().subscribe((response) => {
      this.lineX = response;
      this.lineX.orders.sort((b, a) => ((a || {}).orderDate || '').localeCompare((b || {}).orderDate || ''));
      console.log(this.lineX);
    });
  }

}
