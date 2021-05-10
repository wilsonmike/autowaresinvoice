import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0417',
  templateUrl: './invoice0417.component.html',
  styleUrls: ['./invoice0417.component.css']
})
export class Invoice0417Component implements OnInit {
  test: any = [{
    Id: 1,
    Order: '1044',
    // tslint:disable-next-line:quotemark
    Item1: "Ladies CrownLux Performance Plaited Polo - 2XL / Red",
    // tslint:disable-next-line:quotemark
    Item2: "Women's Windsor Henley - 2XL / Grey/White Stripe",
    // tslint:disable-next-line:quotemark
    Item3: "Devon & Jones Ladies' CrownLux Performance™ Stretch Tunic - 2XL / Navy",
    Item4: 'Ladies Cooling Performance T-Shirt - 2XL / Graphite',
    Employee: 'Amanda K. Pohlod',
    Location: 'Kingston',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity1: 1,
    Quantity2: 1,
    Quantity3: 1,
    Quantity4: 1,
    Price1: 35.00,
    Price2: 12.50,
    Price3: 34.50,
    Price4: 44.50,
  },
  {
    Id: 2,
    Order: '1043',
    // tslint:disable-next-line:quotemark
    Item1: "Men's CrownLux Performance Plaited Polo with Pocket - Large / Navy",
    Employee: 'Jerry Bruins',
    Location: 'Washington Ave',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 2,
    Price1: 35.5,
  },
  {
    Id: 3,
    Order: '1049',
    // tslint:disable-next-line:quotemark
    Item1: "P&C Essential Fleece Crewneck Sweatshirt - Large / Charcoal",
    Employee: 'Katie Barone | Holly Stansbury',
    Location: 'AV Charlevoix',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 2,
    Price1: 35.5,
  },
  {
    Id: 4,
    Order: '1054',
    // tslint:disable-next-line:quotemark
    Item1: "Devon & Jones Men's Three-Season Classic Jacket - Large / Black",
    Employee: 'Salvatore Ciardo',
    Location: 'Store Number: 617',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price1: 50.75,
  },
  {
    Id: 5,
    Order: '1053',
    // tslint:disable-next-line:quotemark
    Item1: "Devon & Jones Men's Three-Season Classic Jacket - Large / Black",
    Employee: 'Mark Hoeksema',
    Location: 'Store Number/Name: 506',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price1: 50.75,
  },
  {
    Id: 6,
    Order: '1056',
    // tslint:disable-next-line:quotemark
    Item1: "P&C Core Blend T-Shirt - Large / Charcoal",
    Employee: 'Mark Hoeksema',
    Location: 'Store Number/Name: 524',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity: 1,
    Price1: 7.00,
  },
  {
    Id: 7,
    Order: '1057',
    // tslint:disable-next-line:quotemark
    Item1: "P&C Essential Fleece Pullover Hooded Sweatshirt - X-Large / Charcoal",
    // tslint:disable-next-line:quotemark
    Item2: "P&C Essential Fleece Pullover Hooded Sweatshirt - Large / Charcoal",
    Employee: 'Rob Loney',
    Location: 'Store Number/Name: 657',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity1: 1,
    Quantity2: 1,
    Price1: 24.50,
    Price2: 24.50,
  },
  {
    Id: 8,
    Order: '1059',
    // tslint:disable-next-line:quotemark
    Item1: "Port Authority® Ladies Core Soft Shell Jacket - Large / Black",
    Employee: 'Lindsey OCallaghan',
    Location: 'Store Number/Name: 544',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity1: 1,
    Price1: 43.50,
  },
  {
    Id: 9,
    Order: '1058',
    // tslint:disable-next-line:quotemark
    Item1: "Devon & Jones Ladies Three-Season Classic Jacket - 2XL / Black",
    Employee: 'Katie Barone',
    Location: 'Store Number/Name: 511',
    ShipDate: '04-17-21',
    Source: 'Auto-Wares Shopify',
    Quantity1: 1,
    Price1: 52.75,
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
    a.download = 'Shipments-04-17.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

}
