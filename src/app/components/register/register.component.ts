import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'mg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router,private toast: ToastrService) { }

  ngOnInit() {
  }

  userInfo:IUsuario={email:'',password:'',foto:'',tipo_usuario:0};


  nombreEmpresa:string="";
  emailEmpresa:string="";
  direccionEmpresa:string="";
  registroCliente=true;
  
  registrarCliente(){
    this.usuarioService.registro(this.userInfo).subscribe(
      res=>{
        if(res){
          //this.router.navigate(['/home']);
          this.usuarioService.saveUser(this.userInfo);
          this.router.navigate(['/'])
          .then(() => {
            //window.location.reload();
          });
        }else{
        this.toast.warning("Verifique los datos ingresados.");
        }
      },
      err=>{
        this.toast.warning("Verifique los datos ingresados.");
        
      }
    );
    
  }
  
  registrarProveedor(){
    this.userInfo.tipo_usuario=1;
    this.registrarCliente();
  }
}
