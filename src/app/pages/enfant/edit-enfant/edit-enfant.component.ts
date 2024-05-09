import {Component} from '@angular/core';
import {Enfant} from "@model/enfant";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {currentSelector} from "@core/store/store.selector";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";

@Component({
  selector: 'app-edit-enfant',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
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
