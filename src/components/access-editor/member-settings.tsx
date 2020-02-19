import React from 'react';
import { EditorRow } from './editor-row';

interface MemberSettingsProps {
  id: string;
  firstname: string;
  lastname: string;
}

export function MemberSettings({ firstname, lastname }: MemberSettingsProps) {
  return (
    <EditorRow>
      <div className="col-sm p-4">{`${firstname} ${lastname}`}</div>
      <div className="col-sm p-4">Role</div>
      <div className="col-sm p-4">Access level</div>
      <div className="col-sm-4 p-4 text-right">
        <button type="button" className="close text-info" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </EditorRow>
  );
}
