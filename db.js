const Pool = require('pg').Pool
const pool = new Pool({
    user: 'asan',
    password: "asan_0707",
    host: "localhost",
    port: 5432,
    database: "db_course"
});

module.exports = pool