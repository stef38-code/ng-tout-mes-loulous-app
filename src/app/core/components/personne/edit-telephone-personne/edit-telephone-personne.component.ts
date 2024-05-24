import {Component, Input} from '@angular/core';
import {Telephone} from "@model/telephone";
import {FormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'edit-telephone-personne',
  standalone: true,
  imports: [
    FormsModule,
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
