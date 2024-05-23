import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadEnfants, loadEnfantsFailure, loadEnfantsSuccess} from "@core/store/store.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {EnfantService} from "@core/services/enfant-service.service";

@Injectable()
export class EnfantsEffects {

  loadEnfant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEnfants),
      mergeMap(() => {

          return this.enfantService.getEnfantList().pipe(
            map((enfants) =>
              loadEnfantsSuccess({enfants})
            ),
            catchError((error) =>
              of(loadEnfantsFailure({error: error.message}))
            ),
          )
        }
      )
    )
  );

  constructor(private actions$: Actions, private enfantService: EnfantService) {
  }
}
