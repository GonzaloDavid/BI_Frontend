import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ClienteService } from '../../services/cliente.service';
import { TabViewModule } from 'primeng/tabview';
import { MovimientosComponent } from '../movimientos/movimientos.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [TableModule, ButtonModule, TabViewModule, MovimientosComponent, CommonModule, InputTextModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

  clientList:any[];
  clientSelected:any={};
  codigoClienteSearch:string | undefined;
  codigoempleadoSearch:string | undefined;

  constructor(
    private clienteService:ClienteService
  )
  {
    this.clientList=[];
  }

  obtenerCliente()
  {
    //empleado-008283820
    this.clienteService.obtenerClientePorCriterioBusqueda(this.codigoClienteSearch, this.codigoempleadoSearch).subscribe({
      next: (result) => {
        console.log('RESULTADO DE LISTADO: ', result);
        this.clientSelected= result;
        
      },
      error: (error) => {
        throw error
      }
    })
  }

}
