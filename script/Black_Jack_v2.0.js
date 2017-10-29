'use strict';

function properetiesExecute() {
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
  return(properetiesTree);
};

function treeExecute(language) {
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
  return(tree);
};

function stringsExecute () {
  const strings = {
    'eng': {
      game: {// Game
        // Main
        0: 'You must place your start bet',
        1: 'More?',
        2: 'Would you like to raise your bid?',
        3: 'Too much! You lose!',
        4: 'You are out of cash! Game over!',
        5: 'Would you like to play?',
        6: 'Your final score is: ',
        // Bets
        7: 'You have not enough money and are forced to go \'All in\'',
        8: 'Place your bet:\n\n',
        9: 'All in',
        // Dialogs
        10: 'Your cards are:',
        11: 'Croupier cards are:\r\nHidden',
        12: 'Croupier cards are:',
        13: 'Your money: ',
        14: 'Now: ',
        15: 'Choose:\n\n',
        16: ' points)',
        // When Black Jack
        17: 'Would you like to take your prize now or continue?',
        18: 'Now it is croupier\'s turn'
      },
      winLose: {// On win/lose
        0: 'You win!',
        1: 'Too much! You lose!',
        3: 'Stay',
        5: 'You lose!'
      },
      cards: {// Card creation
        0: 'Spades',
        1: 'Diamonds',
        2: 'Hearts',
        3: 'Clubs',
        4: ' of ',
        11: '\n\rJack of ',
        12: '\n\rQueen of ',
        13: '\n\rKing of ',
        14: '\n\rAce of '
      },
      creditsStrings: {// Credits
        0: {
          name: 'Black Jack\u00AE'
        },
        1: {
          name: 'Version: 2.0'
        },
        2: {
          name: 'Author: Nickolay \'TommyKiller\' Kolosov'
        },
        3: {
          name: 'NuclearGuys Entertainment™'
        },
        4: {
          name: '\u00A9 All rights reserved (but it is uncertain)'
        }
      },
      navigationTips: {
        0: {
          0: {
            name: 'To choose use [0-9].'
          },
          1: {
            name: 'To confirm use \'Enter\'.'
          }
        }
      },
      rulesTips: {
        0: {
          0: {
            name: 'The objective of the game is to beat the dealer in one of the following ways:'
          },
          1: {
            name: '- get 21 points on the player\'s first two cards (called a "blackjack"), without a dealer blackjack;'
          },
          2: {
            name: '- reach a final score higher than the dealer without exceeding 21;'
          },
          3: {
            name: '- let the dealer draw additional cards until their hand exceeds 21.'
          }
        },
        1: {
          name: 'Points:\n1 - 10: equally to it\'s value;\nJack - King: 10 points;\nAce: if current points plus 11 is more than 21 then 1, else - 11.'
        },
        2: {
          name: 'If you have "blackjack" and croupier\'s opened card is Ace you can pick up the bank in the amount 1:1, or continue to play.\nWhen you wins you pick up the bank in amount 3:2.'
        }
      },
      menuMain: {// Main menu
        0: '1. Start',
        1: '2. Options',
        2: '3. Help',
        3: '4. Credits',
        4: '5. Exit'
      },
      menuOptions: {// Options menu
        0: '1. Change language',
        1: '2. Change start cash',
        2: '3. Change win coefficient',
        3: '4. Back'
      },
      menuHelp: {// Help menu
        0: '1. Navigation',
        1: '2. Rules',
        2: '3. Back'
      },
      navigationButtons: {
        0: '1. Next',
        1: '2. Previous',
        2: '3. Back'
      }
    },
    'rus': {
      game: {// Game
        // Main
        0: 'Вы должны сделать начальную ставку',
        1: 'Еще?',
        2: 'Хотите повысить ставку?',
        3: 'Перебор! Вы проиграли!',
        4: 'У вас закончились деньги! Игра окончена!',
        5: 'Хотите сыграть?',
        6: 'Ваш окончательный счет: ',
        // Bets
        7: 'У вас недостаточно средств и вы вынуждены идти \'Ва-банк\'',
        8: 'Сделайте вашу ставку:\n\n',
        9: 'Ва-банк',
        // Dialogs
        10: 'Ваши карты:',
        11: 'Карты крупье:\r\nСкрыта',
        12: 'Карты крупье:',
        13: 'Ваши деньги: ',
        14: 'Сейчас: ',
        15: 'Выберите:\n\n',
        16: ' очков)',
        // When Black Jack
        17: 'Вы хотите забрать банк сейчас или продолжить?',
        18: 'Теперь черед крупье'
      },
      winLose: {// On win/lose
        0: 'Вы выиграли!',
        1: 'Перебор! Вы проиграли!',
        3: 'При своих',
        5: 'Вы проиграли!'
      },
      cards: {// Card creation
        0: 'Пик',
        1: 'Бубен',
        2: 'Чирв',
        3: 'Треф',
        4: ' ',
        11: '\n\rВалет ',
        12: '\n\rДама ',
        13: '\n\rКороль ',
        14: '\n\rТуз '
      },
      creditsStrings: {// Credits
        0: {
          name: 'Black Jack\u00AE'
        },
        1: {
          name: 'Версия: 2.0'
        },
        2: {
          name: 'Автор: Николай \'TommyKiller\' Колосов'
        },
        3: {
          name: 'NuclearGuys Entertainment™'
        },
        4: {
          name: '\u00A9 Все права защищены (но это не точно)'
        }
      },
      navigationTips: {
        0: {
          0: {
            name: 'Для выбора используйте [0-9].'
          },
          1: {
            name: 'Для подтверждения используйте \'Enter\'.'
          }
        }
      },
      rulesTips: {
        0: {
          0: {
            name: 'Цель игры выиграть у крупье одним из следуюших способов:'
          },
          1: {
            name: '- набрать 21 очко с первых двух карт (т. н. \'blackjack\'), при отсутствии blackjack у крупье;'
          },
          2: {
            name: '- набрать очков болбше чем крупье, но не более 21;'
          },
          3: {
            name: '- если крупье набирает более 21 очка.'
          }
        },
        1: {
          name: 'Очки:\n1 - 10: соответственно достоинству карты;\nвалет - король: 10 очков;\nтуз: если имеющихся очков больше 10, то 1, иначе - 11.'
        },
        2: {
          name: 'Если у вас \'blackjack\' и открытая карта крупье - туз, вы можете забрать свою ставку в размере 1:1 или продолжить игру.\nКогда вы выигрываете, вы забераете свою ставку в размере 3:2.'
        }
      },
      menuMain: {// Main menu
        0: '1. Начать',
        1: '2. Опции',
        2: '3. Помощь',
        3: '4. О программе',
        4: '5. Выход'
      },
      menuOptions: {// Options menu
        0: '1. Сменить язык',
        1: '2. Изменить стартовый капитал',
        2: '3. Изменить коэффициент выигрыша',
        3: '4. Назад'
      },
      menuHelp: {// Help menu
        0: '1. Управление',
        1: '2. Правила',
        2: '3. Назад'
      },
      navigationButtons: {
        0: '1. Далее',
        1: '2. Предыдущее',
        2: '3. Назад'
      }
    }
  };
  return (strings);
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
      alert(lableText);
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
      alert(lableText);
      if (cash <= 0) {
        lableText = stringsExecute()[language].game[4];
        alert(lableText);
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
      alert(lableText);
      break;
    };
  };
  lableText = stringsExecute()[language].game[6];
  if (cash > propereties.cash) {
    alert(lableText + (cash - propereties.cash));
  } else {
    alert(lableText + 0);
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
  return (alert(lableText));
};

function croupierCardsAre (player, hole, cardsOnHands, hands, points, language) {
  let lableText;
  if (hole) {
    lableText = stringsExecute()[language].game[11] + cardCreating(player, cardsOnHands, hands, language).shift();
    return (alert(lableText));
  };
  lableText = stringsExecute()[language].game[12] + cardCreating(player, cardsOnHands, hands, language) + ' (' + points[player] + stringsExecute()[language].game[16];
  return (alert(lableText));
};

function yourMoney (cash, language) {
  let lableText = stringsExecute()[language].game[13] + cash;
  return (alert(lableText));
};

function blackJack (points, hands, language) {
  let lableText;
  if (points[0] === 21) {
    alert('Black Jack!');
    if (hands[1][1][1] === 11) {
      lableText = stringsExecute()[language].game[17];
      if (confirm(lableText)) {
        return (1);
      } else {
        lableText = stringsExecute()[language].game[18];
        alert(lableText);        
        return (2);
      };
    } else if (hands[1][1][1] === 10) {
      lableText = stringsExecute()[language].game[18];
      alert(lableText);
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
    alert(lableText);
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
      alert(lableText);
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
      alert(lableText);
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
        if (list[i].context in treeExecute(propereties.language)) {
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

function listScrolling (propereties, {block, parentBlock}) {// Need fix!!!!!
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
  alert(lableText);
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
  alert(lableText);
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
