import CardContext from './styled';
import propTypes from 'prop-types';

const Card = ({ icon, children, className, onClick }) => {
  return (
    <CardContext className={className} onClick={onClick}>
      {icon && <img src={icon} alt="" />}
      {children}
    </CardContext>
  );
};

Card.propTypes = {
  icon: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default Card;
