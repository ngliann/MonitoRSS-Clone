const fs = require('fs')
const path = require('path')
const DiscordRSS = require('discord.rss')
const schedulesPath = path.join(__dirname, 'settings', 'schedules.json')
const configPath = path.join(__dirname, 'settings', 'config.json')
const config = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath)) : {}
const schedules = fs.existsSync(schedulesPath) ? JSON.parse(fs.readFileSync(schedulesPath)) : {}

const clientManager = new DiscordRSS.ClientManager({
  setPresence: true,
  schedules,
  config
})

clientManager.start()
