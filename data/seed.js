const mongoose = require('mongoose');
const Page = require('./schema/page/model');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL);

const pages = [
  {
    url: '/',
    texts: JSON.stringify({
      title: 'hello',
      link: {
        url: '/login',
        text: 'login',
      },
      text: 'world',
    }),
  },
  {
    url: '/login',
    texts: JSON.stringify({
      title: 'Login',
      link: {
        url: '/',
        text: 'home',
      },
    }),
  },
];

Page.find().remove(() => Page.create(...pages, () => {
  console.log('finished populating Page');
  process.exit(0);
}));
