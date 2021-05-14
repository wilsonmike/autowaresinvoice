import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0402',
  templateUrl: './invoice0402.component.html',
  styleUrls: ['./invoice0402.component.css']
})
export class Invoice0402Component implements OnInit {

  zeroFour: any = [
    {
      'Amount - Order Total': 15.5,
      'Item - Name': 'P&C Essential Fleece Crewneck Sweatshirt - Medium / Charcoal',
      'Notes - From Buyer': 'Auto-Wares Grand Rapids\nAttn Cristian Marin/Miranda Rodriguez',
      'Item - Qty': 1,
      'Item - Price': 15.5,
      'Item - SKU': '403200-PC90-M',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1046,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 15.5
    },
    {
      'Amount - Order Total': 158.25,
      'Item - Name': 'Devon & Jones Ladies Three-Season Classic Jacket - 2XL / Black',
      'Notes - From Buyer': 'AV Grand Rapids\nAttn Sara DeRuiter',
      'Item - Qty': 1,
      'Item - Price': 52.75,
      'Item - SKU': '403277-D700W-AV-2X',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1042,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 158.25
    },
    {
      'Amount - Order Total': 158.25,
      'Item - Name': 'Devon & Jones Men\'s Three-Season Classic Jacket - 3XL / Black',
      'Notes - From Buyer': 'AV Grand Rapids\nAttn Sara DeRuiter',
      'Item - Qty': 2,
      'Item - Price': 52.75,
      'Item - SKU': '403195-D700-AV-3X',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1042,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 158.25
    },
    {
      'Amount - Order Total': 177.5,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket - Large / Red',
      'Notes - From Buyer': 'AV Spring Lake\nAttn Dan Heykoop',
      'Item - Qty': 5,
      'Item - Price': 35.5,
      'Item - SKU': '403272-DG20P-AV-L',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1041,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 177.5
    },
    {
      'Amount - Order Total': 80,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket - 5XL / Red',
      'Notes - From Buyer': 'AV Bowling Green\nAmber Asmus',
      'Item - Qty': 1,
      'Item - Price': 40.5,
      'Item - SKU': '403272-DG20P-AV-5XL',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1040,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 80
    },
    {
      'Amount - Order Total': 80,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket - 4XL / Red',
      'Notes - From Buyer': 'AV Bowling Green\nAmber Asmus',
      'Item - Qty': 1,
      'Item - Price': 39.5,
      'Item - SKU': '403272-DG20P-AV-4XL',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1040,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 80
    },
    {
      'Amount - Order Total': 177.5,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket - Large / Red',
      'Notes - From Buyer': 'BTB Lancaster\nAttn Andy Gilbertson',
      'Item - Qty': 5,
      'Item - Price': 35.5,
      'Item - SKU': '403272-DG20P-BTB-L',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1039,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 177.5
    },
    {
      'Amount - Order Total': 43.95,
      'Item - Name': 'P&C Essential Fleece Crewneck Sweatshirt - X-Large / Charcoal',
      'Notes - From Buyer': 'Auto-Wares Gaylord #905\nAttn Gerald Carney',
      'Item - Qty': 1,
      'Item - Price': 15.5,
      'Item - SKU': '403200-PC90-XL',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1034,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 43.95
    },
    {
      'Amount - Order Total': 43.95,
      'Item - Name': 'P&C Long Sleeve Core Blend T-Shirt - X-Large / Charcoal',
      'Notes - From Buyer': 'Auto-Wares Gaylord #905\nAttn Gerald Carney',
      'Item - Qty': 1,
      'Item - Price': 9.35,
      'Item - SKU': '403199-PC55LS-XL',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1034,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 43.95
    },
    {
      'Amount - Order Total': 43.95,
      'Item - Name': 'P&C Core Blend T-Shirt - 2XL / Charcoal',
      'Notes - From Buyer': 'Auto-Wares Gaylord #905\nAttn Gerald Carney',
      'Item - Qty': 1,
      'Item - Price': 9.75,
      'Item - SKU': '403198-PC55-2XL',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1034,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 43.95
    },
    {
      'Amount - Order Total': 43.95,
      'Item - Name': 'P&C Long Sleeve Core Blend T-Shirt - Medium / Charcoal',
      'Notes - From Buyer': 'Auto-Wares Gaylord #905\nAttn Gerald Carney',
      'Item - Qty': 1,
      'Item - Price': 9.35,
      'Item - SKU': '403199-PC55LS-M',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1034,
      'Date - Shipped Date': '4/2/2021 4:00:00 AM',
      'Custom - Field 1': '',
      'Amount - Paid by Customer': 43.95
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
    a.download = 'Shipments-04-02.csv';
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
