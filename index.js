const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const left = require('./lib/left')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
// const msgHndlr = require ('./juwen')
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const options = require('./options')
const juwen = require('./juwen.js')
const { prefix } = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const ownerNumber = 'no_kamu'

// AUTO UPDATE BY NURUTOMO
// THX FOR NURUTOMO
// Cache handler and check for file change
require('./juwen.js')
nocache('./juwen.js', module => console.log(`'${module}' Berhasil di Updated!`))
require('./lib/database/setting.json')
nocache('./lib/database/setting.json', module => console.log(`'${module}' Berhasil di Updated!`))

const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    restartState: isRestart
    } = setting

function restartAwal(juwen){
    setting.restartState = false
    isRestart = false
    juwen.sendText(setting.restartId, 'Restart Succesfull!')
    setting.restartId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (juwen = new Client()) => {
        console.log('------------------------------------------------')
        lolcatjs.fromString(color(figlet.textSync('ZXCBOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        lolcatjs.fromString('[OWNER] @JUWENAJAA')
        lolcatjs.fromString('[SERVER] Server Started!')
        juwen.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        juwen.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') juwen.forceRefocus()
        })
        // listening on message
        juwen.onMessage((async (message) => {

        juwen.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    juwen.cutMsgCache()
                }
            })
        // msgHndlr(juwen, message)
        // Message Handler (Loaded from recent cache)
        require('./juwen.js')(juwen, message)
    }))
           

        juwen.onGlobalParticipantsChanged((async (heuh) => {
            welcome(juwen, heuh) 
            left(juwen, heuh)
            }))
        
        juwen.onAddedToGroup(async (chat) => {
            if(isWhite(chat.id)) return juwen.sendText(chat.id, `*ZXCBOT BERHASIL MASUK!*\nUntuk melihat menu ketik *${prefix}help*\n\nSelamat menggunakan bot :D\nDipakai dengan bijak yaaa.`)
            if(mtcState === false){
                const groups = await juwen.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                    await juwen.sendText(chat.id, 'Maaf, Batas group yang dapat bot tampung sudah full.').then(async () =>{
                        juwen.deleteChat(chat.id)
                        juwen.leaveGroup(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await juwen.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async () =>{
                            juwen.deleteChat(chat.id)
                            juwen.leaveGroup(chat.id)
                        })
                    }else{
                        if(!chat.isReadOnly) juwen.sendText(chat.id, `*ZXCBOT BERHASIL MASUK!*\nUntuk melihat menu ketik *${prefix}help*\n\nSelamat menggunakan bot :D\nDipakai dengan bijak yaaa.`)
                    }
                }
            }else{
                await juwen.sendText(chat.id, 'ZXCBOT sedang maintenance, coba lain hari').then(async () => {
                    juwen.deleteChat(chat.id)
                    juwen.leaveGroup(chat.id)
                })
            }
        })

        /*juwen.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) juwen.sendSeen(to)
        }))*/

        // listening on Incoming Call
        juwen.onIncomingCall(( async (call) => {
            await juwen.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!')
            juwen.sendContact(from, ownerNumber)
            .then(() => juwen.contactBlock(call.peerJid))
        }))
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

create(options(true, start))
    .then(juwen => start(juwen))
    .catch((error) => console.log(error))
