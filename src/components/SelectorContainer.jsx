import { useState } from 'react';

function Component() {
  const [selected, setSelected] = useState('All');

  const handleClick = (option) => {
    setSelected(option);
  };

  return <ul className="selector-container">
    <li 
      className={`btn-selector ${selected === 'All' ? 'btn-selected' : ''}`}
      onClick={() => handleClick('All')}
    >
      All
    </li>
    <li 
      className={`btn-selector ${selected === 'Active' ? 'btn-selected' : ''}`}
      onClick={() => handleClick('Active')}
    >
      Active
    </li>
    <li 
      className={`btn-selector ${selected === 'Inactive' ? 'btn-selected' : ''}`}
      onClick={() => handleClick('Inactive')}
    >
      Inactive
    </li>
  </ul>
}

export default Component;
