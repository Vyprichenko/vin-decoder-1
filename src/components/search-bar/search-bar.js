import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Input from '../input';
import Button from '../button';
import styles from './search-bar.module.scss';

const isInvalid = (value) => /[A-Z0-9]{17}/g.test(value) && !(/[QOI]/g.test(value)) && value.trim() !== ''

class SearchBar extends Component {

  state = {
    input: {
      // На мой взгляд в state больше полей, чем нужно.
      // Поле value нам необходимо, чтобы хранить ввод пользователя,
      // это правильно.
      //
      // Но поля valid и errorMessage _вычисляются_ на основании value,
      // и это важное отличие, т. к. позволяет заменить их на метод,
      // например validate(), который будет брать value из state
      // и возвращать соответствующую ошибку.
      // Это надёжнее, потому что гарантирует соответствие ошибки актуальному value
      // упрощаёт state и позволяет избавиться от вложенности state{input{...}}.
      //
      // Оптимизировать validate можно (если нужно) через memoize-one,
      // см. https://www.npmjs.com/package/memoize-one
      value: '',
      errorMessage: 'Please enter the correct 17 characters',
      valid: true,
    },
  }

  onChange = (e) => {
    const input = { ...this.state.input }

    input.value = e.target.value;
    input.valid = true;
    
    this.setState({ input })
  }
d
  onSubmit = (e) => {
    e.preventDefault();

    const input = { ...this.state.input }
    
    // Видимо, функция должна была называться isValid, а то странно читается:
    // "если value не валидно, записать input.valid = true" :)
    if ( isInvalid(input.value) ) {
      input.valid = true;

      this.setState({ input })
      // В данном случае код работает правильно, потому что input.value не меняется,
      // но всё равно нужно учитывать что в этом месте input !== this.state.input
      // Было бы лучше вместо this.state.input обратиться к input:
      // this.props.onSubmit(e, input.value), иначе это потенциальная ошибка,
      // см. https://ru.reactjs.org/docs/react-component.html#setstate
      this.props.onSubmit(e, this.state.input.value)
    }
    else {
      input.valid = false;

      this.setState({ input })
    }
  }

  render() {
    const { isDisabled, classes } = this.props;
    const { input  } = this.state;

    return (
      <form className={cn(...classes, styles.form)} onSubmit={this.onSubmit}>
        <Input  value={input.value}
                valid={input.valid}
                errorMessage={input.errorMessage}
                onChange={this.onChange} 
                classes={{root: styles.rootInput, input: styles.input}}
                placeholder="vin number"
                maxlength={'17'} /> {/* ничем не лучше, чем просто maxLength="17" :) */}

        <Button disabled={isDisabled}>
          {!isDisabled ? 'Decode' : 'Decoding...'}
        </Button>
      </form>
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  classes: PropTypes.array,
  isDisabled: PropTypes.bool,
}

SearchBar.defaultProps = {
  // А если убрать из render разложение массива ...classes,
  // ведь либа classnames сама умеет разворачивать массивы,
  // то в принципе можно сэкономить на значении по умолчанию
  // и вместо пустого массива оставить classes: null
  classes: [],
  onSubmit: () => {},
}

export default SearchBar