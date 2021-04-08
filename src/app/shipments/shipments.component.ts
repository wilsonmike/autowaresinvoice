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
      // this.lineX.splice(0, 1);
      console.log(this.lineX);
      // console.log(this.lineX);
      // this.lineX.map((total) => {
      //   // console.log(total);
      //   this.grandTotalX = Number(total.totalprice.replace(/[^0-9.-]+/g, '') * Number(total.qtysold));
      //   this.lineitemtotal += this.grandTotalX;
      //   // this.masterTotal = this.shippingTotal + this.lineitemtotal;
      //   return this.grandTotalX;
      // });
    });
  }

}
