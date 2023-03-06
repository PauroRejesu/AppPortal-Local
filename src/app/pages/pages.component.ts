import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  app ="Aplicaciones Internas by Mederi."
  year = new Date().getFullYear();

  public linkTheme = document.querySelector('#theme');


  constructor() { }

  ngOnInit(): void {

    // href="./assets/css/colors/default-dark.css"
    const url = localStorage.getItem('theme') || './assets/css/colors/red.css'
    this.linkTheme?.setAttribute('href', url);
  
    
  }

}
