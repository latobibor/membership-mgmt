import { GlobalState, Action, MemberInEditMode } from './store';
import { AccessLevel, Role } from '../clients/save-access-list';

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
  [Actions.ThereIsChangeToBeSaved]: (
    state: GlobalState,
    { payload: { index, person_id, access_level, role } }: Action,
  ): GlobalState => ({
    ...state,
    changesToBeSaved: Boolean(person_id && access_level && role),
    membersInEditMode: updateMemberAndReturnAllItems(state.membersInEditMode, index, person_id, access_level, role),
  }),
  [Actions.ChangesAreSaved]: (state: GlobalState): GlobalState => ({
    ...state,
    changesToBeSaved: false,
  }),
};

function updateMemberAndReturnAllItems(
  membersInEditMode: MemberInEditMode[],
  index: number,
  person_id: string,
  access_level: AccessLevel,
  role: Role,
) {
  const copyOfArray = [...membersInEditMode];

  const indexToBeUpdated = copyOfArray.findIndex(member => member.index === index);

  copyOfArray[indexToBeUpdated] = {
    index,
    person_id,
    access_level,
    role,
  };

  return copyOfArray;
}
