import React from 'react';

interface AccessEditorProps {
  id: string;
  firstname: string;
  lastname: string;
}

export function AccessEditor({ firstname, lastname }: AccessEditorProps) {
  return (
    <div className="row bg-white border-top">
      <div className="col-sm p-4">{`${firstname} ${lastname}`}</div>
      <div className="col-sm p-4">Role</div>
      <div className="col-sm p-4">Access level</div>
      <div className="col-sm-4 p-4 text-right">
        <button type="button" className="close text-info" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
