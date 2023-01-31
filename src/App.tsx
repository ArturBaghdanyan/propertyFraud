import React from 'react';

import './App.css';
import Header from './components/header/header';
import Protection from './components/home_protection/protection';
import TargetProperty from './components/main/target';
import Protect from './components/protected/protect';
import Address from './components/section/address';
import MyList from './components/telephone/telephone';
// import Victims from './components/victims/victims';
import Works from './components/works/works';

function App() {
  return (
    <div className="App">
      <Header />
      <Address />
      <TargetProperty />
      <Works />
      {/*<Victims />*/}
      <Protect />
      <MyList />
      <Protection />
    </div>
  );
}

export default App;
