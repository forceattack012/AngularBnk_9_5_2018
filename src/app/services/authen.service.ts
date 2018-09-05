import { Injectable } from '@angular/core';
import { Credential } from '../models/credential';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/token'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http : HttpClient) { 

  }

  login(credential : Credential): Observable<Token> {
      return this.http.post<Token>(`${environment.apiHost}/auth/login`,credential);
  }

}
