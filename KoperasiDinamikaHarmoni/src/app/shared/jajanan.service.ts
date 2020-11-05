import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/operators';
import { Jajanan } from './jajanan.model';

@Injectable({
  providedIn: 'root'
})
export class JajananService {

  selectedJajanan: Jajanan;
  jajanan: Jajanan[];
  readonly baseURL = 'http://localhost:3000/jajanans';

  constructor(private http: HttpClient) { }

  postJajanan(jajan: Jajanan){
    return this.http.post(this.baseURL, jajan);
  }

  getJajananList(){
    return this.http.get(this.baseURL);
  }

  putJajanan(jajan: Jajanan){
    return this.http.put(this.baseURL + `/${jajan._id}`, jajan);
  }

  deleteJajanan(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`)
  }
}
