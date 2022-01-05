import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../css/homepage.css';

function MobileHomePage (props) {

  const [showZFlipWeb, setShowZFlipWeb] = useState(true);
  const [showS21Web, setShowS21Web] = useState(false);
  const [showZFold3Web, setShowZFold3Web] = useState(false);
  const [showWatch4Web, setShowWatch4Web] = useState(false);
  const [showBookWeb, setShowBookWeb] = useState(false);

  let show_z_flip_web = () => {
    setShowZFlipWeb(true);
    setShowS21Web(false);
    setShowZFold3Web(false);
    setShowWatch4Web(false);
    setShowBookWeb(false);

  };

  let show_s21_web = () => {
    setShowZFlipWeb(false);
    setShowS21Web(true);
    setShowZFold3Web(false);
    setShowWatch4Web(false);
    setShowBookWeb(false);
  };

  let show_z_fold3_web = () => {
    setShowZFlipWeb(false);
    setShowS21Web(false);
    setShowZFold3Web(true);
    setShowWatch4Web(false);
    setShowBookWeb(false);
  };

  let show_watch4_web = () => {
    setShowZFlipWeb(false);
    setShowS21Web(false);
    setShowZFold3Web(false);
    setShowWatch4Web(true);
    setShowBookWeb(false);
  };

  let show_book_web = () => {
    setShowZFlipWeb(false);
    setShowS21Web(false);
    setShowZFold3Web(false);
    setShowWatch4Web(false);
    setShowBookWeb(true);
  };

  return (
    <div>
      { showZFlipWeb ?
      <div className="photo-background z-flip-background">
        <div className="row">
          <h1 className="font-weight-bold text-light text-center mt-5 mb-2">Mobile</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-light mx-2" onClick={() => show_z_flip_web()}>
              Galaxy Z Flip3 5G
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_s21_web()}>
              Galaxy S21 | S21+5G
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_z_fold3_web()}>
              Galaxy Z Fold3
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_watch4_web()}>
              Galaxy Watch4 Series
            </Button>
            <Button variant="link text-light mx-2" onClick={() => show_book_web()}>
              Galaxy Book Series
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light">
              Claim a free Galaxy Watch4 when you buy now
            </div>
            <div className="mt-1">
              <Button variant="link text-light">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showS21Web ?
      <div className="photo-background s21-background">
        <div className="row">
          <h1 className="font-weight-bold text-dark text-center mt-5 mb-2">Mobile</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-dark mx-2" onClick={() => show_z_flip_web()}>
              Galaxy Z Flip3 5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_s21_web()}>
              Galaxy S21 | S21+5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_z_fold3_web()}>
              Galaxy Z Fold3
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_watch4_web()}>
              Galaxy Watch4 Series
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_book_web()}>
              Galaxy Book Series
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div>
              Claim a free Chromebook 4 when you buy the Galaxy S21 5G
            </div>
            <div className="mt-1">
              <Button variant="link text-dark">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showZFold3Web ?
      <div className="photo-background z-fold3-background">
        <div className="row">
          <h1 className="font-weight-bold text-dark text-center mt-5 mb-2">Mobile</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-dark mx-2" onClick={() => show_z_flip_web()}>
              Galaxy Z Flip3 5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_s21_web()}>
              Galaxy S21 | S21+5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_z_fold3_web()}>
              Galaxy Z Fold3
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_watch4_web()}>
              Galaxy Watch4 Series
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_book_web()}>
              Galaxy Book Series
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div>
              Claim a free Galaxy Watch4 when you buy now
            </div>
            <div className="mt-1">
              <Button variant="link text-dark">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showWatch4Web ?
      <div className="photo-background watch4-background">
        <div className="row">
          <h1 className="font-weight-bold text-dark text-center mt-5 mb-2">Mobile</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-dark mx-2" onClick={() => show_z_flip_web()}>
              Galaxy Z Flip3 5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_s21_web()}>
              Galaxy S21 | S21+5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_z_fold3_web()}>
              Galaxy Z Fold3
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_watch4_web()}>
              Galaxy Watch4 Series
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_book_web()}>
              Galaxy Book Series
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div>
              <span className="text-light background-dark">
                Time to find your personal style
              </span>
            </div>
            <div className="mt-3">
              <Button variant="light rounded-pill mx-2">Customise now</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
      { showBookWeb ?
      <div className="photo-background book-background">
        <div className="row">
          <h1 className="font-weight-bold text-dark text-center mt-5 mb-2">Mobile</h1>
        </div>
        <div className="row for-space">
          <div className="col text-center mb-3">
            <Button variant="link text-dark mx-2" onClick={() => show_z_flip_web()}>
              Galaxy Z Flip3 5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_s21_web()}>
              Galaxy S21 | S21+5G
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_z_fold3_web()}>
              Galaxy Z Fold3
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_watch4_web()}>
              Galaxy Watch4 Series
            </Button>
            <Button variant="link text-dark mx-2" onClick={() => show_book_web()}>
              Galaxy Book Series
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="text-light">
              Up to $200 off in our Winter Sale
            </div>
            <div className="mt-1">
              <Button variant="link text-light">Learn more</Button>
              <Button variant="dark text-light rounded-pill mx-2">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      : null }
    </div>
  );
}

export default MobileHomePage;