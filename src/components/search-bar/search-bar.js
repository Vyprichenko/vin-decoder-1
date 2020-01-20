import React from 'react';
import cn from 'classnames';
import validate from '../../utils/validate';
import Input from '../input';
import Button from '../button';
import styles from './search-bar.module.scss';

class SearchBar extends React.Component {

  state = {
    input: {
      value: '',
      errorMessage: 'Введите число из 17 символов',
      valid: true,
      validation: {
        required: true,
        minLength: 17
      }
    },
  }

  onChange = (e) => {
    const input = { ...this.state.input }
    input.value = e.target.value;
    input.valid = true;
    
    this.setState({ input })
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if ( validate(this.state.input.value, this.state.input.validation) ) {
      const input = { ...this.state.input }
      input.valid = true;
      // input.value = '';

      this.setState({ input })
      this.props.onSubmit(e, this.state.input.value)
    }
    else {
      const input = { ...this.state.input }
      input.valid = false

      this.setState({ input })
    }
  }

  render() {
    const { isDisabled, classes = [] } = this.props;

    return (
      <form className={cn(...classes, styles.form)} onSubmit={this.onSubmit}>
        <Input  value={this.state.input.value}
                valid={this.state.input.valid}
                shouldValidate={!!this.state.input.validation}
                errorMessage={this.state.input.errorMessage}
                onChange={this.onChange} 
                classes={{root: styles.rootInput, input: styles.input}}
                placeholder="vin number" />

        <Button disabled={isDisabled}>
          {!isDisabled ? 'Decode' : 'Decoding...'}
        </Button>
      </form>
    )
  }
}

export default SearchBar