import React, { createContext, useReducer, Dispatch } from 'react';
import { Actions } from './reducers';

export interface MemberInEditMode {
  index: number;
}

export interface GlobalState {
  membersInEditMode: MemberInEditMode[];
}

export interface Action {
  type: Actions;
  payload: any;
}

export const initialState: GlobalState = {
  membersInEditMode: [],
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
