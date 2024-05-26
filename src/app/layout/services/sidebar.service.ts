import {Injectable} from '@angular/core';
import {SidebarItem} from "@layout/model/menu-sidebar.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  getSidebarItems(): Observable<SidebarItem[]> {
    return of([
      {
        id: 0,
        text: '',
        link: '/home',
        icon: 'pi-home',
      },
      {
        id: 1,
        text: '',
        link: '/enfant/liste',
        icon: 'pi-users',
      },
      {
        id: 2,
        text: '',
        link: '/parent/liste',
        icon: 'pi-address-book',
      },
      {
        id: 3,
        text: '',
        link: '/saisie/mois',
        icon: 'pi-calendar',
      },
    ]);
  }
}
