import { ButtonContext } from './styled';
import propTypes from 'prop-types';

const Button = props => {
  return <ButtonContext {...props}>{props.children}</ButtonContext>;
};

Button.defaultProps = {
  type: 'primary',
  color: 'primary',
  _backgroundColor: 'secondary',
};

Button.propTypes = {
  type: propTypes.oneOf(['primary', 'ghost']),
  color: propTypes.oneOf(['primary', 'secondary']),
  _backgroundColor: propTypes.oneOf(['primary', 'secondary']),
};

export default Button;
