import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {map} from "rxjs/operators";
import { ProductModelServer } from 'src/app/models/product.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'mg-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,private toast: ToastrService,
    private productService: ProductService,private router:Router,private usuarioService:UsuarioService) { }
    
    id: Number;
    product:any={id:0,category:'',imagen:'',images:'',nombre:'',valor_unitario:0,stock:0};
    thumbimages: any[] = [];
    create:boolean=true;

  ngOnInit(): void {
    this.product.proveedor=this.usuarioService.getUserInfo().id;

    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
     console.log("PAR: ",this.id);
      if(this.id!=0){
     console.log("PAR: ",this.id);
        this.productService.getSingleProduct(this.id).subscribe(prod => {
          console.log(prod);
          this.product = prod;
          this.product.proveedor=this.usuarioService.getUserInfo().id;
          if (prod.images !== null) {
            //this.thumbimages = prod.images.split(';');
          }
  
        });
        this.create=false;
      }
          
    });
  }

  guardar(){
    console.log(this.product);
    if(this.create){
      this.product.precio_cliente=this.product.valor_unitario*0.10;
      this.productService.createProduct(this.product).subscribe(
        (res:any)=>{
          this.router.navigate(['/proveedor']);
        },err=>this.toast.warning(`Not Possible save product`, "An error ocurred")
      );
    }else{
      this.productService.updateProduct(this.product).subscribe(
        (res:any)=>{
          if(res){
            this.router.navigate(['/proveedor']);
          }else{
            //this.toast.success(`Success`, "Product Saved");
            this.toast.warning(`Not Possible update product`, "An error ocurred");
          }
        },err=>this.toast.warning(`Not Possible update product`, "An error ocurred")
      );
    }
  }


}
