'use strict';

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

module.exports = stringsExecute;

