import {Component, Input, OnInit} from '@angular/core';
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
  selector: 'card-enfant',
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

  getFratrie(item: Enfant): number {
    return item.fratrie.length;
  }
}
