import React from 'react';
import { MemberSettings } from '../member-settings/member-settings';
import { Member } from '../../clients/mock-data';

interface AccessManagerBodyProps {
  members: Member[];
}

export function AccessManagerBody({ members }: AccessManagerBodyProps) {
  return (
    <>
      {members.map(({ person_id }) => (
        <MemberSettings key={person_id} />
      ))}
    </>
  );
}
