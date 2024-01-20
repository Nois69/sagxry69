const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('  Bot is online')
});
app.listen(3000, () => {
  console.log('[INFO] Bot Online!');
});
const MainClient = require("./fancy.js");
const client = new MainClient();

client.connect();

module.exports = client;
