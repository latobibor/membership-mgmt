import React, { useState } from 'react';
import { EditorRow } from '../access-editor/editor-row';
import { SelectAccessLevel } from './select-access-level';
import { Role } from '../../clients/save-access-list';
import { SelectRole } from './select-role';

interface MemberSettingsProps {
  id: string;
  firstname: string;
  lastname: string;
}

export function MemberSettings({ firstname, lastname }: MemberSettingsProps) {
  const [selectedRole, selectRole] = useState<Role>(Role.Employee);

  // in simpler cases we don't need to use redux
  function onRoleChange({ value }: any) {
    selectRole(value as Role);
  }

  return (
    <EditorRow>
      <div className="col-sm p-4">{`${firstname} ${lastname}`}</div>
      <div className="col-sm p-4">
        <SelectRole onChange={onRoleChange} />
      </div>
      <div className="col-sm p-4">
        <SelectAccessLevel roleOfCurrentUser={selectedRole} />
      </div>
      <div className="col-sm-4 p-4 text-right">
        <button type="button" className="close text-info" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </EditorRow>
  );
}
