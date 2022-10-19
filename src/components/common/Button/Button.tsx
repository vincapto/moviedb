import React, { CSSProperties } from 'react';
import style from './Button.module.scss';

interface ButtonProp {
  buttonText: string;
  onClick: () => void;
  styleProp?: CSSProperties;
}

function Button({ buttonText, onClick, styleProp }: ButtonProp) {
  return (
    <div onClick={onClick} style={styleProp} className={style.button}>
      <p>{buttonText}</p>
    </div>
  );
}

export default Button;
