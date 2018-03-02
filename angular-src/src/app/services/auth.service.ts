import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  /**
   * POST registered user to back-end
   * @param user - the new user registered
   * @returns {Observable<Object>} - POST data
   */
  registerUser(user) {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  }

  /**
   * POST to authenticate user logging in
   * @param user - the user logging in
   * @returns {Observable<Object>} - POST data
   */
  authenticateUser(user) {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers});
  }

  getProfile() {
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    return this.http.get('http://localhost:3000/users/profile', {headers: headers});
  }

  /**
   * Store user session data
   * @param token - Auth token
   * @param user - the user logged in
   */
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   * load token from local storage to use
   * in getProfile()
   */
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  /**
   * Log user out
   */
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
