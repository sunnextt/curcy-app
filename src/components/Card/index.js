import CardContext from './styled';
import propTypes from 'prop-types';

const Card = ({ icon, children, className }) => {
  return (
    <CardContext className={className}>
      {icon && <img src={icon} alt="" />}
      {children}
    </CardContext>
  );
};

Card.propTypes = {
  icon: propTypes.string,
};

export default Card;
