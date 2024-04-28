const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '6322304990:AAFuaf1xXOEe3tgJ90OroD1UYCtfOHC9cfY';

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `⚙️ To start tracking new buys, use /add\nAlso, please setup dev wallet to track FlashLocks/Burns approves.\n\n/setup - setup portal.\n\n/settings - open settings menu.
      
/deletetoken - delete current token configuration.`);
});
bot.onText(/\/settings/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `❔ Please, add @test_alpha_guard_bot to group with administrator rights and select the group for which the portal will be created.`);
  });
  bot.onText(/\/setup/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `❔ Please, add @test_alpha_guard_bot to group with administrator rights and select the group for which the portal will be created.`);
  });
  bot.onText(/\/deletetoken/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `❔ Please, add @test_alpha_guard_bot to group with administrator rights and select the group for which the portal will be created.`);
  });

// Listen for any text message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // bot.sendMessage(chatId, 'You said: ' + msg.text);
});
