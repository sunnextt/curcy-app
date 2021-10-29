import { Card } from './styled';
import propTypes from 'prop-types';

const whyCurrenxiCard = ({ icon, children, className }) => {
  return (
    <Card className={className}>
      {icon && <img src={icon} alt="" />}
      {children}
    </Card>
  );
};

whyCurrenxiCard.propTypes = {
  icon: propTypes.string,
};

export default whyCurrenxiCard;
