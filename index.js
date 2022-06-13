const { Telegraf, Markup } = require('telegraf');
const instagram = require("@phaticusthiccy/open-apis");
const bot = new Telegraf(process.env.token);

bot.start((ctx) => ctx.reply("Hai "+ctx.from.username+" Aku adalah bot untuk mendownload video/photo dari instagram. Silahkan Kirim link untuk memulai download, Informasi Tentang Bot @RioProjects", {
      ...Markup.inlineKeyboard([
        Markup.button.url('Developer', 
           't.me/fckualot')
      ])
     }
    ));

bot.on('text', (ctx) => {
ctx.reply("Mendownload")
let link = ctx.message.text;
    instagram.insta_post(link).then(async (data) => {
   if (data.post1.type = "mp4") {
       ctx.replyWithVideo(data.post1.url)
   
    } else {
      ctx.replyWithPhoto(data.post1.url)
    }
  })
})


bot.launch()
