import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
      <input value={input} type="text" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
