import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0412',
  templateUrl: './invoice0412.component.html',
  styleUrls: ['./invoice0412.component.css']
})
export class Invoice0412Component implements OnInit {
  test: any = [{
    Id: 1,
    Order: '1038',
    // tslint:disable-next-line:quotemark
    Item: "Devon & Jones CrownLux Performance™ Ladies' Clubhouse Micro-Stripe Quarter-Zip - X-Large / Black",
    Employee: 'Lindsey OCallaghan',
    Location: 'GRAND RAPIDS',
    ShipDate: '04-12-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price: 47.50,
  }];


  constructor() { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line:typedef
    downloadFile(data: any) {
      const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
      const header = Object.keys(data[0]);
      const csv = data.map((row) =>
        header
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(',')
      );
      csv.unshift(header.join(','));
      const csvArray = csv.join('\r\n');
      const a = document.createElement('a');
      const blob = new Blob([csvArray], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'Shipments-04-12.csv';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }

}
