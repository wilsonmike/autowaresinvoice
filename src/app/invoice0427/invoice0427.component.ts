import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0427',
  templateUrl: './invoice0427.component.html',
  styleUrls: ['./invoice0427.component.css']
})
export class Invoice0427Component implements OnInit {
  twentySeven: any = [
    {
      'Amount - Order Total': 147.25,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket - 2XL / Red',
      'Notes - From Buyer': '<br/>Store Number/Name: 937',
      'Item - Qty': 1,
      'Item - Price': 37.5,
      'Item - SKU': '403272-DG20P-AV-2XL',
      'Ship To - Name': 'Bill Pathuis',
      'Ship To - Address 1': '6343 12TH ST',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1052,
      'Date - Shipped Date': '4/27/2021 10:48:12 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 147.25
    },
    {
      'Amount - Order Total': 147.25,
      'Item - Name': 'Devon & Jones Men\'s Three-Season Classic Jacket - 2XL / Black',
      'Notes - From Buyer': '<br/>Store Number/Name: 937',
      'Item - Qty': 1,
      'Item - Price': 52.75,
      'Item - SKU': '403195-D700-AV-2X',
      'Ship To - Name': 'Bill Pathuis',
      'Ship To - Address 1': '6343 12TH ST',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1052,
      'Date - Shipped Date': '4/27/2021 10:48:12 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 147.25
    },
    {
      'Amount - Order Total': 147.25,
      'Item - Name': 'P&C Core Blend T-Shirt - 2XL / Charcoal',
      'Notes - From Buyer': '<br/>Store Number/Name: 937',
      'Item - Qty': 2,
      'Item - Price': 9.75,
      'Item - SKU': '403198-PC55-2XL',
      'Ship To - Name': 'Bill Pathuis',
      'Ship To - Address 1': '6343 12TH ST',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1052,
      'Date - Shipped Date': '4/27/2021 10:48:12 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 147.25
    },
    {
      'Amount - Order Total': 147.25,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket - 2XL / Navy',
      'Notes - From Buyer': '<br/>Store Number/Name: 937',
      'Item - Qty': 1,
      'Item - Price': 37.5,
      'Item - SKU': '403272-DG20P-A1-2XL',
      'Ship To - Name': 'Bill Pathuis',
      'Ship To - Address 1': '6343 12TH ST',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1052,
      'Date - Shipped Date': '4/27/2021 10:48:12 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 147.25
    },
    {
      'Amount - Order Total': 50.75,
      'Item - Name': 'Devon & Jones Men\'s Three-Season Classic Jacket - X-Large / Black',
      'Notes - From Buyer': '<br/>Store Number/Name: 500 Madison WI warehouse',
      'Item - Qty': 1,
      'Item - Price': 50.75,
      'Item - SKU': '403195-D700-BTB-XL',
      'Ship To - Name': 'Joe Duane',
      'Ship To - Address 1': '816 W MAIN ST',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1060,
      'Date - Shipped Date': '4/27/2021 10:48:12 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 50.75
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Long Sleeve Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20L-RED',
      'Ship To - Name': 'Kyle Ewald',
      'Ship To - Address 1': '401 Kirthland SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AV361Jackson',
      'Ship To - Country': 'US',
      'Order - Number': 1318,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 4,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Kyle Ewald',
      'Ship To - Address 1': '401 Kirthland SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AV361Jackson',
      'Ship To - Country': 'US',
      'Order - Number': 1318,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Ladies CrownLux Performance Plaited Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20W-RED',
      'Ship To - Name': 'Monique Nieto',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 361',
      'Ship To - Country': 'US',
      'Order - Number': 1317,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 2,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Monique Nieto',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 361',
      'Ship To - Country': 'US',
      'Order - Number': 1317,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Ladies CrownLux Performance Plaited Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20W-RED',
      'Ship To - Name': 'Lindsey Whipple',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 361',
      'Ship To - Country': 'US',
      'Order - Number': 1312,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'Aiden Ford',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 623',
      'Ship To - Country': 'US',
      'Order - Number': 1326,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'Michael Gnacinski',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 623',
      'Ship To - Country': 'US',
      'Order - Number': 1325,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'Anthony Ramos',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 623',
      'Ship To - Country': 'US',
      'Order - Number': 1324,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'Mark Olsen',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 623',
      'Ship To - Country': 'US',
      'Order - Number': 1323,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Mike Fowler',
      'Ship To - Address 1': '440 Kirkland SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'Autowares',
      'Ship To - Country': 'US',
      'Order - Number': 1320,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Tall Long Sleeve Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 2,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20LT-RED',
      'Ship To - Name': 'Ryan Sculthorpe',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 356',
      'Ship To - Country': 'US',
      'Order - Number': 1335,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Tall Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20T-RED',
      'Ship To - Name': 'Ryan Sculthorpe',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 356',
      'Ship To - Country': 'US',
      'Order - Number': 1335,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'David Barth',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 623',
      'Ship To - Country': 'US',
      'Order - Number': 1339,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'Howard Witkus',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 623',
      'Ship To - Country': 'US',
      'Order - Number': 1337,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'BTOB-DG20P-RED',
      'Ship To - Name': 'John Basile',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 440',
      'Ship To - Country': 'US',
      'Order - Number': 1342,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'David Box',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 226',
      'Ship To - Country': 'US',
      'Order - Number': 1340,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Core Blend T-Shirt',
      'Notes - From Buyer': 'Connie Redmond',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55-Graphite',
      'Ship To - Name': 'Timothy Groendyke',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 900',
      'Ship To - Country': 'US',
      'Order - Number': 1343,
      'Date - Shipped Date': '4/27/2021 10:50:22 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 0
    }
  ];

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
    a.download = 'Shipments-04-27.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  public removeSlashes(side: string): string {
    if (side) {
      side.replace(/\//g, '');
      return side.replace('<br/>', '');
    }
  }

}
