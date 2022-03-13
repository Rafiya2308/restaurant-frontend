import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {API_CONFIG} from '../../constant/constant';
import { Category } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
   url = API_CONFIG.BASIC_URL;

  constructor(private http: HttpClient) { }

  createCategory(data: any): Observable<any> {
    let API_URL = this.url+'category';
    console.log('API_URL',API_URL);
    return this.http.post(API_URL, data);
  }

  getAllCategories():Observable<any>{
    let API_URL = this.url+'category';
    console.log('API_URL',API_URL);
    return this.http.get(API_URL);
  }
  
}
