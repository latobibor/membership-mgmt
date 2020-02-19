import React from 'react';
import { MemberSettings } from '../member-settings/member-settings';
import { AccessManagerNewMemberButton } from './access-manager-new-member-button';
import { members } from '../../clients/mock-data';

export function AccessManagerBody() {
  return (
    <>
      {members.map(({ person_id, firstname, lastname }) => (
        <MemberSettings key={person_id} id={person_id} firstname={firstname} lastname={lastname} />
      ))}
      <AccessManagerNewMemberButton />
    </>
  );
}
