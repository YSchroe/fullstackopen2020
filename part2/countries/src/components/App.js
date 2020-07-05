import React, { useState, useEffect } from 'react';
import SearchField from './SearchField';
import axios from 'axios';
import CountryInfo from './CountryInfo';

function App() {
  const [searchStr, setSearchStr] = useState('');
  const [countryData, setCountryData] = useState([{ name: '', languages: [] }]);

  const onSearchStrChange = (e) => {
    setSearchStr(e.target.value);
  };

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((resp) => {
      setCountryData(resp.data);
    });
  }, []);

  return (
    <div>
      <SearchField value={searchStr} setValue={onSearchStrChange}></SearchField>
      <CountryInfo data={countryData} filter={searchStr}></CountryInfo>
    </div>
  );
}

export default App;
