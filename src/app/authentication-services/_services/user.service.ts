import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private roleSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

    getAll() {
        return this.http.get<User[]>(`${environment.baseUrl}/users`);
    }

    getRole(): Observable<number | null> {
        return this.roleSubject.asObservable();
      }
    
      setRole(role: number): void {
        this.roleSubject.next(role);
      }
}