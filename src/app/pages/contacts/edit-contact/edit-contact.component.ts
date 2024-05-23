import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Enfant} from "@model/enfant";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {currentSelector} from "@core/store/store.selector";

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss'
})
export class EditContactComponent {
  current$: Observable<Enfant>;

  constructor(private store: Store<AppState>) {
    this.current$ = this.store.select(currentSelector);
  }

}
