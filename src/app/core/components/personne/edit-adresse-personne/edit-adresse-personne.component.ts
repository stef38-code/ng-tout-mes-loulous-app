import {Component, Input} from '@angular/core';
import {Adresse} from "@model/adresse";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'edit-adresse-personne',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    MatCardModule,
    FlexLayoutModule
  ],
  templateUrl: './edit-adresse-personne.component.html',
  styleUrl: './edit-adresse-personne.component.scss'
})
export class EditAdressePersonneComponent {
  @Input() adresse: Adresse;

}
