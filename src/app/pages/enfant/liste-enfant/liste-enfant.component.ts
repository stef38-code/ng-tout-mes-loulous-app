import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe, JsonPipe, NgFor, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatLabel} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {CardEnfantListComponent} from "@pages/enfant/liste-enfant/card-enfant-list/card-enfant-list.component";
import {Enfant} from "@model/enfant";
import {MatButtonModule} from "@angular/material/button";
import {Observable} from "rxjs";
import {AppState} from "@core/store/store";
import {Store} from "@ngrx/store";
import {enfantsSelector} from "@core/store/store.selector";
import * as EnfantsActions from '@core/store/store.actions';

@Component({
  selector: 'app-liste-enfant',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    NgFor,
    MatCardModule,
    FlexLayoutModule,
    MatLabel,
    DatePipe,
    NgOptimizedImage,
    MatIconModule,
    MatDivider,
    CardEnfantListComponent,
    JsonPipe,
    MatButtonModule
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './liste-enfant.component.html',
  styleUrl: './liste-enfant.component.scss'
})
export class ListeEnfantComponent implements OnInit{
  enfants$: Observable<Enfant[]>;


  constructor(private store: Store<AppState>) {
    this.enfants$ = this.store.select(enfantsSelector);

  }

  ngOnInit(): void {
    this.loadEnfants();
  }

  trackByFn(index: number, enfant: Enfant) {
    return enfant.id;
  }

  loadEnfants() {
    this.store.dispatch(EnfantsActions.loadEnfants());
  }
}
