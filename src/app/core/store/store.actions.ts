import {createAction, props} from "@ngrx/store";
import {Enfant} from "@model/enfant";

export const loadEnfants = createAction('[Enfant] Load Enfants');
export const loadEnfantsSuccess = createAction('[Enfant] Load Enfants Success', props<{ enfants: Enfant[] }>());
export const loadEnfantsFailure = createAction('[Enfant] Load Enfants Failure', props<{ error: string }>());

export const selectEnfantByEnfant = createAction('[Enfant] Select Enfant', props<{ enfant: Enfant }>());
export const selectEnfantById = createAction('[Enfant] Select Enfant', props<{ id: number }>());





/*
export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('[Todo] Update Todo', props<{ todo: Todo }>());
export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: string }>());
*/
