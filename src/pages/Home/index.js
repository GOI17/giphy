import React, { useState, useEffect } from 'react';
import Gif from '../../components/Gif';
import getGifs from '../../services/getGifs.service';

export default function ListOfGifs({ params }) {
  const { query } = params;
  const [ loading, setLoading ] = useState(true);
  const [ gifs, setGifs ] = useState([]);

  useEffect(() => {
    getGifs({ query }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
    });
  }, [ query ]);

  return (
    <div className='row'>
      { loading && <h4 className='col text-center text-white'>Fetching data...</h4> }
      { (!loading && gifs.length > 0) &&
          gifs.map(({id, title, url}) => <Gif key={id} id={id} title={title} image={url} />)
      }
      { (!loading && gifs.length === 0) &&
          <h4 className='col text-center text-white'>
            We can not found gifs with that name <span role='img' aria-label='sad' />😞
          </h4>
      }
    </div>
  );
}
