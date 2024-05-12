import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Personne} from "@model/personne";
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {EditCivilitePersonneComponent} from "@core/components/edit-civilite-personne/edit-civilite-personne.component";
import {EditAdressePersonneComponent} from "@core/components/edit-adresse-personne/edit-adresse-personne.component";

@Component({
  selector: 'card-parent-edit',
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    EditCivilitePersonneComponent,
    EditAdressePersonneComponent
  ],
  providers: [provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

  ],
  templateUrl: './card-parent-edit.component.html',
  styleUrl: './card-parent-edit.component.scss'
})
export class CardParentEditComponent {
  @Input()
  parent: Personne;

  maxDate: Date;
  @Input() index: number;

  constructor() {
    this.maxDate = new Date();
  }
}