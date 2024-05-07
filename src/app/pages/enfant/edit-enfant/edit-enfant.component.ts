import {Component, OnInit} from '@angular/core';
import {EnfantsStore} from "@data/enfants-store";
import {Enfant} from "@model/enfant";
import {EnfantService} from "@core/services/enfant-service.service";
import {getState} from "@ngrx/signals";

@Component({
  selector: 'app-edit-enfant',
  standalone: true,
  imports: [],
  providers: [EnfantService, EnfantsStore],
  templateUrl: './edit-enfant.component.html',
  styleUrl: './edit-enfant.component.scss'
})
export class EditEnfantComponent implements OnInit {
  current: Enfant;

  constructor(readonly store: EnfantsStore) {
  }

  ngOnInit(): void {
    console.log(getState(this.store))
    this.current = this.store.current();
  }
}
