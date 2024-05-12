import {Component} from '@angular/core';
import {Enfant} from "@model/enfant";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {currentSelector} from "@core/store/store.selector";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {CardEnfantEditComponent} from "@pages/enfant/edit-enfant/card-enfant-edit/card-enfant-edit.component";
import {CardParentEditComponent} from "@pages/enfant/edit-enfant/card-parent-edit/card-parent-edit.component";
import {FlexModule} from "@angular/flex-layout";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-enfant',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    DatePipe,
    CardEnfantEditComponent,
    CardParentEditComponent,
    NgForOf,
    FlexModule,
    RouterLink
  ],
  providers: [],
  templateUrl: './edit-enfant.component.html',
  styleUrl: './edit-enfant.component.scss'
})
export class EditEnfantComponent {
  current$: Observable<Enfant>;

  constructor(private store: Store<AppState>) {
    this.current$ = this.store.select(currentSelector);
  }


}
