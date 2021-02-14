const fs = require('fs-extra')

module.exports = welcome = async (tobz, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await tobz.getChatById(event.chat)
            const pChat = await tobz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await tobz.getProfilePicFromServer(event.who)
            const capt = `Hallo @${event.who.replace('@c.us', '')}\nSelamat datang di Grup\n*${name}*\n\n-------------------------\n\n*[NEWMEM WAJIB INTRO]*\n\nNama:\nUmur:\nGender:\nAskot:\nInstagram:\nStatus:\n\nSemoga betah ya :D\nJangan lupa patuhi rules`
            if (pepe == '' || pepe == undefined) {
                tobz.sendTextWithMentions(event.chat, capt)
             } else {
               await tobz.sendFileFromUrl(event.chat, pepe, `profile.jpg`, `*[ New Member in ${name} ]*\n\nJangan lupa intro.*`)
                tobz.sendTextWithMentions(event.chat, capt)
            }

        }
    } catch (err) {
        console.log(err)
    }
}
