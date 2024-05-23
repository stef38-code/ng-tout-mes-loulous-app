import {Component, Input} from '@angular/core';
import {Telephone} from "@model/telephone";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PanelModule} from "primeng/panel";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'edit-telephone-personne',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    FlexModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    PanelModule,
    SharedModule,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './edit-telephone-personne.component.html',
  styleUrl: './edit-telephone-personne.component.scss'
})
export class EditTelephonePersonneComponent {
  @Input() telephones: Telephone[];
}
