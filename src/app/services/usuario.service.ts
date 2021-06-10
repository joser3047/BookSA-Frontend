import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/usuario.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = environment.serverURL;

  constructor(private http:HttpClient) { }

  login(usuario:string,password:string){

    return this.http.post<any>(`${this.url}users/login`,{"email":usuario,"password":password})
    .pipe(tap(
      (res:any)=>{
        if(res){
          this.saveUser(res);
          //this.currentUserSubject.next(res);
        }
      }
    ));
  }

  registro(usuario:IUsuario){
    return this.http.post<any>(`${this.url}users/registro`,usuario);
  }

  registroProveedor(nombre:string,direccion:string,password:string,direccionFisica:string){
    var send={
      nombres:nombre,
      direccion,
      password,
      direccionFisica
    }
    return this.http.post<any>(`${this.url}users/registro`,send)
    .pipe(tap(
      (res:any)=>{
        if(res){
          this.saveUser(res);
          //this.currentUserSubject.next(res);
        }
      }
    ));
  }

  saveUser(usuario:any){
    let user_json=JSON.stringify(usuario);
    localStorage.setItem("usuario",user_json);
  }

  logout(){
    localStorage.removeItem("usuario");
  }

  public getUserInfo():IUsuario{
    let user=localStorage.getItem("usuario");
    if(user!=undefined){
      return JSON.parse(user);
    }
    let userEmpty:IUsuario={id:0}
    return userEmpty;
  }


  getUserInfoFromServer(){
    let idUsuario=this.getUserInfo().id;
    return this.http.get<any>(`${this.url}users/${idUsuario}`)
  }

}
