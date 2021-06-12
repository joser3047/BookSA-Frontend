import {TargetModel, TargetNoMode} from "../models/target.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class TargetService {
    private url = environment.serverURL;

    info;
    constructor(private http: HttpClient) {
    }

    registrarTarjeta(target:TargetModel){
        return this.http.post(this.url+'target',target).toPromise();
    }

    async getAllNumbers(id: Number) {

        const rest=await this.http.get<any>(this.url + 'target/' + id).toPromise()
        return rest;
    }

    deleteTarjeta(target:TargetNoMode){
        return this.http.post(this.url+'target/deleteT', target).toPromise()
    }
}
