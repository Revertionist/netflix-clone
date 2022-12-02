import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import { trending, newRelease, comedy, horror, documentary } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={trending} title='Trending Now' />
      <RowPost url={newRelease} title='New Releases' isSmall={true} />
      <RowPost url={comedy} title='TV Comedy' isSmall={true} />
      <RowPost url={horror} title='Horror Movies' isSmall={true} />
      <RowPost url={documentary} title='Documentaries' isSmall={true} />
    </div>
  );
}

export default App;
