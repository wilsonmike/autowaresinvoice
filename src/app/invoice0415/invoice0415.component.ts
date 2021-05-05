import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0415',
  templateUrl: './invoice0415.component.html',
  styleUrls: ['./invoice0415.component.css']
})
export class Invoice0415Component implements OnInit {
  test: any = [{
    Id: 1,
    Order: '1036',
    // tslint:disable-next-line:quotemark
    Item1: "Core 365 Men's Techno Lite Three-Layer Knit Tech-Shell Quarter-Zip Vest - Large / Carbon",
    // tslint:disable-next-line:quotemark
    Item2: "Devon & Jones CrownLux Performance™ Men's Clubhouse Micro-Stripe Quarter-Zip - Large / Black",
    // tslint:disable-next-line:quotemark
    Item3: "Devon & Jones CrownLux Performance™ Men's Tonal Mini Check Shirt - Medium / Navy",
    Employee: 'Brad Ralls',
    Location: 'LIVONIA',
    ShipDate: '04-15-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price1: 36.50,
    Price2: 47.50,
    Price3: 42.50,
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
