import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'mg-home',
    templateUrl: './provider-profile.component.html',
    styleUrls: ['./provider-profile.component.scss']
})

export class ProviderProfileComponent implements OnInit{

    idUser: number=1; //cambiar por variable de sesion
    user;

    constructor(private userService:UserService) {
    }

    ngOnInit(): void {

        const getUserPromise= this.userService.getSingleUser(1);
        getUserPromise.then(value => {
            console.log(value);

            this.user = value.user;
        })

    }
}