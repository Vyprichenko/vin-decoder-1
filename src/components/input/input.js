import React from 'react';
import styles from './input.module.css';
import cn from 'classnames';

const isInvalid = ({ valid, shouldValidate }) => !valid && shouldValidate;

const Input = props => {
  const classes = [];

  if (isInvalid(props)) classes.push(styles.invalid)

  return (
    <div className={cn(props.classes.root)}>
      <input
        className={cn(classes, styles.input, props.classes.input)}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxlength}
      />

      { isInvalid(props) && <span className={styles.errorMessage}>{props.errorMessage}</span> }
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  errorMessage: 'Введите верное значение',
  maxlength: 17,
}

export default Input


