import React from 'react';
import { EditorRow } from './editor-row';

export function AccessManagerNewMemberButton() {
  return (
    <EditorRow>
      <div className="col p-4">
        <button type="button" className="btn btn-link">
          + Change one more person
        </button>
      </div>
    </EditorRow>
  );
}
