import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModelServer } from '../models/product.model';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private url = environment.serverURL;

  constructor(private http: HttpClient, private usuarioService:UsuarioService) {
  }

  getProductsFromProvider(): Observable<ProductModelServer[]> {
    let idProveedor=this.usuarioService.getUserInfo().id;
    return this.http.get<ProductModelServer[]>(this.url + 'prodproveedor/' + idProveedor);
  }
}
