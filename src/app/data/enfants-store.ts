import {Enfant} from "@model/enfant";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {inject} from "@angular/core";
import {EnfantService} from "@core/services/enfant-service.service";

export interface EnfantState {
  enfants: Enfant[];
  loading: boolean;
}

export const initialState: EnfantState = {
  enfants: [],
  loading: false,
};
export const EnfantsStore = signalStore(
  {
    providedIn: 'root',

  },
  withState(initialState),
  withMethods(state => {
    const enfantService = inject(EnfantService);
    return {
      async loadEnfant() {
        patchState(state, {loading: true});
        const response: Enfant[] = await enfantService.enfantListAsPromise();
        console.table(response);
        patchState(state, {enfants: response});
        patchState(state, {loading: false});
      }
    }
  })
);
