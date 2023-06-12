import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoForTable, User } from '../auth/interfaces/auth.interface';

@Injectable({
    providedIn: 'root'
})

export class BackendService {

    private backendApiUrl: string = 'http://localhost:8080'

    constructor(private http: HttpClient) { }

    getUser(userGiven:string): Observable<string>{
        const url = `${this.backendApiUrl}/get-user?look=${userGiven}`;
        let config = { headers: new HttpHeaders().set("Accept", "*/*") };
        return this.http.get<string>(url, config)
    }

    sendUsers(userNameGiven: String, emailGiven: String, passwordGiven: String){
        const data = {"userName": userNameGiven, "email": emailGiven, "password": passwordGiven};
        let config = { headers: new HttpHeaders().set("Content-Type", "application/json") };
        const url = `${this.backendApiUrl}/create-user`;
        return this.http.post(url, data, config).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        )
    }

    getNameTable(): Observable<string[]>{
        const url = `${this.backendApiUrl}/get-tables`;
        return this.http.get<string[]>(url)

        
    }

    sendCommit(dataGiven: String){
        const data = {"data": dataGiven};
        let config = { headers: new HttpHeaders().set("Content-Type", "application/json") };
        const url = `${this.backendApiUrl}/strip`;
        return this.http.post(url, data, config).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        )
    }

    getXml(dataGiven:String): Observable<string[][]>{
        const url = `${this.backendApiUrl}/get-xml-data?xmlName=${dataGiven}`;
        let config = { headers: new HttpHeaders().set("Accept", "*/*") };
        return this.http.get<string[][]>(url, config)
    }

    getUserArduino(): Observable<string>{
        const pep="arduinando"
        const url = `${this.backendApiUrl}/get-user?look=${pep}`;
        let config = { headers: new HttpHeaders().set("Accept", "*/*") };
        return this.http.get<string>(url, config)
    }

    
}