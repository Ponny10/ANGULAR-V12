import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private readonly URL = environments.api;

  constructor(private http: HttpClient) { }

  searchTrack(track: string): Observable<any> {
    return this.http.get(`${this.URL}/tracks?src=${track}`).pipe(
      map((dataRaw: any) => dataRaw.data)
    );
  }
}
