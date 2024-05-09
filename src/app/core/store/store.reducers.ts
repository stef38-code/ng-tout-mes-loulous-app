import {Enfant} from "@model/enfant";
import {createReducer, on} from "@ngrx/store";
import * as EnfantsActions from "@core/store/store.actions";

export interface EnfantState {
  enfants: Enfant[];
  current: Enfant;
  loading: boolean;
}

export const initialState: EnfantState = {
  enfants: [],
  current: undefined,
  loading: false,
};
export const enfantReducer = createReducer(
  initialState,

  on(EnfantsActions.loadEnfants, state => ({...state, loading: true})),

  on(EnfantsActions.loadEnfantsSuccess, (state, {enfants}) => ({...state, enfants, loading: false})),

  on(EnfantsActions.loadEnfantsFailure, (state, {error}) => ({...state, error, loading: false})),
  on(EnfantsActions.selectEnfant, (state, {enfant}) => ({...state, current: enfant})),
  /*

    on(TodoActions.addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),

    on(TodoActions.updateTodo, (state, { todo }) => ({ ...state, todos: state.todos.map(t => t.id === todo.id ? todo : t) })),

    on(TodoActions.deleteTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(t => t.id !== id) })),
  */
);
