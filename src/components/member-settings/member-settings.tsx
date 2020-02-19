import React, { useState } from 'react';
import { EditorRow } from '../access-manager-layout/editor-row';
import { SelectAccessLevel } from './select-access-level';
import { Role } from '../../clients/save-access-list';
import { SelectRole } from './select-role';
import { SelectMember } from './select-member';
import { members } from '../../clients/mock-data';
import { CloseButton } from './close-button';

interface MemberSettingsProps {
  index: number;
}

export function MemberSettings({ index }: MemberSettingsProps) {
  const [selectedRole, selectRole] = useState<Role>(Role.Employee);

  // in simpler cases we don't need to use redux
  function onRoleChange({ value }: any) {
    selectRole(value as Role);
  }

  return (
    <EditorRow>
      <div className="col-sm p-4">
        <SelectMember onChange={console.log} availableMembers={members} />
      </div>
      <div className="col-sm p-4">
        <SelectRole onChange={onRoleChange} />
      </div>
      <div className="col-sm p-4">
        <SelectAccessLevel roleOfCurrentUser={selectedRole} />
      </div>
      <div className="col-sm-4 p-4 text-right">
        <CloseButton index={index} />
      </div>
    </EditorRow>
  );
}
