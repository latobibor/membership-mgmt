import React, { createContext, useReducer, Dispatch } from 'react';
import { Actions } from './reducers';
import { AccessChange } from '../clients/save-access-list';

export interface MemberInEditMode extends Partial<AccessChange> {
  index: number;
}

export interface GlobalState {
  membersInEditMode: MemberInEditMode[];
  changesToBeSaved: boolean;
}

export interface Action {
  type: Actions;
  payload: any;
}

export const initialState: GlobalState = {
  membersInEditMode: [],
  changesToBeSaved: false,
};

export interface StoreContext {
  state: GlobalState;
  dispatch: Dispatch<Action>;
}

export const Store = createContext<StoreContext>({ state: initialState, dispatch: () => {} });

export const createStoreProvider = ({ initialState, reducers }: any) => ({ children }: any) => {
  const reducer = (state: GlobalState, action: Action) => reducers[action.type](state, action);
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
