import { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
    setValue('');
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <i
          className="material-icons clear"
          onClick={() => {
            setValue('');
          }}
        >
          close
        </i>
        <button
          className="btn deep-purple darken-3"
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };
