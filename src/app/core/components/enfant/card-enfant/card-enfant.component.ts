import {Component, Input, OnInit} from '@angular/core';
import {Enfant} from "@model/enfant";
import {MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatLabel} from "@angular/material/form-field";
import {DatePipe, NgOptimizedImage, NgStyle} from "@angular/common";
import {EnfantBorderCardDirective} from "@core/components/enfant/card-enfant/directives/enfant-border-card.directive";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import * as EnfantsActions from '@core/store/store.actions';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'card-enfant',
  standalone: true,
  imports: [
    MatCardModule,
    MatDivider,
    MatLabel,
    DatePipe,
    NgOptimizedImage,
    EnfantBorderCardDirective,
    FlexModule,
    MatButtonModule,
    MatIcon,
    NgStyle
  ],
  providers: [],
  templateUrl: './card-enfant.component.html',
  styleUrl: './card-enfant.component.scss'
})
export class CardEnfantComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) {

  }

  @Input() item: Enfant;
  colorFlag: string = "red";


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

  goToEditParents(enfant: Enfant) {
    this.store.dispatch(EnfantsActions.selectEnfant({enfant}));
    this.router.navigate(['/parents/editer']);
  }

  goToEditContacts(enfant: Enfant) {
    this.store.dispatch(EnfantsActions.selectEnfant({enfant}));
    this.router.navigate(['/contacts/editer']);
  }

  ngOnInit(): void {
    if (this.item?.fratrie.length > 0) {
      this.colorFlag = "green";
    }
  }
}
