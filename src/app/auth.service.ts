import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private _isLoggedIn: boolean = false;
  private _username: string = "";

  getUsername(): string {
    return this._username;
  }

  login(username: string) {
    this._isLoggedIn = true;
    this._username = username;
  }

  logout() {
    this._isLoggedIn = false;
    this._username = '';
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get username(): string {
    return this._username;
  }

  setLoginDetails(username: string, isLoggedIn: boolean) {
    this._username = username;
    this._isLoggedIn = isLoggedIn;
  }

  clearLoginDetails() {
    this._username = "";
    this._isLoggedIn = false;
  }
}