import {Component, Input} from '@angular/core';
import {Personne} from "@model/personne";
import {
  EditTelephonePersonneComponent
} from "@core/components/personne/edit-telephone-personne/edit-telephone-personne.component";
import {
  EditCivilitePersonneComponent
} from "@core/components/personne/edit-civilite-personne/edit-civilite-personne.component";
import {
  EditAdressePersonneComponent
} from "@core/components/personne/edit-adresse-personne/edit-adresse-personne.component";
import {EditEmailPersonneComponent} from "@core/components/personne/edit-email-personne/edit-email-personne.component";
import {PanelModule} from "primeng/panel";
import {
  EditTelEmailPersonneComponent
} from "@core/components/personne/edit-tel-email-personne/edit-tel-email-personne.component";


@Component({
  selector: 'card-parent-edit',
  standalone: true,
  imports: [
    EditTelephonePersonneComponent,
    EditCivilitePersonneComponent,
    EditAdressePersonneComponent,
    EditEmailPersonneComponent,
    PanelModule,
    EditTelEmailPersonneComponent

  ],
  providers: [],
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
