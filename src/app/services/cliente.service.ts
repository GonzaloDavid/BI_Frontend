import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable, map } from 'rxjs';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=utf-8')
  .set('Authorization',  '');

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private uriBackend: string;
  constructor(
    private http: HttpClient, private urlService: ConfigService

  ) { 
    this.uriBackend = this.urlService.getUrl() + '/bi_Web/resources/com.entities.cliente/';
  }

  obtenerClientePorCriterioBusqueda(codigoCliente:string | undefined, codigoempleado:string  | undefined): Observable<any> 
  {
    let url = `${this.uriBackend}getClientByCode?`;
    url+=codigoempleado ? "&codigoEmpleado="+codigoempleado : "";
    url+=codigoCliente ? "&codigoCliente="+codigoCliente : "";
    return this.http.get(url, { headers }).pipe(map((res: any) => res as any));
  }
}
