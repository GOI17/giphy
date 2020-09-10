import React from 'react';
import { Link } from 'wouter';

export default function Gif({ id, title, image }) {
  return (
    <div className='col-xl-4 col-lg-6 col-12 p-xl-2 pb-xl-4 p-4'>
      <Link to={`/gif/${id}`}>
        <h5 className='text-center text-white'>{title}</h5>
        <img height='100%' width='100%' style={{objectFit: "cover"}} alt={title} src={image} />
      </Link>
    </div>
  );
};
