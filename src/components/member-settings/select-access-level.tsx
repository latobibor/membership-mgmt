import React from 'react';
import Select from 'react-select';
import { AccessLevel, Role } from '../../clients/save-access-list';

interface AccessLevelSelectOption {
  value: AccessLevel;
  label: string;
}

const adminAccessLevelOption =  { value: AccessLevel.Admin, label: 'Admin' };

const options: AccessLevelSelectOption[] = [
  adminAccessLevelOption,
  { value: AccessLevel.Write, label: 'Write' },
  { value: AccessLevel.Read, label: 'Read' },
];

function onChange(selectedOption: any) {
  console.log(selectedOption);
}

interface SelectAccessLevelProps {
  roleOfCurrentUser: Role;
}

function filterAccessLevelsBy(role: Role) {
  switch (role) {
    case Role.Manager:
      return options.filter(option => option.value === AccessLevel.Admin);
    case Role.Employee:
      return options.filter(option => option.value === AccessLevel.Write || option.value === AccessLevel.Admin);
    case Role.Customer:
      return options.filter(option => option.value === AccessLevel.Write || option.value === AccessLevel.Read);
  }
}

export function SelectAccessLevel({ roleOfCurrentUser }: SelectAccessLevelProps) {
  const filteredOptions = filterAccessLevelsBy(roleOfCurrentUser);

  return roleOfCurrentUser === Role.Manager ? 
    <Select options={filteredOptions} onChange={onChange} value={adminAccessLevelOption} /> :
    <Select options={filteredOptions} onChange={onChange} />
    ;
}
