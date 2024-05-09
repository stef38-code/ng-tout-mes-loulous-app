import {Action, ActionReducer} from "@ngrx/store";
import {enfantReducer, EnfantState} from "@core/store/store.reducers";
import {EnfantsEffects} from "@core/store/store.effect";

export interface AppState {
  enfants: EnfantState
}

export interface AppStore {
  enfants: ActionReducer<EnfantState, Action>;
}

export const appStore: AppStore = {
  enfants: enfantReducer
}

export const appEffects = [EnfantsEffects];
