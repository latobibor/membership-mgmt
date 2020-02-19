import React from 'react';
import { AccessManagerHeader } from './access-manager-header';
import { AccessManagerBody } from './access-manager-body';

export function AccessManagerContainer() {
  return (
    <div className="m-sm-2 m-md-5">
      <AccessManagerHeader />
      <AccessManagerBody />
    </div>
  );
}
