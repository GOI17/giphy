import React, { useState } from 'react';
import { Route, Link, useLocation } from 'wouter';
import ListOfGifs from './pages/Home';
import GifDetail from './pages/Detail';
import logo from './logo.png';

function App() {
  const [ search, setSearch ] = useState('');
  const [ path, setLocation ] = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    setLocation(`/search/${search}`);
  };

  const handleOnChange = evt => {
    setSearch(evt.target.value);
  };

  return (
    <div className='container'>
      <div className='row p-2'>
        <div className='col-4 offset-4 text-center'>
          <Link to='/'>
            <img alt='logo' src={logo} width='50%'style={{ cursor:"pointer" }} />
          </Link>
        </div>
      </div>
      <div className='row p-md-4 p-1'>
        <div className='col-8 col-lg-6 offset-lg-3 offset-2 text-center'>
          <form onSubmit={handleSubmit}>
            <label className='text-white' htmlFor='search'>
              It looks like you are looking for some Cool Gifs
            </label>
            <input
                  type='text'
                  name='search'
                  className='p-2'
                  style={{width: '100%'}}
                  placeholder='Ex. Star Wars'
                  onChange={handleOnChange} />
          </form>
        </div>
      </div>
      <div>
        <Route component={ListOfGifs} path=''/>
        <Route component={ListOfGifs} path='/search/:query'/>
        <Route component={GifDetail} path='/gif/:id'></Route>
      </div>
    </div>
  );
};

export default App;
