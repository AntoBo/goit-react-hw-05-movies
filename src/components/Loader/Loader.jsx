import { Bars } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  console.log('Loader invoked');
  return (
    <div className={s.loader}>
      <Bars height="40" width="40" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
