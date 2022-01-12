import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import MaximiseYourSpace from '../photo/minimise-your-space.jpg';
import Watch from "../photo/watch4.jpg";
import SamsungKX from '../photo/samsung-kx.png';
import Upcycling from '../photo/the-art.jpg';
import '../css/homepage.css';

function ExploreHomePage (props) {

  const [showMaximise, setShowMaximise] = useState(true);
  const [showFashion, setShowFashion] = useState(false);
  const [showSamsungKX, setShowSamsungKX] = useState(false);
  const [showUpcycling, setShowUpcycling] = useState(false);

  let show_maximise = () => {
    setShowMaximise(true);
    setShowFashion(false);
    setShowSamsungKX(false);
    setShowUpcycling(false);
  };

  let show_fashion = () => {
    setShowMaximise(false);
    setShowFashion(true);
    setShowSamsungKX(false);
    setShowUpcycling(false);
  };

  let show_samsungkx = () => {
    setShowMaximise(false);
    setShowFashion(false);
    setShowSamsungKX(true);
    setShowUpcycling(false);
  };

  let show_upcycling = () => {
    setShowMaximise(false);
    setShowFashion(false);
    setShowSamsungKX(false);
    setShowUpcycling(true);
  };

  let handle_mouse_out = () => {
    setShowMaximise(true);
    setShowFashion(false);
    setShowSamsungKX(false);
    setShowUpcycling(false);
  };

  return (
    <div className="row mt-5 mb-5">
      <div className="col-12">
        <div className="text-center">
          <a className="text-dark huge-font font-weight-bold text-decoration">
            Explore #DoWhatYouCant
          </a>
        </div>
      </div>
      <div className="col-6 mt-5 show-explore">
        { showMaximise ?
        <img id="myexplore" src={MaximiseYourSpace} className="w-100 border-rounded" height="600px" />
        : null }
        { showFashion ?
        <img id="myexplore" src={Watch} className="w-100 border-rounded" height="600px" />
        : null }
        { showSamsungKX ?
        <img id="myexplore" src={SamsungKX} className="w-100 border-rounded" height="600px" />
        : null }
        { showUpcycling ?
        <img id="myexplore" src={Upcycling} className="w-100 border-rounded" height="600px" />
        : null }
      </div>
      <div className="col-6 vertical-middle show-explore">
        <div className="row" onMouseOver={() => show_maximise()}
        onMouseOut={() => handle_mouse_out()}>
          { showMaximise ?
          <div className="col-12">
            <hr className="black-line" />
          </div>
          : null }
          <div className="col-2 text-center large-font font-weight-bold">
            01
          </div>
          <div className="col-10">
            <div className="larger-font font-weight-bold mb-3">
              Maximise your spaces
            </div>
          </div>
          <div className="col-2">
          </div>
          { showMaximise ?
          <div className="col-10 mb-2">
            <a className="text-decoration text-dark">Learn more</a>
          </div>
          : null }
          <div className="col-2">
          </div>
          { showMaximise ?
          <div className="col-10">
            <hr />
          </div>
          : null }
        </div>
        <div className="row mt-3 mb-3" onMouseOver={() => show_fashion()}
        onMouseOut={() => handle_mouse_out()}>
          { showFashion ?
          <div className="col-12">
            <hr className="black-line" />
          </div>
          : null }
          <div className="col-2 text-center large-font font-weight-bold">
            02
          </div>
          <div className="col-10">
            <div className="larger-font font-weight-bold mb-3">
              A Fashion Icon Meets a Tech Pioneer
            </div>
          </div>
          <div className="col-2">
          </div>
          { showFashion ?
          <div className="col-10 mb-2">
            <a className="text-decoration text-dark">Learn more</a>
          </div>
          : null }
          <div className="col-2">
          </div>
          { showFashion ?
          <div className="col-10">
            <hr />
          </div>
          : null }
        </div>
        <div className="row mt-3 mb-3" onMouseOver={() => show_samsungkx()}
        onMouseOut={() => handle_mouse_out()}>
          { showSamsungKX ?
          <div className="col-12">
            <hr className="black-line" />
          </div>
          : null }
          <div className="col-2 text-center large-font font-weight-bold">
            03
          </div>
          <div className="col-10">
            <div className="larger-font font-weight-bold mb-3">
              Samsung KX: The Home of Innovation
            </div>
          </div>
          <div className="col-2">
          </div>
          { showSamsungKX ?
          <div className="col-10 mb-2">
            <a className="text-decoration text-dark">Learn more</a>
          </div>
          : null }
          <div className="col-2">
          </div>
          { showSamsungKX ?
          <div className="col-10">
            <hr />
          </div>
          : null }
        </div>
        <div className="row mt-3 mb-3" onMouseOver={() => show_upcycling()}
        onMouseOut={() => handle_mouse_out()}>
          { showUpcycling ?
          <div className="col-12">
            <hr className="black-line" />
          </div>
          : null }
          <div className="col-2 text-center large-font font-weight-bold">
            04
          </div>
          <div className="col-10">
            <div className="larger-font font-weight-bold mb-3">
              The Art of Upcycling
            </div>
          </div>
          <div className="col-2">
          </div>
          { showUpcycling ?
          <div className="col-10 mb-2">
            <a className="text-decoration text-dark">Learn more</a>
          </div>
          : null }
          <div className="col-2">
          </div>
          { showUpcycling ?
          <div className="col-10">
            <hr />
          </div>
          : null }
        </div>
      </div>
      <div className="col-12 show-responsive-explore">
        { showMaximise ?
        <div className="text-center">
          <img id="myexplore" src={MaximiseYourSpace} className="border-rounded mt-5" width="400px" height="400px" />
          <div className="larger-font font-weight-bold mb-5 mt-5">
            Maximise your spaces
          </div>
          <div>
            <a className="text-decoration text-dark">Learn more</a>
          </div>
        </div>
        : null }
        { showFashion ?
        <div className="text-center">
          <img id="myexplore" src={Watch} className="border-rounded mt-5" width="400px" height="400px" />
          <div className="larger-font font-weight-bold mb-5 mt-5">
            A Fashion Icon Meets a Tech Pioneer
          </div>
          <div>
            <a className="text-decoration text-dark">Learn more</a>
          </div>
        </div>
        : null }
        { showSamsungKX ?
        <div className="text-center">
          <img id="myexplore" src={SamsungKX} className="border-rounded mt-5" width="400px" height="400px" />
          <div className="larger-font font-weight-bold mb-5 mt-5">
            Samsung KX: The Home of Innovation
          </div>
          <div>
            <a className="text-decoration text-dark">Learn more</a>
          </div>
        </div>
        : null }
        { showUpcycling ?
        <div className="text-center">
          <img id="myexplore" src={Upcycling} className="border-rounded mt-5" width="400px" height="400px" />
          <div className="larger-font font-weight-bold mb-5 mt-5">
            The Art of Upcycling
          </div>
          <div>
            <a className="text-decoration text-dark">Learn more</a>
          </div>
        </div>
        : null }
        <div className="row mt-5">
          <div className="col-md-4 col-sm-4"></div>
          <div className="col-md-4 col-sm-4">
            <div className="row dot-option-border">
              <div className="col-md-3 col-sm-3 col-3 pt-2 text-center">
                <a className="text-dark" onClick={() => show_maximise()}>
                  <FontAwesomeIcon icon={faCircle} />
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-3 pt-2 text-center">
                <a className="text-dark" onClick={() => show_fashion()}>
                  <FontAwesomeIcon icon={faCircle} />
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-3 pt-2 text-center">
                <a className="text-dark" onClick={() => show_samsungkx()}>
                  <FontAwesomeIcon icon={faCircle} />
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-3 pt-2 text-center">
                <a className="text-dark" onClick={() => show_upcycling()}>
                  <FontAwesomeIcon icon={faCircle} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHomePage;