import { Component } from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-no-found',
  standalone: true,
  imports: [MatProgressBarModule, FlexLayoutModule],
  templateUrl: './no-found.component.html',
  styleUrl: './no-found.component.scss'
})
export class NoFoundComponent {

}
