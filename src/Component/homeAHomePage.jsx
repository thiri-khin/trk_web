import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../css/homepage.css';

function TvavHomePage (props) {

  const [showJetBotWeb, setShowJetBotWeb] = useState(true);
  const [showBespokeWeb, setShowBespokeWeb] = useState(false);
  const [showAirDresserWeb, setShowAirDresserWeb] = useState(false);
  const [showHealthyHomeWeb, setShowHealthyHomeWeb] = useState(false);

  let show_jet_bot_web = () => {
    setShowJetBotWeb(true);
    setShowBespokeWeb(false);
    setShowAirDresserWeb(false);
    setShowHealthyHomeWeb(false);
  };

  let show_bespoke_web = () => {
    setShowJetBotWeb(false);
    setShowBespokeWeb(true);
    setShowAirDresserWeb(false);
    setShowHealthyHomeWeb(false);
  };

  let show_air_dresser_web = () => {
    setShowJetBotWeb(false);
    setShowBespokeWeb(false);
    setShowAirDresserWeb(true);
    setShowHealthyHomeWeb(false);
  };

  let show_healthy_home_web = () => {
    setShowJetBotWeb(false);
    setShowBespokeWeb(false);
    setShowAirDresserWeb(false);
    setShowHealthyHomeWeb(true);
  };

  return (
    <div>
      { showJetBotWeb ?
      <div className="photo-background jet-bot-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">Home Appliances</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_jet_bot_web()}>
              Samsung Jet Bot
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_bespoke_web()}>
              BESPOKE
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_air_dresser_web()}>
              AirDresser
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_healthy_home_web()}>
              Healthy Home
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light huge-font font-weight-bold">
              Samsung Jet Bot
            </div>
            <div className="text-light">
              Ditch dust for good with the all new Samsung Jet Bot range
            </div>
            <div className="mt-1">
              <Button variant="link text-light">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Shop</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showBespokeWeb ?
      <div className="photo-background bespoke-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">Home Appliances</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_jet_bot_web()}>
              Samsung Jet Bot
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_bespoke_web()}>
              BESPOKE
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_air_dresser_web()}>
              AirDresser
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_healthy_home_web()}>
              Healthy Home
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light large-font font-weight-bold">
              The new customisable Bespoke refrigeration range
            </div>
            <div className="text-light">
              Visit the Bespoke Studio for a virtual showroom experience
            </div>
            <div className="mt-1">
              <Button variant="link text-light">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Buy</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showAirDresserWeb ?
      <div className="photo-background airdresser-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">Home Appliances</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_jet_bot_web()}>
              Samsung Jet Bot
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_bespoke_web()}>
              BESPOKE
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_air_dresser_web()}>
              AirDresser
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_healthy_home_web()}>
              Healthy Home
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light large-font font-weight-bold">
              99.9% Sanitisation of Your Clothes
            </div>
            <div className="text-light">
              Stream through your laundry, get free next day delivery and spread the cost for up to 24 months with 0% finance
            </div>
            <div className="mt-1">
              <Button variant="dark text-light rounded-pill mx-2">See all</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showHealthyHomeWeb ?
      <div className="photo-background healthy-home-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">Home Appliances</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_jet_bot_web()}>
              Samsung Jet Bot
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_bespoke_web()}>
              BESPOKE
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_air_dresser_web()}>
              AirDresser
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_healthy_home_web()}>
              Healthy Home
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light large-font font-weight-bold">
              Healthy Home
            </div>
            <div className="text-light">
              Find out how our innovative features can help you make the most of every moment at home and improve your wellbeing.
            </div>
            <div className="mt-1">
              <Button variant="dark text-light rounded-pill mx-2">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
    </div>
  );
}

export default TvavHomePage;