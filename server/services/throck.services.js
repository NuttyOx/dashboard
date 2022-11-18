const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple() {
  const name = 33;
  const ticket_status_open = 2;
  const ticket_status_new = 1;

  const rows = await db.query(
    `SELECT tickets.status_id, tickets.gen_ticket_number_t, tickets.init_time, tickets.last_modified
    FROM tickets 
    INNER JOIN users 
    ON users.id=tickets.client_id 
    WHERE users.id =  ${name} AND tickets.status_id = ${ticket_status_open} 
    OR users.id = ${name} AND tickets.status_id = ${ticket_status_new} 
    ORDER BY tickets.init_time DESC
    LIMIT 5`
  );

  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

module.exports = {
  getMultiple,
};
