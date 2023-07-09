import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../util';

export default function DestinationDetailPage() {
  const { continentId,countryId,destinationId, } = useParams();

  const continent = data.continents.find((i)=>i.id.toString()===continentId)
  const country  = continent.countries.find((i)=>i.id.toString()===countryId);
  console.log(country);
  const destination = country?.destinations.find((i)=>i.id.toString()===destinationId)
    console.log(destination);
  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <h1>{destination?.name}</h1>
      <img src={destination?.image} alt={destination?.name} />
      <p>{destination.description}</p>
      <p>Ratings: {destination.ratings}</p>
      <p>Reviews: {destination.reviews}</p>
      <p>Location: {destination.location}</p>
      <p>Opening Hours: {destination.openingHours}</p>
      <p>Ticket Price: {destination.ticketPrice}</p>
      <a href={destination.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
}
