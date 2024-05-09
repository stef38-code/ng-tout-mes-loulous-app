import {
  Component,
 Input,

} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatDrawer, MatToolbarModule, MatIconModule, MatIconButton],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Input() drawer: MatDrawer;
}
