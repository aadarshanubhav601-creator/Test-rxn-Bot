const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("channel_post", async (msg) => {
  try {
    await bot.request({
      method: "setMessageReaction",
      chat_id: msg.chat.id,
      message_id: msg.message_id,
      reaction: [
        { type: "emoji", emoji: "🔥" }
      ],
      is_big: true
    });

    console.log("Reaction added");
  } catch (err) {
    console.log("Error:", err.response?.body);
  }
});

console.log("Bot is running...");
