import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({title, content}) => {
 return(
  <div className="card_class"> 
   {title}
   {content}
  </div>
 )
}

export default Card;