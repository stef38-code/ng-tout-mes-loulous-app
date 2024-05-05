import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatLabel} from "@angular/material/form-field";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {
  EnfantBorderCardDirective
} from "@pages/enfant/liste-enfant/card-enfant-list/directives/enfant-border-card.directive";

@Component({
  selector: 'app-card-enfant-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatDivider,
    MatLabel,
    DatePipe,
    NgOptimizedImage,
    EnfantBorderCardDirective
  ],
  templateUrl: './card-enfant-list.component.html',
  styleUrl: './card-enfant-list.component.scss'
})
export class CardEnfantListComponent {

  @Input() item: Enfant;
  @Input() getImage: (genre: string) => string;

  goToEditEnfant(enfant: Enfant) {

  }
}
