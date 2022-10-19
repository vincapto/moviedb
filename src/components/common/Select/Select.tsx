import React, { ChangeEventHandler, Component, Ref } from 'react';
import style from './Select.module.scss';
interface SelectProp {
  handler: ChangeEventHandler<HTMLInputElement>;
  text: string;
  name?: string;
  optionList?: string[];
  inputRef?: Ref<HTMLSelectElement>;
  error?: boolean;
}

export default class Input extends Component<SelectProp> {
  renderOptions = () => {
    return this.props.optionList ? (
      this.props.optionList.map((optionText, key) => {
        return (
          <option key={key} value={optionText}>
            {optionText}
          </option>
        );
      })
    ) : (
      <></>
    );
  };

  render() {
    return (
      <div className={style.inputWrapper}>
        <label htmlFor="defaultSelectId">{this.props.text}</label>
        <select
          id="defaultSelectId"
          aria-label="State"
          name="DefaultName"
          title="default title"
          className={style.input}
          placeholder={this.props.text}
          ref={this.props.inputRef}
        >
          {this.renderOptions()}
        </select>
        {this.props.error ? <span className={style.error}>Field is incorrect</span> : <></>}
      </div>
    );
  }
}
