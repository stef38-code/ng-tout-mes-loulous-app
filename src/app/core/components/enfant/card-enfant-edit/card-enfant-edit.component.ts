import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";


@Component({
  selector: 'card-enfant-edit',
  standalone: true,
  imports: [],
  providers: [
  ],
  templateUrl: './card-enfant-edit.component.html',
  styleUrl: './card-enfant-edit.component.scss'
})
export class CardEnfantEditComponent {
  @Input() item: Enfant;
  minDate: Date;
  maxDate: Date;

  constructor() {
    // Max 6 ans, mini la date du jour
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 6, 0, 1);
    this.maxDate = new Date();
  }
}
