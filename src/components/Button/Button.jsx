import { Button as ButtonMui } from '@mui/material';
import PropTypes from 'prop-types';
import className from 'classnames';
import './Button.scss';

const Button = props => {
  return (
    <ButtonMui {...props} className={className('button', props.className)} />
  )
}

Button.propTypes = {
  className: PropTypes.string,
}

export default Button