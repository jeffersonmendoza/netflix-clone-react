import './App.css';
import React from 'react';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Modal from './Modal';

function App() {
  return (
    <div className='main__app'>
      <Nav />
      <Banner />
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Modal />
    </div>
  );
}

export default App;
