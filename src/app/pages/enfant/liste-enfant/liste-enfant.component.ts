import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe, JsonPipe, NgFor, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatLabel} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {CardEnfantComponent} from "@core/components/enfant/card-enfant/card-enfant.component";
import {Enfant} from "@model/enfant";
import {MatButtonModule} from "@angular/material/button";
import {Observable} from "rxjs";
import {AppState} from "@core/store/store";
import {Store} from "@ngrx/store";
import {enfantsSelector} from "@core/store/store.selector";
import * as EnfantsActions from '@core/store/store.actions';
import {CardEnfantNewComponent} from "@core/components/enfant/card-enfant-new/card-enfant-new.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";

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
    CardEnfantComponent,
    JsonPipe,
    MatButtonModule,
    CardEnfantNewComponent,
    MatToolbarModule,
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
