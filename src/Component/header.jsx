import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faBars,
  faChevronDown,
  faChevronRight,
  faSearch,
  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  faUser } from '@fortawesome/free-regular-svg-icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from '../photo/Font-Samsung-Logo.jpg';
import ZFlip3BespokeEdition from '../photo/z-flip3-bespoke-edition.jpg';
import HeaderlgMenu from './headerlgMenu.jsx';
import '../css/header.css';

function Header (props) {
  
  const menuvalues = ['Mobile', 'Tv & Av', 'Home Appliances', 'Computing', 'Displays', 'Smart Home', 'Offers', '#Curated'];
  const [mobile_items, set_mobile_items] = useState([
    {
      child_item_num: 9,
      item: 'Featured',
      show_child_items: true,
      child_items: [
        { name: 'Galaxy Bespoke', path: '/mobile/featured/galaxy-bespoke' },
        { name: 'Galaxy Z Flip3 5G', path: '/mobile/featured/galaxy-z-flip3-5g' },
        { name: 'Galaxy Z Fold3 5G', path: '/mobile/featured/galaxy-z-fold3-5g'},
        { name: 'Galaxy S21 Ultra 5G', path: '/mobile/featured/galaxy-s21-ultra-5g'},
        { name: 'Galaxy S21| S21 + 5G', path: '/mobile/featured/galaxy-s21-5g'},
        { name: 'Galaxy A52s 5G', path: '/mobile/featured/galaxy-a52s-5g'},
        { name: 'Galaxy Watch4', path: '/mobile/featured/galaxy-watch4'},
        { name: 'Galaxy Watch4 Classic', path: '/mobile/featured/galaxy-watch4-classic'},
        { name: 'Galaxy Buds2', path: '/mobile/featured/galaxy-buds'}
      ]
    }, 
    {
      child_item_num: 10,
      item: 'Smartphones',
      show_child_items: false,
      child_items: [
        { name: 'Overview', path: '/mobile/smartphones/overview' },
        { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
        { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
        { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
        { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
        { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
        { name: 'Accessories', path: '/mobile/smartphones/accessories' },
        { name: 'See All', path: '/mobile/smartphones/see-all' },
        { name: 'Compare', path: '/mobile/smartphones/compare' },
        { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
      ]
    }, 
    {
      child_item_num: 7,
      item: 'Tablets',
      show_child_items: false,
      child_items: [
        { name: 'Overview', path: '/mobile/tablets/overview' },
        { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
        { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
        { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
        { name: 'Accessories', path: '/mobile/tablets/accessories' },
        { name: 'See All', path: '/mobile/tablets/see-all' },
        { name: 'Compare', path: '/mobile/tablets/compare' }
      ]
    }, 
    {
      child_item_num: 9,
      item: 'Galaxy Book',
      show_child_items: false,
      child_items: [
        { name: 'Overview', path: '/mobile/galaxy-book/overview' },
        { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
        { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
        { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
        { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
        { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
        { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
        { name: 'See All', path: '/mobile/galaxy-book/see-all' },
        { name: 'Compare', path: '/mobile/galaxy-book/compare' }
      ]
    }, 
    {
      child_item_num: 6,
      item: 'Watches',
      show_child_items: false,
      child_items: [
        { name: 'Overview', path: '/mobile/watches/overview' },
        { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
        { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
        { name: 'Accessories', path: '/mobile/watches/accessories' },
        { name: 'See All', path: '/mobile/watches/see-all' },
        { name: 'Compare', path: '/mobile/watches/compare' }
      ]
    }, 
    {
      child_item_num: 5,
      item: 'Galaxy Buds',
      show_child_items: false,
      child_items: [
        { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
        { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
        { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
        { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
        { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
      ]
    }, 
    {
      child_item_num: 6,
      item: 'Accessories',
      show_child_items: false,
      child_items: [
        { name: 'Overview', path: '/mobile/accessories/overview' },
        { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
        { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
        { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
        { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
        { name: 'See All', path: '/mobile/accessories/see-all' }
      ]
    }, 
    {
      child_item_num: 11,
      item: 'One UI',
      show_child_items: false,
      child_items: [
        { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
        { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
        { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
        { name: 'Bixby', path: '/mobile/one-ui/bixby' },
        { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
        { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
        { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
        { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
        { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
        { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
        { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
      ]
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
  const [home_app_items, set_home_app_items] = useState([
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
  const [computing_items, set_computing_items] = useState([
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
  const [displays_items, set_displays_items] = useState([
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
  const [smart_home_items, set_smart_home_items] = useState([
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
  const [offers_items, set_offers_items] = useState([
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
  const [curated_items, set_curated_items] = useState([
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
  const [explore_items, set_explore_items] = useState([
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
  const [support_items, set_support_items] = useState([
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
  const [for_business_items, set_for_business_items] = useState([
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
      child_items: ['Overview', 'Air to Water Heating', 'Residential', 'VRF', 'Multi Split', 'Commercial', 'Chiller', 'For Business', 'For Home', 'For Installers']
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
  const menuvalues2 = ['Explore', 'Support Home', 'For Business'];
  const [showmenuitems, setshowmenuitems] = useState(true);
  const [showmobilemenu, setshowmobilemenu] = useState(false);
  const [showtvavmenu, setshowtvavmenu] = useState(false);
  const [showhomeappmenu, setshowhomeappmenu] = useState(false);
  const [showcomputingmenu, setshowcomputingmenu] = useState(false);
  const [showdisplaysmenu, setshowdisplaysmenu] = useState(false);
  const [showsmarthomemenu, setshowsmarthomemenu] = useState(false);
  const [showoffersmenu, setshowoffersmenu] = useState(false);
  const [showcuratedmenu, setshowcuratedmenu] = useState(false);
  const [showexploremenu, setshowexploremenu] = useState(false);
  const [showsupplortmenu, setshowsupportmenu] = useState(false);
  const [showforbusinessmenu, setshowforbusinessmenu] = useState(false);

  let display_menu = (item, id) => {
    setshowmenuitems(false);
    if (item === 'Mobile') {
      setshowmobilemenu(true);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Tv & Av') {
      setshowtvavmenu(true);
      setshowmobilemenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Home Appliances') {
      setshowhomeappmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Computing') {
      setshowcomputingmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Displays') {
      setshowdisplaysmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Smart Home') {
      setshowsmarthomemenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Offers') {
      setshowoffersmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === '#Curated') {
      setshowcuratedmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Explore') {
      setshowexploremenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowsupportmenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'Support Home') {
      setshowsupportmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowforbusinessmenu(false);
    } else if (item === 'For Business') {
      setshowforbusinessmenu(true);
      setshowmobilemenu(false);
      setshowtvavmenu(false);
      setshowhomeappmenu(false);
      setshowcomputingmenu(false);
      setshowdisplaysmenu(false);
      setshowsmarthomemenu(false);
      setshowoffersmenu(false);
      setshowcuratedmenu(false);
      setshowexploremenu(false);
      setshowsupportmenu(false);
    }
  };

  let show_mobile_child_items = (value) => {
    if (value.item === 'Featured') {
      if (value.show_child_items === false) {
        set_mobile_items([
          {
            child_item_num: 9,
            item: 'Featured',
            show_child_items: true,
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: true,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: true,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: true,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: true,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: true,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: true,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: true,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
            child_items: [
              { name: 'Galaxy Bespoke', path: '/galaxy-bespoke' },
              { name: 'Galaxy Z Flip3 5G', path: '/galaxy-z-flip3-5g' },
              { name: 'Galaxy Z Fold3 5G', path: '/galaxy-z-fold3-5g'},
              { name: 'Galaxy S21 Ultra 5G', path: '/galaxy-s21-ultra-5g'},
              { name: 'Galaxy S21| S21 + 5G', path: '/galaxy-s21-5g'},
              { name: 'Galaxy A52s 5G', path: '/galaxy-a52s-5g'},
              { name: 'Galaxy Watch4', path: 'galaxy-watch4'},
              { name: 'Galaxy Watch4 Classic', path: '/galaxy-watch4-classic'},
              { name: 'Galaxy Buds2', path: '/galaxy-buds'}
            ]
          }, 
          {
            child_item_num: 10,
            item: 'Smartphones',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/smartphones/overview' },
              { name: 'Galaxy Z', path: '/mobile/smartphones/galaxy-z' },
              { name: 'Galaxy S', path: '/mobile/smartphones/galaxy-s' },
              { name: 'Galaxy A', path: '/mobile/smartphones/galaxy-a' },
              { name: 'Galaxy M', path: '/mobile/smartphones/galaxy-m' },
              { name: 'Phone Contracts', path: '/mobile/smartphones/phone-contracts' },
              { name: 'Accessories', path: '/mobile/smartphones/accessories' },
              { name: 'See All', path: '/mobile/smartphones/see-all' },
              { name: 'Compare', path: '/mobile/smartphones/compare' },
              { name: 'Help Me Choose', path: '/mobile/smartphones/help-me-choose'}
            ]
          }, 
          {
            child_item_num: 7,
            item: 'Tablets',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/tablets/overview' },
              { name: 'Galaxy Tab S', path: '/mobile/tablets/galaxy-tab-s' },
              { name: 'Galaxy Tab A', path: '/mobile/tablets/galaxy-tab-a' },
              { name: 'Galaxy Book', path: '/mobile/tablets/galaxy-book' },
              { name: 'Accessories', path: '/mobile/tablets/accessories' },
              { name: 'See All', path: '/mobile/tablets/see-all' },
              { name: 'Compare', path: '/mobile/tablets/compare' }
            ]
          }, 
          {
            child_item_num: 9,
            item: 'Galaxy Book',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-book/overview' },
              { name: 'Galaxy Book Pro 360', path: '/mobile/galaxy-book/galaxy-book-pro360' },
              { name: 'Galaxy Book Pro', path: '/mobile/galaxy-book/galaxy-book-pro' },
              { name: 'Galaxy Book', path: '/mobile/galaxy-book/galaxy-book' },
              { name: 'Galaxy Book Go', path: '/mobile/galaxy-book/galaxy-book-go' },
              { name: 'Samsung Chromebook', path: '/mobile/galaxy-book/samsung-chromebook' },
              { name: 'Accessories', path: '/mobile/galaxy-book/accessories' },
              { name: 'See All', path: '/mobile/galaxy-book/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-book/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Watches',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/watches/overview' },
              { name: 'Galaxy Watch', path: '/mobile/watches/galaxy-watch' },
              { name: 'Galaxy Watch4 Bespoke Studio', path: '/mobile/watches/galaxy-watch4-bespoke-studio' },
              { name: 'Accessories', path: '/mobile/watches/accessories' },
              { name: 'See All', path: '/mobile/watches/see-all' },
              { name: 'Compare', path: '/mobile/watches/compare' }
            ]
          }, 
          {
            child_item_num: 5,
            item: 'Galaxy Buds',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/galaxy-buds/overview' },
              { name: 'Galaxy Buds', path: '/mobile/galaxy-buds/galaxy-buds' },
              { name: 'AKG Headphones', path: '/mobile/galaxy-buds/akg-headphones' },
              { name: 'See All', path: '/mobile/galaxy-buds/see-all' },
              { name: 'Compare', path: '/mobile/galaxy-buds/compare' }
            ]
          }, 
          {
            child_item_num: 6,
            item: 'Accessories',
            show_child_items: false,
            child_items: [
              { name: 'Overview', path: '/mobile/accessories/overview' },
              { name: 'Smartphones Accessories', path: '/mobile/accessories/smartphones-accessories' },
              { name: 'Tablets Accessories', path: '/mobile/accessories/tablets-accessories' },
              { name: 'Galaxy Book Accessories', path: '/mobile/accessories/galaxy-book-accessories' },
              { name: 'Watches Accessories', path: '/mobile/accessories/watches-accessories' },
              { name: 'See All', path: '/mobile/accessories/see-all' }
            ]
          }, 
          {
            child_item_num: 11,
            item: 'One UI',
            show_child_items: false,
            child_items: [
              { name: 'One UI Overview', path: '/mobile/one-ui/one-ui-overview' },
              { name: 'App & Services Overview', path: '/mobile/one-ui/app-services-overview' },
              { name: 'Galaxy Store', path: '/mobile/one-ui/galaxy-store' },
              { name: 'Bixby', path: '/mobile/one-ui/bixby' },
              { name: 'Samsung Pay', path: '/mobile/one-ui/samsung-pay' },
              { name: 'Samsung Health', path: '/mobile/one-ui/samsung-health' },
              { name: 'Samsung Health Monitor', path: '/mobile/one-ui/samsung-health-monitor'},
              { name: 'Samsung DeX', path: '/mobile/one-ui/samsung-dex' },
              { name: 'Samsung Members', path: '/mobile/one-ui/samsung-members' },
              { name: 'SmartThings', path: '/mobile/one-ui/smartthings' },
              { name: 'Smart Switch', path: '/mobile/one-ui/smart-switch' }
            ]
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
    } else if (value.item === 'Why Galaxy') {
    }
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

  let handle_back_menu = () => {
    setshowmenuitems(true);
    setshowmobilemenu(false);
    setshowtvavmenu(false);
    setshowhomeappmenu(false);
    setshowcomputingmenu(false);
    setshowdisplaysmenu(false);
    setshowsmarthomemenu(false);
    setshowoffersmenu(false);
    setshowcuratedmenu(false);
    setshowexploremenu(false);
    setshowsupportmenu(false);
    setshowforbusinessmenu(false);
  };

  return (
    <Router>
    <div>
      <div className="show-responsive-offcanvas">
        <div className="row">
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="Logo" width="110" height="50"/>
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <a href="#"><FontAwesomeIcon icon={faSearch} className="regular-icon" /></a>
              </Navbar.Brand>
              <Navbar.Brand>
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} className="regular-icon" /></a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar">
                <FontAwesomeIcon icon={faBars} />
              </Navbar.Toggle>
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  {showmobilemenu || showtvavmenu || showhomeappmenu || showcomputingmenu || showdisplaysmenu || showsmarthomemenu || showoffersmenu || showcuratedmenu || showexploremenu || showsupplortmenu || showforbusinessmenu ?
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <div className="mt-3">
                      <a href="#" onClick={() => handle_back_menu()}><FontAwesomeIcon icon={faArrowLeft} className="text-dark" /></a>
                    </div>
                  </Offcanvas.Title>
                  :
                  <Offcanvas.Title></Offcanvas.Title>
                  }
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {showmobilemenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Mobile</span>
                    </div>
                    {mobile_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_mobile_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((val, id) => (
                      <div className="text-dark responsive-menu-font" key={id}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">
                              <Link to={val.path} className="text-dark">
                                {val.name}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showtvavmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">TV & AV</span>
                    </div>
                    {tvav_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_tvav_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={id}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showhomeappmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Home Appliances</span>
                    </div>
                    {home_app_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_home_app_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showcomputingmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Computing</span>
                    </div>
                    {computing_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_computing_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showdisplaysmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Displays</span>
                    </div>
                    {displays_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_displays_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showsmarthomemenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Smart Home</span>
                    </div>
                    {smart_home_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_smart_home_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showoffersmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Offers</span>
                    </div>
                    {offers_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_offers_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showcuratedmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">#Curated</span>
                    </div>
                    {curated_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_curated_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showexploremenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Explore</span>
                    </div>
                    {explore_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_explore_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showsupplortmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">Support</span>
                    </div>
                    {support_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_support_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showforbusinessmenu ?
                  <div className="mb-5">
                    <div className="mb-4 ml-3">
                      <span className="menu-title">For Business</span>
                    </div>
                    {for_business_items.map((v, idx) => (
                    <div key={idx}>
                      <a href="#" className="text-dark responsive-menu-font"
                      onClick={() => show_for_business_child_items(v)}
                      >
                        <div className="row mb-4">
                          <div className="col-8">
                            <div className="ml-3">{v.item}</div>
                          </div>
                          {v.child_item_num > 0 ?
                          <div className="col-4 text-right">
                            <div className="mr-3">
                              <FontAwesomeIcon icon={faChevronDown} className="text-dark" />
                            </div>
                          </div>
                          : null }
                        </div>
                      </a>
                      {v.show_child_items ?
                      v.child_items.map((item, id) => (
                      <a href="#" className="text-dark responsive-menu-font" key={idx}>
                        <div className="row mb-4">
                          <div className="col-12">
                            <div className="ml-4">{item}</div>
                          </div>
                        </div>
                      </a>
                      ))
                      : null }
                    </div>
                    ))}
                    <div className="text-center">
                      <img src={ZFlip3BespokeEdition} className="border-rounded mt-5" width="330px" height="350px" />
                    </div>
                    <h5 className="font-weight-bold mt-3 ml-3">Galaxy Z Flip3 Bespoke Edition</h5>
                    <a href="#" className="text-dark ml-3 font-weight-bold text-decoration">Customise now</a>
                  </div>
                  : null }
                  {showmenuitems ?
                  <div>
                    {menuvalues.map((v, idx) => (
                    <a className="text-dark responsive-menu-font" key={idx}
                    onClick={() => display_menu(v, idx)}>
                      <div className="row mb-4">
                        <div className="col-8">
                          <div className="ml-3">{v}</div>
                        </div>
                        <div className="col-4 text-right">
                          <div className="mr-3">
                            <FontAwesomeIcon icon={faChevronRight} className="text-dark" />
                          </div>
                        </div>
                      </div>
                    </a>
                    ))}
                    <hr className="mx-3" />
                    {menuvalues2.map((v, idx) => (
                    <a className="text-dark responsive-menu-font" key={idx}
                    onClick={() => display_menu(v, idx)}>
                      <div className="row mb-4">
                        <div className="col-8">
                          <div className="ml-3">{v}</div>
                        </div>
                        <div className="col-4 text-right">
                          <div className="mr-3">
                            <FontAwesomeIcon icon={faChevronRight} className="text-dark" />
                          </div>
                        </div>
                      </div>
                    </a>
                    ))}
                    <hr className="mx-3" />
                    <div className="mb-4">
                      <a className="text-dark responsive-menu-font ml-3">
                        <FontAwesomeIcon icon={faUser} /> Sign In/Sign-Up
                      </a>
                    </div>
                    <div className="mb-4">
                      <a className="text-dark responsive-menu-font ml-3">
                        Orders
                      </a>
                    </div>
                    <div className="mb-4">
                      <a className="text-dark responsive-menu-font ml-3">
                        Product Registration
                      </a>
                    </div>
                    <div className="mb-4">
                      <a className="text-dark responsive-menu-font ml-3">
                        Members
                      </a>
                    </div>
                  </div>
                  : null }
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </div>
      <HeaderlgMenu />
    </div>
    </Router>
  );
}

export default Header;