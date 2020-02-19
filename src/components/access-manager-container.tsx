import React from 'react';
import { AccessManagerHeader } from './access-manager-header';
import { AccessManagerBody } from './access-manager-body';

export function AccessManagerContainer() {
  return (
    <div className="m-5">
      <table className="table table-responsive-md">
          <AccessManagerHeader />
          <AccessManagerBody />
      </table>
    </div>
  );
}
