import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'agtech';
  public agData: any;
  public year: number;
  public state: string;

  columnDefs = [
      {headerName: 'Name', field: 'variable_name' },
      {headerName: 'Estimate', field: 'estimate' },
  ];

  constructor(private dataService: AppService) { }

  ngOnInit(): void {
    this.year = 2019;
    this.state = "ca";
    this.fetchData();
  }

  onYearSelected(event: any): void {
    this.year = event.target.value;
    this.fetchData();
  }

  onStateSelected(event: any): void {
    this.state = event.target.value;
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.fetchData(this.year, this.state).subscribe((result) => {
      this.agData = result.data;
  });
  }
}
