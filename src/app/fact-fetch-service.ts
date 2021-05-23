import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, retry, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FactFetchService {


  fetchFacts() : Observable<Object>{
    let urltmp = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100"
    return this.http.get('/get-facts',{ params:{ url : urltmp}, responseType: 'json'})
  }
  // "https://api.thecatapi.com/v1/images/search?limiti=100&api_key=6a2a6157-5b70-41dd-bbe3-8dd95cf386a9&"
  fetchCatImage () : Observable<Object>{
    let urltmp = "https://api.thecatapi.com/v1/images/search?limit=100"
    return this.http.get('/get-img',{ params:{ url : urltmp}, responseType: 'json'})
  }
  
  saveFactToJSON (fact,uid) : Observable<Object>{
    
    return this.http.post('/save-fact',{ params:{ fact : fact, uid : uid}, responseType: 'json'})
  }

  removeFactFromJSON (factid,uid) : Observable<Object>{
    
    return this.http.post('/remove-fact',{ params:{ factid : factid, uid : uid}, responseType: 'json'})
  }

  getFactsFromJSON (uid) : Observable<Object>{
    
    return this.http.post('/get-local-facts',{ params:{ uid : uid}, responseType: 'json'})
  }
  // saveWish (movie) : Observable<Object>{
  //   return this.http.get('/set-wish',{ params:{ Movie : movie}, responseType: 'json'})
  // }
  
  // getWishes () : Observable<Object>{
  //   return this.http.get('/get-wishes',{ responseType: 'json'})
  // }

  constructor(private http :HttpClient) { }
}
