import {Component, Input} from '@angular/core';
import {Telephone} from "@model/telephone";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'edit-telephone-personne',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './edit-telephone-personne.component.html',
  styleUrl: './edit-telephone-personne.component.scss'
})
export class EditTelephonePersonneComponent {
  @Input() telephones: Telephone[];
}
