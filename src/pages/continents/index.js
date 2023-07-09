import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../util';

export default function ContinentsPage() {
  return (
    <div>
      <h1>Continents</h1>
      {data.continents.map((continent) => (
        <div key={continent.id}>
          <Link to={`/countries/${continent.id}`}>
            <img src={continent.image} alt={continent.name} />
            <h2>{continent.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
