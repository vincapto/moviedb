import style from './Form.module.scss';
import React, { Component, Ref } from 'react';
import { type } from '@testing-library/user-event/dist/types/setup/directApi';
import CheckBox from '../../components/common/CheckBox/CheckBox';
import RefObject from 'react';
export interface IForm {
  isAgree: boolean;
  name: string;
  lastName: string;
  address: string;
  date: string | null;
  file: HTMLInputElement | null;
  sex: string;
  zipCode: string | null;
  option: string;
}
export interface IBuff {
  name: { ref: React.RefObject<HTMLInputElement>; type: string };
  lastName: { ref: React.RefObject<HTMLInputElement>; type: string };
  address: { ref: React.RefObject<HTMLInputElement>; type: string };
  zipСode: { ref: React.RefObject<HTMLInputElement>; type: string };
  sex: { ref: React.RefObject<HTMLInputElement>[]; type: string };
  agree: { ref: React.RefObject<HTMLInputElement>; type: string };
  file: { ref: React.RefObject<HTMLInputElement>; type: string };
  date: { ref: React.RefObject<HTMLInputElement>; type: string };
  select: { ref: React.RefObject<HTMLSelectElement>; type: string };
}

export interface IFields {
  name: InputField;
  lastName: InputField;
  address: InputField;
  zipСode: InputField;
  sex: InputField;
  agree: InputField;
  file: InputField;
  date: InputField;
  select: SelectField;
}

export type InputField = {
  ref: Ref<HTMLInputElement>;
  error: boolean;
};

export type SelectField = {
  ref: Ref<HTMLSelectElement>;
  error: boolean;
};

export function checkForm(props: IBuff) {
  console.log(props.agree.ref.current?.checked);
  return Object.entries(props).reduce<Array<string>>((acc, [key, item]) => {
    const value = checkType(item.type, item.ref);
    console.log(value);
    !value ? acc.push(key) : null;
    return acc;
  }, []);
}

type inputType = 'string' | 'array' | 'bool' | 'file';

function checkString(field: string) {
  console.log('STRING FIELD', field, field && field.length !== 0);
  return field && field.length !== 0;
}

function checkBoolean(required: boolean, value: boolean) {
  return required ? (value ? true : false) : true;
}

function checkArray(array: boolean[]) {
  return array.some((a) => a);
}
function checkFile(array: FileList) {
  console.log('FILES ', array);
  return array.length !== 0;
}

function checkType(
  inputType: inputType,
  item:
    | React.RefObject<HTMLInputElement>
    | React.RefObject<HTMLSelectElement>
    | React.RefObject<HTMLInputElement>[]
) {
  if (!item) return false;
  switch (inputType) {
    case 'string':
      const input = item as React.RefObject<HTMLInputElement>;
      return input.current ? checkString(input.current.value) : false;
    case 'bool':
      const checkbox = item as React.RefObject<HTMLInputElement>;
      return checkbox.current ? checkBoolean(true, checkbox.current?.checked) : false;
    case 'file':
      const some = item as React.RefObject<HTMLInputElement>;
      const files = some.current?.files;
      return files ? checkFile(files) : false;
    case 'array':
      const list = item as React.RefObject<HTMLInputElement>[];
      return checkArray(
        list.map((a) => {
          return a.current ? a.current.checked : false;
        })
      );
    default:
      () => {};
  }
}
