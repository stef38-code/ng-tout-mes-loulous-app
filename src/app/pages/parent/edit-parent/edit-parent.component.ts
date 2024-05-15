import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CardEnfantEditComponent} from "@pages/enfant/edit-enfant/card-enfant-edit/card-enfant-edit.component";
import {CardParentEditComponent} from "@pages/parent/card-parent-edit/card-parent-edit.component";
import {FlexModule} from "@angular/flex-layout";
import {Observable} from "rxjs";
import {Enfant} from "@model/enfant";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {currentSelector} from "@core/store/store.selector";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-parent',
  standalone: true,
  imports: [
    AsyncPipe,
    CardEnfantEditComponent,
    CardParentEditComponent,
    FlexModule,
    NgForOf,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './edit-parent.component.html',
  styleUrl: './edit-parent.component.scss'
})
export class EditParentComponent {
  current$: Observable<Enfant>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.current$ = this.store.select(currentSelector);
  }

  goToListEnfant(enfant: Enfant) {
    this.router.navigate(["/enfant/liste"]);
  }

  goToListEnfants() {
    this.router.navigate(["/enfant/liste"]);
  }
}
