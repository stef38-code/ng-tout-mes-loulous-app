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
import {CreateNewEnfantService} from "@core/services/create-new-enfant.service";
import {LoadingComponent} from "@core/components/loading/loading.component";
import {CardNewEnfantComponent} from "@core/components/enfant/card-new-enfant/card-new-enfant.component";

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
    ToolbarModule,
    LoadingComponent,
    CardNewEnfantComponent
  ],
  providers: [CreateNewEnfantService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './liste-enfant.component.html',
  styleUrl: './liste-enfant.component.scss'
})
export class ListeEnfantComponent implements OnInit{
  enfants$: Observable<Enfant[]>;
  newEnfant$: Observable<Enfant> = this.createNewEnfantService.new();

  constructor(private createNewEnfantService: CreateNewEnfantService,
              private store: Store<AppState>) {
    this.newEnfant$ = this.createNewEnfantService.new();
    this.enfants$ = this.store.select(enfantsSelector);

  }

  ngOnInit(): void {
    this.loadEnfants();
  }
  loadEnfants() {
    this.store.dispatch(EnfantsActions.loadEnfants());
  }

}
