import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetAllCharService {
  constructor(private http: HttpClient) {}
  fetchCharacter(page: number): Observable<any> {
    return this.http.get('https://swapi.dev/api/people?page=' + page);
  }
}
