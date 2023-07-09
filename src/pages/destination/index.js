import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../util';

export default function DestinationsPage() {
  const { continentId,countryId } = useParams();
  const continent = data.continents.find((i)=>i.id.toString()===continentId)
  const country  = continent.countries.find((i)=>i.id.toString()===countryId);
  return (
    <div>
      <h1>Destinations in {country.name}</h1>
      {country.destinations.map((destination) => (
        <div key={destination.id}>
          <Link to={`/destination/${continentId}/${countryId}/${destination.id}`}>
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
