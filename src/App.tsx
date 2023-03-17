import './App.css';
import { useState } from 'react';

import Family from './components/family/family';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Address from './components/hero/address';
import Protection from './components/home_protection/protection';
import TargetProperty from './components/main/target';
import Pricing from './components/pricing/pricing';
import Protect from './components/protected/protect';
import MyList from './components/telephone/telephone';
import Victims from './components/victims/victims';
import Works from './components/works/works';
import 'swiper/css';
import 'swiper/css/free-mode';

function App() {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);
  return (
    <div className="App">
      <Header isHeaderFixed={isHeaderFixed} />
      <Address setIsHeaderFixed={setIsHeaderFixed} />
      <TargetProperty />
      <Works />
      <Victims />
      <Protect />
      <MyList />
      <Protection />
      <Pricing />
      <Family />
      <Footer />
    </div>
  );
}

export default App;
