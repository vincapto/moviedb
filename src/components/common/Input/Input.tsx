import React, { ChangeEvent, ChangeEventHandler, Component, Ref } from 'react';
import style from './Input.module.scss';

interface InputProp {
  handler: ChangeEventHandler<HTMLInputElement>;
  text: string;
  name?: string;
  inputRef?: Ref<HTMLInputElement>;
  error?: boolean;
}

export default class Input extends Component<InputProp> {
  componentWillUnmount = () => {};

  componentDidMount = () => {};

  render() {
    return (
      <div className={style.inputWrapper}>
        <label>{this.props.text}</label>
        <input
          className={style.input}
          onChange={this.props.handler}
          placeholder={this.props.text}
          type="input"
          id=""
          name={this.props.name || 'default'}
          ref={this.props.inputRef}
        />
        {this.props.error ? <span className={style.error}>Field is incorrect</span> : <></>}
      </div>
    );
  }
}
