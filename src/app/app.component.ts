import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {BooleanInput} from "@angular/cdk/coercion";
import {ToolbarComponent} from "@layout/toolbar/toolbar.component";
import {SidebarService} from "@layout/services/sidebar.service";
import {SidebarItem} from "@layout/services/model/menu-sidebar.interface";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,

    ToolbarComponent, AsyncPipe, NgForOf,


  ],
  providers: [
    SidebarService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit,OnDestroy{
  mdcBackdrop: BooleanInput = false;
  sidebarItem: SidebarItem[];

  sidebarItems$: Observable<SidebarItem[]>;


  /*constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private sidebarService: SidebarService,){
    this.sidebarItems$ = this.sidebarService.getSidebarItems();
  }*/

  constructor(
    private sidebarService: SidebarService,) {
    this.sidebarItems$ = this.sidebarService.getSidebarItems();
  }

  ngOnDestroy(): void {
    this.sidebarItems$.subscribe(resultat => {
      this.sidebarItem = resultat;
    }).unsubscribe();
  }

  ngOnInit(): void {
    /* this.primengConfig.ripple = true;
     this.translateService.setDefaultLang('fr');*/
  }

  /* translate(lang: string) {
     this.translateService.use(lang);
     this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
   }*/

}
