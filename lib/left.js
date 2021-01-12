const fs = require('fs-extra')

module.exports = left = async (tobz, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && left) {
            const gChat = await tobz.getChatById(event.chat)
            const pChat = await tobz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await tobz.getProfilePicFromServer(event.who)
            const capt = `@${event.who.replace('@c.us', '')} hati2 di jalan ya bang :(`
            if (pepe == '' || pepe == undefined) {
                tobz.sendTextWithMentions(event.chat, capt)
             } else {
                await tobz.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                tobz.sendTextWithMentions(event.chat, capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
