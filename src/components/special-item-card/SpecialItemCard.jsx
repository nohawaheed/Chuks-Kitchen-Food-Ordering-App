import React from 'react';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router';

function SpecialItemCard({ title, description, image, price, itemId }) {
  const navigate = useNavigate();

  return (
    <div
      className="card card--special cursor-pointer"
      onClick={() => {
        navigate(`item/ChefSpecials/${itemId}`);
      }}
    >
      <img src={image} alt={title} className="w-full" />
      <div className="card__text-group">
        <h3 className="special-card__title">{title}</h3>
        <p className="special-card__desc">{description}</p>
      </div>
      <div className="special-card__action">
        <span className="text-primary-orange">
          ₦{price.toLocaleString('en-US')}
        </span>
        <Button title="Add to cart" size="sm" />
      </div>
    </div>
  );
}

export default SpecialItemCard;
