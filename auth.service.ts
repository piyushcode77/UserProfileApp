import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dev.myemprove.com/api/ver3api/student-login';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    const payload = {
      email: data.email,
      password: data.password,
      device_type: 'W',
      device_token: '',
      device_model: '',
      app_version: '',
      os_version: '',
    };
    return this.http.post(this.apiUrl, payload);
  }
}
