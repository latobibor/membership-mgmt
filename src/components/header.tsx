import React from 'react';

function newButtonClick() {
  console.log('new button was clicked');
}

export function Header() {
  return (
    <div className="m-5 p-4 bg-white">
      <ul className="nav nav-pills justify-content-between">
        <li className="nav-item">
          <a
            className="nav-link h5 mb-0"
            href="https://github.com/latobibor/membership-mgmt"
            target="_blank"
            rel="noopener noreferrer"
          >
            András Dániel Tóth
          </a>
        </li>
        <li className="nav-item">
          <button type="button" className="px-4 btn btn-light border-secondary" onClick={newButtonClick}>
            New Member
          </button>
          {/* <a className="nav-link active" href="#">New Member</a> */}
        </li>
      </ul>
    </div>
  );
}
