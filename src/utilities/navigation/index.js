const { useNavigate } = require('react-router-dom');

const Navigate = (key) => {
  const navigate = useNavigate();

  navigate(key);
};

export default Navigate;
