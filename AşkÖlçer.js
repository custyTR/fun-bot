const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const RandomNumber = Math.floor(Math.random() * 100) + 1
if (RandomNumber > 1 && RandomNumber < 11)  heartPercentage = "ππ€π€π€π€π€π€π€π€π€"
if (RandomNumber > 10 && RandomNumber < 21) heartPercentage = "πππ€π€π€π€π€π€π€π€"
if (RandomNumber > 20 && RandomNumber < 31) heartPercentage = "ππππ€π€π€π€π€π€π€"
if (RandomNumber > 30 && RandomNumber < 41) heartPercentage = "πππππ€π€π€π€π€π€"
if (RandomNumber > 40 && RandomNumber < 51) heartPercentage = "ππππππ€π€π€π€π€"
if (RandomNumber > 50 && RandomNumber < 61) heartPercentage = "πππππππ€π€π€π€"
if (RandomNumber > 60 && RandomNumber < 71) heartPercentage = "ππππππππ€π€π€"
if (RandomNumber > 70 && RandomNumber < 81) heartPercentage = "πππππππππ€π€"
if (RandomNumber > 80 && RandomNumber < 91) heartPercentage = "ππππππππππ€"
if (RandomNumber > 90 && RandomNumber < 101) heartPercentage = "ππππππππππ"

const member = message.mentions.members.first()
if (!member) return thenDelete(message,'β Bir ΓΌye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Birileri aΕΔ±k mΔ± oldu?')
.setDescription(`${message.author} ile ${member} kullanΔ±cΔ±sΔ± arasΔ±ndaki aΕk seviyesini ΓΆlΓ§tΓΌm ve sonuΓ§ **%${RandomNumber}** Γ§Δ±ktΔ±!

${heartPercentage}`)
.setImage('https://media.giphy.com/media/eiRpSPB8OSGVcbkOIJ/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['aΕk-ΓΆlΓ§er','aΕk'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'AΕk ΓlΓ§er',
   description: 'KullanΔ±cΔ±lar arasΔ±nda aΕk ΓΆlΓ§er.',
   usage: 'aΕk'
}