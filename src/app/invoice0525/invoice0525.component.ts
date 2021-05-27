import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice0525',
  templateUrl: './invoice0525.component.html',
  styleUrls: ['./invoice0525.component.css']
})
export class Invoice0525Component implements OnInit {
  twentyfive: any = [];

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
