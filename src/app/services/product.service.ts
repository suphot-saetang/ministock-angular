import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    apiURL = "http://localhost/ministock-api/public/api/";

    constructor(private http: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }

    // อ่านข้อมูล Product  ทั้งหมด  (Method GET)
    getProducts(): Observable<ProductModel>{
        return this.http.get<ProductModel>(this.apiURL + 'products')
    }

    // อ่านข้อมูล Product By ID (Method GET)
    getProduct(id): Observable<ProductModel> {
      return this.http.get<ProductModel>(this.apiURL + 'product/'+id)
    }

    // เพิ่มข้อมูลสินค้าใหม่  (Method POST)
    createProduct(product): Observable<ProductModel> {
      return this.http.post<ProductModel>(this.apiURL + "products", JSON.stringify(product), this.httpOptions)
    }

    // แก้ไขข้อมุล Product (Method PUT)
    updateProduct(id, product): Observable<ProductModel> {
      return this.http.put<ProductModel>(this.apiURL + "product/"+id, JSON.stringify(product), this.httpOptions)
    }

     // ลบรายการ Product  (Method DELETE)
     deleteProduct(id){
      return this.http.delete<ProductModel>(this.apiURL + "product/"+id,  this.httpOptions)
    }

}
