import {Component, OnInit} from '@angular/core';
import {TargetService} from "../../services/target.service";
import {TargetModel, TargetNoMode} from "../../models/target.model";
import {UsuarioService} from "../../services/usuario.service";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'mg-home',
    templateUrl: './target-register.component.html',
    styleUrls: ['./target-register.component.scss']

})

export class TargetRegisterComponent implements OnInit{

    target: TargetModel = new TargetModel();
    targetNo: TargetNoMode = new TargetNoMode();
    info;




    ngOnInit(): void {

        this.target.user = this.usarioService.getUserInfo().id;

        const getUserPromise= this.targetService.getAllNumbers(this.target.user);
        getUserPromise.then(value => {
            console.log(value.user);

            this.info = value.user;
        })

    }

    constructor(private targetService: TargetService, private usarioService:UsuarioService) {


    }

    onSumbit(){

        //supongo que por aca iria la variable de sesion
        this.target.user = this.usarioService.getUserInfo().id;
        this.targetService.registrarTarjeta(this.target);
        location.reload();


    }

    deleteSumbit(){

        console.log(this.targetNo)
        this.targetService.deleteTarjeta(this.targetNo);
        location.reload();
    }


}

