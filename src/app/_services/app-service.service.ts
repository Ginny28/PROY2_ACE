import { UtilServiceService } from './util-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private urlSegurity: string[] = [];

  constructor(
    private http: HttpClient,
    private util: UtilServiceService
  ) { }


other(): Observable<any> {
  return this.http.get<any>(`${'http://ec2-54-234-253-1.compute-1.amazonaws.com:8099/api/proyecto2s'}`)
    .pipe(
      catchError(e => this.util.handleError(e))
    );
}

}
