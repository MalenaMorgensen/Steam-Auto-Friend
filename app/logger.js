// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */

// This file is not part of the bot here is writed code for cmd color log.

try {
    // Checking if module winston is correctly installed
    winston = require('winston');
} catch (ex) {
    // If modules are not installed showing an clear error message to user.
    console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
    console.log(ex);
    process.exit(1);
}

const level ={
  error: 0,
  correct: 1,
  fail: 2,
  new: 3,
  info: 4,
  give: 5,
  receive: 6
};
const colors = {
    error: 'bold red',
    correct: 'bold green',
    fail: 'red',
    new: 'underline green',
    info: 'yellow',
    give: 'underline red',
    receive: 'underline green'};

winston.addColors(colors);
const logger = module.exports = winston.createLogger({
  levels: level,
  format: winston.format.combine(
    winston.format.colorize({message: true}),
    winston.format.timestamp({
      format: 'HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console()
  ],
  level: 'info'
});

// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */
