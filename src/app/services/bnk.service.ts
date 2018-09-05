import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { feed } from '../models/feed';
import { Feedlist } from '../models/feedlist';


@Injectable({
  providedIn: 'root'
})
export class BnkService {

               // smae this 
  constructor(private http: HttpClient) { 

  }
  
  memberList(): Observable<Member[]> {
     return this.http.get<Member[]>('http://localhost:3000/bnk/members');
  }

  feelList(name : string): Observable<Feedlist>{
    return this.http.get<Feedlist>('https://www.api.bnk48.com/api/social-feeds?page=1&max=1000000000000000&limit=19&username='+name);
  }



}
