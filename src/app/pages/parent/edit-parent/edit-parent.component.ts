import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CardEnfantEditComponent} from "@core/components/enfant/card-enfant-edit/card-enfant-edit.component";
import {CardParentEditComponent} from "@pages/parent/card-parent-edit/card-parent-edit.component";
import {Observable} from "rxjs";
import {Enfant} from "@model/enfant";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {currentSelector} from "@core/store/store.selector";
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-edit-parent',
  standalone: true,
  imports: [
    AsyncPipe,
    CardEnfantEditComponent,
    CardParentEditComponent,
    NgForOf,
    NgIf,
    ButtonModule
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

  defaultValue(): Enfant {
    return {
      dateNaissance: undefined, fratrie: [], genre: "", id: 0, nom: "", parents: [], prenom: ""

    }
  }
}
