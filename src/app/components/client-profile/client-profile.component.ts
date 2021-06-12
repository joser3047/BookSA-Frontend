import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {UserService} from "../../services/user.service";
import {IUsuario} from "../../models/usuario.model";
import {UserModel} from "../../models/user.model";


@Component({
    selector: 'mg-home',
    templateUrl: './client-profile.component.html',
    styleUrls: ['./client-profile.component.scss']
})

export class ClientProfileComponent implements OnInit{

    idUser: number=1; //cambiar por variable de sesion
    user: UserModel = new UserModel();

    constructor(private userService:UserService, private usuarioService: UsuarioService) {
    }

    ngOnInit(): void {

       const data = this.usuarioService.getUserInfo();

       this.user.nombre = data.nombre;
       this.user.apellido = data.apellido;
       this.user.celular = data.celular;
       this.user.email = data.email;
       this.user.tipo_usuario_string= data.tipo_usuario?"Proveedor":"Cliente";
       this.user.foto= data.foto;

    }



}


