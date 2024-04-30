import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {BooleanInput} from "@angular/cdk/coercion";
import {MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawer, MatDrawerMode, MatSidenavModule} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ToolbarComponent} from "./layout/toolbar/toolbar.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, ToolbarComponent, FlexLayoutModule,
  ],
  providers: [
    { provide: MAT_DRAWER_DEFAULT_AUTOSIZE, useValue: { autosize: true } }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  mdcBackdrop: BooleanInput = false;
  drawerMode: MatDrawerMode = "push";

  readonly breakpoint$ = this.breakpointObserver
    .observe([ '(max-width: 500px)']);
  drawer: MatDrawer;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanges()
    );
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

}
