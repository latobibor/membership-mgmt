import React from 'react';
import { AccessManagerHeader as Header } from './access-manager-header';
import { AccessManagerBody as Body } from './access-manager-body';
import { AccessManagerNewMemberButton as Footer } from './access-manager-new-member-button';

export function AccessManagerContainer() {
  return (
    <div className="m-sm-2 m-md-5">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
