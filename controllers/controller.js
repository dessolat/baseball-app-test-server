const resp = require('../JSON/baseball.json');
const resp2 = require('../JSON/baseball2.json');
const resp3 = require('../JSON/baseball3.json');
const resp4 = require('../JSON/baseball4.json');
const resp5 = require('../JSON/baseball5.json');
const resp6 = require('../JSON/baseball6.json');
const resp7 = require('../JSON/baseball7.json');
const resp8 = require('../JSON/baseball8.json');
const resp9 = require('../JSON/baseball9.json');
const resp10 = require('../JSON/baseball10.json');
const resp11 = require('../JSON/baseball11.json');
const resp12 = require('../JSON/baseball12.json');
const resp13 = require('../JSON/baseball13.json');
const resp14 = require('../JSON/baseball14.json');
const resp15 = require('../JSON/baseball15.json');
const resp16 = require('../JSON/baseball16.json');

let counter = 0;

const respArr = [
  resp,
  resp2,
  resp3,
  resp4,
  resp5,
  resp6,
  resp7,
  resp8,
  resp9,
  resp10,
  resp11,
  resp12,
  resp13,
  resp14,
  resp15,
  resp16
];

class Controller {
  async getGame(req, res) {
    res.status(200).send(respArr[counter]);
    counter = counter <= 14 ? counter + 1 : 0;
  }
  async getGameStart(req, res) {
    res.status(200).send(respArr[req.params.count]);
    counter = +req.params.count + 1;
  }
}

module.exports = new Controller();
