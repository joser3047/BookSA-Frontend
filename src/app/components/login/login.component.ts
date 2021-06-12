import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router,private toast: ToastrService) { }

  ngOnInit() {
  }

  email:string="";
  password:string="";
  errorAutenticacion:string="";
  
  login(){
    
    this.usuarioService.login(this.email,this.password).subscribe(
      res=>{
        //CODIGO SI LA RESPUESTA ES CORRECTA
        if(res!=undefined){
          if(this.usuarioService.getUserInfo().tipo_usuario==0){
            this.router.navigate(['/'])
            .then(() => {
              window.location.reload();
            });
          }else{
            this.router.navigate(['/proveedor'])
            .then(() => {
              window.location.reload();
            });
          }
          
        }else{
          this.toast.warning("Verifique usuario y contraseña.");
        }
        // FIN CODIGO
      },
      err=>{
        this.toast.warning("Verifique usuario y contraseña.");
      }
    );
  }

  

}
