import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgData } from './model/ag-data';

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public fetchData(year: number, state: string): Observable<any> {
    let url = 'https://localhost:5001/api/Ag?year=' + year + '&state=' + state;
    return this.http.get<any>(url);
  }
}
