import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'mg-home-proveedor',
  templateUrl: './home-proveedor.component.html',
  styleUrls: ['./home-proveedor.component.scss']
})
export class HomeProveedorComponent implements OnInit {

  constructor(private productoService:ProductService,private toast: ToastrService,private router:Router) { }
  products: ProductModelServer[] = [];

  ngOnInit(): void {
    this.productoService.getProductsFromProvider().subscribe((prods: any ) => {
      this.products = prods;
      console.log("data:",this.products);
    });
  }

  deleteProduct(id:number,nameProd:string,index:number){
    console.log(id,nameProd,index);
    this.productoService.deleteProduct(id).subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.products.splice(index,1);
        this.toast.success(`${nameProd} deleted.`, "Deleted Product");
      }
    });
  }

  editProduct(id: Number) {
    this.router.navigate(['/edit-product', id]).then();
  }
}
