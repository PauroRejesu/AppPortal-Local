import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notpage-found',
  templateUrl: './notpagefound.component.html',
  styleUrls: ['./notpagefound.component.css']
})
export class NotpagefoundComponent  {

  app ="Aplicaciones Internas by Mederi."
  year = new Date().getFullYear();

}
