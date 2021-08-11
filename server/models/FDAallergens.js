const { Pool } = require('pg');

const PG_URI = 'postgres://spbwkbqk:5EIXmPYZ4bl4P6EhvtsbIkxRuLWzP8xC@chunee.db.elephantsql.com/spbwkbqk';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};