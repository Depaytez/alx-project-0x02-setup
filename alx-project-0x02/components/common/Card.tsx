import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({title, content}) => {
 return(
  <div className="card_class"> 
   <h2>{title}</h2>
   <p>{content}</p>
  </div>
 )
}

export default Card;