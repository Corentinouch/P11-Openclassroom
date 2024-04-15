import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Rating from '../composant/Rating';
import Carousel from '../composant/Carousel';
import Dropdown from '../composant/Dropdown';
import './details.css'

  function Details({ data }) {
    const { id } = useParams();
  
    const item = data.find(item => item.id === id);
    if (!item) {
      return <Navigate to="/error" />;
    }
    return (
      <div className="detail">
        <div className="photo-carousel">
          <Carousel images={item.pictures} />
        </div>
        <div className='all-gpe'>
        <div className='group'>
          <div>
            <h2>{item ? item.title : 'Card not found'}</h2>
            <p>{item.location}</p>
          </div>
          <div className="tags-list">
            <ul>
              {item.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          
        </div>
        <div className='group' id='hostgpe'>
        <div className="host-info">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt={item.host.name} />
          </div>
          <div className="rating">
            <Rating rating={parseFloat(item.rating)} />
          </div>
        </div>
        </div>
        
        <div className="equipment-list">
          <div className="details-drop">
            <Dropdown
            title="Description"
            content={<p>{item.description}</p>}
            />
          </div>
          <div className="details-dropdown">
          <Dropdown
            title="Équipements"
            content={
              <ul>
                {item.equipments.map((equipmentItem, index) => (
                  <li key={index}>{equipmentItem}</li>
                ))}
              </ul>
            }
          />
          </div>
        </div>    
      </div>
    );
  }

export default Details;
