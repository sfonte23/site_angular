import { Component } from '@angular/core'; 
import { Cliente } from '../models/Cliente.model'; 
import { ClienteService } from '../cliente.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {

  public cliente: Cliente = new Cliente(0, "", "");

constructor(private _clienteService: ClienteService, private _router: Router) {}

  cadastrar(): void {
    this._clienteService.cadastrarCliente(this.cliente).subscribe(
      cliente => {
        this.cliente = new Cliente(0, "", "");
        alert("Cadastro Efetuado com sucesso");
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );
    this._router.navigate(["/listar"]);
  }

}
