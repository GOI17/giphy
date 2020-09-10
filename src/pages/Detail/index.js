import React from 'react';

export default function GitDetail({params}) {
  const { id } = params;

  return (
    <h4>{id}</h4>
  );
}
