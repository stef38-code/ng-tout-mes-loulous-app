import {Component} from '@angular/core';
import {Enfant} from "@model/enfant";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {currentSelector} from "@core/store/store.selector";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {CardEnfantEditComponent} from "@core/components/enfant/card-enfant-edit/card-enfant-edit.component";
import {EditComponentPersonne} from "@pages/parent/edit-component-personne/edit-component-personne.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-enfant',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    DatePipe,
    CardEnfantEditComponent,
    EditComponentPersonne,
    NgForOf,
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
