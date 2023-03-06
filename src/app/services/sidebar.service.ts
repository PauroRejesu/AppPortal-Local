import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  mainMenu: any[] = [
    {
      title: 'Dashboard',
      icon:  'mdi mdi-view-dashboard',
      menu: [ 
        { titleSubmenu: 'Camas', process: [ 
          {  titleProcess: 'Asignaciones', url: 'graphic1'}, 
          {  titleProcess: 'Progreso', url: 'progress'}
         ] 
        }
      ]
    },
    {
      title: 'Admisiones',
      icon:  'mdi mdi-account',
      menu: [ 
        { titleSubmenu: 'Certificados', process: [ 
          {  titleProcess: 'Hospitalización', url: 'certificates'}, 
          {  titleProcess: 'Paz y Salvos', url: '/'}
        ] },
        { titleSubmenu: 'Listado de Camas', process: []},
        { titleSubmenu: 'Ejemplo 1', process: []}
        
      ]
    }
  ]
  
  constructor() { }
}
