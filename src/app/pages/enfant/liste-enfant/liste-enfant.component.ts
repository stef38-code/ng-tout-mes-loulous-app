import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe, JsonPipe, NgFor, NgOptimizedImage} from "@angular/common";
import {CardEnfantComponent} from "@core/components/enfant/card-enfant/card-enfant.component";
import {Enfant} from "@model/enfant";
import {Observable} from "rxjs";
import {AppState} from "@core/store/store";
import {Store} from "@ngrx/store";
import {enfantsSelector} from "@core/store/store.selector";
import * as EnfantsActions from '@core/store/store.actions';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'app-liste-enfant',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    NgFor,
    DatePipe,
    NgOptimizedImage,
    CardEnfantComponent,
    JsonPipe,
    ButtonModule,
    ToolbarModule
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
