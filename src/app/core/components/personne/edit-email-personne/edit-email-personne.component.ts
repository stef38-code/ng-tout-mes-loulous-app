import {Component, Input} from '@angular/core';
import {Email} from "@model/email";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {PanelModule} from "primeng/panel";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'edit-email-personne',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    FlexModule,
    FormsModule,
    PanelModule,
    SharedModule,
    InputTextModule
  ],
  templateUrl: './edit-email-personne.component.html',
  styleUrl: './edit-email-personne.component.scss'
})
export class EditEmailPersonneComponent {
  @Input() emails: Email[];
}
