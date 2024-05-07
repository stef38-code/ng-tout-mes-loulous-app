import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatLabel} from "@angular/material/form-field";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {
  EnfantBorderCardDirective
} from "@pages/enfant/liste-enfant/card-enfant-list/directives/enfant-border-card.directive";
import {EnfantsStore} from "@data/enfants-store";
import {Router} from "@angular/router";
import {getState} from "@ngrx/signals";

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
  providers: [EnfantsStore],
  templateUrl: './card-enfant-list.component.html',
  styleUrl: './card-enfant-list.component.scss'
})
export class CardEnfantListComponent {

  constructor(private router: Router, readonly store: EnfantsStore) {
  }

  @Input() item: Enfant;


  goToEditEnfant(enfant: Enfant) {
    console.log("ici");
    this.store.selectEnfant(enfant);
    console.log("goToEditEnfant Dans le store:", getState(this.store));
    this.router.navigate(['/enfant/editer']);
  }

  getImage(genre: string): string {
    if (genre == "Fille") {
      return "assets/images/icons8-fille-48.png";
    }
    return "assets/images/icons8-garçon-48.png";
  }
}
