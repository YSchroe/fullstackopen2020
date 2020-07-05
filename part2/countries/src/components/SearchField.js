import React from 'react';

const SearchField = ({ value, setValue }) => {
  return (
    <>
      <input onChange={setValue} value={value}></input>
    </>
  );
};
export default SearchField;
