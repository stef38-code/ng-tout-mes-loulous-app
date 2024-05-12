import {Component, Input} from '@angular/core';
import {Personne} from "@model/personne";
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@Component({
  selector: 'edit-civilite-personne',
  standalone: true,
  imports: [
    MatCheckbox,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    MatButtonToggleModule
  ],
  providers: [provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

  ],
  templateUrl: './edit-civilite-personne.component.html',
  styleUrl: './edit-civilite-personne.component.scss'
})
export class EditCivilitePersonneComponent {

  @Input() personne: Personne;
  @Input() isParent: boolean = false;
  maxDate: Date;

  constructor() {
    this.maxDate = new Date();
  }
}
