import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faShoppingCart, faUser } from 
'@fortawesome/free-solid-svg-icons';
import Gifts from '../photo/gifts.jpg';
import TV from '../photo/Samsung_Frame_TV.jpg';
import LEDTV from '../photo/Neo-QLED.jpg';
import Devices from '../photo/devices.jpg';
import ZFold3 from '../photo/galaxy-z-fold-3.jpg';
import VacuumCleaner from '../photo/vacuum-clean.jpg';
import BookPro from '../photo/samsung-galaxy-book-pro.jpg';
import NeoQLED from '../photo/neo-qled.jpg';
import ZFlip3 from '../photo/zflip3.jpg';
import Watch4 from '../photo/watch4classic.jpg';
import TabS7Plus from '../photo/tabs7plus.jpg';
import SmartTag from '../photo/smart-tag.png';
import NeoQLED8K from '../photo/Neo-QLED-8K.jpg';
import SoundBar from '../photo/soundbar.png';
import Projector from '../photo/projector.png';
import TVs from '../photo/tv-s.png';
import SoundTower from '../photo/sound-tower.jpg';
import HomeVacuumCleaner from '../photo/vacuum-cleaner.jpg';
import BespokeRefrigerator from '../photo/bespoke-refrigerator.png';
import HomeAppliance3 from '../photo/3-home-appliance.jpg';
import FridgeFreezer from '../photo/fridge-freezer.jpg';
import WashingMachine from '../photo/washing-matchine.jpg';
import BookPro360 from '../photo/book-pro-360.jpg';
import Book_Pro from '../photo/book-pro.png';
import Book from '../photo/book.jpg';
import Mornitor from '../photo/mornitor.png';
import HeadPhone from '../photo/headphone.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import MobileHomePage from './mobileHomePage.jsx';
import TvavHomePage from './tvavHomePage.jsx';
import HomeAHomePage from './homeAHomePage.jsx';
import ExploreHomePage from './exploreHomePage.jsx';
import '../css/homepage.css';
import '../css/docs.css';

function HomePage (props) {

  let [showCashbackItemDiv, setShowCashbackItemDiv] = useState(true);
  let [showCashbackItemBtn, setShowCashbackItemBtn] = useState(false);
  let [showCashbackZDiv, setShowCashbackZDiv] = useState(true);
  let [showCashbackZBtn, setShowCashbackZBtn] = useState(false);
  let [showCashbackVcleanerDiv, setShowCashbackVcleanerDiv] = useState(true);
  let [showCashbackVcleanerBtn, setShowCashbackVcleanerBtn] = useState(false);
  let [showCashbackBproDiv, setShowCashbackBproDiv] = useState(true);
  let [showCashbackBproBtn, setShowCashbackBproBtn] = useState(false);
  let [showCashbackNeoqDiv, setShowCashbackNeoqDiv] = useState(true);
  let [showCashbackNeoqBtn, setShowCashbackNeoqBtn] = useState(false);
  let [showMobileItemDiv, setShowMobileItemDiv] = useState(true);
  let [showMobileItemBtn, setShowMobileItemBtn] = useState(false);
  let [showMobileZFlipDiv, setShowMobileZFlipDiv] = useState(true);
  let [showMobileZFlipBtn, setShowMobileZFlipBtn] = useState(false);
  let [showMobileTabS7PlusDiv, setShowMobileTabS7PlusDiv] = useState(true);
  let [showMobileTabS7PlusBtn, setShowMobileTabS7PlusBtn] = useState(false);
  let [showMobileWatchDiv, setShowMobileWatchDiv] = useState(true);
  let [showMobileWatchBtn, setShowMobileWatchBtn] = useState(false);
  let [showMobileSmartTagDiv, setShowMobileSmartTagDiv] = useState(true);
  let [showMobileSmartTagBtn, setShowMobileSmartTagBtn] = useState(false);
  let [showTVAVNeoQLEDDiv, setShowTVAVNeoQLEDDiv] = useState(true);
  let [showTVAVNeoQLEDBtn, setShowTVAVNeoQLEDBtn] = useState(false);
  let [showTVAVSoundBarDiv, setShowTVAVSoundBarDiv] = useState(true);
  let [showTVAVSoundBarBtn, setShowTVAVSoundBarBtn] = useState(false);
  let [showTVAVProjectorDiv, setShowTVAVProjectorDiv] = useState(true);
  let [showTVAVProjectorBtn, setShowTVAVProjectorBtn] = useState(false);
  let [showTVAVTVsDiv, setShowTVAVTVsDiv] = useState(true);
  let [showTVAVTVsBtn, setShowTVAVTVsBtn] = useState(false);
  let [showTVAVSoundTowerDiv, setShowTVAVSoundTowerDiv] = useState(true);
  let [showTVAVSoundTowerBtn, setShowTVAVSoundTowerBtn] = useState(false);
  let [showHAVacuumCleanerDiv, setShowHAVacuumCleanerDiv] = useState(true);
  let [showHAVacuumCleanerBtn, setShowHAVacuumCleanerBtn] = useState(false);
  let [showHABespokeRefriDiv, setShowHABespokeRefriDiv] = useState(true);
  let [showHABespokeRefriBtn, setShowHABespokeRefriBtn] = useState(false);
  let [showHA3HomeAppDiv, setShowHA3HomeAppDiv] = useState(true);
  let [showHA3HomeAppBtn, setShowHA3HomeAppBtn] = useState(false);
  let [showHAFridgeFreezerDiv, setShowHAFridgeFreezerDiv] = useState(true);
  let [showHAFridgeFreezerBtn, setShowHAFridgeFreezerBtn] = useState(false);
  let [showHAWashMachineDiv, setShowHAWashMachineDiv] = useState(true);
  let [showHAWashMachineBtn, setShowHAWashMachineBtn] = useState(false);
  let [showLMBookPro360Div, setShowLMBookPro360Div] = useState(true);
  let [showLMBookPro360Btn, setShowLMBookPro360Btn] = useState(false);
  let [showLMBookProDiv, setShowLMBookProDiv] = useState(true);
  let [showLMBookProBtn, setShowLMBookProBtn] = useState(false);
  let [showLMBookDiv, setShowLMBookDiv] = useState(true);
  let [showLMBookBtn, setShowLMBookBtn] = useState(false);
  let [showLMMornitorDiv, setShowLMMornitorDiv] = useState(true);
  let [showLMMornitorBtn, setShowLMMornitorBtn] = useState(false);
  let [showLMHeadPhoneDiv, setShowLMHeadPhoneDiv] = useState(true);
  let [showLMHeadPhoneBtn, setShowLMHeadPhoneBtn] = useState(false);
  let [showCashbackWeb, setShowCashbackWeb] = useState(true);
  let [showMobileWeb, setShowMobileWeb] = useState(false);
  let [showTVAVWeb, setShowTVAVWeb] = useState(false);
  let [showHomeApplianceWeb, setShowHomeApplianceWeb] = useState(false);
  let [showLaptopsMornitorsWeb, setShowLaptopsMornitorsWeb] = useState(false);

  let show_cashback_item_buy_btn = () => {
    setShowCashbackItemBtn(true);
    setShowCashbackItemDiv(false);
  };

  let hide_cashback_item_buy_btn = () => {
    setShowCashbackItemBtn(false);
    setShowCashbackItemDiv(true);
  };

  let show_cashback_z_buy_btn = () => {
    setShowCashbackZBtn(true);
    setShowCashbackZDiv(false);
  };

  let hide_cashback_z_buy_btn = () => {
    setShowCashbackZBtn(false);
    setShowCashbackZDiv(true);
  };

  let show_cashback_vcleaner_buy_btn = () => {
    setShowCashbackVcleanerBtn(true);
    setShowCashbackVcleanerDiv(false);
  };

  let hide_cashback_vcleaner_buy_btn = () => {
    setShowCashbackVcleanerBtn(false);
    setShowCashbackVcleanerDiv(true);
  };

  let show_cashback_bpro_buy_btn = () => {
    setShowCashbackBproBtn(true);
    setShowCashbackBproDiv(false);
  };

  let hide_cashback_bpro_buy_btn = () => {
    setShowCashbackBproBtn(false);
    setShowCashbackBproDiv(true);
  };

  let show_cashback_neoq_buy_btn = () => {
    setShowCashbackNeoqBtn(true);
    setShowCashbackNeoqDiv(false);
  };

  let hide_cashback_neoq_buy_btn = () => {
    setShowCashbackNeoqBtn(false);
    setShowCashbackNeoqDiv(true);
  };

  let show_mobile_item_buy_btn = () => {
    setShowMobileItemBtn(true);
    setShowMobileItemDiv(false);
  };

  let hide_mobile_item_buy_btn = () => {
    setShowMobileItemBtn(false);
    setShowMobileItemDiv(true);
  };

  let show_mobile_zflip_buy_btn = () => {
    setShowMobileZFlipBtn(true);
    setShowMobileZFlipDiv(false);
  };

  let hide_mobile_zflip_buy_btn = () => {
    setShowMobileZFlipBtn(false);
    setShowMobileZFlipDiv(true);
  };

  let show_mobile_tabs7plus_buy_btn = () => {
    setShowMobileTabS7PlusBtn(true);
    setShowMobileTabS7PlusDiv(false);
  };

  let hide_mobile_tabs7plus_buy_btn = () => {
    setShowMobileTabS7PlusBtn(false);
    setShowMobileTabS7PlusDiv(true);
  };

  let show_mobile_watch_buy_btn = () => {
    setShowMobileWatchBtn(true);
    setShowMobileWatchDiv(false);
  };

  let hide_mobile_watch_buy_btn = () => {
    setShowMobileWatchBtn(false);
    setShowMobileWatchDiv(true);
  };

  let show_mobile_smarttag_buy_btn = () => {
    setShowMobileSmartTagBtn(true);
    setShowMobileSmartTagDiv(false);
  };

  let hide_mobile_smarttag_buy_btn = () => {
    setShowMobileSmartTagBtn(false);
    setShowMobileSmartTagDiv(true);
  };

  let show_tvav_neoqled_buy_btn = () => {
    setShowTVAVNeoQLEDBtn(true);
    setShowTVAVNeoQLEDDiv(false);
  };

  let hide_tvav_neoqled_buy_btn = () => {
    setShowTVAVNeoQLEDBtn(false);
    setShowTVAVNeoQLEDDiv(true);
  };

  let show_tvav_soundbar_buy_btn = () => {
    setShowTVAVSoundBarBtn(true);
    setShowTVAVSoundBarDiv(false);
  };

  let hide_tvav_soundbar_buy_btn = () => {
    setShowTVAVSoundBarBtn(false);
    setShowTVAVSoundBarDiv(true);
  };

  let show_tvav_projector_buy_btn = () => {
    setShowTVAVProjectorBtn(true);
    setShowTVAVProjectorDiv(false);
  };

  let hide_tvav_projector_buy_btn = () => {
    setShowTVAVProjectorBtn(false);
    setShowTVAVProjectorDiv(true);
  };

  let show_tvav_tvs_buy_btn = () => {
    setShowTVAVTVsBtn(true);
    setShowTVAVTVsDiv(false);
  };

  let hide_tvav_tvs_buy_btn = () => {
    setShowTVAVTVsBtn(false);
    setShowTVAVTVsDiv(true);
  };

  let show_tvav_soundtower_buy_btn = () => {
    setShowTVAVSoundTowerBtn(true);
    setShowTVAVSoundTowerDiv(false);
  };

  let hide_tvav_soundtower_buy_btn = () => {
    setShowTVAVSoundTowerBtn(false);
    setShowTVAVSoundTowerDiv(true);
  };

  let show_ha_vacuumcleaner_buy_btn = () => {
    setShowHAVacuumCleanerBtn(true);
    setShowHAVacuumCleanerDiv(false);
  };

  let hide_ha_vacuumcleaner_buy_btn = () => {
    setShowHAVacuumCleanerBtn(false);
    setShowHAVacuumCleanerDiv(true);
  };

  let show_ha_bespokerefri_buy_btn = () => {
    setShowHABespokeRefriBtn(true);
    setShowHABespokeRefriDiv(false);
  };

  let hide_ha_bespokerefri_buy_btn = () => {
    setShowHABespokeRefriBtn(false);
    setShowHABespokeRefriDiv(true);
  };

  let show_ha_3homeapp_buy_btn = () => {
    setShowHA3HomeAppBtn(true);
    setShowHA3HomeAppDiv(false);
  };

  let hide_ha_3homeapp_buy_btn = () => {
    setShowHA3HomeAppBtn(false);
    setShowHA3HomeAppDiv(true);
  };

  let show_ha_fridgefreezer_buy_btn = () => {
    setShowHAFridgeFreezerBtn(true);
    setShowHAFridgeFreezerDiv(false);
  };

  let hide_ha_fridgefreezer_buy_btn = () => {
    setShowHAFridgeFreezerBtn(false);
    setShowHAFridgeFreezerDiv(true);
  };

  let show_ha_washmachine_buy_btn = () => {
    setShowHAWashMachineBtn(true);
    setShowHAWashMachineDiv(false);
  };

  let hide_ha_washmachine_buy_btn = () => {
    setShowHAWashMachineBtn(false);
    setShowHAWashMachineDiv(true);
  };

  let show_lm_bookpro360_buy_btn = () => {
    setShowLMBookPro360Btn(true);
    setShowLMBookPro360Div(false);
  };

  let hide_lm_bookpro360_buy_btn = () => {
    setShowLMBookPro360Btn(false);
    setShowLMBookPro360Div(true);
  };

  let show_lm_bookpro_buy_btn = () => {
    setShowLMBookProBtn(true);
    setShowLMBookProDiv(false);
  };

  let hide_lm_bookpro_buy_btn = () => {
    setShowLMBookProBtn(false);
    setShowLMBookProDiv(true);
  };

  let show_lm_book_buy_btn = () => {
    setShowLMBookBtn(true);
    setShowLMBookDiv(false);
  };

  let hide_lm_book_buy_btn = () => {
    setShowLMBookBtn(false);
    setShowLMBookDiv(true);
  };

  let show_lm_mornitor_buy_btn = () => {
    setShowLMMornitorBtn(true);
    setShowLMMornitorDiv(false);
  };

  let hide_lm_mornitor_buy_btn = () => {
    setShowLMMornitorBtn(false);
    setShowLMMornitorDiv(true);
  };

  let show_lm_headphone_buy_btn = () => {
    setShowLMHeadPhoneBtn(true);
    setShowLMHeadPhoneDiv(false);
  };

  let hide_lm_headphone_buy_btn = () => {
    setShowLMHeadPhoneBtn(false);
    setShowLMHeadPhoneDiv(true);
  };

  let show_cashback_web = () => {
    setShowCashbackWeb(true);
    setShowMobileWeb(false);
    setShowTVAVWeb(false);
    setShowHomeApplianceWeb(false);
    setShowLaptopsMornitorsWeb(false);
  };

  let show_mobile_web = () => {
    setShowCashbackWeb(false);
    setShowMobileWeb(true);
    setShowTVAVWeb(false);
    setShowHomeApplianceWeb(false);
    setShowLaptopsMornitorsWeb(false);
  };

  let show_tvav_web = () => {
    setShowCashbackWeb(false);
    setShowMobileWeb(false);
    setShowTVAVWeb(true);
    setShowHomeApplianceWeb(false);
    setShowLaptopsMornitorsWeb(false);
  };

  let show_homeappliance_web = () => {
    setShowCashbackWeb(false);
    setShowMobileWeb(false);
    setShowTVAVWeb(false);
    setShowHomeApplianceWeb(true);
    setShowLaptopsMornitorsWeb(false);
  };

  let show_laptopsmornitors_web = () => {
    setShowCashbackWeb(false);
    setShowMobileWeb(false);
    setShowTVAVWeb(false);
    setShowHomeApplianceWeb(false);
    setShowLaptopsMornitorsWeb(true);
  };

  return (
    <div>
      <div className="row">
        <Carousel className="mt-5" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={TV}
              alt="First slide"
              height="550px"
            />
            <Carousel.Caption>
              <div className="text-left">
                <h1 className="font-weight-bold text-white">DESPOKE</h1>
                <h1 className="font-weight-bold text-white">
                  Visit the Bespoke Studio for a virtual showroom experience
                </h1>
                <p className="font-weight-bold">
                  Plus save up to $250 off selected Bespoke Refrigerators
                </p>
                <a src="#" className="mr-3 text-white text-decoration font-weight-bold">
                  Visit Bespoke Studio
                </a>
                <Button variant="light rounded-pill px-4">Shop</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Gifts}
              alt="Second slide"
              height="550px"
            />

            <Carousel.Caption>
              <div className="text-right">
                <h1 className="font-weight-bold">Gifts that give back</h1>
                <p className="text-dark mb-0">Claim cashback with every selected item
                 you buy.</p>
                <p className="text-dark mb-0"> With many products to mix and match you
                 can claim an extra</p>
                <p className="text-dark"> $50 cashback each time.</p>
                <Button variant="dark rounded-pill px-4">Shop now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Devices}
              alt="Third slide"
              height="550px"
            />

            <Carousel.Caption>
              <div className="text-left">
                <h1>Holiday opens up with Galaxy</h1>
                <p className="text-dark">Gifts for everyone on your list.</p>
                <p className="text-dark">Shop exclusive deals on Galaxy devices.</p>
                <a src="#" className="mr-3 text-decoration font-weight-bold text-dark">
                Shop now</a>
                <Button variant="dark rounded-pill px-4">See offers</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={LEDTV}
              alt="Third slide"
              height="550px"
            />

            <Carousel.Caption>
              <div className="text-left">
                <h1 className="font-weight-bold text-white">Neo QLED TV</h1>
                <p className="font-weight-bold text-white">
                Greatness never ends, but evolves</p>
                <Button variant="light rounded-pill px-4 mt-3">Buy Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="row">
        <h1 className="font-weight-bold text-dark text-center mt-5 mb-5">Latest Deals</h1>
      </div>
      <div className="row">
        <div className="col text-center mb-3">
          <Button variant="link text-dark mx-2" onClick={() => show_cashback_web()}>
            Cashback
          </Button>
          <Button variant="link text-dark mx-2" onClick={() => show_mobile_web()}>
            Mobile
          </Button>
          <Button variant="link text-dark mx-2" onClick={() => show_tvav_web()}>
            TV & AV
          </Button>
          <Button variant="link text-dark mx-2" onClick={() => show_homeappliance_web()}>
            Home Appliances
          </Button>
          <Button variant="link text-dark mx-2" onClick={() => show_laptopsmornitors_web()}>
            Laptops & Monoitors
          </Button>
        </div>
      </div>
      { showCashbackWeb ? 
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-5">
          <a src="#" onMouseOver={() => show_cashback_item_buy_btn()} onMouseOut={() => hide_cashback_item_buy_btn()}>
            <img
              className="d-block w-100 border-top-rounded"
              src={Gifts}
              height="400px"
            />
            <div className="mt-5 font-size font-weight-bold">
              Claim an extra $50 cashback with
            </div>
            <div className="font-size font-weight-bold mb-2">
              every selected item you buy
            </div>
            { showCashbackItemDiv ? 
              <div className="height">Gifts that give back</div>
            : null }
            { showCashbackItemBtn ? 
              <div className="height">
                <Button variant="dark rounded-pill px-4">Learn more</Button>
              </div>
            : null }
          </a>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_cashback_z_buy_btn()} onMouseOut={() => hide_cashback_z_buy_btn()}>
              <img
                className="d-block w-100"
                src={ZFold3}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim an extra $200 cashback on Galaxy Z Fold3 5G
              </div>
              { showCashbackZDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showCashbackZBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_cashback_vcleaner_buy_btn()} onMouseOut={() => hide_cashback_vcleaner_buy_btn()}>
              <img
                className="d-block w-100"
                src={BookPro}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim an extra $200 cashback on Galaxy Book Pro 360
              </div>
              { showCashbackVcleanerDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showCashbackVcleanerBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_cashback_bpro_buy_btn()} onMouseOut={() => hide_cashback_bpro_buy_btn()}>
              <img
                className="d-block w-100"
                src={VacuumCleaner}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim cashback on selected vacuum cleaners
              </div>
              { showCashbackBproDiv ?
                <div className="height">Gifts that give back</div>
              : null }
              { showCashbackBproBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_cashback_neoq_buy_btn()} onMouseOut={() => hide_cashback_neoq_buy_btn()}>
              <img
                className="d-block w-100"
                src={NeoQLED}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim an extra $200 cashback on selected Neo QLED 8K TV
              </div>
              { showCashbackNeoqDiv ?
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showCashbackNeoqBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
      </div>
      : null }
      { showMobileWeb ? 
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-5">
          <a src="#" onMouseOver={() => show_mobile_item_buy_btn()} onMouseOut={() => hide_mobile_item_buy_btn()}>
            <img
              className="d-block w-100 border-top-rounded"
              src={Gifts}
              height="400px"
            />
            <div className="mt-5 font-size font-weight-bold">
              Claim an extra $365 cashback when you buy
            </div>
            <div className="font-size font-weight-bold mb-2">
              these together
            </div>
            { showMobileItemDiv ? 
              <div className="height">Gifts that give back</div>
            : null }
            { showMobileItemBtn ? 
              <div className="height">
                <Button variant="dark rounded-pill px-4">Learn more</Button>
              </div>
            : null }
          </a>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_mobile_zflip_buy_btn()} onMouseOut={() => hide_mobile_zflip_buy_btn()}>
              <img
                className="d-block w-100"
                src={ZFlip3}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $150 cashback on Galaxy Z Flip3 5G
              </div>
              { showMobileZFlipDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showMobileZFlipBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_mobile_tabs7plus_buy_btn()} onMouseOut={() => hide_mobile_tabs7plus_buy_btn()}>
              <img
                className="d-block w-100"
                src={TabS7Plus}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $75 cashback on Galaxy Tab S7+
              </div>
              { showMobileTabS7PlusDiv ?
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showMobileTabS7PlusBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_mobile_watch_buy_btn()} onMouseOut={() => hide_mobile_watch_buy_btn()}>
              <img
                className="d-block w-100"
                src={Watch4}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $75 cashback on Galaxy Watch4 Classic
              </div>
              { showMobileWatchDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showMobileWatchBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_mobile_smarttag_buy_btn()} onMouseOut={() => hide_mobile_smarttag_buy_btn()}>
              <img
                className="d-block w-100"
                src={SmartTag}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Get 80% off SmartTags
              </div>
              { showMobileSmartTagDiv ?
                <div className="height">On purchases over $100 on mobile products</div>
              : null }
              { showMobileSmartTagBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
      </div>
      : null }
      { showTVAVWeb ? 
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-5">
          <a src="#" onMouseOver={() => show_tvav_neoqled_buy_btn()} onMouseOut={() => hide_tvav_neoqled_buy_btn()}>
            <img
              className="d-block w-100 border-top-rounded"
              src={NeoQLED8K}
              height="400px"
            />
            <div className="mt-5 font-size font-weight-bold">
              Claim $500 Cashback on selected
            </div>
            <div className="font-size font-weight-bold mb-2">
              Neo QLED 8K TVs
            </div>
            { showTVAVNeoQLEDDiv ? 
              <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
            : null }
            { showTVAVNeoQLEDBtn ? 
              <div className="height">
                <Button variant="dark rounded-pill px-4">Buy</Button>
              </div>
            : null }
          </a>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_tvav_soundbar_buy_btn()} onMouseOut={() => hide_tvav_soundbar_buy_btn()}>
              <img
                className="d-block w-100"
                src={SoundBar}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $200 Cashback on selected SoundBars
              </div>
              { showTVAVSoundBarDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showTVAVSoundBarBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_tvav_projector_buy_btn()} onMouseOut={() => hide_tvav_projector_buy_btn()}>
              <img
                className="d-block w-100"
                src={Projector}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $200 Cashback on selected Projectors
              </div>
              { showTVAVProjectorDiv ?
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showTVAVProjectorBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_tvav_tvs_buy_btn()} onMouseOut={() => hide_tvav_tvs_buy_btn()}>
              <img
                className="d-block w-100"
                src={TVs}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Save up to $500 on selected TVs
              </div>
              { showTVAVTVsDiv ? 
                <div className="height">Plus free next day delivery & finance available</div>
              : null }
              { showTVAVTVsBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_tvav_soundtower_buy_btn()} onMouseOut={() => hide_tvav_soundtower_buy_btn()}>
              <img
                className="d-block w-100"
                src={SoundTower}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $100 Cashback on selected Sound Towers
              </div>
              { showTVAVSoundTowerDiv ?
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showTVAVSoundTowerBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
      </div>
      : null }
      { showHomeApplianceWeb ? 
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-5">
          <a src="#" onMouseOver={() => show_ha_vacuumcleaner_buy_btn()} onMouseOut={() => hide_ha_vacuumcleaner_buy_btn()}>
            <img
              className="d-block w-100 border-top-rounded"
              src={HomeVacuumCleaner}
              height="400px"
            />
            <div className="mt-5 font-size font-weight-bold">
              Claim cashback on selected vacuum
            </div>
            <div className="font-size font-weight-bold mb-2">
              cleaners
            </div>
            { showHAVacuumCleanerDiv ? 
              <div className="height">Gifts that give back</div>
            : null }
            { showHAVacuumCleanerBtn ? 
              <div className="height">
                <Button variant="dark rounded-pill px-4">Buy</Button>
              </div>
            : null }
          </a>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_ha_bespokerefri_buy_btn()} onMouseOut={() => hide_ha_bespokerefri_buy_btn()}>
              <img
                className="d-block w-100"
                src={BespokeRefrigerator}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $250 off selected Bespoke Refrigerators
              </div>
              { showHABespokeRefriDiv ? 
                <div className="height">Plus free delivery & installation available</div>
              : null }
              { showHABespokeRefriBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_ha_3homeapp_buy_btn()} onMouseOut={() => hide_ha_3homeapp_buy_btn()}>
              <img
                className="d-block w-100"
                src={HomeAppliance3}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Save 20% when you buy 3 selected home appliances
              </div>
              { showHA3HomeAppDiv ?
                <div className="height">or save 15% when you buy two</div>
              : null }
              { showHA3HomeAppBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_ha_fridgefreezer_buy_btn()} onMouseOut={() => hide_ha_fridgefreezer_buy_btn()}>
              <img
                className="d-block w-100"
                src={FridgeFreezer}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Up to $300 off selected Fridge Freezer
              </div>
              { showHAFridgeFreezerDiv ? 
                <div className="height">Plus free delivery available in mainland UK</div>
              : null }
              { showHAFridgeFreezerBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_ha_washmachine_buy_btn()} onMouseOut={() => hide_ha_washmachine_buy_btn()}>
              <img
                className="d-block w-100"
                src={WashingMachine}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Up to $100 off selected washing machines
              </div>
              { showHAWashMachineDiv ?
                <div className="height">and up to $50 off selected tumble dryers</div>
              : null }
              { showHAWashMachineBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
      </div>
      : null }
      { showLaptopsMornitorsWeb ? 
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-5">
          <a src="#" onMouseOver={() => show_lm_bookpro360_buy_btn()} onMouseOut={() => hide_lm_bookpro360_buy_btn()}>
            <img
              className="d-block w-100 border-top-rounded"
              src={BookPro360}
              height="400px"
            />
            <div className="mt-5 font-size font-weight-bold">
              Claim $200 cashback on Galaxy Book
            </div>
            <div className="font-size font-weight-bold mb-2">
              Pro 360
            </div>
            { showLMBookPro360Div ? 
              <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
            : null }
            { showLMBookPro360Btn ? 
              <div className="height">
                <Button variant="dark rounded-pill px-4">Buy</Button>
              </div>
            : null }
          </a>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_lm_bookpro_buy_btn()} onMouseOut={() => hide_lm_bookpro_buy_btn()}>
              <img
                className="d-block w-100"
                src={Book_Pro}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $150 cashback on Galaxy Book Pro
              </div>
              { showLMBookProDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showLMBookProBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_lm_mornitor_buy_btn()} onMouseOut={() => hide_lm_mornitor_buy_btn()}>
              <img
                className="d-block w-100"
                src={Mornitor}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Save up to $258 on selected mornitors
              </div>
              { showLMMornitorDiv ?
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showLMMornitorBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_lm_book_buy_btn()} onMouseOut={() => hide_lm_book_buy_btn()}>
              <img
                className="d-block w-100"
                src={Book}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Claim $100 cashback on Galaxy Book
              </div>
              { showLMBookDiv ? 
                <div className="height">Plus an extra $50 cashback with every selected item you buy</div>
              : null }
              { showLMBookBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
          <div className="mb-5">
            <a src="#" onMouseOver={() => show_lm_headphone_buy_btn()} onMouseOut={() => hide_lm_headphone_buy_btn()}>
              <img
                className="d-block w-100"
                src={HeadPhone}
                height="150px"
              />
              <div className="mt-2 font-size-sm font-weight-bold mb-2">
                Get free headphones
              </div>
              { showLMHeadPhoneDiv ?
                <div className="height">when you buy selected mornitors</div>
              : null }
              { showLMHeadPhoneBtn ? 
                <div className="height">
                  <Button variant="dark rounded-pill px-4">Buy</Button>
                </div>
              : null }
            </a>
          </div>
        </div>
      </div>
      : null }
      <MobileHomePage />
      <TvavHomePage />
      <HomeAHomePage />
      <ExploreHomePage />
    </div>
  );
}

export default HomePage;