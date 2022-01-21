const { useNavigate } = require('react-router-dom');

const Navigate = () => {
  const navigate = useNavigate();

  navigate('/signin');
};

export default Navigate;
