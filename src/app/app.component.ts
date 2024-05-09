import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {BooleanInput} from "@angular/cdk/coercion";
import {MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawer, MatDrawerMode, MatSidenavModule} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ToolbarComponent} from "./layout/toolbar/toolbar.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListItem, MatNavList} from "@angular/material/list";
import {SidebarService} from "./layout/services/sidebar.service";
import {SidebarItem} from "./layout/services/model/menu-sidebar.interface";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, ToolbarComponent, FlexLayoutModule, MatNavList, MatListItem, AsyncPipe, NgForOf,
  ],
  providers: [
    SidebarService,
    { provide: MAT_DRAWER_DEFAULT_AUTOSIZE, useValue: { autosize: true } }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit,OnDestroy{
  mdcBackdrop: BooleanInput = false;
  drawerMode: MatDrawerMode = "push";
  sidebarItem: SidebarItem[];

  sidebarItems$: Observable<SidebarItem[]>;



  readonly breakpoint$ = this.breakpointObserver
    .observe([ '(max-width: 500px)']);
  drawer: MatDrawer;

  constructor(private sidebarService:SidebarService,private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanges()
    );
    this.sidebarItems$ = this.sidebarService.getSidebarItems();
  }

  breakpointChanges(): void {

    if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
      this.drawerMode = "over";
      this.mdcBackdrop = true;
    } else {
      this.drawerMode = "push";
      this.mdcBackdrop = false;
    }

  }

  ngOnDestroy(): void {
    this.sidebarItems$.subscribe(resultat => {
      this.sidebarItem = resultat;
    }).unsubscribe();
  }

  ngOnInit(): void {
// fait rien pour l'instant
  }

}
