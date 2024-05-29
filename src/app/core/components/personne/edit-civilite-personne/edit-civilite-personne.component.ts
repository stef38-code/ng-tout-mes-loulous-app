import {Component, Input} from '@angular/core';
import {Personne} from "@model/personne";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {SelectButtonModule} from "primeng/selectbutton";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'edit-civilite-personne',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    PanelModule,
    SelectButtonModule,
    CheckboxModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,

  ],
  providers: [
  ],
  templateUrl: './edit-civilite-personne.component.html',
  styleUrl: './edit-civilite-personne.component.scss'
})
export class EditCivilitePersonneComponent {

  @Input() personne: Personne;
  @Input() isParent: boolean = false;
  maxDate: Date;
  anniversaire: Date;
  stateOptions: any[] = [{label: 'Madame', value: 'F'}, {label: 'Monsieur', value: 'M'}];
  constructor() {
    this.maxDate = new Date();
    //this.anniversaire = this.getDate(this.personne.dateNaissance);
  }


}
