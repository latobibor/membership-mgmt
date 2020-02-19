import React from 'react';
import Select from 'react-select';
import { Member } from '../../clients/mock-data';

interface SelectMemberProps {
  onChange: (selectedOption: any) => void;
  availableMembers: Member[];
}

function transformMembersToSelectOptions(members: Member[]): { label: string; value: string }[] {
  return members.map(({ firstname, lastname, person_id }: Member) => ({
    label: `${firstname} ${lastname}`,
    value: person_id,
  }));
}

export function SelectMember({ onChange, availableMembers }: SelectMemberProps) {
  const options = transformMembersToSelectOptions(availableMembers);

  return <Select options={options} onChange={onChange} />;
}
