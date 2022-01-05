import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../css/homepage.css';

function TvavHomePage (props) {

  const [showNeoqledWeb, setShowNeoqledWeb] = useState(true);
  const [showQledWeb, setShowQledWeb] = useState(false);
  const [showLifestyleWeb, setShowLifestyleWeb] = useState(false);
  const [showCrystalWeb, setShowCrystalWeb] = useState(false);
  const [showSoundbarWeb, setShowSoundbarWeb] = useState(false);

  let show_neo_qled_web = () => {
    setShowNeoqledWeb(true);
    setShowQledWeb(false);
    setShowLifestyleWeb(false);
    setShowCrystalWeb(false);
    setShowSoundbarWeb(false);

  };

  let show_qled_web = () => {
    setShowNeoqledWeb(false);
    setShowQledWeb(true);
    setShowLifestyleWeb(false);
    setShowCrystalWeb(false);
    setShowSoundbarWeb(false);
  };

  let show_lifestyle_web = () => {
    setShowNeoqledWeb(false);
    setShowQledWeb(false);
    setShowLifestyleWeb(true);
    setShowCrystalWeb(false);
    setShowSoundbarWeb(false);
  };

  let show_crystal_web = () => {
    setShowNeoqledWeb(false);
    setShowQledWeb(false);
    setShowLifestyleWeb(false);
    setShowCrystalWeb(true);
    setShowSoundbarWeb(false);
  };

  let show_soundbar_web = () => {
    setShowNeoqledWeb(false);
    setShowQledWeb(false);
    setShowLifestyleWeb(false);
    setShowCrystalWeb(false);
    setShowSoundbarWeb(true);
  };

  return (
    <div>
      { showNeoqledWeb ?
      <div className="photo-background neo-qled-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">TV & AV</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_neo_qled_web()}>
              Neo QLED
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_qled_web()}>
              QLED
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_lifestyle_web()}>
              Lifestyle TVs
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_crystal_web()}>
              Crystal UHD
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_soundbar_web()}>
              Q-series soundbar
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light huge-font font-weight-bold">
              Up to $300 off selected TVs
            </div>
            <div className="text-light">
              when you buy a Neo QLED TV
            </div>
            <div className="mt-1">
              <Button variant="dark text-light rounded-pill mx-2">Buy</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showQledWeb ?
      <div className="photo-background qled-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-dark text-center mt-4 mb-2">TV & AV</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-dark mx-2" onClick={() => show_neo_qled_web()}>
              Neo QLED
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_qled_web()}>
              QLED
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_lifestyle_web()}>
              Lifestyle TVs
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_crystal_web()}>
              Crystal UHD
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_soundbar_web()}>
              Q-series soundbar
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-dark huge-font font-weight-bold">
              Everlasting brilliance,
            </div>
            <div className="text-dark">
              Colorful possibilities
            </div>
            <div className="mt-1">
              <Button variant="dark text-light rounded-pill mx-2">Buy</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showLifestyleWeb ?
      <div className="photo-background lifestyle-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-dark text-center mt-4 mb-2">TV & AV</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-dark mx-2" onClick={() => show_neo_qled_web()}>
              Neo QLED
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_qled_web()}>
              QLED
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_lifestyle_web()}>
              Lifestyle TVs
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_crystal_web()}>
              Crystal UHD
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_soundbar_web()}>
              Q-series soundbar
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-dark huge-font font-weight-bold">
              More than just a TV
            </div>
            <div className="text-dark">
              A TV designed to express your unique style in your home.
            </div>
            <div className="mt-1">
              <Button variant="link text-dark">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showCrystalWeb ?
      <div className="photo-background crystal-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">TV & AV</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_neo_qled_web()}>
              Neo QLED
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_qled_web()}>
              QLED
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_lifestyle_web()}>
              Lifestyle TVs
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_crystal_web()}>
              Crystal UHD
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_soundbar_web()}>
              Q-series soundbar
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light huge-font font-weight-bold">
              The best-in-class,
            </div>
            <div className="text-light">
              Crystal clear choice
            </div>
            <div className="mt-1">
              <Button variant="dark text-light rounded-pill mx-2">Buy</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showSoundbarWeb ?
      <div className="photo-background soundbar-background mt-4">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-4 mb-2">TV & AV</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_neo_qled_web()}>
              Neo QLED
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_qled_web()}>
              QLED
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_lifestyle_web()}>
              Lifestyle TVs
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_crystal_web()}>
              Crystal UHD
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_soundbar_web()}>
              Q-series soundbar
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="large-font font-weight-bold">
              Uncompromising cinematic sound
            </div>
            <div>
              Get free next day delivery and spread the cost for up to 36 months with 0% finance
            </div>
            <div className="mt-1">
              <Button variant="link text-dark">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">See all</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
    </div>
  );
}

export default TvavHomePage;