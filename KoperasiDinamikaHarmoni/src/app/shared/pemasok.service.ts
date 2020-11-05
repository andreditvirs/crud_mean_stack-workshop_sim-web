import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/operators';
import { Pemasok } from './pemasok.model';

@Injectable({
  providedIn: 'root'
})
export class PemasokService {

  selectedPemasok: Pemasok;
  pemasok: Pemasok[];
  readonly baseURL = 'http://localhost:3000/pemasoks';

  constructor(private http: HttpClient) { }

  postPemasok(pemasok: Pemasok){
    return this.http.post(this.baseURL, pemasok);
  }

  getPemasokList(){
    return this.http.get(this.baseURL);
  }

  putPemasok(pemasok: Pemasok){
    return this.http.put(this.baseURL + `/${pemasok._id}`, pemasok);
  }

  deletePemasok(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`)
  }
}
