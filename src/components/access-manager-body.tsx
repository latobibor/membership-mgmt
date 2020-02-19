import React from 'react';
import { AccessEditor } from './access-editor';
import { AccessManagerNewMemberButton } from './access-manager-new-member-button';
import { members } from '../clients/mock-data';

export function AccessManagerBody() {
  return (
    <>
      {members.map(({ person_id, firstname, lastname }) => (
        <AccessEditor key={person_id} id={person_id} firstname={firstname} lastname={lastname} />
      ))}
      <AccessManagerNewMemberButton />
    </>
  );
}
