const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '7024713535:AAHA5hvZzuypL9bouqwq2Vkq_aVlsspSE7Q';

// Create a bot instance
const mainMenuOptions = [
    ["Food 🍔", "Tv 🎬"],
    ["Books 📚", "More Options..."]
];

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Event listener for when a user sends a message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Check if the message is a command
    if (messageText === '/start') {
        // Send the main menu
        sendMainMenu(chatId);
    } else {
        // Handle other messages
        bot.sendMessage(chatId, 'Hello! Send /start to see the main menu.');
    }
});

// Event listener for when a user clicks an inline button
bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    // Handle the "Menu" button click
    if (data === 'menu') {
        // Send the main menu
        sendMainMenu(chatId);
    }
});

// Function to send the main menu
function sendMainMenu(chatId) {
    // Create an inline keyboard with the "Menu" button
    const keyboard = {
        inline_keyboard: [
            [{ text: 'Menu', callback_data: 'menu' }, { text: "Movies", callback_data: 'movies' }, { text: "TV", callback_data: 'TV' }, { text: "Books", callback_data: 'Books' }, { text: "Foods", callback_data: 'Foods' }],
            [{ text: "choose", callback_data: 'choose' }],
            [{ text: "List", callback_data: 'list' },{ text: "+18", callback_data: 'list' }]
        ]
    };

    // Send a message with the inline keyboard
    bot.sendMessage(chatId, 'Choose an option:', {
        reply_markup: keyboard
    });
}

console.log('Bot is running...');