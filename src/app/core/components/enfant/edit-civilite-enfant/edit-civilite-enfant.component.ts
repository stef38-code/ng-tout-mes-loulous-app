import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'edit-civilite-enfant',
  standalone: true,
  imports: [
    CalendarModule,
    FloatLabelModule,
    InputTextModule,
    PaginatorModule
  ],
  templateUrl: './edit-civilite-enfant.component.html',
  styleUrl: './edit-civilite-enfant.component.scss'
})
export class EditCiviliteEnfantComponent {
  @Input() item: Enfant;
  minDate: Date;
  maxDate: Date;

  constructor() {
    // Max 6 ans, mini la date du jour
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 6, 0, 1);
    this.maxDate = new Date();
  }
}
