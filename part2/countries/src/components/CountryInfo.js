import React from 'react';

const CountryInfo = ({ data, filter }) => {
  const filteredData = data.filter((val) => val.name.includes(filter));
  if (filteredData.length > 10) {
    return <>Too much datas.</>;
  } else if (filteredData.length > 1) {
    return (
      <>
        {filteredData.map((entry) => (
          <p key={entry.name}>{entry.name}</p>
        ))}
      </>
    );
  } else if (filteredData === 1) {
    const country = filteredData[0];
    return (
      <>
        <h1>{country.name}</h1>
        <table>
          <tbody>
            <tr>
              <td>Capital:</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Population:</td>
              <td>{country.population}</td>
            </tr>
          </tbody>
        </table>
        <h2>Languages</h2>
        {country.languages.map((val) => (
          <p key={val.name}>{val.name}</p>
        ))}
        <img height="100px" src={country.flag}></img>
      </>
    );
  }
  return <>No Dataz found.</>;
};

export default CountryInfo;
