import { api, schedule, params } from "@serverless/cloud";
import moment from 'moment'
import TelegramBot from 'node-telegram-bot-api'

const { TELEGRAM_BOT_TOKEN } = params

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN)

api.get('/init', async (req, res) => {
  console.log(params.CLOUD_URL)
  res.send(`Webhook ${params.CLOUD_URL}/bot`)
})

api.get("/", async (req, res) => {
  res.send("<h1>Hello Serverless Cloud!</h1>");
});

api.get('/now', async (req, res) => {
  console.log(moment().format())
  res.send(moment().format())
})


api.get('/bot', async (req, res) => {
  res.send(true)
})

api.post('/bot', async (req, res) => {
  console.log(req.body)

  const chatId = req.body.message.chat.id

  bot.sendMessage(chatId, 'Nyahello')

  res.send(true)
})
