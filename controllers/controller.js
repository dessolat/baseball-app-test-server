const resp = require('../baseball.json')
const resp2 = require('../baseball2.json')
const resp3 = require('../baseball3.json')
const resp4 = require('../baseball4.json')
const resp5 = require('../baseball5.json')

let counter = 0;

const respArr = [resp, resp2, resp3, resp4, resp5]

class Controller {
  async getGame(req, res) {
    res.status(200).send(respArr[counter]);
		counter = counter <= 3 ? counter + 1 : 0
  }
  async getGameStart(req, res) {
    res.status(200).send(respArr[req.params.count]);
		counter = +req.params.count + 1
  }
}

module.exports = new Controller();
