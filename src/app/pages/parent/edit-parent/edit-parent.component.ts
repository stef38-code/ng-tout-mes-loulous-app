import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {CardEnfantEditComponent} from "@core/components/enfant/card-enfant-edit/card-enfant-edit.component";
import {EditComponentPersonne} from "@pages/parent/edit-component-personne/edit-component-personne.component";
import {Observable} from "rxjs";
import {Enfant} from "@model/enfant";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {currentSelector} from "@core/store/store.selector";
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-parent',
  standalone: true,
  imports: [
    AsyncPipe,
    CardEnfantEditComponent,
    EditComponentPersonne,
    NgForOf,
    NgIf,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './edit-parent.component.html',
  styleUrl: './edit-parent.component.scss'
})
export class EditParentComponent {
  current$: Observable<Enfant>;
  formEditParentComponent = new FormGroup({});

  constructor(private router: Router,
              private store: Store<AppState>) {
    this.current$ = this.store.select(currentSelector);
  }

  saveAndGotoListEnfant(enfant: Enfant) {
    this.router.navigate(["/enfant/liste"]);
  }

  goToListEnfants() {
    this.router.navigate(["/enfant/liste"]);
  }

  goToEditEnfant() {
    this.router.navigate(["/enfant/editer"]);
  }


  submit(enfant: Enfant) {

  }
}
