import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  mainMenu: any[] = [
    {
      title: 'Admisiones',
      icon:  'mdi mdi-account',
      menu: [ 
        { titleSubmenu: 'Certificados', process: [ 
          {  titleProcess: 'Hospitalización', url: 'certificates'}, 
          {  titleProcess: 'Hospitalización', url: 'certificates'}, 
          {  titleProcess: 'Hospitalización', url: 'certificates'} 
          {  titleProcess: 'Hospitalización', url: 'certificates'} 
        ] },
        { submenu: 'Listado de Camas', url: '/main'},
        { submenu: 'Ejemplo 1',}
        { submenu: 'Ejemplo 2'}
      ]
    }
  ]
  
  constructor() { }
}
