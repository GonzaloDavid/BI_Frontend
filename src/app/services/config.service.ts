import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  blockScreen:boolean;
  constructor(private http: HttpClient) {
    this.blockScreen=false;
  }

  initApp() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`[WAIT]`);
        resolve({}); 
      }, 1);
    });
  }
  configApiBaseUrl() {
    return new Promise((resolve, reject) => {
      if (environment.production) {
        this.http.get('/assets/config.json').subscribe((res: any) => {
          const config = res;
          localStorage.setItem('apiBaseUrl', config.apiUrl);
          resolve({});
        });
      } else {
        console.log('[DEV]');
        localStorage.setItem('apiBaseUrl', environment.apiBaseUrl);
        resolve({});
      }
    });
  }

  getUrl() {
    return localStorage.getItem('apiBaseUrl');
  }


  activeBlockScreen()
  {
    this.blockScreen=true;
  }

  disableBlockScreen()
  {
    this.blockScreen=false;
  }

}
