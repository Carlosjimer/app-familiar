import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})


export class CompraComponent implements OnInit{
  objetos: {id: string, value: string}[];
  nuevoObjeto: string;

  
  constructor(){
    this.objetos = [];
    this.nuevoObjeto = '';
  }

  ngOnInit(){
    const data = localStorage.getItem('recupera');
    if (data){
      this.objetos = JSON.parse(data);
    }
  }

  addCompra(){
    const nuevoObjetoAdd = {
      id: Date.now().toString(),
      value: this.nuevoObjeto
    };
   this.objetos.push(nuevoObjetoAdd);
   localStorage.setItem('recupera', JSON.stringify(this.objetos));
   this.nuevoObjeto = '';
  }
  deleteCompra(id: string){
   this.objetos = this.objetos.filter(obj => obj.id !== id);
   localStorage.setItem('recupera', JSON.stringify(this.objetos));
  }
}
