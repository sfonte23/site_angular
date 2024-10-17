import { Component } from '@angular/core'; 
import { ClienteService } from '../cliente.service'; 
import { Cliente } from '../models/Cliente.model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  public clientes: Cliente[] = [];

  constructor(private  _clienteService:ClienteService,private _router:Router){} 
  
  ngOnInit(): void { 
    this.listarClientes(); 
  } 
  listarClientes():void{ 
    this._clienteService.getClientes().subscribe( 
      retornaCliente =>{ 
        this.clientes = retornaCliente.map( 
          item => { 
            return new Cliente( 
              item.id, 
              item.nome, 
              item.endereco 
            );
          } 
        )
      }
    ) 
  }
  excluir(id: number) {
    this._clienteService.excluirCliente(id).subscribe(
      cliente => {
        this.listarClientes();
      },
      err => {
        alert("Erro ao Excluir");
      }
    );
    this._router.navigate(["/lista"]);
  }
  
}
