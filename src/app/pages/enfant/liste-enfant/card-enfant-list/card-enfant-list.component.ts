import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatLabel} from "@angular/material/form-field";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {
  EnfantBorderCardDirective
} from "@pages/enfant/liste-enfant/card-enfant-list/directives/enfant-border-card.directive";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import * as EnfantsActions from '@core/store/store.actions';

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
  providers: [],
  templateUrl: './card-enfant-list.component.html',
  styleUrl: './card-enfant-list.component.scss'
})
export class CardEnfantListComponent {

  constructor(private router: Router, private store: Store<AppState>) {

  }

  @Input() item: Enfant;


  goToEditEnfant(enfant: Enfant) {
    this.store.dispatch(EnfantsActions.selectEnfant({enfant}));
    this.router.navigate(['/enfant/editer']);
  }

  getImage(genre: string): string {
    if (genre == "Fille") {
      return "assets/images/icons8-fille-48.png";
    }
    return "assets/images/icons8-garçon-48.png";
  }
}
