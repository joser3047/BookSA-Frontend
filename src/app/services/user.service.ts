import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = environment.serverURL;
    info;

    constructor(private http: HttpClient) {
    }

    async getSingleUser(id: Number) {


        const rest=await this.http.get<any>(this.url + 'users/' + id).toPromise()
        return rest;
    }


}
