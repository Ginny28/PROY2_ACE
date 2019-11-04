import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  private statusError = -1;

  constructor(
    private router: Router
  ) { }


  getStatusError() {
    return this.statusError;
  }


  handleError(error: HttpErrorResponse) {
    this.statusError = error.status;
    this.router.navigate(['app-error']);
    return throwError('Something bad happened; please try again later.');
  }

}