import {Component,} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {AvatarModule} from "primeng/avatar";
import {SharedModule} from "primeng/api";
import {Observable} from "rxjs";
import {SidebarItem} from "@layout/services/model/menu-sidebar.interface";
import {SidebarService} from "@layout/services/sidebar.service";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, SharedModule, AsyncPipe, ButtonModule, NgOptimizedImage],
  providers: [
    SidebarService,],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  sidebarItems$: Observable<SidebarItem[]>;

  constructor(private router: Router,
              private sidebarService: SidebarService) {
    this.sidebarItems$ = this.sidebarService.getSidebarItems();
  }

  goTo(link: string) {
    this.router.navigate([link]);
  }
}
