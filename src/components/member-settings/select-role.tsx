import React from 'react';
import Select from 'react-select';
import { Role } from '../../clients/save-access-list';

interface RoleSelectOption {
  value: Role;
  label: string;
}

const options: RoleSelectOption[] = [
  { value: Role.Customer, label: 'Customer' },
  { value: Role.Employee, label: 'Employee' },
  { value: Role.Manager, label: 'Manager' },
];

function onChange(selectedOption: any) {
  console.log(selectedOption);
}

export function SelectRole() {
  return <Select options={options} onChange={onChange} />;
}
