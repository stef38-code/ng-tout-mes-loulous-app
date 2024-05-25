import {Component, Input} from '@angular/core';
import {EditEmailPersonneComponent} from "@core/components/personne/edit-email-personne/edit-email-personne.component";
import {
  EditTelephonePersonneComponent
} from "@core/components/personne/edit-telephone-personne/edit-telephone-personne.component";
import {Personne} from "@model/personne";

@Component({
  selector: 'edit-tel-email-personne',
  standalone: true,
  imports: [
    EditEmailPersonneComponent,
    EditTelephonePersonneComponent
  ],
  templateUrl: './edit-tel-email-personne.component.html',
  styleUrl: './edit-tel-email-personne.component.scss'
})
export class EditTelEmailPersonneComponent {
  @Input()
  parent: Personne;
}
