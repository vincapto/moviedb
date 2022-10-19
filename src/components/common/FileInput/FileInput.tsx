import React, { ChangeEvent, ChangeEventHandler, Component, Ref } from 'react';
import style from './FileInput.module.scss';

interface FileInputProp {
  handler: ChangeEventHandler<HTMLInputElement>;
  text: string;
  inputRef?: Ref<HTMLInputElement>;
  error?: boolean;
}

export default class FileInput extends Component<FileInputProp> {
  render() {
    return (
      <div className={style.inputWrapper}>
        <label>{this.props.text}</label>
        <input
          className={style.input}
          onChange={this.props.handler}
          placeholder={this.props.text}
          type="file"
          id=""
          ref={this.props.inputRef}
        />
        {this.props.error ? <span className={style.error}>Field is incorrect</span> : <></>}
      </div>
    );
  }
}
