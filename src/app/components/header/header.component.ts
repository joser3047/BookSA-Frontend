import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import {environment} from "../../../environments/environment";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: Number;
  uiURL:string= environment.uiURL;
  loggedIn=false;
  proveedor=false;

  constructor(public cartService: CartService,private usuarioService:UsuarioService,
    private router:Router) {
  }

  ngOnInit() {
    this.loggedIn=this.usuarioService.getUserInfo().id==0?false:true;
    this.proveedor=this.usuarioService.getUserInfo().tipo_usuario==1?true:false;
  this.cartService.cartTotal$.subscribe(total => {
    this.cartTotal = total;
  });

  this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }
  logout(){
    this.usuarioService.logout();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
