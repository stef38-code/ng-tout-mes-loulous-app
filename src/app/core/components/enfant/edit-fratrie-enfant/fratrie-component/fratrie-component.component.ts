import {Component, Input, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Enfant} from "@model/enfant";
import {EnfantService} from "@core/services/enfant-service.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {AppState} from "@core/store/store";
import * as EnfantsActions from "@core/store/store.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'fratrie-component',
  standalone: true,
  imports: [
    ButtonModule,
    AsyncPipe
  ],
  providers: [EnfantService],
  templateUrl: './fratrie-component.component.html',
  styleUrl: './fratrie-component.component.scss'
})
export class FratrieComponentComponent implements OnInit {
  @Input()
  id: number;
  fraterie$: Observable<Enfant>;

  constructor(private enfantService: EnfantService,
              private store: Store<AppState>,
              private router: Router,
  ) {


  }

  goTo(enfant: Enfant) {
    this.store.dispatch(EnfantsActions.selectEnfantByEnfant({enfant}));
    this.router.navigate(['/enfant/editer']);
  }

  ngOnInit(): void {
    this.fraterie$ = this.enfantService.getEnfantById(this.id);
  }


}
