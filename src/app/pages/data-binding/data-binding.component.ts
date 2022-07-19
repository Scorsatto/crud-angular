import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Fabiano Scorsatto';
  imgUrl = 'https://picsum.photos/300/300';
  imgUrl2 = 'https://picsum.photos/300';
  imageDesc = 'Essa é ma imagem';
  imageDesc2 = 'Essa é outra imagem';
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(){
    console.log('Clicou aqui');
    this.text = 'Clicador'
  }

  clicouImagem(){
    console.log('Clicou na imagem');
    this.text = 'Espertinho'
  }

  
}
