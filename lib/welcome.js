const fs = require('fs-extra')
const _welkom = require('./welcomeleft')

module.exports = welcome = async (juwen, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
    const setwelkom = JSON.parse(fs.readFileSync('./lib/database/setwelkom.json'))
    const isSetWelkom = _welkom.cekwelkom(event.chat, setwelkom)

    try {
        if (event.action == 'add' && isWelkom && isSetWelkom) {
            const gChat = await juwen.getChatById(event.chat)
            const pChat = await juwen.getContact(event.who)
            const pesannya = _welkom.getwelkom(event.chat, setwelkom)
            const { contact, groupMetadata, name } = gChat
            let { pushname, verifiedName, formattedName } = pChat
            pushname = pushname || verifiedName || formattedName
            const namae = `@${event.who.replace('@c.us', '')}`
            const pesannyu = `${pesannya}`
            const pesannyo = (pesannyu.replace(/@nama/gi, namae))
            const pesannyi = (pesannyo.replace(/@grup/gi, name))
            juwen.sendTextWithMentions(event.chat, pesannyi)       
        } else if (event.action == 'add' && isWelkom ) {
            const gChat = await juwen.getChatById(event.chat)
            const pChat = await juwen.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            let { pushname, verifiedName, formattedName } = pChat
            pushname = pushname || verifiedName || formattedName
            const capt = 
`Hallo @${event.who.replace('@c.us', '')}
Selamat datang di Grup
*${name}

-------------------------

[NEWMEM WAJIB INTRO]*

Nama:
Umur:
Gender:
Askot:
Instagram:
Status:

Semoga betah ya :D\nJangan lupa patuhi rules`
juwen.sendTextWithMentions(event.chat, capt)
        }
    } catch (err) {
        console.log(err)
    }
}