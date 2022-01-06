import React from 'react';
import Button from 'react-bootstrap/Button';
import Bespoke from '../photo/bespoke.jpg';
import CustomiseBespoke from '../photo/customise-bespoke.jpg';
import Watch4Customise from '../photo/watch4-customise.jpg';
import ZFlip3Lineup from '../photo/z-flip3-line-up.jpg';
import Watch4Lineup from '../photo/watch4-line-up.jpg';
import Watch4ClassicLineup from '../photo/watch4-classic-line-up.jpg';
import Cart from '../photo/cart.jpeg';
import Customise from '../photo/customise.jpg';
import ShippedOut from '../photo/shipped-out.jpeg';
import Delivered from '../photo/delivered.png';
import BespokeLast from '../photo/bespoke-last.jpg';
import BespokeResponsive from '../photo/bespoke-responsive.jpg';
import '../css/galaxybespoke.css';

function GalaxyBespoke(props) {
  return (
    <div className="row">
      <div className="col-12 mt-5 show-lg">
        <img src={Bespoke} className="w-100" height="600px" />
      </div>
      <div className="col-12 mt-5 show-sm">
        <img src={BespokeResponsive} className="w-100" height="600px" />
      </div>
      <div className="col-12 mt-5 text-center">
        <h3 className="font-weight-bold mt-4">
          Bespoke, make just your style.
        </h3>
        <div>
          Don't let the world confine you.
        </div>
        <div>
          Be boundless with Galaxy Bespoke Edition
        </div>
        <div>
          and reflect your truest self with custom devices and live life your way.
        </div>
      </div>
      <div className="col-12 mt-5 mb-4 text-center">
        <h3 className="font-weight-bold mt-4">
          Galaxy Z Flip3 Bespoke Studio
        </h3>
        <div>
          Why let a single shade define your style? Choose from expressive hues
        </div>
        <div>
          and even mix and match to make your own signature look.
        </div>
        <div className="mt-4">
          <Button variant="dark" className="mx-2 rounded-pill">Customise now</Button>
        </div>
      </div>
      <div className="col-12 mt-5 show-lg">
        <img src={CustomiseBespoke} className="w-100" height="600px" />
      </div>
      <div className="col-12 mt-5 show-sm">
        <img src={CustomiseBespoke} className="w-100" height="400px" />
      </div>
      <div className="col-12 mt-5 mb-4 text-center">
        <h5 className="font-weight-bold mt-4">
          Galaxy Watch4 | Watch4 Classic
        </h5>
        <h3 className="font-weight-bold">
          Galaxy Watch4 Bespoke Studio
        </h3>
        <div>
          Express your personal brand right from your wrist. Browse through the
        </div>
        <div>
          wide selection of straps and cases to craft a unique combo just for you.
        </div>
        <div className="mt-4">
          <Button variant="dark" className="mx-2 rounded-pill">Customise now</Button>
        </div>
      </div>
      <div className="col-12 mt-5 mb-3 show-lg">
        <img src={Watch4Customise} className="w-100" height="600px" />
      </div>
      <div className="col-12 mt-5 mb-3 show-sm">
        <img src={Watch4Customise} className="w-100" height="400px" />
      </div>
      <div className="col-12 mt-5 text-center">
        <h3 className="font-weight-bold">
          The Bespoke Edition line-up
        </h3>
        <h3 className="font-weight-bold">
          opens your world
        </h3>
        <div>
          Keep connected and express yourself through devices for all your different dimensions.
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4 mb-5 text-center">
        <img src={ZFlip3Lineup} className="w-100" height="400px" />
        <h3 className="font-weight-bold mt-5">
          Galaxy Z Flip3 5G
        </h3>
        <div className="mt-5">
          <Button variant="dark" className="mx-2 rounded-pill mt-3">Learn more</Button>
        </div>
        <div className="mt-2">
          <Button variant="link" className="text-dark font-weight-bold">Customise now</Button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4 mb-5 text-center">
        <img src={Watch4Lineup} className="w-100" height="400px" />
        <h3 className="font-weight-bold mt-5">
          Galaxy Watch4
        </h3>
        <div className="mt-5">
          <Button variant="dark" className="mx-2 rounded-pill mt-3">Learn more</Button>
        </div>
        <div className="mt-2">
          <Button variant="link" className="text-dark font-weight-bold">Customise now</Button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4 mb-5 text-center">
        <img src={Watch4ClassicLineup} className="w-100" height="400px" />
        <h3 className="font-weight-bold mt-5">
          Galaxy Watch4 Classic
        </h3>
        <div className="mt-5">
          <Button variant="dark" className="mx-2 rounded-pill mt-3">Learn more</Button>
        </div>
        <div className="mt-2">
          <Button variant="link" className="text-dark font-weight-bold">Customise now</Button>
        </div>
      </div>
      <div className="col-12 mt-5 mb-5 text-center">
        <h3 className="font-weight-bold mt-4">
          You put in the work, now it's your turn.
        </h3>
        <div>
          This entire process is tailored to you.
        </div>
        <div>
          We'll update you along the way until your custom piece arrives.
        </div>
        <div>
          And we offer continuous support with panel replacement and repair services through Samsung Care+.
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 text-center">
        <img src={Cart} width="100px" height="100px" />
        <h3 className="font-weight-bold mt-5">
          1. Order Placed
        </h3>
        <div>
          Place your order, and we'll give you an ETA on your custom device. It's worth the wait.
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 text-center">
        <img src={Customise} width="100px" height="100px" />
        <h3 className="font-weight-bold mt-5">
          2. Customising
        </h3>
        <div>
          While your unique design is being crafted, see how Galaxy Bespoke Edition devices are put together.
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 text-center">
        <img src={ShippedOut} width="100px" height="100px" />
        <h3 className="font-weight-bold mt-5">
          3. Shipped Out
        </h3>
        <div>
          When it's shipped out, we'll update you. So you can obsess over the tracker.
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mb-5 text-center">
        <img src={Delivered} width="100px" height="100px" />
        <h3 className="font-weight-bold mt-5">
          4. Delivered
        </h3>
        <div>
          It's the hottest drop of the year. When it hits your doorstep, we'll shoot you a message.
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12 pt-lg-5 pt-md-5 background-gray pl-5">
        <h2 className="font-weight-bold mt-5">
          Bespoke Update Care
        </h2>
        <div>
          Looking to change the colour of your Galaxy Z Flip3 Bespoke Edition?
        </div>
        <div>
          No problem, you can book your colour change through Samsung Repair.
        </div>
        <div className="mt-2">
          <small>
            Only available for Galaxy Z Flip3 Bespoke Edition models.
          </small>
        </div>
        <div className="mt-4">
          <Button variant="dark" className="mx-2 rounded-pill mt-3">Book now</Button>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 text-center background-gray">
        <img src={BespokeLast} className="w-100" height="400px" />
      </div>
    </div>
  );
}

export default GalaxyBespoke;