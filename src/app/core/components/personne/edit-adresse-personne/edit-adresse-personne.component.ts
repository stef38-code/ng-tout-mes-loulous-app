import {Component, Input} from '@angular/core';
import {Adresse} from "@model/adresse";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'edit-adresse-personne',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './edit-adresse-personne.component.html',
  styleUrl: './edit-adresse-personne.component.scss'
})
export class EditAdressePersonneComponent {
  @Input() adresse: Adresse;

}
