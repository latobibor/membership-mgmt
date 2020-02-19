import React, { useContext } from 'react';
import { MemberSettings } from '../member-settings/member-settings';
import { Store, StoreContext } from '../../store/store';

export function AccessManagerBody() {
  const { state } = useContext<StoreContext>(Store);

  const { membersInEditMode } = state;

  return (
    <>
      {membersInEditMode.map(({ index }) => (
        <MemberSettings key={`${index}`} index={index} />
      ))}
    </>
  );
}
