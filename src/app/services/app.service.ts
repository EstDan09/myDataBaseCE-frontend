import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    
    
}