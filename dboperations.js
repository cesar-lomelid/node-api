const config = require('./dbconfig');
const sql = require('mssql');

async function getStates() {
    try {
        let pool = await sql.connect(config);
        let states = await pool.request().query("SELECT * FROM Core_State");
        return states.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getStates : getStates
}