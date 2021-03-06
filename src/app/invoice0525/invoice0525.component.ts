import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0525',
  templateUrl: './invoice0525.component.html',
  styleUrls: ['./invoice0525.component.css']
})
export class Invoice0525Component implements OnInit {
  twentyfive: any = [
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Ladies Cooling Performance T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-NW3201-Graphite',
      'Ship To - Name': 'Jason Dykstra',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1401,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: X-Large, Color: Graphite'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Clifton Barker',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO VALUE JACKSON 270',
      'Ship To - Country': 'US',
      'Order - Number': 1402,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: 2XL, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55-Graphite',
      'Ship To - Name': 'Juan Munoz',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1404,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: X-Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s Cooling Performance T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 2,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-N3142-Graphite',
      'Ship To - Name': 'Taylor Johnston',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1409,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Graphite'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Essential Fleece Pullover Hooded Sweatshirt',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC90H-Graphite',
      'Ship To - Name': 'Taylor Johnston',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1409,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Long Sleeve Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55LS-Graphite',
      'Ship To - Name': 'Joshua Chandler',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1408,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: X-Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s Cooling Performance T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 2,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-N3142-Graphite',
      'Ship To - Name': 'miranda rodriguez',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1407,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: X-Large, Color: Graphite'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Long Sleeve Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55LS-Graphite',
      'Ship To - Name': 'miranda rodriguez',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1407,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: X-Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55-Graphite',
      'Ship To - Name': 'Jose Flores',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES',
      'Ship To - Country': 'US',
      'Order - Number': 1406,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Medium, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55-Graphite',
      'Ship To - Name': 'Michael Lentz',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES',
      'Ship To - Country': 'US',
      'Order - Number': 1405,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Christopher Scheid',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 371',
      'Ship To - Country': 'US',
      'Order - Number': 1412,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Essential Fleece Pullover Hooded Sweatshirt',
      'Notes - From Buyer': '1st shift',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC90H-Graphite',
      'Ship To - Name': 'Grace Hull',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES INC',
      'Ship To - Country': 'US',
      'Order - Number': 1413,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Small, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Ladies Cooling Performance T-Shirt',
      'Notes - From Buyer': '1st shift',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-NW3201-Graphite',
      'Ship To - Name': 'Grace Hull',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES INC',
      'Ship To - Country': 'US',
      'Order - Number': 1413,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Small, Color: Graphite'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Core Blend T-Shirt',
      'Notes - From Buyer': '1st shift',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55-Graphite',
      'Ship To - Name': 'Grace Hull',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES INC',
      'Ship To - Country': 'US',
      'Order - Number': 1413,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Small, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Nolan Dolliver',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 281',
      'Ship To - Country': 'US',
      'Order - Number': 1416,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Medium, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Robert Kirby',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 281',
      'Ship To - Country': 'US',
      'Order - Number': 1415,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Tall Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20T-RED',
      'Ship To - Name': 'Daniel Taylor',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 570',
      'Ship To - Country': 'US',
      'Order - Number': 1417,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: XLT, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Ladies Cooling Performance T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-NW3201-Graphite',
      'Ship To - Name': 'Sabrina Allard',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 570',
      'Ship To - Country': 'US',
      'Order - Number': 1421,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Medium, Color: Graphite'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s Cooling Performance T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 2,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-N3142-Graphite',
      'Ship To - Name': 'Christopher Francis',
      'Ship To - Address 1': '1075 S WISCONSIN AVE',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES INC.',
      'Ship To - Country': 'US',
      'Order - Number': 1420,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Graphite'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Essential Fleece Pullover Hooded Sweatshirt',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC90H-Graphite',
      'Ship To - Name': 'Christopher Francis',
      'Ship To - Address 1': '1075 S WISCONSIN AVE',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES INC.',
      'Ship To - Country': 'US',
      'Order - Number': 1420,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Long Sleeve Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 2,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55LS-Graphite',
      'Ship To - Name': 'Christopher Francis',
      'Ship To - Address 1': '1075 S WISCONSIN AVE',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO WARES INC.',
      'Ship To - Country': 'US',
      'Order - Number': 1420,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Tall Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20T-RED',
      'Ship To - Name': 'jason weippert',
      'Ship To - Address 1': '1561 E CARO RD',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1419,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: XLT, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Jeffrey Mossner',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 570',
      'Ship To - Country': 'US',
      'Order - Number': 1422,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Medium, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'P&C Core Blend T-Shirt',
      'Notes - From Buyer': '',
      'Item - Qty': 3,
      'Item - Price': 0,
      'Item - SKU': 'AUTOWARESGROUP-PC55-Graphite',
      'Ship To - Name': 'Patricia Rodriguez',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 101',
      'Ship To - Country': 'US',
      'Order - Number': 1424,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Small, Color: Charcoal'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 6,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Peyton Miller',
      'Ship To - Address 1': '599 N 1ST ST',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AUTO VALUE HARRISON',
      'Ship To - Country': 'US',
      'Order - Number': 1431,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Randy Wing',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 250',
      'Ship To - Country': 'US',
      'Order - Number': 1430,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Daryl Pohil',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 250',
      'Ship To - Country': 'US',
      'Order - Number': 1429,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Polo with Pocket',
      'Notes - From Buyer': '',
      'Item - Qty': 1,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20P-RED',
      'Ship To - Name': 'Kyle Pohl',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'STORE NUMBER 250',
      'Ship To - Country': 'US',
      'Order - Number': 1428,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: Large, Color: Red'
    },
    {
      'Amount - Order Total': 0,
      'Item - Name': 'Men\'s CrownLux Performance Plaited Tall Polo',
      'Notes - From Buyer': '',
      'Item - Qty': 5,
      'Item - Price': 0,
      'Item - SKU': 'AUTOVALUE-DG20T-RED',
      'Ship To - Name': 'Brian V',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'Auto Value Bear Lake',
      'Ship To - Country': 'US',
      'Order - Number': 1427,
      'Date - Shipped Date': '5/25/2021 11:47:46 PM',
      'Custom - Field 1': 'Anniversary',
      'Amount - Paid by Customer': 0,
      'Item - Fill SKU': '',
      'Item - Options': 'Size: 3XT, Color: Red'
    },
    {
      'Amount - Order Total': 66.75,
      'Item - Name': 'P&C Core Blend T-Shirt - 2XL / Charcoal',
      'Notes - From Buyer': '<br/>Store Number/Name: 330 NEWBERRY',
      'Item - Qty': 3,
      'Item - Price': 9.75,
      'Item - SKU': '403198-PC55-AWGC-2X',
      'Ship To - Name': 'PAUL GERARDY',
      'Ship To - Address 1': '4871 E COUNTY ROAD 460',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1101,
      'Date - Shipped Date': '5/25/2021 11:43:48 PM',
      'Custom - Field 1': 'Shopify',
      'Amount - Paid by Customer': 66.75,
      'Item - Fill SKU': '',
      'Item - Options': ''
    },
    {
      'Amount - Order Total': 66.75,
      'Item - Name': 'Men\'s Cooling Performance T-Shirt - 2XL / Graphite',
      'Notes - From Buyer': '<br/>Store Number/Name: 330 NEWBERRY',
      'Item - Qty': 3,
      'Item - Price': 12.5,
      'Item - SKU': '403201-N3142-AWGC-2XL',
      'Ship To - Name': 'PAUL GERARDY',
      'Ship To - Address 1': '4871 E COUNTY ROAD 460',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1101,
      'Date - Shipped Date': '5/25/2021 11:43:48 PM',
      'Custom - Field 1': 'Shopify',
      'Amount - Paid by Customer': 66.75,
      'Item - Fill SKU': '',
      'Item - Options': ''
    },
    {
      'Amount - Order Total': 50.75,
      'Item - Name': 'Devon & Jones Ladies Three-Season Classic Jacket - Large / Black',
      'Notes - From Buyer': '<br/>Store Number/Name: 234',
      'Item - Qty': 1,
      'Item - Price': 50.75,
      'Item - SKU': '403277-D700W-AVPS-L',
      'Ship To - Name': 'Sally Scutt',
      'Ship To - Address 1': '440 KIRTLAND ST SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': 'AV GRAND RAPIDS',
      'Ship To - Country': 'US',
      'Order - Number': 1102,
      'Date - Shipped Date': '5/25/2021 11:43:48 PM',
      'Custom - Field 1': 'Shopify',
      'Amount - Paid by Customer': 50.75,
      'Item - Fill SKU': '',
      'Item - Options': ''
    },
    {
      'Amount - Order Total': 35,
      'Item - Name': 'P&C Core Blend T-Shirt - Medium / Charcoal',
      'Notes - From Buyer': '<br/>Store Number/Name: 101',
      'Item - Qty': 5,
      'Item - Price': 7,
      'Item - SKU': '403198-PC55-AWGC-M',
      'Ship To - Name': 'Katie Barone',
      'Ship To - Address 1': '440 Kirkland St. SW',
      'Ship To - Address 2': '',
      'Ship To - Address 3': '',
      'Ship To - Company': '',
      'Ship To - Country': 'US',
      'Order - Number': 1103,
      'Date - Shipped Date': '5/25/2021 11:43:48 PM',
      'Custom - Field 1': 'Shopify',
      'Amount - Paid by Customer': 35,
      'Item - Fill SKU': '',
      'Item - Options': ''
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
    a.download = 'Shipments-05-25.csv';
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
