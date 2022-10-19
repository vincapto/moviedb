import React, { ChangeEvent, ChangeEventHandler, Component, Ref } from 'react';
import style from './CheckBox.module.scss';

interface CheckBoxProp {
  handler: ChangeEventHandler<HTMLInputElement>;
  text: string;
  name?: string;
  inputRef?: Ref<HTMLInputElement>;
  error?: boolean;
}

export default class CheckBox extends Component<CheckBoxProp> {
  render() {
    return (
      <div className={style.inputWrapperCheckBox}>
        <label>{this.props.text}</label>
        <input
          className={style.input}
          onChange={this.props.handler}
          placeholder={this.props.text}
          type="checkbox"
          id=""
          ref={this.props.inputRef}
        />
        {this.props.error ? <span className={style.error}>Must be checked</span> : <></>}
      </div>
    );
  }
}
