import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../util';

export default function DestinationsPage() {
  const { countryId } = useParams();
  const country = data.continents
    .flatMap((continent) => continent.countries)
    .find((country) => country.id === parseInt(countryId));

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>Destinations in {country.name}</h1>
      {country.destinations.map((destination) => (
        <div key={destination.id}>
          <Link to={`/destination/${destination.id}`} target="_blank">
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
