import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './input.module.scss';

const isInvalid = ({ valid, shouldValidate }) => !valid && shouldValidate;

const Input = props => {
  const classes = [];

  if (isInvalid(props)) classes.push(styles.invalid)

  return (
    <div className={cn(props.classes.root)}>
      <input className={cn(classes, styles.input, props.classes.input)}
             type={props.type}
             value={props.value}
             onChange={props.onChange}
             maxLength={props.maxlength}
             placeholder={props.placeholder} />

      { isInvalid(props) && <span className={styles.errorMessage}>{props.errorMessage}</span> }
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  maxlength: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  errorMessage: 'Please enter the correct value',
  maxlength: '',
  placeholder: '',
}

export default Input;