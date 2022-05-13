import { useNavigate } from 'react-router-dom';
import s from './GoBackBtn.module.scss';

const GoBackBtn = ({ goBackPath }) => {
  const navigator = useNavigate();
  return (
    <button
      className={s.btn}
      onClick={() => {
        navigator(goBackPath);
      }}
    >
      Go back
    </button>
  );
};

export default GoBackBtn;
