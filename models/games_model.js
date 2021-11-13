const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'Inso_555',
  port: 5432
});

const getGames = page => {
  return new Promise((resolve, reject) => {
    if (!page.match(/^[1-9]\d*$/)) {
      resolve('Page not found');
      return;
    }
    pool.query(
      `SELECT * FROM baseball_test.games LIMIT 8 OFFSET ${(page - 1) * 8}`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const getCount = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT COUNT(*) FROM baseball_test.games', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
const getInnings = id => {
  return new Promise((resolve, reject) => {
		if (!id.match(/^[1-9]\d*$/)) {
      resolve('Page not found');
      return;
    }
    pool.query(
      `SELECT inning_number, score FROM baseball_test.innings WHERE game_id = ${id}`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

module.exports = {
  getGames,
  getCount,
  getInnings
};
