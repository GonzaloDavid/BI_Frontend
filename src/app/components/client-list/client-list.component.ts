import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

  clientList:any[];

  constructor()
  {
    this.clientList=[];
  }

}
