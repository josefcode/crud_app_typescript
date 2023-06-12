import React from 'react';
import './styleProductCard.css'
// import styled from 'styled-components';

export type CardProps = {
  id?: number | string;
  title: string;
  image: string;
  brand: string;
  price: number;
  codeBar?: string;
  description?: string
}



function ProductCard({ title, image, brand, price, codeBar, description} : CardProps){
  return (
    <div className = 'product-card'>
      <h2 className='product-title'>{title}</h2>
      <p>{codeBar}</p>
      <img className = 'product-image' src={image} alt={title} />
      <p className='product-brand'>{brand}</p>
      <div>
        <p>{description}</p>
      </div>
      <p>R$ {price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
