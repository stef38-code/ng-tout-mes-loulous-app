import {Component, Input, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {Observable} from "rxjs";
import {currentFratrieSelector} from "@core/store/store.selector";
import {AsyncPipe} from "@angular/common";
import {Enfant} from "@model/enfant";
import {
  FratrieComponentComponent
} from "@core/components/enfant/edit-fratrie-enfant/fratrie-component/fratrie-component.component";

@Component({
  selector: 'edit-fratrie-enfant',
  standalone: true,
  imports: [
    ButtonModule,
    AsyncPipe,
    FratrieComponentComponent
  ],
  templateUrl: './edit-fratrie-enfant.component.html',
  styleUrl: './edit-fratrie-enfant.component.scss'
})
export class EditFratrieEnfantComponent implements OnInit {
  fraterie: number[] | undefined;
  @Input() item: Enfant;
  fraterie$: Observable<number[]>;

  constructor(private store: Store<AppState>) {
    this.fraterie$ = this.store.select(currentFratrieSelector);
  }

  ngOnInit(): void {
    this.fraterie = this.item.fratrie;
  }

  addFratrie() {

  }
}
