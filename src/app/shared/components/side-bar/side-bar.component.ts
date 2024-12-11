import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  optionsSideBar: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.optionsSideBar.defaultOptions = [
      {
        name: 'Home',
        icon: 'bi-house',
        router: ['/', 'home']
      },
      {
        name: 'Buscar',
        icon: 'bi bi-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'bi bi-file-music',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ];

    this.optionsSideBar.accessLink = [
      {
        name: 'Crear lista',
        icon: 'bi bi-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'bi bi-heart'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }
}
