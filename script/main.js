'use strict';

const properetiesExecute = require('./propereties');
const stringsExecute = require('./strings');

function treeExecute (language) {
  const tree = {
    menuMain: {// Main menu
      0: {// Start of the game
        name: stringsExecute()[language].menuMain[0],
        context: startGame,
        key: '1'
      },
      1: {// Options menu
        name: stringsExecute()[language].menuMain[1],
        context: 'menuOptions',
        key: '2'
      },
      2: {// Help menu
        name: stringsExecute()[language].menuMain[2],
        context: 'menuHelp',
        key: '3'
      },
      3: {// Show credits
        name: stringsExecute()[language].menuMain[3],
        context: showCredits,
        key: '4'
      },
      4: {// Exit
        name: stringsExecute()[language].menuMain[4],
        context: exit,
        key: '5'
      }
    },
    menuOptions: {// Options menu
      0: {// Change language
        name: stringsExecute()[language].menuOptions[0],
        context: changeProperety,
        addArgs: {
          properety: 'language',
          block: 'languageList'
        },
        key: '1'
      },
      1: {// Change amount of cash on the start
        name: stringsExecute()[language].menuOptions[1],
        context: changeProperety,
        addArgs: {
          properety: 'cash',
          block: 'cashList'
        },
        key: '2'
      },
      2: {// Change coefficient which is used when player wins
        name: stringsExecute()[language].menuOptions[2],
        context: changeProperety,
        addArgs: {
          properety: 'coef',
          block: 'coefficientList'
        },
        key: '3'
      },
      3: {// Back one level
        name: stringsExecute()[language].menuOptions[3],
        context: exit,
        key: '4'
      }
    },
    menuHelp: {// Help menu
      0: {// Show navigation tips
        name: stringsExecute()[language].menuHelp[0],
        context: listScrolling,
        addArgs: {
          block: 'navigationTips',
          parentBlock: 'menuHelp'
        },
        key: '1'
      },
      1: {// Show rules tips
        name: stringsExecute()[language].menuHelp[1],
        context: listScrolling,
        addArgs: {
          block: 'rulesTips',
          parentBlock: 'menuHelp'
        },
        key: '2'
      },
      2: {// Back one level
        name: stringsExecute()[language].menuHelp[2],
        context: exit,
        key: '3'
      }
    },
    navigationButtons: {
      0: {
        name: stringsExecute()[language].navigationButtons[0],
        context: function () {
          return (1);
        },
        key: '1'
      },
      1: {
        name: stringsExecute()[language].navigationButtons[1],
        context: function () {
          return (-1);
        },
        key: '2'
      },
      2: {
        name: stringsExecute()[language].navigationButtons[2],
        context: exit,
        key: '3'
      }
    }
  };
  return (tree);
};

// Game engine

function startGame (propereties) {
  let language = propereties.language;
  let coef = propereties.coef;
  let cash = propereties.cash;
  let lableText;
  let bj;
  let bet;
  let bank;
  const hands = [];
  const cardsOnHands = [];
  const deck = [];
  const points = [];
  while (confirm(stringsExecute()[language].game[5])) {
    yourMoney(cash, language);
    bet = betting(cash, language);
    while (bet === 0) {
      lableText = stringsExecute()[language].game[0];
      console.log(lableText);
      bet = betting(cash, language);
    };
    bank = bet;
    cash -= bet;
    // Initializing of arrays
    for (let i = 0; i <= 1; i++) {
      hands[i] = [];
      cardsOnHands[i] = -1;
      for (let j = 0; j <= 51; j++) {
        hands[i][j] = [];
      };
    };
    for (let i = 0; i <= 3; i++) {
      deck[i] = [];
      points[i] = 0;
      for (let j = 2; j <= 14; j++) {
        deck[i][j] = 2;
      };
    };
    // Start
    for (let i = 0; i <= 1; i++) {
      getCard(0, deck, cardsOnHands, hands, points);
      getCard(1, deck, cardsOnHands, hands, points);
    };
    yourCardsAre(0, cardsOnHands, hands, points, language);
    croupierCardsAre(1, true, cardsOnHands, hands, points, language);
    bj = blackJack(points, hands, language);
    if (bj === 1) {
      cash += bank;
      continue;
    } else if (bj === 3) {
      youWin(points, language);
      cash += (bank * coef);
      continue;
    };
    if (points[0] !== 21) {
      while (confirm(stringsExecute()[language].game[1])) {
        getCard(0, deck, cardsOnHands, hands, points);
        yourCardsAre(0, cardsOnHands, hands, points, language);
        if (points[0] >= 21) {
          break;
        };
        lableText = stringsExecute()[language].game[2];
        if ((cash > 0) && (confirm(lableText))) {
          yourMoney(cash, language);
          bet = betting(cash, language);
          bank += bet;
          cash -= bet;
        };
      };
    };
    if (checkPoints(points) === 1) {
      lableText = stringsExecute()[language].game[3];
      console.log(lableText);
      if (cash <= 0) {
        lableText = stringsExecute()[language].game[4];
        console.log(lableText);
        break;
      };
      continue;
    };
    while (points[1] <= 17) {
      getCard(1, deck, cardsOnHands, hands, points);
    };
    croupierCardsAre(1, false, cardsOnHands, hands, points, language);
    if (youWin(points, language)) {
      cash += (bank * coef);
    };
    if (youLose(points, language) === 3) {
      cash += bank;
    }
    if (cash <= 0) {
      lableText = stringsExecute()[language].game[4];
      console.log(lableText);
      break;
    };
  };
  lableText = stringsExecute()[language].game[6];
  if (cash > propereties.cash) {
    console.log(lableText + (cash - propereties.cash));
  } else {
    console.log(lableText + 0);
  };
};

function cardGenerating (player, deck, cardsOnHands, hands, points) {
  let cardSuit = getRandomInt(0, 3);
  let cardValue = getRandomInt(2, 14);
  while (deck[cardSuit][cardValue] !== 2) {
    cardSuit = getRandomInt(0, 3);
    cardValue = getRandomInt(2, 14);
  };
  deck[cardSuit][cardValue] = player;
  ++cardsOnHands[player];
  hands[player][cardsOnHands[player]][0] = cardSuit;
  hands[player][cardsOnHands[player]][1] = cardValue;
  // Points adding
  if (hands[player][cardsOnHands[player]][1] <= 10) {
    points[player] += hands[player][cardsOnHands[player]][1];
  };
  for (let i = 11; i < 14; i++) {
    if (hands[player][cardsOnHands[player]][1] === i) {
      points[player] += 10;
    };
  };
  if (hands[player][cardsOnHands[player]][1] === 14) {
    ((points[player] + 11) <= 21) ? points[player] += 11 : points[player] += 1;
  };
};

function cardCreating (player, cardsOnHands, hands, language) {
  let cardSuit;
  let lableText;
  let cards = [];
  for (let i = 0; i <= cardsOnHands[player]; i++) {
    // Card siut generation
    for (let k = 0; k <= 3; k++) {
      if (hands[player][i][0] === k) {
        cardSuit = stringsExecute()[language].cards[k];
      };
    };
    // Card value generation
    if (hands[player][i][1] <= 10) {
      lableText = '\n\r' + hands[player][i][1] + stringsExecute()[language].cards[4] + cardSuit;
      cards.push(lableText);
    };
    for (let k = 11; k <= 14; k++) {
      if (hands[player][i][1] === k) {
        lableText = stringsExecute()[language].cards[k] + cardSuit;
        cards.push(lableText);
      };
    };
  };
  return (cards);
};

function checkDeck (deck) {
  let k = 0;
  for (let i = 0; i <= 3; i++) {
    for (let j = 2; j <= 14; j++) {
      if (deck[i][j] === 2) {
        ++k;
      };
    };
  };
  if (k > 0) {
    return (false);
  };
  if (k === 0) {
    return (true);
  };
};

function getCard (player, deck, cardsOnHands, hands, points) {
  if (!checkDeck(deck)) {
    cardGenerating(player, deck, cardsOnHands, hands, points);
  };
};

function yourCardsAre (player, cardsOnHands, hands, points, language) {
  let lableText = stringsExecute()[language].game[10] + cardCreating(player, cardsOnHands, hands, language) + ' (' + points[player] + stringsExecute()[language].game[16];
  return (console.log(lableText));
};

function croupierCardsAre (player, hole, cardsOnHands, hands, points, language) {
  let lableText;
  if (hole) {
    lableText = stringsExecute()[language].game[11] + cardCreating(player, cardsOnHands, hands, language).shift();
    return (console.log(lableText));
  };
  lableText = stringsExecute()[language].game[12] + cardCreating(player, cardsOnHands, hands, language) + ' (' + points[player] + stringsExecute()[language].game[16];
  return (console.log(lableText));
};

function yourMoney (cash, language) {
  let lableText = stringsExecute()[language].game[13] + cash;
  return (console.log(lableText));
};

function blackJack (points, hands, language) {
  let lableText;
  if (points[0] === 21) {
    console.log('Black Jack!');
    if (hands[1][1][1] === 11) {
      lableText = stringsExecute()[language].game[17];
      if (confirm(lableText)) {
        return (1);
      } else {
        lableText = stringsExecute()[language].game[18];
        console.log(lableText);
        return (2);
      };
    } else if (hands[1][1][1] === 10) {
      lableText = stringsExecute()[language].game[18];
      console.log(lableText);
      return (2);
    } else {
      return (3);
    };
  };
  return (0);
};

function checkPoints (points) {
  if ((points[0] === 21) && (points[1] !== 21)) {
    return (0);
  };
  if (points[0] > 21) {
    return (1);
  };
  if (points[1] > 21) {
    return (2);
  };
  if (points[0] === points[1]) {
    return (3);
  };
  if (points[0] > points[1]) {
    return (4);
  };
  if (points[0] < points[1]) {
    return (5);
  };
};

function betting (cash, language) {
  // List of bets creation
  let lableText;
  let path = properetiesExecute().betsList;
  let length = Object.keys(path).length;
  const listBets = listCreating(path, length);
  listBets[listBets.length - 1].context = cash;
  listBets[listBets.length - 1].name += stringsExecute()[language].game[9];
  if (cash <= listBets[0].context) {
    lableText = stringsExecute()[language].game[7];
    console.log(lableText);
    return (cash);
  };
  // Lable creation
  let k = -1;
  for (let i = 0; i < listBets.length; i++) {
    if (cash >= listBets[i].context) {
      ++k;
    };
  };
  lableText = stringsExecute()[language].game[8] + lableCreating(listBets, 1, k);
  lableText += ('\n\r' + listBets[listBets.length - 1].name);
  // Bet selection
  let playerChose;
  do {
    playerChose = prompt(lableText);
    if (playerChose === null) {
      return (0);
    };
    for (let i = 0; i < listBets.length; i++) {
      if (cash >= listBets[i].context) {
        if (playerChose === listBets[i].key) {
          return (listBets[i].context);
        };
      };
    };
  } while (true);
};

function youWin (points, language) {
  let lableText;
  for (let i = 0; i <= 4; i += 2) {
    if (checkPoints(points) === i) {
      lableText = stringsExecute()[language].winLose[0];
      console.log(lableText);
      return (1);
    };
  };
  return (0);
};

function youLose (points, language) {
  let lableText;
  for (let i = 1; i <= 5; i += 2) {
    if (checkPoints(points) === i) {
      lableText = stringsExecute()[language].winLose[i];
      console.log(lableText);
      return (i);
    };
  };
};

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Program engine

function menuExecution (propereties, list, lableText) {
  let playerChose;
  let completFlag = false;
  let language = propereties.language;
  while (!completFlag) {
    playerChose = prompt(lableText, '');
    for (let i = 0; i < list.length; i++) {
      if (playerChose === list[i].key) {
        completFlag = true;
        if (list[i].context in treeExecute(language)) {
          buffer(propereties, list[i].context);
        } else {
          if ('addArgs' in list[i]) {
            return (list[i].context(propereties, list[i].addArgs));
          } else {
            return (list[i].context(propereties));
          };
        };
      };
    };
  };
  propereties.exitFlag = false;
};

function buffer (propereties, menu) {
  let path = treeExecute(propereties.language)[menu];
  const menuCreated = menuCreating(propereties, path, 0);
  menuExecution(propereties, menuCreated.menuList, menuCreated.menuLableText);
};

function listScrolling (propereties, {block, parentBlock}) { // Need fix!!!!!
  let path = treeExecute(propereties.language).navigationButtons;
  const menuCreated = menuCreating(propereties, path, 0);
  path = stringsExecute()[propereties.language][block];
  let lengthTips = Object.keys(path).length;
  let lableTextCompiled;
  let i = 0;
  while ((i >= 0) && (i < lengthTips) && (!propereties.exitFlag)) {
    if (!('name' in path[i])) {
      let pathx = path;
      while (!('name' in pathx[i])) {
        pathx = pathx[i];
      };
      let lengthx = Object.keys(pathx).length;
      const listTips = listCreating(pathx, lengthx);
      lableTextCompiled = (lableCreating(listTips, 1, lengthx) + '\n\n' + menuCreated.menuLableText);
    } else {
      lableTextCompiled = (path[i].name + '\n\n' + menuCreated.menuLableText);
    };
    i += menuExecution(propereties, menuCreated.menuList, lableTextCompiled);
  };
  propereties.exitFlag = false;
  buffer(propereties, parentBlock);
};

function changeProperety (propereties, {properety, block}) {
  let language = propereties.language;
  let lableText = (stringsExecute()[language].game[14] + propereties[properety]);
  console.log(lableText);
  let path = properetiesExecute()[block];
  const menuCreated = menuCreating(propereties, path, 1);
  lableText = (stringsExecute()[language].game[15] + menuCreated.menuLableText);
  let playerChose;
  do {
    playerChose = prompt(lableText);
    for (let i = 0; i < menuCreated.menuList.length; i++) {
      if (playerChose === menuCreated.menuList[i].key) {
        return (propereties[properety] = menuCreated.menuList[i].context);
      };
    };
  } while (true);
};

function showCredits (propereties) {
  let path = stringsExecute()[propereties.language].creditsStrings;
  let lableText = menuCreating(propereties, path, 1).menuLableText;
  console.log(lableText);
};

function exit (propereties) {
  return (propereties.exitFlag = true);
};

function menuCreating (propereties, path, mode) {
  let length = Object.keys(path).length;
  const list = listCreating(path, length);
  let lableText = lableCreating(list, mode, length);
  const menuCreated = {
    menuList: list,
    menuLableText: lableText
  };
  return (menuCreated);
};

function listCreating (path, length) {
  const newList = [];
  for (let i = 0; i < length; i++) {
    newList[i] = {};
    for (let listProp in path[i]) {
      newList[i][listProp] = path[i][listProp];
    };
  };
  return (newList);
};

function lableCreating (list, mode, length) {
  let lableText = list[0].name;
  for (let i = 1; i < length; i++) {
    switch (mode) {
      case 0:
        lableText += ('\u0020\u0020\u0020' + list[i].name);
        break;
      case 1:
        lableText += ('\n\r' + list[i].name);
        break;
    };
  };
  return (lableText);
};

// Start of the program

const propereties = {
  cash: 10000,
  language: 'eng',
  coef: 1.5,
  exitFlag: false
};
do {
  buffer(propereties, 'menuMain');
} while (!propereties.exitFlag);
