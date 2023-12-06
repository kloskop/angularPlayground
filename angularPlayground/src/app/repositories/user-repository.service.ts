import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponse } from '../interfaces/i-user-response';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryService {
  constructor(private _http: HttpClient) {}

  public getUsers(): Promise<IUserResponse | undefined> {
    return this._http
      .get<IUserResponse>('https://reqres.in/api/users')
      .toPromise();
  }
}
