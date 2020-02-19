import React from 'react';
import { saveAccessChanges } from '../../clients/save-access-list';

interface CreationButtonsProps {
  areChangesSaved: boolean;
}

function newButtonClick() {
  console.log('new button');
}

function saveChanges() {
  console.log('save changes');
  // saveAccessChanges()
}

export function CreationButtons({ areChangesSaved }: CreationButtonsProps) {
  return (
    <>
      <button type="button" className="px-4 btn btn-light border-secondary" onClick={newButtonClick}>
        New Member
      </button>

      {!areChangesSaved && (
        <button type="button" className="px-4 ml-4 btn btn-info" onClick={saveChanges}>
          Save Changes
        </button>
      )}
    </>
  );
}
