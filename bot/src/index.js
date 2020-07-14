const Discord = require("discord.js");
const client = new Discord.Client();
const message = Discord.Message;

require("dotenv").config();

client.once("ready", () => {
  console.log("Ready 🔥");
});

client.on("message", (msg) => {
  const txt = msg.content;
  if (txt === "marco") {
    // msg.channel.send("polo");
    msg.reply("polo");
  }
});

client.login(process.env.CLIENT_ID);
