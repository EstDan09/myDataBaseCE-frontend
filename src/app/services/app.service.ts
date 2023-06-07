import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../auth/interfaces/auth.interface';

@Injectable({
    providedIn: 'root'
})

export class BackendService {

    private backendApiUrl: string = 'http://localhost:8080'

    constructor(private http: HttpClient) { }

    getTest(): Observable<User>{
        const url = `${this.backendApiUrl}/testOne`;
        return this.http.get<User>(url)
    }

    postTest(){
        const data = {"userName": "juanRicoAlex", "email": "ayYico", "password":"passinga"};
        let config = { headers: new HttpHeaders().set("Content-Type", "application/json") };
        const url = `${this.backendApiUrl}/testTwo`;
        return this.http.post(url, data, config).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        )
    }

    
    
}