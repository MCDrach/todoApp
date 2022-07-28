import { createReducer, on } from "@ngrx/store";
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar el Mundo')
];

export const counterReducer = createReducer(
  initialState,
  on(crear, (state,{texto}) => [...state,new Todo(texto)]),
);