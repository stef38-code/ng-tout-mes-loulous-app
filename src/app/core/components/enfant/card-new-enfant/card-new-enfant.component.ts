import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {DatePipe, NgOptimizedImage, NgStyle} from "@angular/common";
import {EnfantBorderCardDirective} from "@core/components/enfant/card-enfant/directives/enfant-border-card.directive";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import * as EnfantsActions from '@core/store/store.actions';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";

@Component({
  selector: 'card-new-enfant',
  standalone: true,
  imports: [
    DatePipe,
    NgOptimizedImage,
    EnfantBorderCardDirective,
    NgStyle,
    CardModule,
    PanelModule,
    AvatarModule,
    ButtonModule,
    BadgeModule
  ],
  providers: [],
  templateUrl: './card-new-enfant.component.html',
  styleUrl: './card-new-enfant.component.scss'
})
export class CardNewEnfantComponent {
  @Input() item: Enfant;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {

  }

  goToEditEnfant(enfant: Enfant) {
    this.store.dispatch(EnfantsActions.selectEnfantByEnfant({enfant}));
    this.router.navigate(['/enfant/editer']);

  }

  getImage(): string {
    return "assets/images/new_bebe.png";
  }


}
