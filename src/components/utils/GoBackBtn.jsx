import { useNavigate } from 'react-router-dom';

const GoBackBtn = ({ goBackPath }) => {
  const navigator = useNavigate();
  return (
    <button
      onClick={() => {
        navigator(goBackPath);
      }}
    >
      Go back
    </button>
  );
};

export default GoBackBtn;
