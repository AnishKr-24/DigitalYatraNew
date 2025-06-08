import { useEffect, useState } from 'react';
import Hero from '../hero/Hero';
import Bus from '../Services/Bus';
import Train from '../Services/Train';
import Flight from '../Services/Flight';
import './MainHero.scss';

export default function MainHero({ selected: selectedProp = 'bus' }) {
  const [selected, setSelected] = useState(selectedProp);

  // Keep internal state in sync with props
  useEffect(() => {
    setSelected(selectedProp);
  }, [selectedProp]);

  const getComponent = () => {
    switch (selected) {
      case 'bus':
        return <Bus />;
      case 'train':
        return <Train />;
      case 'flight':
        return <Flight />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="overlay-wrapper">
      <div className="background-layer">
        <Hero />
      </div>

      <div className="foreground-layer">
        {getComponent()}
      </div>

    </div>
  );
}
