import {Enfant} from "@model/enfant";
import {getState, patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {computed, inject} from "@angular/core";
import {EnfantService} from "@core/services/enfant-service.service";

export type EnfantState = {
  enfantsList: Enfant[];
  current: Enfant;
  loading: boolean;
}

export const initialState: EnfantState = {
  enfantsList: [],
  current: undefined,
  loading: false,
};
export type EnfantsStore = InstanceType<typeof EnfantsStore>; //Solution pour faire une injection par constructeur
export const EnfantsStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withMethods((store, enfantService = inject(EnfantService)) => ({

    async loadEnfant() {
      patchState(store, ({loading: true}));
      const response: Enfant[] = await enfantService.enfantListAsPromise();
      patchState(store, ({enfantsList: response}));
      patchState(store, ({loading: false}));
      const state = getState(store);
      console.log("Dans le store:", state);
    },
    selectEnfant(enfant: Enfant) {
      patchState(store, ({current: enfant}));
      console.log("selectEnfant Dans le store:", getState(store));
    }
  })),

  withComputed(({enfantsList}) => ({
    enfants: computed(() => enfantsList()),
    enfantsCount: computed(() => enfantsList().length),
  })),
  withComputed((store) => ({
    enfantAEditer: computed(() => store.current()),
  })),
  /*withHooks({
    onInit(store) {
      console.log('withHooks on init: première déclaration inject  dans le projet');
      const state = getState(store);
      console.log(state);
    },
    onDestroy() {
      console.log('withHooks on destroy');
    },
  })*/
);
