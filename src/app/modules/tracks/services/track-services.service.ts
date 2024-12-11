import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class TrackServices {

  private readonly URL = environments.api;

  // Declarar un observable de rxjs.
  dataTracksTrending$: Observable<TrackModel[]> = of([]);

  constructor(private httpClient: HttpClient) { }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}: any) => {
        return data;
      })
    );
  };

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      // TODO: Filtrar un response
      // TODO: Usar mergeMap (de rxjs), para hacer merge de la respuesta
      mergeMap(({data}: any) => this.skipById(data, 2)),
      tap(data => {}),
      // TODO: Retornar un error en caso de fallar la petición
      catchError((error) => {
        // Desestructurar y responder al error
        const {status, statusText} = error;

        console.log('ERROR = ', status, statusText);
        return of([error]);
      })
    );
  };

  private skipById(data: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = data.filter(l => l._id !== id);
      resolve(listTmp);
    })
  }
}
