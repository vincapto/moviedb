import React, { ChangeEvent, ChangeEventHandler, Component, Ref } from 'react';
import style from './DateInput.module.scss';

interface DateInputProp {
  handler: ChangeEventHandler<HTMLInputElement>;
  text: string;
  inputRef?: Ref<HTMLInputElement>;
  error?: boolean;
  name?: string;
}

interface DateInputState {
  handler: ChangeEventHandler<HTMLInputElement>;
  value: string | null;
  name?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export default class DateInput extends Component<DateInputProp> {
  render() {
    return (
      <div className={style.inputWrapper}>
        <label>{this.props.text}</label>
        <input
          className={style.input}
          onChange={this.props.handler}
          placeholder={this.props.text}
          type="date"
          id=""
          ref={this.props.inputRef}
        />
        {this.props.error ? <span className={style.error}>Field is incorrect</span> : <></>}
      </div>
    );
  }
}
