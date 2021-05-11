import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { headingA, lowerA } from './keys';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const heading = headingA;
const lower = lowerA;
const encoded = btoa(heading + ':' + lower);
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ShipstationService {
  shipstationBaseUrl = 'https://ssapi.shipstation.com/orders?';
  shipstationBaseShipped = 'https://ssapi.shipstation.com/shipments?';
  items = [];

  constructor(private router: Router, private http: HttpClient) { }
  getLine1 = () => {
    return this.http.get(`${this.shipstationBaseUrl}storeId=231686`, {
      headers: {
          Authorization: 'Basic ' + encoded,
      },
    });
  }
  getLineShopify = () => {
    return this.http.get(`${this.shipstationBaseUrl}storeId=246462`, {
      headers: {
          Authorization: 'Basic ' + encoded,
      },
    });
  }
  getAnniversaryShipped = () => {
    return this.http.get(`${this.shipstationBaseUrl}orderStatus=shipped&storeId=231686`, {
      headers: {
          Authorization: 'Basic ' + encoded,
      },
    });
  }
  getShippedShopify = () => {
    return this.http.get(`${this.shipstationBaseUrl}orderStatus=shipped&storeId=246462`, {
      headers: {
          Authorization: 'Basic ' + encoded,
      },
    });
  }
  public exportTableElmToExcel(element: ElementRef, fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element.nativeElement);
    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    // save to file
    XLSX.writeFile(workbook, `${fileName}${EXCEL_EXTENSION}`);

  }
}
