import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'card-enfant-edit',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

  ],
  templateUrl: './card-enfant-edit.component.html',
  styleUrl: './card-enfant-edit.component.scss'
})
export class CardEnfantEditComponent {
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
