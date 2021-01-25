const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    endpoint: {
      orders: 'orders',
    },
  },
  phone: {
    nr1: '678.243.8455',
    nr2: '278.443.6443',
    nr3: '167.280.3970',
    info: 'The Office opens at 8 UTC',
  },
};

export default settings;
