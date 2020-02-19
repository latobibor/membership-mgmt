import React from 'react';
import { saveAccessChanges, AccessChange } from '../../clients/save-access-list';

interface CreationButtonsProps {
  changes: AccessChange[];
}

function newButtonClick() {
  console.log('new button');
}

export class CreationButtons extends React.PureComponent<CreationButtonsProps> {
  constructor(props: CreationButtonsProps) {
    super(props);

    this.saveChanges = this.saveChanges.bind(this);
  }

  async saveChanges() {
    const { changes } = this.props;

    try {
      await saveAccessChanges(changes);
      // send success event, empty
    } catch (error) {
      console.error(error);
      // send redux error
    }
  }

  render() {
    const areChangesSaved = this.props.changes.length === 0;

    return (
      <>
        <button type="button" className="px-4 btn btn-light border-secondary" onClick={newButtonClick}>
          New Member
        </button>

        {!areChangesSaved && (
          <button type="button" className="px-4 ml-4 btn btn-info" onClick={this.saveChanges}>
            Save Changes
          </button>
        )}
      </>
    );
  }
}
