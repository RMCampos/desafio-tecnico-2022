import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [searchEntry, setSearchEntry] = useState<string>('');

  const updateSearchInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchEntry(e.target.value);
  };

  const createLink = (target: string): string => `/${target}/${searchEntry}`;

  return (
    <div className="search-form">
      <input
        autoFocus={true}
        type="text"
        name="search"
        placeholder="Type here"
        onChange={updateSearchInput}
        value={searchEntry}
      />

      <Link
        to={ createLink('images') }
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
      >
        Images
      </Link>
      <Link
        to={ createLink('videos') }
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
      >
        Videos
      </Link>
      
    </div>
  );
};

export default Form;
