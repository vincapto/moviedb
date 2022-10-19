import React, { ChangeEvent, ChangeEventHandler, Component, Ref } from 'react';
import style from './RadioButton.module.scss';

interface RadioButtonProp {
  handler: ChangeEventHandler<HTMLInputElement>;
  text: string;
  name?: string;
  inputRef?: Ref<HTMLInputElement>;
  error?: boolean;
}

export default class RadioButton extends Component<RadioButtonProp> {
  render() {
    return (
      <div className={style.inputWrapperRadio}>
        <label>{this.props.text}</label>
        <input
          className={style.input}
          onChange={this.props.handler}
          placeholder={this.props.text}
          name={this.props.name}
          type="radio"
          value={this.props.text}
          id=""
          ref={this.props.inputRef}
        />
        {this.props.error ? <span className={style.error}>Field is incorrect</span> : <></>}
      </div>
    );
  }
}
