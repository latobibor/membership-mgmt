import { GlobalState, Action } from './store';

export enum Actions {
  AddMemberToEditMode = 'ADD MEMBER TO EDIT MODE',
  RemoveMemberFromEditMode = 'REMOVE MEMBER FROM EDIT MODE',
  ThereIsChangeToBeSaved = 'THERE IS CHANGE TO BE SAVED',
  ChangesAreSaved = 'CHANGES ARE SAVED',
}

export const reducers = {
  [Actions.AddMemberToEditMode]: (state: GlobalState, { payload }: Action): GlobalState => ({
    ...state,
    membersInEditMode: [...state.membersInEditMode, { index: payload }],
  }),
  [Actions.RemoveMemberFromEditMode]: (state: GlobalState, { payload: indexToBeRemoved }: Action): GlobalState => ({
    ...state,
    membersInEditMode: [...state.membersInEditMode.filter(({ index }) => index !== indexToBeRemoved)],
  }),
  [Actions.ThereIsChangeToBeSaved]: (state: GlobalState): GlobalState => ({
    ...state,
    changesToBeSaved: true,
  }),
  [Actions.ChangesAreSaved]: (state: GlobalState): GlobalState => ({
    ...state,
    changesToBeSaved: false,
  }),  
};
