import {Enfant} from "@model/enfant";
import {getState, patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {computed, inject} from "@angular/core";
import {EnfantService} from "@core/services/enfant-service.service";

export interface EnfantState {
  enfantsList: Enfant[];
  loading: boolean;
}

export const initialState: EnfantState = {
  enfantsList: [],
  loading: false,
};
export const EnfantsStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),

  withMethods((store, enfantService = inject(EnfantService)) => ({

    async loadEnfant() {
      patchState(store, ({loading: true}));
      console.log("loading:", store.loading);
      const response: Enfant[] = await enfantService.enfantListAsPromise();
      console.log("Taille de la réponse du service:", response.length);
      patchState(store, {enfantsList: response});
      console.log("stocké Nombre d'enfant:", store.enfantsList.length);
      patchState(store, {loading: false});
      console.log("loading:", store.loading);
      const state = getState(store);
      console.log(state);
    }

  })),
  withComputed(state => ({
    getListe: computed(() => {
      console.log("Lu Nombre d'enfant:", state.enfantsList.length);
      return state.enfantsList
    })
  })),
  withHooks({
    onInit(store) {
      console.log('withHooks on init: première déclaration inject  dans le projet');
      const state = getState(store);
      console.log(state);
    },
    onDestroy() {
      console.log('withHooks on destroy');
    },
  })
);
