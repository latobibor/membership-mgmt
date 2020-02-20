import React, { useContext } from 'react';
import Select from 'react-select';
import { Member } from '../../clients/mock-data';
import { StoreContext, Store } from '../../store/store';

interface SelectMemberProps {
  selectedPersonId?: string;
  onChange: (selectedOption: any) => void;
}

function transformMembersToSelectOptions(members: Member[]): { label: string; value: string }[] {
  return members.map(({ firstname, lastname, person_id }: Member) => ({
    label: `${firstname} ${lastname}`,
    value: person_id,
  }));
}

export function SelectMember({ onChange, selectedPersonId }: SelectMemberProps) {
  const { state: { allMembers } } = useContext<StoreContext>(Store);

  const options = transformMembersToSelectOptions(allMembers);

  return <Select options={options} onChange={onChange} />;
}
