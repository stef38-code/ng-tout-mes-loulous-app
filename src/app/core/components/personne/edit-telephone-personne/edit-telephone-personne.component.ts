import {Component, Input} from '@angular/core';
import {Telephone} from "@model/telephone";
import {FormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {TelephoneComponentComponent} from "@core/components/commun/telephone-component/telephone-component.component";

@Component({
  selector: 'edit-telephone-personne',
  standalone: true,
  imports: [
    FormsModule,
    PanelModule,
    SharedModule,
    InputTextModule,
    FloatLabelModule,
    TelephoneComponentComponent
  ],
  templateUrl: './edit-telephone-personne.component.html',
  styleUrl: './edit-telephone-personne.component.scss'
})
export class EditTelephonePersonneComponent {
  @Input() telephones: Telephone[];
  @Input() index: number = 0;
}
