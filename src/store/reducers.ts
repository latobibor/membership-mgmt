import { GlobalState, Action } from './store';

export enum Actions {
  AddMemberToEditMode = 'ADD MEMBER TO EDIT MODE',
  RemoveMemberFromEditMode = 'REMOVE MEMBER FROM EDIT MODE',
}

export const reducers = {
  [Actions.AddMemberToEditMode]: (state: GlobalState, { payload }: Action) => ({
    ...state,
    membersInEditMode: [...state.membersInEditMode, { index: payload }],
  }),
  [Actions.RemoveMemberFromEditMode]: (state: GlobalState, { payload: indexToBeRemoved }: Action) => ({
    ...state,
    membersInEditMode: [...state.membersInEditMode.filter(({ index }) => index !== indexToBeRemoved)],
  }),
};
