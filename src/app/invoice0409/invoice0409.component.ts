import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0409',
  templateUrl: './invoice0409.component.html',
  styleUrls: ['./invoice0409.component.css']
})
export class Invoice0409Component implements OnInit {
  test: any = [{
    Id: 1,
    Order: '1051',
    Item: 'Port Authority® Core Soft Shell Jacket - Large / Black',
    Employee: 'Tony Sherry',
    Location: 'Store Number 514',
    ShipDate: '04-09-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price: 43.5,
  }, {
    Id: 2,
    Order: '1306',
    // tslint:disable-next-line:quotemark
    Item: "Men's CrownLux Performance Plaited Tall Polo",
    Employee: 'Steven Moelker',
    Location: 'AUTO VALUE-BYRON CENTER',
    ShipDate: '04-09-21',
    Source: 'Auto-Wares Anniversary Store',
    Quantity: 1,
    Price: '0 (Anniversary)',
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
    a.download = 'Shipments-04-09.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
