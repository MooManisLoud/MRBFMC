process.stdout.write('\x1b]2;MRBFMC | Minecraft Bot by MooManisLoud\x1b\x5c');

const readline = require('readline');
const mineflayer = require('mineflayer');
const clear = require('clear');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

clear();

console.log(`
 __  __ _____  ____  ______ __  __  _____ 
|  \\/  |  __ \\|  _ \\|  ____|  \\/  |/ ____|
| \\  / | |__) | |_) | |__  | \\  / | |     
| |\\/| |  _  /|  _ <|  __| | |\\/| | |     
| |  | | | \\ \\| |_) | |    | |  | | |____ 
|_|  |_|_|  \\_\\____/|_|    |_|  |_|\\_____|

Javascript Minecraft Bot By SlayMoo                                   
`);

let ip, port, username;

const askIP = () => {
  rl.question('Enter the IP address of the server: ', (inputIP) => {
    ip = inputIP;
    askPort();
  });
};

const askPort = () => {
  rl.question('Enter the port of the server: ', (inputPort) => {
    port = parseInt(inputPort, 10);
    askUsername();
  });
};

const askUsername = () => {
  rl.question('Enter the username for the bot: ', (inputUsername) => {
    username = inputUsername;
    rl.close();

    try {
      const bot = mineflayer.createBot({
        host: ip,
        port: port,
        username: username
      });

      bot.once('spawn', () => {
        console.log('\x1b[32mMooBot', `(${username}) has started on ${ip}:${port}`, '\x1b[0m');
        process.stdout.write('\x1b]2;MRBFMC | Running Bot: (${username})\x1b\x5c');
      });
    } catch (error) {
      console.error('\x1b[31mAn error occurred:', error.message, '\x1b[0m');
    }
  });
};

askIP();