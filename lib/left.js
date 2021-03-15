const fs = require('fs-extra')
const _left = require('./welcomeleft')

module.exports = left = async (tobz, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
    const isLeft = left.includes(event.chat)
    const setleft = JSON.parse(fs.readFileSync('./lib/database/setleft.json'))
    const isSetLeft = _left.cekleft(event.chat, setleft)
    try {
        if (event.action == 'remove' && isLeft && isSetLeft) {
            const gChat = await tobz.getChatById(event.chat)
            const pChat = await tobz.getContact(event.who)
            const pesannya = _left.getleft(event.chat, setleft)
            const { contact, groupMetadata, name } = gChat
            let { pushname, verifiedName, formattedName } = pChat
            pushname = pushname || verifiedName || formattedName
            const namae = `@${event.who.replace('@c.us', '')}`
            const pesannyu = `${pesannya}`
            const pesannyo = (pesannyu.replace(/@nama/gi, namae))
            const pesannyi = (pesannyo.replace(/@grup/gi, name))
            tobz.sendTextWithMentions(event.chat, pesannyi)       
        } else if (event.action == 'remove' && isLeft) {
            const gChat = await tobz.getChatById(event.chat)
            const pChat = await tobz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            let { pushname, verifiedName, formattedName } = pChat
            pushname = pushname || verifiedName || formattedName
            const capt = 
`❏ @${event.who.replace('@c.us', '')} 
Baru saja left 

❏ Dari: ${name}


✎ . . .
┏━━━━━━━━━━━━━━━┓
Untuk mengubah pesan left, kalian bisa 
ubah dengan cara /setleft

Contoh:
setleft Hai @nama selamat datang di @grup

@nama - mention user
@grup - nama grup
┗━━━━━━━━━━━━━━━┛`
    tobz.sendTextWithMentions(event.chat, capt)
        }
    } catch (err) {
        console.log(err)
    }
}