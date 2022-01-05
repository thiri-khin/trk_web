import React, {useState} from 'react';
import { Menu, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faShoppingCart,
  faChevronDown,
  faChevronRight,
  faTimes } from '@fortawesome/free-solid-svg-icons';
import { 
  faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../photo/Font-Samsung-Logo.jpg';
import ZFlip3 from '../photo/z-flip3-bespoke-edition.jpg';
import NeoQLED from '../photo/neo-q-led-menu.jpg';
import FridgeFreezer from '../photo/fridge-freezer-menu.jpg';
import BookPro360 from '../photo/book-pro-360-menu.jpg';
import DigitalFlipchart from '../photo/digital-flipchart-menu.jpg';
import HomeApp from '../photo/home-app-menu.jpg';
import Offers from '../photo/offers-menu.jpg';
import Curated from '../photo/curated-menu.JPG';
import Explore from '../photo/explore-menu.jpg';
import Support from '../photo/support-menu.jpg';
import ForBusiness from '../photo/for-business-menu.jpeg';
import '../css/header.css';

function HeaderlgMenu (props) {

  const [mobile_items, set_mobile_items] = useState([
    {
      child_item_num: 9,
      item: 'Featured',
      show_child_items: true,
      child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
    }, 
    {
      child_item_num: 10,
      item: 'Smartphones',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
    }, 
    {
      child_item_num: 7,
      item: 'Tablets',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
    }, 
    {
      child_item_num: 9,
      item: 'Galaxy Book',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
    }, 
    {
      child_item_num: 6,
      item: 'Watches',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
    }, 
    {
      child_item_num: 5,
      item: 'Galaxy Buds',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
    }, 
    {
      child_item_num: 6,
      item: 'Accessories',
      show_child_items: false,
      child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
    }, 
    {
      child_item_num: 11,
      item: 'One UI',
      show_child_items: false,
      child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
    }, 
    {
      child_item_num: 0,
      item: 'Galaxy gifts',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Why Galaxy',
      show_child_items: false,
      child_items: []
    }
  ]);
  const [tvav_items, set_tvav_items] = useState([
    {
      child_item_num: 10,
      item: 'Featured',
      show_child_items: true,
      child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
    }, 
    {
      child_item_num: 10,
      item: 'TVs',
      show_child_items: false,
      child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
    }, 
    {
      child_item_num: 8,
      item: 'Lifestyle TVs',
      show_child_items: false,
      child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
    }, 
    {
      child_item_num: 7,
      item: 'TV by Size',
      show_child_items: false,
      child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
    }, 
    {
      child_item_num: 7,
      item: 'Sound Devices',
      show_child_items: false,
      child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
    }, 
    {
      child_item_num: 3,
      item: 'Projectors',
      show_child_items: false,
      child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
    }, 
    {
      child_item_num: 3,
      item: 'Business TVs',
      show_child_items: false,
      child_items: ['Crystal UHD', 'The Terrace', 'See All']
    }
  ]);
  const [home_app_items, set_home_app_items] = useState([
    {
      child_item_num: 12,
      item: 'Featured',
      show_child_items: true,
      child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
    }, 
    {
      child_item_num: 3,
      item: 'BESPOKE',
      show_child_items: false,
      child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
    }, 
    {
      child_item_num: 10,
      item: 'Refrigerators',
      show_child_items: false,
      child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
    }, 
    {
      child_item_num: 6,
      item: 'Laundry',
      show_child_items: false,
      child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
    }, 
    {
      child_item_num: 7,
      item: 'Cooking Appliances',
      show_child_items: false,
      child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
    }, 
    {
      child_item_num: 4,
      item: 'Dishwashers',
      show_child_items: false,
      child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
    }, 
    {
      child_item_num: 5,
      item: 'Vacuum Cleaners',
      show_child_items: false,
      child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
    }, 
    {
      child_item_num: 2,
      item: 'Climate Solutions',
      show_child_items: false,
      child_items: ['For Business', 'For Home']
    }
  ]);
  const [computing_items, set_computing_items] = useState([
    {
      child_item_num: 8,
      item: 'Featured',
      show_child_items: true,
      child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
    }, 
    {
      child_item_num: 8,
      item: 'Galaxy Book',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
    }, 
    {
      child_item_num: 5,
      item: 'Galaxy Book By Size',
      show_child_items: false,
      child_items: ['Overview', '15"', '13"', '11"', 'See All']
    }, 
    {
      child_item_num: 8,
      item: 'Computer Monitors',
      show_child_items: false,
      child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
    }, 
    {
      child_item_num: 6,
      item: 'Memory & Storage',
      show_child_items: false,
      child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
    }
  ]);
  const [displays_items, set_displays_items] = useState([
    {
      child_item_num: 8,
      item: 'Monitors',
      show_child_items: true,
      child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
    }, 
    {
      child_item_num: 7,
      item: 'SMART Signage',
      show_child_items: false,
      child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
    }, 
    {
      child_item_num: 2,
      item: 'LED Signage',
      show_child_items: false,
      child_items: ['The Wall', 'See All']
    }, 
    {
      child_item_num: 4,
      item: 'Commercial TVs',
      show_child_items: false,
      child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
    }
  ]);
  const [smart_home_items, set_smart_home_items] = useState([
    {
      child_item_num: 2,
      item: 'Getting Started',
      show_child_items: true,
      child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
    }, 
    {
      child_item_num: 3,
      item: 'SmartThings',
      show_child_items: false,
      child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
    }, 
    {
      child_item_num: 4,
      item: 'Entertainment Experience',
      show_child_items: false,
      child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
    }, 
    {
      child_item_num: 4,
      item: 'Home Monitoring',
      show_child_items: false,
      child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
    }, 
    {
      child_item_num: 1,
      item: 'Cooking',
      show_child_items: false,
      child_items: ['Check the Fridge from Anywhere']
    }, 
    {
      child_item_num: 2,
      item: 'Clothing Care',
      show_child_items: false,
      child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
    }
  ]);
  const [offers_items, set_offers_items] = useState([
    {
      child_item_num: 8,
      item: 'Offers',
      show_child_items: true,
      child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
    }, 
    {
      child_item_num: 0,
      item: 'Samsung Live',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 9,
      item: 'Smart Ways to Shop',
      show_child_items: false,
      child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
    }, 
    {
      child_item_num: 0,
      item: 'Redeem an offer',
      show_child_items: false,
      child_items: []
    },
    {
      child_item_num: 3,
      item: 'Spotlight',
      show_child_items: false,
      child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
    }
  ]);
  const [curated_items, set_curated_items] = useState([
    {
      child_item_num: 0,
      item: 'Our Planet First',
      show_child_items: true,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Work From Home',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Game On',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Flexi-spaces',
      show_child_items: false,
      child_items: []
    }
  ]);
  const [explore_items, set_explore_items] = useState([
    {
      child_item_num: 5,
      item: 'Stories',
      show_child_items: true,
      child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
    }, 
    {
      child_item_num: 2,
      item: 'Brand',
      show_child_items: false,
      child_items: ['Brand', 'Galaxy Collaborations']
    }, 
    {
      child_item_num: 0,
      item: 'How-to',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 3,
      item: 'Experiences',
      show_child_items: false,
      child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
    }, 
    {
      child_item_num: 0,
      item: 'Samsung KX',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Community',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Corporate Citizenship',
      show_child_items: false,
      child_items: []
    }
  ]);
  const [support_items, set_support_items] = useState([
    {
      child_item_num: 6,
      item: 'Product Help',
      show_child_items: true,
      child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
    }, 
    {
      child_item_num: 5,
      item: 'Repairs & Support',
      show_child_items: false,
      child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
    }, 
    {
      child_item_num: 3,
      item: 'Contact',
      show_child_items: false,
      child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
    }, 
    {
      child_item_num: 6,
      item: 'Trending FAQs',
      show_child_items: false,
      child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
    }, 
    {
      child_item_num: 5,
      item: 'Online Shop Support',
      show_child_items: false,
      child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
    }
  ]);
  const [for_business_items, set_for_business_items] = useState([
    {
      child_item_num: 0,
      item: 'Business Home',
      show_child_items: true,
      child_items: []
    }, 
    {
      child_item_num: 9,
      item: 'Mobile',
      show_child_items: false,
      child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
    }, 
    {
      child_item_num: 9,
      item: 'Displays',
      show_child_items: false,
      child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
    }, 
    {
      child_item_num: 11,
      item: 'Climate',
      show_child_items: false,
      child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
    }, 
    {
      child_item_num: 6,
      item: 'Computing',
      show_child_items: false,
      child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
    }, 
    {
      child_item_num: 7,
      item: 'Appliance',
      show_child_items: false,
      child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
    }, 
    {
      child_item_num: 8,
      item: 'Industries',
      show_child_items: false,
      child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
    }, 
    {
      child_item_num: 0,
      item: 'Business Offers',
      show_child_items: false,
      child_items: []
    }, 
    {
      child_item_num: 0,
      item: 'Insights',
      show_child_items: false,
      child_items: []
    }
  ]);
  const [visibleSignIn, setVisibleSignIn] = useState(false);
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
  const [visibleTVAVMenu, setVisibleTVAVMenu] = useState(false);
  const [visibleHomeAppMenu, setVisibleHomeAppMenu] = useState(false);
  const [visibleComputingMenu, setVisibleComputingMenu] = useState(false);
  const [visibleDisplaysMenu, setVisibleDisplaysMenu] = useState(false);
  const [visibleSmartHomeMenu, setVisibleSmartHomeMenu] = useState(false);
  const [visibleOffersMenu, setVisibleOffersMenu] = useState(false);
  const [visibleCuratedMenu, setVisibleCuratedMenu] = useState(false);
  const [visibleExploreMenu, setVisibleExploreMenu] = useState(false);
  const [visibleSupportMenu, setVisibleSupportMenu] = useState(false);
  const [visibleForBusinessMenu, setVisibleForBusinessMenu] = useState(false);

  let handleMenuClick = e => {
    if (e.key === '3') {
      setVisibleSignIn(false);
    }
  };

  let handleVisibleChangeSignIn = flag => {
    setVisibleSignIn(flag);
  };

  let menusignin = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <FontAwesomeIcon icon={faUser} /> Sign In/Sign-Up
      </Menu.Item>
      <Menu.Item key="2">Orders</Menu.Item>
      <Menu.Item key="3">Product Registration</Menu.Item>
      <Menu.Item key="4">Members</Menu.Item>
    </Menu>
  );

  let handleVisibleChangeMobileMenu = flag => {
    setVisibleMobileMenu(true);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleMobileClick = e => {
    setVisibleMobileMenu(false);
  };

  let show_mobile_child_items = (value) => {
    if (value.item === 'Featured') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: true,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Smartphones') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Tablets') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Galaxy Book') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Watches') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Galaxy Buds') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Accessories') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: true,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'One UI') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: true,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Galaxy gifts') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Why Galaxy') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: true,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Galaxy Bespoke', 'Galaxy Z Flip3 5G', 'Galaxy Z Fold3 5G', 'Galaxy S21 Ultra 5G', 'Galaxy S21| S21 + 5G', 'Galaxy A52s 5G', 'Galaxy Watch4', 'Galaxy Watch4 Classic', 'Galaxy Buds2']
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Z', 'Galaxy S', 'Galaxy A', 'Galaxy M', 'Phone Contracts', 'Accessories', 'See All', 'Compare', 'Help Me Choose']
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Tab S', 'Galaxy Tab A', 'Galaxy Book', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Watch', 'Galaxy Watch4 Bespoke Studio', 'Accessories', 'See All', 'Compare']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Buds', 'AKG Headphones', 'See All', 'Compare']
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones Accessories', 'Tablets Accessories', 'Galaxy Book Accessories', 'Watches Accessories', 'See All']
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: ['One UI Overview', 'App & Services Overview', 'Galaxy Store', 'Bixby', 'Samsung Pay', 'Samsung Health', 'Samsung Health Monitor', 'Samsung DeX', 'Samsung Members', 'SmartThings', 'Smart Switch']
          }, 
          {
            child_item_num: 0,
            item: 'Galaxy gifts',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Why Galaxy',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    }
  };

  let mobile_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Mobile
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleMobileClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {mobile_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_mobile_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {mobile_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={ZFlip3}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Galaxy Z Flip3 Bespoke Edition
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Customise now</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeTVAVMenu = flag => {
    setVisibleTVAVMenu(true);
    setVisibleMobileMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleTVAVClick = e => {
    setVisibleTVAVMenu(false);
  };

  let show_tvav_child_items = (value) => {
    if (value.item === 'Featured') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: true,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    } else if (value.item === 'TVs') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: true,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Lifestyle TVs') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: true,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    } else if (value.item === 'TV by Size') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: true,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Sound Devices') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: true,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Projectors') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: true,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Business TVs') {
      if (value.show_child_items === false) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: true,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_tvav_items([
          {
            child_item_num: 10,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Help me choose', '2021 Neo QLED', '2021 The Frame', 'Q-series Soundbar', 'Why Samsung Smart TV?', 'Gaming TV', 'Multi View', 'Super Big TV', 'TV Buying Guide' ,'Finance Options']
          }, 
          {
            child_item_num: 10,
            item: 'TVs',
            show_child_items: false,
            child_items: ['Overview', 'Neo QLED', 'QLED', 'Crystal UHD', '8K TVs', '4K TVs', 'Full HD/HD TVs', 'Smart TVs', 'TV Accessories' ,'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Lifestyle TVs',
            show_child_items: false,
            child_items: ['Overview', 'The Frame', 'The Serif', 'The Sero', 'NEW The Terrace', 'NEW The Premiere', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'TV by Size',
            show_child_items: false,
            child_items: ['85"', '75"', '65"', '55"', '50"', 'What Size TV Should I Get?', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Sound Devices',
            show_child_items: false,
            child_items: ['Overview', 'Q-series Soundbars', 'S-series Soundbars', 'Soundbars with Subwoofer', 'Sound Towers', 'Audio Accessories', 'See All']
          }, 
          {
            child_item_num: 3,
            item: 'Projectors',
            show_child_items: false,
            child_items: ['The Premiere 4K Triple Laser', 'The Premiere 4K Laser']
          }, 
          {
            child_item_num: 3,
            item: 'Business TVs',
            show_child_items: false,
            child_items: ['Crystal UHD', 'The Terrace', 'See All']
          }
        ]);
      }
    }
  };

  let tvav_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            TV & AV
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleTVAVClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {tvav_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_tvav_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {tvav_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={NeoQLED}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Neo QLED TV. Greatness never ends, but evolves.
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Buy</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeHomeAppMenu = flag => {
    setVisibleHomeAppMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleHomeAppClick = e => {
    setVisibleHomeAppMenu(false);
  };

  let show_home_app_child_items = (value) => {
    if (value.item === 'Featured') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: true,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'BESPOKE') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: true,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'Refrigerators') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: true,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'Laundry') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: true,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'Cooking Appliances') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: true,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'Dishwashers') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: true,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'Vacuum Cleaners') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: true,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    } else if (value.item === 'Climate Solutions') {
      if (value.show_child_items === false) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: true,
            child_items: ['For Business', 'For Home']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_home_app_items([
          {
            child_item_num: 12,
            item: 'Featured',
            show_child_items: false,
            child_items: ['BESPOKE Studio', 'Jet BotTM Robot Vacuums', 'New ecobubbleTM', 'QuickDriveTM', 'Samsung JetTM', 'Built in Kitchen', 'Air Dresser', 'Buying Guide', 'New Energy Efficiency Label Ratings' ,'Energy savings tool', 'Top picks for a healthy home', 'Home Appliances Support']
          }, 
          {
            child_item_num: 3,
            item: 'BESPOKE',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Customise Your Refrigerator']
          }, 
          {
            child_item_num: 10,
            item: 'Refrigerators',
            show_child_items: false,
            child_items: ['Overview', 'BESPOKE Refrigerators', 'Smart Fridge Freezers', 'French Style Fridge Freezer', 'Classic Fridge Freezers', 'Integrated Fridge Freezers', 'Fridges', 'Freezers', 'Water Filters' ,'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Laundry',
            show_child_items: false,
            child_items: ['Overview', 'Washing Machines', 'Washer Dryers', 'Tumble Dryers', 'AirDresser', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'Cooking Appliances',
            show_child_items: false,
            child_items: ['Overview', 'Infinite LineTM', 'Ovens', 'Hobs', 'Hoods', 'Microwaves', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Dishwashers',
            show_child_items: false,
            child_items: ['Overview', 'Built-in Dishwashers', 'Freestanding Dishwashers', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Vacuum Cleaners',
            show_child_items: false,
            child_items: ['Overview', 'JetTM Cordless Stick Vacuums', 'Jet BotTM Robot Vacuums', 'Battery Packs & Accessories', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'Climate Solutions',
            show_child_items: false,
            child_items: ['For Business', 'For Home']
          }
        ]);
      }
    }
  };

  let home_app_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Home Appliances
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleHomeAppClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {home_app_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_home_app_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {home_app_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={FridgeFreezer}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Save up to $300 off selected Fridge Freezers.
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Shop</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeComputingMenu = flag => {
    setVisibleComputingMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleComputingClick = e => {
    setVisibleComputingMenu(false);
  };

  let show_computing_child_items = (value) => {
    if (value.item === 'Featured') {
      if (value.show_child_items === false) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: true,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Galaxy Book') {
      if (value.show_child_items === false) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Galaxy Book By Size') {
      if (value.show_child_items === false) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: true,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Computer Monitors') {
      if (value.show_child_items === false) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: true,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Memory & Storage') {
      if (value.show_child_items === false) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: true,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_computing_items([
          {
            child_item_num: 8,
            item: 'Featured',
            show_child_items: false,
            child_items: ['Memory & Storage', 'Smart Monitor', 'The Best Gaming Monitor', '2TB Portable Solid State Drive', 'High Resolution Monitor', '4TB Solid State Drive', '256GB Evo Plus Micro SD', 'Galaxy Book']
          }, 
          {
            child_item_num: 8,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book Pro 360 5G', 'Galaxy Book Pro', 'Galaxy Book', 'Galaxy Book Go', 'Samsung Chromebook', 'Accessories', 'See All']
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Book By Size',
            show_child_items: false,
            child_items: ['Overview', '15"', '13"', '11"', 'See All']
          }, 
          {
            child_item_num: 8,
            item: 'Computer Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 6,
            item: 'Memory & Storage',
            show_child_items: false,
            child_items: ['Overview', 'SSD', 'Portable SSD', 'Memory Cards', 'USB Flash Drive', 'See All']
          }
        ]);
      }
    }
  };

  let computing_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Computing
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleComputingClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {computing_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_computing_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {computing_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={BookPro360}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Galaxy Book Pro 360
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeDisplaysMenu = flag => {
    setVisibleDisplaysMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleDisplaysClick = e => {
    setVisibleDisplaysMenu(false);
  };

  let show_displays_child_items = (value) => {
    if (value.item === 'Monitors') {
      if (value.show_child_items === false) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: true,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      }
    } else if (value.item === 'SMART Signage') {
      if (value.show_child_items === false) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: true,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      }
    } else if (value.item === 'LED Signage') {
      if (value.show_child_items === false) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: true,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      }
    } else if (value.item === 'Commercial TVs') {
      if (value.show_child_items === false) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: true,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_displays_items([
          {
            child_item_num: 8,
            item: 'Monitors',
            show_child_items: false,
            child_items: ['Overview', 'Smart Monitor', 'Gaming', 'High Resolution', 'Curved', 'Flat', 'Business', 'See All']
          }, 
          {
            child_item_num: 7,
            item: 'SMART Signage',
            show_child_items: false,
            child_items: ['Overview', 'QLED 8K', 'Crystal UHD', 'Video Wall', 'Outdoor & Window', 'Interactive', 'See All']
          }, 
          {
            child_item_num: 2,
            item: 'LED Signage',
            show_child_items: false,
            child_items: ['The Wall', 'See All']
          }, 
          {
            child_item_num: 4,
            item: 'Commercial TVs',
            show_child_items: false,
            child_items: ['Overview', 'Business TVs', 'Hotel TVs', 'See All']
          }
        ]);
      }
    }
  };

  let displays_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Displays
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleDisplaysClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {displays_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_displays_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {displays_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={DigitalFlipchart}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Digital flipchart
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeSmartHomeMenu = flag => {
    setVisibleSmartHomeMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleSmartHomeClick = e => {
    setVisibleSmartHomeMenu(false);
  };

  let show_smart_home_child_items = (value) => {
    if (value.item === 'Getting Started') {
      if (value.show_child_items === false) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: true,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      }
    } else if (value.item === 'SmartThings') {
      if (value.show_child_items === false) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: true,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      }
    } else if (value.item === 'Entertainment Experience') {
      if (value.show_child_items === false) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: true,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      }
    } else if (value.item === 'Home Monitoring') {
      if (value.show_child_items === false) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: true,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      }
    } else if (value.item === 'Cooking') {
      if (value.show_child_items === false) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: true,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      }
    } else if (value.item === 'Clothing Care') {
      if (value.show_child_items === false) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: true,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_smart_home_items([
          {
            child_item_num: 2,
            item: 'Getting Started',
            show_child_items: false,
            child_items: ['Simplify Life with Smart Product Bundles', 'Take Control with SmartThings']
          }, 
          {
            child_item_num: 3,
            item: 'SmartThings',
            show_child_items: false,
            child_items: ['About SmartThings', 'SmartThings Products', 'Smart Energy Control']
          }, 
          {
            child_item_num: 4,
            item: 'Entertainment Experience',
            show_child_items: false,
            child_items: ['Shoot and Watch in 8K', 'Turn your TV for Livecast', 'Split Your Screen, Double Up the Fun', 'Set the Mood']
          }, 
          {
            child_item_num: 4,
            item: 'Home Monitoring',
            show_child_items: false,
            child_items: ['See Who\'s at the Door from TV', 'Babysit from Any Room', 'Check Every Corner of Your House on TV', 'Answer the Door from Your Fridge']
          }, 
          {
            child_item_num: 1,
            item: 'Cooking',
            show_child_items: false,
            child_items: ['Check the Fridge from Anywhere']
          }, 
          {
            child_item_num: 2,
            item: 'Clothing Care',
            show_child_items: false,
            child_items: ['Let Smart Laundry Make Your Day', 'Freshen Up Your Outfit Everyday']
          }
        ]);
      }
    }
  };

  let smart_home_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Smart Home
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleSmartHomeClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {smart_home_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_smart_home_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {smart_home_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={HomeApp}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Let smart laundry make your day
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeOffersMenu = flag => {
    setVisibleOffersMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleOffersClick = e => {
    setVisibleOffersMenu(false);
  };

  let show_offers_child_items = (value) => {
    if (value.item === 'Offers') {
      if (value.show_child_items === false) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: true,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      }
    } else if (value.item === 'Samsung Live') {
      if (value.show_child_items === false) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      }
    } else if (value.item === 'Smart Ways to Shop') {
      if (value.show_child_items === false) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: true,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      }
    } else if (value.item === 'Redeem an offer') {
      if (value.show_child_items === false) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: true,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      }
    } else if (value.item === 'Spotlight') {
      if (value.show_child_items === false) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: true,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_offers_items([
          {
            child_item_num: 8,
            item: 'Offers',
            show_child_items: false,
            child_items: ['See All Offers', 'Mobile Offers', 'Student Offers', 'Television Offers', 'Home Appliances Offers', 'Sign up for Offers', 'Redeem an offer', 'Samsung Live']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung Live',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Smart Ways to Shop',
            show_child_items: false,
            child_items: ['See All My Options', 'Phone Contracts', 'Pay with Klarna', 'Pay with PayPal', 'Trade In', 'Upgrade Programme', 'Upgrade Members', 'Samsung Care+', 'Samsung Rewards']
          }, 
          {
            child_item_num: 0,
            item: 'Redeem an offer',
            show_child_items: false,
            child_items: []
          },
          {
            child_item_num: 3,
            item: 'Spotlight',
            show_child_items: false,
            child_items: ['Smart Monitor', 'Bespoke Refrigerators', 'Home Lifestyle']
          }
        ]);
      }
    }
  };

  let offers_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Offers
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleOffersClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {offers_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_offers_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {offers_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={Offers}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            The unmissable Winter Sale
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">See all offers</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeCuratedMenu = flag => {
    setVisibleCuratedMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleCuratedClick = e => {
    setVisibleCuratedMenu(false);
  };

  let show_curated_child_items = (value) => {
    if (value.item === 'Our Planet First') {
      if (value.show_child_items === false) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Work From Home') {
      if (value.show_child_items === false) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Game On') {
      if (value.show_child_items === false) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Flexi-spaces') {
      if (value.show_child_items === false) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: true,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_curated_items([
          {
            child_item_num: 0,
            item: 'Our Planet First',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Work From Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Game On',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Flexi-spaces',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    }
  };

  let curated_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            #Curated
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleCuratedClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {curated_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_curated_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {curated_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={Curated}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Miximise your home with multipurpose spaces
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeExploreMenu = flag => {
    setVisibleExploreMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleSupportMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleExploreClick = e => {
    setVisibleExploreMenu(false);
  };

  let show_explore_child_items = (value) => {
    if (value.item === 'Stories') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: true,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Brand') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: true,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'How-to') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Experiences') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: true,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Samsung KX') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Community') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Corporate Citizenship') {
      if (value.show_child_items === false) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: true,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_explore_items([
          {
            child_item_num: 5,
            item: 'Stories',
            show_child_items: false,
            child_items: ['Photography', 'Life Hacks', 'Wellbeing', 'Entertainment', 'Food & Home']
          }, 
          {
            child_item_num: 2,
            item: 'Brand',
            show_child_items: false,
            child_items: ['Brand', 'Galaxy Collaborations']
          }, 
          {
            child_item_num: 0,
            item: 'How-to',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 3,
            item: 'Experiences',
            show_child_items: false,
            child_items: ['Experiences', 'Solve for Tomorrow', 'CES2021']
          }, 
          {
            child_item_num: 0,
            item: 'Samsung KX',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Community',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Corporate Citizenship',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    }
  };

  let explore_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Explore
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleExploreClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {explore_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_explore_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {explore_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={Explore}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Reimagine a Better Planet
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeSupportMenu = flag => {
    setVisibleSupportMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleForBusinessMenu(false);
  };

  let handleSupportClick = e => {
    setVisibleSupportMenu(false);
  };

  let show_support_child_items = (value) => {
    if (value.item === 'Product Help') {
      if (value.show_child_items === false) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: true,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      }
    } else if (value.item === 'Repairs & Support') {
      if (value.show_child_items === false) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: true,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      }
    } else if (value.item === 'Contact') {
      if (value.show_child_items === false) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: true,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      }
    } else if (value.item === 'Trending FAQs') {
      if (value.show_child_items === false) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: true,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      }
    } else if (value.item === 'Online Shop Support') {
      if (value.show_child_items === false) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: true,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      } else if (value.show_child_items === true) {
        set_support_items([
          {
            child_item_num: 6,
            item: 'Product Help',
            show_child_items: false,
            child_items: ['How to Video Guides', 'Smart Switch', 'Smart View', 'Ask the Community', 'MyFold3', 'MyFlip3']
          }, 
          {
            child_item_num: 5,
            item: 'Repairs & Support',
            show_child_items: false,
            child_items: ['Troubleshoot & Book a Repair', 'Track My Repair', 'Warranty Information', 'Spare Parts', 'Repair Guides']
          }, 
          {
            child_item_num: 3,
            item: 'Contact',
            show_child_items: false,
            child_items: ['Product Support', 'Shop Support', 'Sign Language Support']
          }, 
          {
            child_item_num: 6,
            item: 'Trending FAQs',
            show_child_items: false,
            child_items: ['Secure Folder', 'Phone Not Charging', 'Phone Screen Repair Costs', 'What is NFC', 'Washing Machine Error Codes', 'Find TV Serial Number']
          }, 
          {
            child_item_num: 5,
            item: 'Online Shop Support',
            show_child_items: false,
            child_items: ['Shop FAQs', 'Order Information', 'Payment Information', 'Delivery Information', 'Cancellation & Returns']
          }
        ]);
      }
    }
  };

  let support_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            Support
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleSupportClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {support_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_support_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-6">
              {support_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={Support}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Always online, day or night
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Chat now</a>
          </div>
        </div>
      </div>
    </div>
  );

  let handleVisibleChangeForBusinessMenu = flag => {
    setVisibleForBusinessMenu(true);
    setVisibleMobileMenu(false);
    setVisibleTVAVMenu(false);
    setVisibleHomeAppMenu(false);
    setVisibleComputingMenu(false);
    setVisibleDisplaysMenu(false);
    setVisibleSmartHomeMenu(false);
    setVisibleOffersMenu(false);
    setVisibleCuratedMenu(false);
    setVisibleExploreMenu(false);
    setVisibleSupportMenu(false);
  };

  let handleForBusinessClick = e => {
    setVisibleForBusinessMenu(false);
  };

  let show_for_business_child_items = (value) => {
    if (value.item === 'Business Home') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Mobile') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: true,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Displays') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: true,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Climate') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: true,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Computing') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: true,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Appliance') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: true,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Industries') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: true,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Business Offers') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: true,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    } else if (value.item === 'Insights') {
      if (value.show_child_items === false) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: true,
            child_items: []
          }
        ]);
      } else if (value.show_child_items === true) {
        set_for_business_items([
          {
            child_item_num: 0,
            item: 'Business Home',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 9,
            item: 'Mobile',
            show_child_items: false,
            child_items: ['Overview', 'Smartphones', 'Enterprise Edition', 'Rugged', 'Tablets', 'Galaxy Book', 'Mobile Products', 'Mobile Solutions', 'Samsung Knox']
          }, 
          {
            child_item_num: 9,
            item: 'Displays',
            show_child_items: false,
            child_items: ['Overview', 'Smart Signage', 'The Wall LED Signage', 'Commercial TVs', 'Monitors', 'Smart Signage Solutions', 'LED Signage Solutions', 'Commercial TV Solutions', 'Monitor Solutions']
          }, 
          {
            child_item_num: 11,
            item: 'Climate',
            show_child_items: false,
            child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers', 'For Consultants']
          }, 
          {
            child_item_num: 6,
            item: 'Computing',
            show_child_items: false,
            child_items: ['Overview', 'Galaxy Book', 'Samsung Chromebook', 'Computer Monitors', 'Memory & Storage', 'Accessories']
          }, 
          {
            child_item_num: 7,
            item: 'Appliance',
            show_child_items: false,
            child_items: ['Overview', 'Kitchen Specialists', 'Contractors & HouseBuilders', 'Commercial Microwaves', 'Laundry Appliances', 'Refrigerators', 'Dishwashers']
          }, 
          {
            child_item_num: 8,
            item: 'Industries',
            show_child_items: false,
            child_items: ['Government', 'Finance', 'Education', 'Public Safety', 'Retail', 'Manufacturing', 'Transport', 'Healthcare']
          }, 
          {
            child_item_num: 0,
            item: 'Business Offers',
            show_child_items: false,
            child_items: []
          }, 
          {
            child_item_num: 0,
            item: 'Insights',
            show_child_items: false,
            child_items: []
          }
        ]);
      }
    }
  };

  let for_business_menu = (
    <div className="container-fluid white-background full-screen-overlay">
      <div className="row">
        <div className="col">
          <h3 className="float-left font-weight-bold ml-2 mt-2">
            For Business
          </h3>
          <h3 className="float-right">
            <a onClick={e => handleForBusinessClick()}>
              <FontAwesomeIcon icon={faTimes} className="regular-icon mr-2 mt-2" />
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row mb-4">
            <div className="col-6">
              {for_business_items.map((v, idx) => (
              <div key={idx} className="row mb-3">
                <div className="col-10">
                  <a className="ml-2 text-dark responsive-menu-font"
                  onClick={e => show_for_business_child_items(v)}>
                    {v.item}
                  </a>
                </div>
                {v.child_item_num > 0 && v.show_child_items ?
                <div className="col-2 mt-1">
                  <FontAwesomeIcon icon={faChevronRight} className="text-dark responsive-menu-font" />
                </div>
                : null }
              </div>
              ))}
            </div>
            <div className="col-5">
              {for_business_items.map((v, idx) => (
              v.child_item_num > 0 && v.show_child_items ?
              v.child_items.map((val, id) => (
              <div className="mb-3 responsive-menu-font" key={id}>
                {val}
              </div>
              ))
              : null
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block border-rounded"
            src={ForBusiness}
            height="300px"
            width="300px"
          />
          <div className="font-weight-bold photo-font mt-2 mb-2">
            Register your business for 10% off
          </div>
          <div>
            <a className="text-dark font-weight-bold text-decoration">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="show-responsive-menu">
        <div className="row">
          <div className="col-1 mt-2">
            <a src="#"><img src={logo} alt="Logo" width="110" height="50"/></a>
          </div>
          <div className="col-7 mt-2 pl-5">
            <Dropdown
              overlay={mobile_menu}
              onVisibleChange={handleVisibleChangeMobileMenu}
              visible={visibleMobileMenu}
              placement="bottomCenter"
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Mobile
              </button>
            </Dropdown>
            <Dropdown
              overlay={tvav_menu}
              onVisibleChange={handleVisibleChangeTVAVMenu}
              visible={visibleTVAVMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                TV & AV
              </button>
            </Dropdown>
            <Dropdown
              overlay={home_app_menu}
              onVisibleChange={handleVisibleChangeHomeAppMenu}
              visible={visibleHomeAppMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Home Appliances
              </button>
            </Dropdown>
            <Dropdown
              overlay={computing_menu}
              onVisibleChange={handleVisibleChangeComputingMenu}
              visible={visibleComputingMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Computing
              </button>
            </Dropdown>
            <Dropdown
              overlay={displays_menu}
              onVisibleChange={handleVisibleChangeDisplaysMenu}
              visible={visibleDisplaysMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Displays
              </button>
            </Dropdown>
            <Dropdown
              overlay={smart_home_menu}
              onVisibleChange={handleVisibleChangeSmartHomeMenu}
              visible={visibleSmartHomeMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Smart Home
              </button>
            </Dropdown>
            <Dropdown
              overlay={offers_menu}
              onVisibleChange={handleVisibleChangeOffersMenu}
              visible={visibleOffersMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Offers
              </button>
            </Dropdown>
            <Dropdown
              overlay={curated_menu}
              onVisibleChange={handleVisibleChangeCuratedMenu}
              visible={visibleCuratedMenu}
            >
              <button type="button" id="menu-button" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                #Curated
              </button>
            </Dropdown>
          </div>
          <div className="col-4 mt-2">
            <Dropdown
              overlay={explore_menu}
              onVisibleChange={handleVisibleChangeExploreMenu}
              visible={visibleExploreMenu}
            >
              <button type="button" id="menu-button2" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button3 menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Explore
              </button>
            </Dropdown>
            <Dropdown
              overlay={support_menu}
              onVisibleChange={handleVisibleChangeSupportMenu}
              visible={visibleSupportMenu}
            >
              <button type="button" id="menu-button2" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button3 menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                Support Home
              </button>
            </Dropdown>
            <Dropdown
              overlay={for_business_menu}
              onVisibleChange={handleVisibleChangeForBusinessMenu}
              visible={visibleForBusinessMenu}
            >
              <button type="button" id="menu-button2" 
              className="btn btn-sm btn-link mt-3 font-weight-bold text-decoration-none menu-button3 menu-button-hover ant-dropdown-link"
              onClick={e => e.preventDefault()}>
                For Business
              </button>
            </Dropdown>
            <div className="menu-icon mt-3">
              <a><FontAwesomeIcon icon={faSearch} className="menu-icon-size ml-3 regular-icon" /></a>
              <a><FontAwesomeIcon icon={faShoppingCart} className="menu-icon-size ml-3 regular-icon" /></a>
              <Dropdown
                overlay={menusignin}
                onVisibleChange={handleVisibleChangeSignIn}
                visible={visibleSignIn}
              >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={faUser} className="menu-icon-size ml-3 text-dark" />
                </a>
              </Dropdown>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default HeaderlgMenu;