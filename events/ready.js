const Discord = require("discord.js");
const config = require('../config.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "LISTENING", name: ``}, status: 'dnd' })
};
