'use strict';

function properetiesExecute () {
  const properetiesTree = {
    languageList: {
      0: {// 0. English
        name: '1. English',
        context: 'eng',
        key: '1'
      },
      1: {// 2. Russian
        name: '2. Русский',
        context: 'rus',
        key: '2'
      }
    },
    cashList: {
      0: {
        name: '1. 10000',
        context: 10000,
        key: '1'
      },
      1: {
        name: '2. 25000',
        context: 25000,
        key: '2'
      },
      2: {
        name: '3. 50000',
        context: 50000,
        key: '3'
      },
      3: {
        name: '4. 100000',
        context: 100000,
        key: '4'
      }
    },
    betsList: {
      0: {
        name: '1. 1000',
        context: 1000,
        key: '1'
      },
      1: {
        name: '2. 2000',
        context: 2000,
        key: '2'
      },
      2: {
        name: '3. 5000',
        context: 5000,
        key: '3'
      },
      3: {
        name: '4. 10000',
        context: 10000,
        key: '4'
      },
      4: {
        name: '5. 20000',
        context: 20000,
        key: '5'
      },
      5: {
        name: '6. 50000',
        context: 50000,
        key: '6'
      },
      6: {
        name: '7. 75000',
        context: 75000,
        key: '7'
      },
      7: {
        name: '8. 100000',
        context: 100000,
        key: '8'
      },
      8: {
        name: '9. ',
        context: ' ',
        key: '9'
      }
    },
    coefficientList: {
      0: {
        name: '1. 1.5',
        context: 1.5,
        key: '1'
      },
      1: {
        name: '2. 2.0',
        context: 2.0,
        key: '2'
      },
      2: {
        name: '3. 2.5',
        context: 2.5,
        key: '3'
      }
    }
  };
  return (properetiesTree);
};

module.exports = properetiesExecute;

