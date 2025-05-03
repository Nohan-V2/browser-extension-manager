import { useState } from 'react';

function SelectorContainer({ onFilterChange }) {
  const [selected, setSelected] = useState('All');

  const handleClick = (option) => {
    setSelected(option);
    onFilterChange(option);
  };

  return (
    <ul className="selector-container">
      <li
        className={`btn-selector ${selected === 'All' ? 'btn-selected' : ''}`}
        onClick={() => handleClick('All')}
        tabIndex="0"
      >
        All
      </li>
      <li
        className={`btn-selector ${selected === 'Active' ? 'btn-selected' : ''}`}
        onClick={() => handleClick('Active')}
        tabIndex="0"
      >
        Active
      </li>
      <li
        className={`btn-selector ${selected === 'Inactive' ? 'btn-selected' : ''}`}
        onClick={() => handleClick('Inactive')}
        tabIndex="0"
      >
        Inactive
      </li>
    </ul>
  );
}

export default SelectorContainer;
