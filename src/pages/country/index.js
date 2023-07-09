import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../util';

export default function CountriesPage() {
  const { continentId } = useParams();
  const continent = data.continents.find((c) => c.id === parseInt(continentId));

  if (!continent) {
    return <div>Continent not found</div>;
  }

  return (
    <div>
      <h1>Countries in {continent.name}</h1>
      {continent.countries.map((country) => (
        <div key={country.id}>
          <Link to={`/destinations/${continentId}/${country.id}`}>
            <img src={country.image} alt={country.name} />
            <h2>{country.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
