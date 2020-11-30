import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  http: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/.netlify/functions/getProducts', {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
