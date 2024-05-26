import {Component, Input} from '@angular/core';
import {BlockUIModule} from "primeng/blockui";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import {loadingEnfantSelector} from "@core/store/store.selector";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@Component({
  selector: 'loading-component',
  standalone: true,
  imports: [
    BlockUIModule,
    AsyncPipe,
    ProgressSpinnerModule
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() target: any;
  blockedPanel$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.blockedPanel$ = this.store.select(loadingEnfantSelector);
  }
}
