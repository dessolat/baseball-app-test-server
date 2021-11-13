const resp = require('../baseball.json')
const resp2 = require('../baseball2.json')
const resp3 = require('../baseball3.json')
const resp4 = require('../baseball4.json')

let counter = 0;

const respArr = [resp, resp2, resp3, resp4]

class Controller {
  async getGame(req, res) {
    res.status(200).send(respArr[counter]);
		counter = counter <= 2 ? counter + 1 : 0
  }
}

module.exports = new Controller();
