import { Injectable } from '@angular/core';
import {SidebarItem} from "./model/menu-sidebar.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  getSidebarItems(): Observable<SidebarItem[]> {
    return of([
      {
        text: '',
        link: '/home',
        icon: 'home',
      },
      {
        text: '',
        link: '/enfant/liste',
        icon: 'sentiment_very_satisfied',
      },
      {
        text: '',
        link: '/parent/liste',
        icon: 'family_restroom',
      },
      {
        text: '',
        link: '/saisie/mois',
        icon: 'savings',
      },
    ]);
  }
}
