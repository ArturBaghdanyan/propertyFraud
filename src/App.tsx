import './App.css';
import { useRef, useState } from 'react';

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

// export const myRef = useRef<HTMLDivElement | null>(null);
// export const propertyRef = useRef<HTMLDivElement | null>(null);
// export const pricingRef = useRef<HTMLDivElement | null>(null);
// export const contactRef = useRef<HTMLDivElement | null>(null);

function App() {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  return (
    <div className="App">
      <Header isHeaderFixed={isHeaderFixed} />
      <Address setIsHeaderFixed={setIsHeaderFixed} />
      <TargetProperty />
      <Works />
      <div>
        <Victims />
      </div>
      <Protect />
      <MyList />
      <Protection />
      <div>
        <Pricing />
      </div>
      <Family />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
