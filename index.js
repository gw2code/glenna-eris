import Eris from "eris"
import commands from './commands'
import nconf from 'nconf'

// Set up configuration
nconf.argv().env().file({ file: './config.json' })

// Create bot
const BOT_TOKEN = nconf.get('TOKEN')

const bot = new Eris.CommandClient(BOT_TOKEN, {}, {
    description: "GW2 bot",
    owner: "Thyr",
    prefix: "!"
});

bot.on("ready", () => {
    console.log("Ready!")
});

// Register bot commands
bot.registerCommand("bosses", (msg, args) => {
    commands.bosses(bot, msg)
}, {
	description: "Show your weekly raid boss kills",
	fullDescription: ""
});

bot.connect()