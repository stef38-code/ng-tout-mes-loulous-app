import {AppState} from "@core/store/store";
import {createSelector} from "@ngrx/store";
import {EnfantState} from "@core/store/store.reducers";

const feature = (state: AppState) => state.enfants;

export const enfantsSelector = createSelector(
  feature,
  (state: EnfantState) => state.enfants
);
export const currentSelector = createSelector(
  feature,
  (state: EnfantState) => state.current
);

export const loadingEnfantSelector = createSelector(
  feature,
  (state: EnfantState) => state.loading
);
