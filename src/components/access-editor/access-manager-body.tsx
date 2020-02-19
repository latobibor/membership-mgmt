import React, { useEffect, useState } from 'react';
import { MemberSettings } from '../member-settings/member-settings';
import { AccessManagerNewMemberButton } from './access-manager-new-member-button';
import { getMembersList } from '../../clients/get-members-list';
import { Member } from '../../clients/mock-data';

export function AccessManagerBody() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    async function downloadMembersList() {
      try {
        const membersFromApi = await getMembersList();
        setMembers(membersFromApi);
      } catch (error) {
        // TODO: global error handling
        console.error(error);
      }
    }

    downloadMembersList();
  });

  return (
    <>
      {members.map(({ person_id, firstname, lastname }) => (
        <MemberSettings key={person_id} id={person_id} firstname={firstname} lastname={lastname} />
      ))}
      <AccessManagerNewMemberButton />
    </>
  );
}
