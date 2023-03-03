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

  constructor() { }

  ngOnInit(): void {
  }

}
