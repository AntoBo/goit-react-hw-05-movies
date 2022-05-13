import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './SearchForm.module.scss';

const SearchForm = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const resetForm = () => {
    setInput('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`?query=${input}`);
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        value={input}
        type="text"
        onChange={handleChange}
      />
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
