import React from 'react';
import Button from 'react-bootstrap/Button';
import Bespoke from '../photo/bespoke.jpg';
import CustomiseBespoke from '../photo/customise-bespoke.jpg';
import Watch4Customise from '../photo/watch4-customise.jpg';
import '../css/galaxybespoke.css';

function GalaxyBespoke(props) {
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <img src={Bespoke} className="w-100" height="600px" />
      </div>
      <div className="col-12 mt-5">
        <h3 className="font-weight-bold text-center mt-4">
          Bespoke, make just your style.
        </h3>
        <div className="text-center">
          Don't let the world confine you.
        </div>
        <div className="text-center">
          Be boundless with Galaxy Bespoke Edition
        </div>
        <div className="text-center">
          and reflect your truest self with custom devices and live life your way.
        </div>
      </div>
      <div className="col-12 mt-5 mb-4">
        <h3 className="font-weight-bold text-center mt-4">
          Galaxy Z Flip3 Bespoke Studio
        </h3>
        <div className="text-center">
          Why let a single shade define your style? Choose from expressive hues
        </div>
        <div className="text-center">
          and even mix and match to make your own signature look.
        </div>
        <div className="text-center mt-4">
          <Button variant="dark" className="mx-2 rounded-pill">Customise now</Button>
        </div>
      </div>
      <div className="col-12 mt-5">
        <img src={CustomiseBespoke} className="w-100" height="600px" />
      </div>
      <div className="col-12 mt-5 mb-4">
        <h5 className="font-weight-bold text-center mt-4">
          Galaxy Watch4 | Watch4 Classic
        </h5>
        <h3 className="font-weight-bold text-center">
          Galaxy Watch4 Bespoke Studio
        </h3>
        <div className="text-center">
          Express your personal brand right from your wrist. Browse through the
        </div>
        <div className="text-center">
          wide selection of straps and cases to craft a unique combo just for you.
        </div>
        <div className="text-center mt-4">
          <Button variant="dark" className="mx-2 rounded-pill">Customise now</Button>
        </div>
      </div>
      <div className="col-12 mt-5">
        <img src={Watch4Customise} className="w-100" height="600px" />
      </div>
    </div>
  );
}

export default GalaxyBespoke;