import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-invoice0408',
  templateUrl: './invoice0408.component.html',
  styleUrls: ['./invoice0408.component.css']
})
export class Invoice0408Component implements OnInit {
  test: any = [{
    Id: 1,
    Order: '1050',
    Item: 'P&C Essential Fleece Pullover Hooded Sweatshirt - X-Large / Charcoal',
    Employee: 'Chris Rohder',
    Location: 'East Lansing',
    ShipDate: '04-08-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price: 24.50,
  }, {
    Id: 2,
    Order: '1204',
    // tslint:disable-next-line:quotemark
    Item: "Men's Cooling Performance T-Shirt",
    Employee: 'Douglas Brown',
    Location: 'Store Number 147',
    ShipDate: '04-08-21',
    Source: 'Auto-Wares Anniversary Store',
    Quantity: 1,
    Price: 9.50,
  }];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.downloadFile(this.test));
    console.log(this.test);
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
    a.download = 'Shipments-04-08.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

}
