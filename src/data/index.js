// import faveS2 from '../assets/favorites/s2-min.jpg'
// import fave13 from '../assets/favorites/16-min.jpg'
// import fave16 from '../assets/favorites/16-min.jpg'
// import fave21 from '../assets/favorites/21-min.jpg'
// import fave24 from '../assets/favorites/24-min.jpg'
// import fave31 from '../assets/favorites/31-min.jpg'
// import fave40 from '../assets/favorites/40-min.jpg'
// import fave42 from '../assets/favorites/42-min.jpg'
// import fave57 from '../assets/favorites/57-min.jpg'
// import fave75 from '../assets/favorites/75-min.jpg'

let faveS2 = require('../assets/favorites/s2-min.jpg')
let fave13 = require('../assets/favorites/13-min.jpg')
let fave16 = require('../assets/favorites/16-min.jpg')
let fave21 = require('../assets/favorites/21-min.jpg')
let fave24 = require('../assets/favorites/24-min.jpg')
let fave31 = require('../assets/favorites/31-min.jpg')
let fave40 = require('../assets/favorites/40-min.jpg')
let fave42 = require('../assets/favorites/42-min.jpg')
let fave57 = require('../assets/favorites/57-min.jpg')
let fave75 = require('../assets/favorites/75-min.jpg')

module.exports = {
  favorites: [
    {
      name: `Sate Beef Sub`,
      number: `S2`,
      image: '../assets/favorites/s2-min.jpg',
      size: `small-Img`
    },
    {
      name: `Noodle Veggie Bowl`,
      number: `13`,
      image: {fave13},
      size: `small-Img`
    },
    {
      name: `Tropical Chicken Salad`,
      number: `16A`,
      image: {fave16},
      size: `small-Img`
    },
    {
      name: `Charbroiled Pork & Spring Roll`,
      number: `21`,
      image: {fave21},
      size: `small-Img`
    },
    {
      name: `chef's Special `,
      number: `24`,
      image: {fave24},
      size: `big-Img`
    },
    {
      name: `Tropical Chicken & Prawns`,
      number: `31`,
      image: {fave31},
      size: `big-Img`
    },
    {
      name: `Szechuan Chicken & Broccoli`,
      number: `40`,
      image: {fave40},
      size: `small-Img`
    },
    {
      name: `Tropical Wok-Fried Rice`,
      number: `42`,
      image: {fave42},
      size: `small-Img`
    },
    {
      name: `Beef Saté Rice Noodle Soup`,
      number: `57`,
      image: {fave57},
      size: `small-Img`
    },
    {
      name: `2 Eggs & 2 Charbroiled Pork Chops`,
      number: `75`,
      image: {fave75},
      size: `small-Img`
    },
  ]
};
