import React, { useState, useEffect } from 'react';
import { AccessManagerHeader as Header } from './access-manager-header';
import { AccessManagerBody as Body } from './access-manager-body';
import { AccessManagerNewMemberButton as Footer } from './access-manager-new-member-button';

import { getMembersList } from '../../clients/get-members-list';
import { Member } from '../../clients/mock-data';

export function AccessManagerContainer() {
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
    <div className="m-sm-2 m-md-5">
      <Header />
      <Body members={members} />
      <Footer />
    </div>
  );
}
