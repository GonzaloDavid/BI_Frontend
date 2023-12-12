import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.scss'
})
export class MovimientosComponent {

  @Input() listaMovimientos:any[]=[];
  @Input() saldoActual:number;

  constructor()
  {
    this.saldoActual=0;
  }


}
