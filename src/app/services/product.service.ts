import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModelServer, serverResponse} from "../models/product.model";
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.serverURL;

  constructor(private http: HttpClient,private usuarioService:UsuarioService) {
  }

  getAllProducts(limitOfResults=100): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'products/' + id);
  }

  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'products/category/' + catName);
  }

  getProductsFromProvider(): Observable<ProductModelServer[]> {
    let idProveedor=this.usuarioService.getUserInfo().id;
    return this.http.get<ProductModelServer[]>(this.url + 'prodproveedor/' + idProveedor);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(this.url + 'prodproveedor/' + id);
  }
  updateProduct(product:ProductModelServer):Observable<any>{
    return this.http.patch<any>(this.url + 'prodproveedor/' + product.id,product);
  }
  createProduct(product:any):Observable<any>{
    return this.http.post<any>(this.url + 'prodproveedor/agregar',product);
  }
}
