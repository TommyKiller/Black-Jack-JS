'use strict';

function stringsExecute() {
  const strings = {
    propereties : {
      languageList : {
        str0 : {// 0. English
          name : '1. English',
          context : 'eng',
          key : '1'
        },
        str1 : {// 2. Russian
          name : '2. Русский',
          context : 'rus',
          key : '2'
        }
      },
      cashList : {
        str0 : {
          name : '1. 10000',
          context : 10000,
          key : '1'
        },
        str1 : {
          name : '2. 25000',
          context : 25000,
          key : '2'
        },
        str2 : {
          name : '3. 50000',
          context : 50000,
          key : '3'
        },
        str3 : {
          name : '4. 100000',
          context : 100000,
          key : '4'
        }
      },
      betsList : {
        str0 : {
          name : '1. 1000',
          context : 1000,
          key : '1'
        },
        str1 : {
          name : '2. 2000',
          context : 2000,
          key : '2'
        },
        str2 : {
          name : '3. 5000',
          context : 5000,
          key : '3'
        },
        str3 : {
          name : '4. 10000',
          context : 10000,
          key : '4'
        },
        str4 : {
          name : '5. 20000',
          context : 20000,
          key : '5'
        },
        str5 : {
          name : '6. 50000',
          context : 50000,
          key : '6'
        },
        str6 : {
          name : '7. 75000',
          context : 75000,
          key : '7'
        },
        str7 : {
          name : '8. 100000',
          context : 100000,
          key : '8'
        },
        str8 : {
          name : '9. ',
          context : ' ',
          key : '9'
        }
      },
      coefficientList : {
        str0 : {
          name : '1. 1.5',
          context : 1.5,
          key : '1'
        },
        str1 : {
          name : '2. 2.0',
          context : 2.0,
          key : '2'
        },
        str2 : {
          name : '3. 2.5',
          context : 2.5,
          key : '3'
        }
      }
    },
    'eng' : {
      game : {// Game
        // Main
        str0 : 'You must place your start bet',
        str1 : 'More?',
        str2 : 'Would you like to raise your bid?',
        str3 : 'Too much! You lose!',
        str4 : 'You are out of cash! Game over!',
        str5 : 'Would you like to play?',
        str6 : 'Your final score is: ',
        // Bets
        str7 : 'You have not enough money and are forced to go \'All in\'',
        str8 : 'Place your bet:\n\n',
        str9 : 'All in',
        // Dialogs
        str10 : 'Your cards are:',
        str11 : 'Croupier cards are:\r\nHidden',
        str12 : 'Croupier cards are:',
        str13 : 'Your money: ',
        str14 : 'Now: ',
        str15 : 'Choose:\n\n',
        str16 : ' points)',
        // When Black Jack
        str17 : 'Would you like to take your prize now or continue?',
        str18 : 'Now it is croupier\'s turn'
      },
      winLose : {// On win/lose
        str0 : {
          name : 'You win!'
        },
        str1 : {
          name : 'Too much! You lose!'
        },
        str3 : {
          name : 'Stay'
        },
        str5 : {
          name : 'You lose!'
        }
      },
      cards : {// Card creation
        str0 : 'Spades',
        str1 : 'Diamonds',
        str2 : 'Hearts',
        str3 : 'Clubs',
        str4 : ' of ',
        str11 : '\n\rJack of ',
        str12 : '\n\rQueen of ',
        str13 : '\n\rKing of ',
        str14 : '\n\rAce of '
      },
      creditsStrings : {// Credits
        str0 : {
          name : 'Black Jack\u00AE'
        },
        str1 : {
          name : 'Version: 2.0'
        },
        str2 : {
          name : 'Author: Nickolay \'TommyKiller\' Kolosov'
        },
        str3 : {
          name : 'NuclearGuys Entertainment™'
        },
        str4 : {
          name : '\u00A9 All rights reserved (but it is uncertain)'
        }
      },
      navigationTips : {
        str0 : {
          str0 : {
            name : 'To choose use [0-9].'
          },
          str1 : {
            name : 'To confirm use \'Enter\'.'
          }
        }
      },
      rulesTips : {
        str0 : {
          str0 : {
            name : 'The objective of the game is to beat the dealer in one of the following ways:'
          },
          str1 : {
            name : '- get 21 points on the player\'s first two cards (called a "blackjack"), without a dealer blackjack;'
          },
          str2 : {
            name : '- reach a final score higher than the dealer without exceeding 21;'
          },
          str3 : {
            name : '- let the dealer draw additional cards until their hand exceeds 21.'
          }
        },
        str1 : {
          name : 'Points:\n1 - 10: equally to it\'s value;\nJack - King: 10 points;\nAce: if current points plus 11 is more than 21 then 1, else - 11.'
        },
        str2 : {
          name : 'If you have "blackjack" and croupier\'s opened card is Ace you can pick up the bank in the amount 1:1, or continue to play.\nWhen you wins you pick up the bank in amount 3:2.'
        }
      },
      menuMain : {// Main menu
        str0 : {// Start of the game
          name : '1. Start',
          context : startGame,
          key : '1'
        },
        str1 : {// Options menu
          name : '2. Options',
          context : 'menuOptions',
          key : '2'
        },
        str2 : {// Help menu
          name : '3. Help',
          context : 'menuHelp',
          key : '3'
        },
        str3 : {// Show credits
          name : '4. Credits',
          context : showCredits,
          key : '4'
        },
        str4 : {// Exit
          name : '5. Exit',
          context : exit,
          key : '5'
        }
      },
      menuOptions : {// Options menu
        str0 : {// Change language
          name : '1. Change language',
          context : changeProperety,
          addArgs : {
            properety : 'language',
            block :'languageList'
          },
          key : '1'
        },
        str1 : {// Change amount of cash on the start
          name : '2. Change start cash',
          context : changeProperety,
          addArgs : {
            properety : 'cash',
            block :'cashList'
          },
          key : '2'
        },
				str2 : {// Change coefficient which is used when player wins
          name : '3. Change win coefficient',
          context : changeProperety,
          addArgs : {
            properety : 'coef',
            block :'coefficientList'
          },
          key : '3'
        },
        str3 : {// Back one level
          name : '4. Back',
          context : exit,
          key : '4'
        }
      },
      menuHelp : {// Help menu
        str0 : {// Show navigation tips
          name : '1. Navigation',
          context : listScrolling,
          addArgs : {
            block : 'navigationTips',
            parentBlock : 'menuHelp'
          },
          key : '1'
        },
        str1 : {// Show rules tips
          name : '2. Rules',
          context : listScrolling,
          addArgs : {
            block : 'rulesTips',
            parentBlock : 'menuHelp'
          },
          key : '2'
        },
        str2 : {// Back one level
          name : '3. Back',
          context : exit,
          key : '3'
        }
      },
      navigationButtons : {
        str0 : {
          name : '1. Next',
          context : function() {
            return(1);
          },
          key : '1'
        },
        str1 : {
          name : '2. Previous',
          context : function() {
            return(-1);
          },
          key : '2'
        },
        str2 : {
          name : '3. Back',
          context : exit,
          key : '3'
        }
      }
    },
    'rus' : {
      game : {// Game
        // Main
        str0 : 'Вы должны сделать начальную ставку',
        str1 : 'Еще?',
        str2 : 'Хотите повысить ставку?',
        str3 : 'Перебор! Вы проиграли!',
        str4 : 'У вас закончились деньги! Игра окончена!',
        str5 : 'Хотите сыграть?',
        str6 : 'Ваш окончательный счет: ',
        // Bets
        str7 : 'У вас недостаточно средств и вы вынуждены идти \'Ва-банк\'',
        str8 : 'Сделайте вашу ставку:\n\n',
        str9 : 'Ва-банк',
        // Dialogs
        str10 : 'Ваши карты:',
        str11 : 'Карты крупье:\r\nСкрыта',
        str12 : 'Карты крупье:',
        str13 : 'Ваши деньги: ',
        str14 : 'Сейчас: ',
        str15 : 'Выберите:\n\n',
        str16 : ' очков)',
        // When Black Jack
        str17 : 'Вы хотите забрать банк сейчас или продолжить?',
        str18 : 'Теперь черед крупье'
      },
      winLose : {// On win/lose
        str0 : {
          name : 'Вы выиграли!'
        },
        str1 : {
          name : 'Перебор! Вы проиграли!'
        },
        str3 : {
          name : 'При своих'
        },
        str5 : {
          name : 'Вы проиграли!'
        }
      },
      cards : {// Card creation
        str0 : 'Пик',
        str1 : 'Бубен',
        str2 : 'Чирв',
        str3 : 'Треф',
        str4 : ' ',
        str11 : '\n\rВалет ',
        str12 : '\n\rДама ',
        str13 : '\n\rКороль ',
        str14 : '\n\rТуз '
      },
      creditsStrings : {// Credits
        str0 : {
          name : 'Black Jack\u00AE'
        },
        str1 : {
          name : 'Версия: 2.0'
        },
        str2 : {
          name : 'Автор: Николай \'TommyKiller\' Колосов'
        },
        str3 : {
          name : 'NuclearGuys Entertainment™'
        },
        str4 : {
          name : '\u00A9 Все права защищены (но это не точно)'
        }
      },
      navigationTips : {
        str0 : {
          str0 : {
            name : 'Для выбора используйте [0-9].'
          },
          str1 : {
            name : 'Для подтверждения используйте \'Enter\'.'
          }
        }
      },
      rulesTips : {
        str0 : {
          str0 : {
            name : 'Цель игры выиграть у крупье одним из следуюших способов:'
          },
          str1 : {
            name : '- набрать 21 очко с первых двух карт (т. н. \'blackjack\'), при отсутствии blackjack у крупье;'
          },
          str2 : {
            name : '- набрать очков болбше чем крупье, но не более 21;'
          },
          str3 : {
            name : '- если крупье набирает более 21 очка.'
          }
        },
        str1 : {
          name : 'Очки:\n1 - 10: соответственно достоинству карты;\nвалет - король: 10 очков;\nтуз: если имеющихся очков больше 10, то 1, иначе - 11.'
        },
        str2 : {
          name : 'Если у вас \'blackjack\' и открытая карта крупье - туз, вы можете забрать свою ставку в размере 1:1 или продолжить игру.\nКогда вы выигрываете, вы забераете свою ставку в размере 3:2.'
        }
      },
      menuMain : {// Main menu
        str0 : {// Start of the game
          name : '1. Начать',
          context : startGame,
          key : '1'
        },
        str1 : {// Options menu
          name : '2. Опции',
          context : 'menuOptions',
          key : '2'
        },
        str2 : {// Help menu
          name : '3. Помощь',
          context : 'menuHelp',
          key : '3'
        },
        str3 : {// Show credits
          name : '4. О программе',
          context : showCredits,
          key : '4'
        },
        str4 : {// Exit
          name : '5. Выход',
          context : exit,
          key : '5'
        }
      },
      menuOptions : {// Options menu
        str0 : {// Change language
          name : '1. Сменить язык',
          context : changeProperety,
          addArgs : {
            properety : 'language',
            block :'languageList'
          },
          key : '1'
        },
        str1 : {// Change amount of cash on the start
          name : '2. Изменить стартовый капитал',
          context : changeProperety,
          addArgs : {
            properety : 'cash',
            block :'cashList'
          },
          key : '2'
        },
        str2 : {// Back one level
          name : '3. Назад',
          context : exit,
          key : '3'
        }
      },
      menuHelp : {// Help menu
        str0 : {// Show navigation tips
          name : '1. Управление',
          context : listScrolling,
          addArgs : {
            block : 'navigationTips',
            parentBlock : 'menuHelp'
          },
          key : '1'
        },
        str1 : {// Show rules tips
          name : '2. Правила',
          context : listScrolling,
          addArgs : {
            block : 'rulesTips',
            parentBlock : 'menuHelp'
          },
          key : '2'
        },
        str2 : {// Back one level
          name : '3. Назад',
          context : exit,
          key : '3'
        }
      },
      navigationButtons : {
        str0 : {
          name : '1. Далее',
          context : function() {
            return(1);
          },
          key : '1'
        },
        str1 : {
          name : '2. Предыдущее',
          context : function() {
            return(-1);
          },
          key : '2'
        },
        str2 : {
          name : '3. Назад',
          context : exit,
          key : '3'
        }
      }
    }
  };
  return(strings);
};

// Game engine

function startGame(propereties) {
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
  while (confirm(stringsExecute()[language].game.str5)) {
    yourMoney(cash, language);
    bet = betting(cash, language);
    while (bet === 0) {
      lableText = stringsExecute()[language].game.str0;
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
    for (let i = 0; i <= 1; i++) {
      getCard(0, deck, cardsOnHands, hands, points);
      getCard(1, deck, cardsOnHands, hands, points);
    };
    yourCardsAre(0, cardsOnHands, hands, points, language);
    croupierCardsAre(1, true, cardsOnHands, hands, points, language);
    bj = blackJack(points, hands);
    if (bj === 1) {
      cash += bank;
      continue;
    } else if (bj === 3) {
      youWin(points, language);
      cash += (bank * coef);
      continue;
    };
    if (points[0] !== 21) {
      while (confirm(stringsExecute()[language].game.str1)) {
        getCard(0, deck, cardsOnHands, hands, points);
        yourCardsAre(0, cardsOnHands, hands, points, language);
        if (points[0] >= 21) {
          break;
        };
        lableText = stringsExecute()[language].game.str2;
        if ((cash > 0) && (confirm(lableText))) {
          yourMoney(cash, language);
          bet = betting(cash, language);
          bank += bet
          cash -= bet;
        };
      };
    };
    if (checkPoints(points) === 1) {
      lableText = stringsExecute()[language].game.str3;
      alert(lableText);
      if (cash <= 0) {
        lableText = stringsExecute()[language].game.str4;
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
      lableText = stringsExecute()[language].game.str4;
      alert(lableText);
      break;
    };
  };
  lableText = stringsExecute()[language].game.str6;
  if (cash > 10000) {
    alert(lableText + (cash - 10000));
  } else {
    alert(lableText + 0);
  };
};

function cardGenerating(player, deck, cardsOnHands, hands, points) {
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
    ((points[player]+11) <= 21) ? points[player] += 11 : points[player] += 1;
  };
};

function cardCreating(player, cardsOnHands, hands, language) {
  let cardSuit;
  let lableText;
  let cards = [];
  for (let i = 0; i <= cardsOnHands[player]; i++) {
    // Card siut generation
    for (let k = 0; k <= 3; k++) {
      if (hands[player][i][0] === k) {
        let strx = ('str' + k);
        cardSuit = stringsExecute()[language].cards[strx];
      };
    };
    // Card value generation
    if (hands[player][i][1] <= 10) {
      lableText = '\n\r' + hands[player][i][1] + stringsExecute()[language].cards.str4 + cardSuit;
      cards.push(lableText);
    };
    for (let k = 11; k <= 14; k++) {
      if (hands[player][i][1] === k) {
        let strx = ('str' + k);
        lableText = stringsExecute()[language].cards[strx] + cardSuit;
        cards.push(lableText);
      };
    };
  };
  return(cards);
};

function checkDeck(deck) {
  let k = 0;
  for (let i = 0; i <= 3; i++) {
    for (let j = 2; j <= 14; j++) {
      if (deck[i][j] === 2) {
        ++k;
      };
    };
  };
  if (k > 0) {
    return(false);
  };
  if (k === 0) {
    return(true);
  };
};

function getCard(player, deck, cardsOnHands, hands, points) {
  if (!checkDeck(deck)) {
    cardGenerating(player, deck, cardsOnHands, hands, points);
  };
};

function yourCardsAre(player, cardsOnHands, hands, points, language) {
  let lableText = stringsExecute()[language].game.str10 + cardCreating(player, cardsOnHands, hands, language) + ' (' + points[player] + stringsExecute()[language].game.str16;
  return(alert(lableText));
};

function croupierCardsAre(player, hole, cardsOnHands, hands, points, language) {
  let lableText;
  if (hole) {
    lableText = stringsExecute()[language].game.str11 + cardCreating(player, cardsOnHands, hands, language).shift();
    return(alert(lableText));
  };
  lableText = stringsExecute()[language].game.str12 + cardCreating(player, cardsOnHands, hands, language) + ' (' + points[player] + stringsExecute()[language].game.str16;
  return(alert(lableText));
};

function yourMoney(cash, language) {
  let lableText = stringsExecute()[language].game.str13 + cash;
  return(alert(lableText));
};

function blackJack(points, hands, language) {
  let lableText;
  if (points[0] === 21) {
    alert('Black Jack!');
    if (hands[1][1][1] === 11) {
      lableText = stringsExecute()[language].game.str17;
      if (confirm(lableText)) {
        return(1);
      } else {
        lableText = stringsExecute()[language].game.str18;
        return(alert(lableText));
      };
    } else if (hands[1][1][1] === 10) {
      alert(lableText)
      return(2);
    } else {
      return(3);
    };
  };
  return(0);
};

function checkPoints(points) {
  if ((points[0] === 21) && (points[1] !== 21)) {
    return(0);
  };
  if (points[0] > 21) {
    return(1);
  };
  if (points[1] > 21) {
    return(2);
  };
  if (points[0] === points[1]) {
    return(3);
  };
  if (points[0] > points[1]) {
    return(4);
  };
  if (points[0] < points[1]) {
    return(5);
  };
};

function betting(cash, language) {
  // List of bets creation
  let lableText;
  let path = stringsExecute().propereties.betsList;
  let length = Object.keys(path).length;
  const listBets = listCreating(path, length);
  listBets[listBets.length - 1].context = cash;
  listBets[listBets.length - 1].name += stringsExecute()[language].game.str9;
  if (cash <= listBets[0].context) {
    lableText = stringsExecute()[language].game.str7;
    alert(lableText);
    return(cash);
  };
  // Lable creation
  let k = -1;
  for (let i = 0; i < listBets.length; i++) {
    if (cash >= listBets[i].context) {
      ++k;
    };
  };
  lableText = stringsExecute()[language].game.str8 + lableCreating(listBets, 1, k);
  lableText += ('\n\r' + listBets[listBets.length-1].name);
  // Bet selection
  let playerChose;
  do {
    playerChose = prompt(lableText);
    if (playerChose === null) {
      return(0);
    };
    for (let i = 0; i < listBets.length; i++) {
      if (cash >= listBets[i].context) {
        if (playerChose === listBets[i].key) {
          return(listBets[i].context);
        };
      };
    };
  } while (true);
};

function youWin(points, language) {
  let lableText;
  for (let i = 0; i <= 4; i += 2) {
    if (checkPoints(points) === i) {
      lableText = stringsExecute()[language].winLose.str0.name;
      alert(lableText);
      return(1);
    };
  };
  return(0);
};

function youLose(points, language) {
  let lableText;
  for (let i = 1; i <= 5; i += 2) {
    if (checkPoints(points) === i) {
      let strx = ('str' + i);
      lableText = stringsExecute()[language].winLose[strx].name;
      alert(lableText);
      return(i);
    };
  };
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Program engine

function menuExecution(list, propereties, lableText) {
  let playerChose;
  let completFlag = false;
  let language = propereties.language;
  while (!completFlag) {
    playerChose = prompt(lableText,'');
    for (let i = 0; i < list.length; i++) {
      if (playerChose === list[i].key) {
        completFlag = true;
        if (list[i].context in stringsExecute()[language]) {
          buffer(propereties, list[i].context);
        } else {
          if ('addArgs' in list[i]) {
            return(list[i].context(propereties, list[i].addArgs));
          } else {
            return(list[i].context(propereties));
          };
        };
      };
    };
  };
  propereties.exitFlag = false;
};

function buffer(propereties, menu) {
  let path = stringsExecute()[propereties.language][menu];
  const list = menuCreating(propereties, path, 0).menuList;
  let lableText = menuCreating(propereties, path, 0).menuLableText;
  menuExecution(list, propereties, lableText);
};

function listScrolling(propereties, {block, parentBlock}) {
  let path = stringsExecute()[propereties.language].navigationButtons;
  const listNavigation = menuCreating(propereties, path, 0).menuList;
  let lableText = menuCreating(propereties, path, 0).menuLableText;
  path = stringsExecute()[propereties.language][block];
  let lengthTips = Object.keys(path).length;
  let lableTextCompiled;
  let i = 0;
  while ((i >= 0) && (i < lengthTips) && (!propereties.exitFlag)) {
    let strx = ('str' + i);
    if (!('name' in path[strx])) {
      let pathx = path;
      while (!('name' in pathx[strx])) {
        pathx = pathx[strx];
      };
      let lengthx = Object.keys(pathx).length;
      const listTips = listCreating(pathx, lengthx);
      lableTextCompiled = (lableCreating(listTips, 1, lengthx) + '\n\n' + lableText);
    } else {
      lableTextCompiled = (path[strx].name + '\n\n' + lableText);
    };
    i += menuExecution(listNavigation, propereties, lableTextCompiled);
  };
  propereties.exitFlag = false;
  buffer(propereties, parentBlock);
};

function changeProperety(propereties, {properety, block}) {
  let language = propereties.language;
  let lableText = (stringsExecute()[language].game.str14 + propereties[properety]);
  alert(lableText);
  let path = stringsExecute().propereties[block];
  const listProperety = menuCreating(propereties, path, 1).menuList;
  lableText = (stringsExecute()[language].game.str15 + menuCreating(propereties, path, 1).menuLableText);
  let playerChose;
  do {
    playerChose = prompt(lableText);
    for (let i = 0; i < listProperety.length; i++) {
      if (playerChose === listProperety[i].key) {
        return(propereties[properety] = listProperety[i].context);
      };
    };
  } while (true);
};

function showCredits(propereties) {
  let path = stringsExecute()[propereties.language].creditsStrings;
  const listCredits = menuCreating(propereties, path, 1).menuList;
  let lableText = menuCreating(propereties, path, 1).menuLableText;
  alert(lableText);
};

function exit(propereties) {
  return(propereties.exitFlag = true);
};

function menuCreating(propereties, path, mode) {
  let length = Object.keys(path).length;
  const list = listCreating(path, length);
  let lableText = lableCreating(list, mode, length);
  const menuCreated = {
    menuList : list,
    menuLableText : lableText
  };
  return(menuCreated);
};

function listCreating(path, length) {
  const newList = [];
  for (let i = 0; i < length; i++) {
    let strx = ('str' + i);
    newList[i] = {};
    for (let listProp in path[strx]) {
      newList[i][listProp] = path[strx][listProp];
    };
  };
  return(newList);
};

function lableCreating(list, mode, length) {
  let lableText = list[0].name;
  for (let i = 1; i < length; i++) {
    switch(mode) {
      case 0:
        lableText += ('\u0020\u0020\u0020' + list[i].name);
        break;
      case 1:
        lableText += ('\n\r' + list[i].name);
        break;
    };
  };
  return(lableText);
};

// Start of the program

const propereties = {
  cash : 10000,
  language : 'eng',
	coef : 1.5,
  exitFlag : false
};
do {
  buffer(propereties, 'menuMain');
} while (!propereties.exitFlag);
