/*
THX BUAT YANG UDAH GUNAIN SCRIPT INI!

BAGI YANG NANYA2 MASANG APIKEY DIMANA??
BACA README NYA, PERCUMA GW BUAT README

ZXCBOT V3
*/
require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const get = require('got')
const speed = require('performance-now')
const fetch = require('node-fetch')
const path = require('path')
const webp = require('webp-converter')
const Exif = require('./tools/exif')
const exif = new Exif()
const sharp = require('sharp')
const exect = require('await-exec')
const canvas = require('canvacord')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { getUser, getPost, searchUser } = require('./lib/Insta')
const google = require('google-it')
const isPorn = require('is-porn')
const translatte = require('translatte')
const translate2 = require('@vitalets/google-translate-api');
const { stdout } = require('process')
const translate = require('translatte')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const request = require('request')
const { getStickerMaker } = require('./lib/ttp')
const quotedd = require('./lib/quote')
const color = require('./lib/color')
const urlShortener = require('./lib/shortener')
const urlShortener2 = require('./lib/shortener2')
const { addFilter, isFiltered } = require('./lib/msgFilter')
const cariKasar = require('./lib/kataKotor')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const emojiUnicode = require('emoji-unicode')
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const tiktok = require('tiktok-scraper')
const level = require('./lib/level')
const card = require('./lib/card')
const ms = require('parse-ms')
const toMs = require('ms')
const yts = require('yt-search')
const acrcloud = require("acrcloud")

// CONST DATABASE
const _afk = JSON.parse(fs.readFileSync('./lib/database/afk.json'))
const _leveling = JSON.parse(fs.readFileSync('./lib/database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./lib/database/level.json'))
const _bg = JSON.parse(fs.readFileSync('./lib/database/background.json'))
const _reminder = JSON.parse(fs.readFileSync('./lib/database/reminder.json'))
const _reminder2 = JSON.parse(fs.readFileSync('./lib/database/setgroup.json'))
const _autosticker = JSON.parse(fs.readFileSync('./lib/database/autosticker.json'))
const _autostickervideo = JSON.parse(fs.readFileSync('./lib/database/autostickervideo.json'))
const _autovn = JSON.parse(fs.readFileSync('./lib/database/autovn.json'))
const setwelkom = JSON.parse(fs.readFileSync('./lib/database/setwelkom.json'))
const setleft = JSON.parse(fs.readFileSync('./lib/database/setleft.json'))


//const { reminder } = require('./function')
const { quotemaker, sleep } = require('./lib/functions')
const { snk, readme } = require('./lib/help')
const { getLocationData } = require('./lib/location')
const { stknobg, stknobg2 } = require('./lib/snobg')
const welkomlef = require('./lib/welcomeleft')
const { facebook, smule, starmaker, twitter2 } = require('./lib/downloader')
const { uploadImages, custom ,picturemis } = require('./lib/fetcher')
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants')
const { stickerburn, stickerlight, sfisheye, television, hiyaaa, comics, nightvis1 } = require('./lib/sticker')

// LOAD FILE
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
let simi_ = JSON.parse(fs.readFileSync('./lib/database/Simsimi.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'))
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
let premNumber = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
let dbcot = JSON.parse(fs.readFileSync('./lib/database/bacot.json'))
let dsay = JSON.parse(fs.readFileSync('./lib/database/say.json'))
let svimage = JSON.parse(fs.readFileSync('./lib/database/svimage.json'))
let glimit = JSON.parse(fs.readFileSync('./lib/database/glimit.json'))
let slimit = JSON.parse(fs.readFileSync('./lib/database/glimit.json'))
let balance = JSON.parse(fs.readFileSync('./lib/database/balance.json'))

// PROTECT
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let antiig = JSON.parse(fs.readFileSync('./lib/database/antiig.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
let antisticker = JSON.parse(fs.readFileSync('./lib/database/antisticker.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/database/msgBadword.json'))
let dbbadword = JSON.parse(fs.readFileSync('./lib/database/katakasar.json'))
let badword = JSON.parse(fs.readFileSync('./lib/database/badword.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/database/user.json'))
let stickerspam = JSON.parse(fs.readFileSync('./lib/database/stickerspam.json'))


let { 
    limitCount,
    banChats,
    barbarkey,
    vhtearkey,
    tobzkey,
    naufalkey,
    lolkey,
    vinzkey,
    autorwm,
    packnamewm,
    groupkey,
    techapikey,
    removenobgkey,
    restartState: isRestart,
    mtc: mtcState
    } = setting

let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const checkVIP = (userId) => {
    let id = false
    Object.keys(VipNumber).forEach((i) => {
        if (VipNumber[i].id === userId) {
            id = true
        }
    })
    return id
}
const checkuser = (serial) => {
    let status = false
    Object.keys(pendaftar).forEach((i) => {
        if (pendaftar[i].id === serial) {
            status = true
        }
    })
    return status
}

const cekwelkom = (chatId) => {
    let id = false
    Object.keys(setwelkom).forEach((i) => {
        if (setwelkom[i].id === chatId) {
            id = true
        }
    })
    return id
}

const addAfkUser = (userId, time, reason) => {
    const obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
    _afk.push(obj)
    fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
}

const checkAfkUser = (userId) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            status = true
        }
    })
    return status
}

const getAfkReason = (userId) => {
    let position = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _afk[position].reason
    }
}

const getAfkTime = (userId) => {
    let position = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _afk[position].time
    }
}

const getAfkId = (userId) => {
    let position = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _afk[position].id
    }
}

const getAfkPosition = (userId) => {
    let position = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    return position
}



moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = tobz = async (tobz, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const isVideo = type === 'video'
        const isImage = type === 'image'
        const argx = commands.toLowerCase()
        const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''

        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await tobz.getHostNumber()
        const blockNumber = await tobz.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
		const groupMembers = isGroupMsg ? await tobz.getGroupMembersId(groupId) : ''
        const groupAdmins = isGroupMsg ? await tobz.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000000000000000")

        const welkomon = isGroupMsg ? welkom.includes(groupId) : false
        const isSetWelkom = cekwelkom(chatId)
        const isSetLeft = welkomlef.cekleft(chatId, setleft)
        const lefton = isGroupMsg ? left.includes(groupId) : false
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false
        const isAutoVn = isGroupMsg ? _autovn.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAutoStickerVideoOn = isGroupMsg ? _autostickervideo.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&+()<>.\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&+()<>.\/\\©^]/gi) : '#'

        global.prefix

        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedLocation = quotedMsg && quotedMsg.type === 'location'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'

        const isBadword = badword.includes(chatId)
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.substring(body.indexOf(' ') + 1)
        const isKasar = await cariKasar (chatId)
        const GroupLinkDetector = antilink.includes(chatId)
        const InstagramLinkDetector = antiig.includes(chatId)
        //const AntiStickerSpam = antisticker.includes(chatId)
        const isPrivate = sender.id === chat.contact.id
        const isCmd = command.startsWith(prefix)

        const gcount = '10'
        const tobzkey = 'BotWeA'
        const limitgame = 'Maaf limit kamu tidak cukup untuk memainkan game ini'
        const juwen = tobz
        const serial = sender.id
        const isAdmin = adminNumber.includes(sender.id) // Admin Number
		const isPrem = premNumber.includes(sender.id) // Premium Number
        //const reportNumber = '6289635687240@c.us'
       // const ownerNumber = '6289635687240@c.us' // Owner Number 1 = Utama 
        const ownerNumber = ["6289635687240@c.us", "6285157661229@c.us"] // Owner Number 2 = Assistan Owner
        const isOwner = ownerNumber.includes(sender.id) // Owner Number 1
        //const isOwner2 = ownerNumber2.includes(sender.id) // Owner Number 2
        const isAfkOn = checkAfkUser(sender.id) // AFK NUMBER
        const isUser = checkuser(sender.id)
        const levelRole = level.getLevelingLevel(sender.id, _level)
    
        
        // LEVELING
        var role = 'Copper V'
        if (levelRole >= 5) {
            role = 'Copper IV'
        } else if (levelRole >= 10) {
            role = 'Copper III'
        } else if (levelRole >= 15) {
            role = 'Copper II'
        } else if (levelRole >= 20) {
            role = 'Copper I'
        } else if (levelRole >= 25) {
            role = 'Silver V'
        } else if (levelRole >= 30) {
            role = 'Silver IV'
        } else if (levelRole >= 35) {
            role = 'Silver III'
        } else if (levelRole >= 40) {
            role = 'Silver II'
        } else if (levelRole >= 45) {
            role = 'Silver I'
        } else if (levelRole >= 50) {
            role = 'Gold V'
        } else if (levelRole >= 55) {
            role = 'Gold IV'
        } else if (levelRole >= 60) {
            role = 'Gold III'
        } else if (levelRole >= 65) {
            role = 'Gold II'
        } else if (levelRole >= 70) {
            role = 'Gold I'
        } else if (levelRole >= 75) {
            role = 'Platinum V'
        } else if (levelRole >= 80) {
            role = 'Platinum IV'
        } else if (levelRole >= 85) {
            role = 'Platinum III'
        } else if (levelRole >= 90) {
            role = 'Platinum II'
        } else if (levelRole >= 95) {
            role = 'Platinum I'
        } else if (levelRole >= 100) {
            role = 'Exterminator'
        }

        
                if (isGroupMsg && isUser && !isBanned && isLevelingOn) {
                    const currentLevel = level.getLevelingLevel(sender.id, _level)
                    const checkId = level.getLevelingId(sender.id, _level)
                    const checkBg = card.getBg(sender.id, _bg)
                    try {
                        if (currentLevel === undefined && checkId === undefined) level.addLevelingId(sender.id, _level)
                        if (checkBg === undefined) card.addBg(sender.id, _bg)
                        const amountXp = Math.floor(Math.random() * 10) + 150
                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                        const getLevel = level.getLevelingLevel(sender.id, _level)
                        level.addLevelingXp(sender.id, amountXp, _level)
                        if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                            level.addLevelingLevel(sender.id, 1, _level)
                            const fetchXp = 200 * (Math.pow(2, level.getLevelingLevel(sender.id, _level)) - 1)
                            await tobz.reply(from, `*「 LEVEL UP 」*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *Level*: ${getLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`, id)
                        }
                    } catch (err) {
                        console.error(err)
                    }
                }

        if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isAdmin && !isOwner && !isPrem){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                const check = await tobz.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    tobz.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`, id).then(() => {
                        tobz.removeParticipant(groupId, sender.id)
                    })
                }
            }
        }
        if (isGroupMsg && InstagramLinkDetector && !isGroupAdmins && !isAdmin && !isOwner && !isPrem){
            if (chats.match(/(https:\/\/www.instagram.com)/gi) || chats.match("instagram.com")) {
                const check = await tobz.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    tobz.reply(from, `*「 INSTAGRAM LINK DETECTOR 」*\n\nKamu pansos, maaf kamu di kick dari grup :(\n\nBila kamu berniat ingin mendownload video instagram silahkan pc ke admin untuk di invite lagi.`, id).then(() => {
                        tobz.removeParticipant(groupId, sender.id)
                    })
                }
            }
        }
        
       // if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {

       /* if (isGroupMsg && AntiStickerSpam && !isGroupAdmins && !isAdmin && !isOwner && !isPrem){
            if(stickermsg === true){
                if(isStickerMsg(serial)) return
                addStickerCount(serial)
            }
        } */

        if(!isCmd && isKasar && isGroupMsg && isBadword && !isGroupAdmins && !isPrem) { 
            console.log(color('[BADWORD]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${argx}`), 'from', color(pushname), 'in', color(name || formattedTitle)) 
            if(isBadwordMsg(serial)) return
                addBadCount(serial)
        }

        // AKTIFKAN APABILA TIDAK INGIN TERKENA SPAM!!
        // [BETA] Avoid Spam Message
       
        //if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        //if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) } 
        //addFilter(from)
        //if (!isFiltered(from) && isGroupMsg) return tobz.reply(from, 'You are in cooldown', id)
        //if (!isFiltered(from) && !isGroupMsg) return tobz.reply(from, 'You are in cooldown', id)

        // CONSOLE LOG
        if (isBanned) {console.log(color('[BANNED]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}
        if (isBlocked) return console.log(color('[BLOCKED]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}

       
        // FUNCTION
        
       // BALANCE
       const ceklumut = (serial) => {
        let position = false
        Object.keys(limit).forEach((i) => {
            if(limit[i].id === serial) {
                position = i
            }
        })
        if (position !== false) {
            return limitCount - limit[position].limit
        } else {
            return limitCount
        }
    }

        const addbalance = (pemain, duit) => {
            let position = false
            Object.keys(balance).forEach((i) => {
                if (balance[i].id === pemain) {
                    position = i
                }
            })
            if (position !== false) {
                balance[position].balance += duit
                fs.writeFileSync('./lib/database/balance.json', JSON.stringify(balance))
            } else {
                const bulin = ({
                    id: pemain,
                    balance: duit
                        })
				balance.push(bulin)
				fs.writeFileSync('./lib/database/balance.json', JSON.stringify(balance))
            }
        }
        const kurangbalance = (pemain, duit) => {
            let position = false
            Object.keys(balance).forEach((i) => {
                if (balance[i].id === pemain) {
                    position = i
                }
            })
            if (position !== false) {
                balance[position].balance -= duit
                fs.writeFileSync('./lib/database/balance.json', JSON.stringify(balance))
            }
        }
        const addlimit = (pemain, duit) => {
            let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === pemain) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= duit
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(limit))
            } else {
                const njt = 0 - duit
                const bulim = ({
                    id: pemain,
                    limit: njt
                        })
				limit.push(bulim)
				fs.writeFileSync('./lib/database/limit.json', JSON.stringify(limit))
            }
        }
        const getbalance = (pemain) => {
            let position = false
            Object.keys(balance).forEach((i) => {
                if (balance[i].id === pemain) {
                    position = i
                }
            })
            if (position !== false) {
                return balance[position].balance
            } else {
                return '0'
            }
        }

        function waktu(seconds) { // TOBZ
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }

        // AUTO VN
        //if (isGroupMsg && isUser && isImage && isAutoStickerOn) {
        if (isGroupMsg && isUser && isAutoVn) {
            const nyenye = await axios.get(`https://naufalhoster.xyz/tools/tts?apikey=${naufalkey}&text=${encodeURIComponent(message.body)}&lang=id`)

            const hahah = nyenye.data.result.audio
            const responses = await fetch(hahah);
            const buffer2 = await responses.buffer();   
            await fs.writeFile(`./media/audio.mp3`, buffer2)
            await tobz.sendPtt(from,'./media/audio.mp3', id)
            //tobz.sendFileFromUrl(from, hahah, ``, ``, id)

    }   
    // Auto-sticker Video
        if (isGroupMsg && isUser && isVideo && isAutoStickerVideoOn) {
            const mediaData = await decryptMedia(message, uaOverride)
            const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await tobz.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, pack: `${packnamewm}`, author: `${autorwm}`, fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', crop: false, loop: 0 })
        }

        // Auto-sticker
        if (isGroupMsg && isUser && isImage && isAutoStickerOn) {
            const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                    .then((res) => {
                        sharp(res)
                            .resize({
                                width: 512,
                                height: 512,
                                fit: 'contain',
                                background: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    alpha: 0
                                }
                            })
                            .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                if (err) return console.error(err)
                                await exect(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                    const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                    const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                    await tobz.sendRawWebpAsSticker(from, base64)
                                    //console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                    fs.unlinkSync(`./temp/${sender.id}.webp`)
                                    fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    //limitAdd(serial)
                                }
                            })
                    })
            }


            //AFK
        if (isGroupMsg) {
            for (let ment of mentionedJidList) {
                if (checkAfkUser(ment)) {
                    const pesanafk = args.join(' ') ? args.join(' ') : 'Nothing.'
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    tobz.reply(from, `${monospace(
`Sedang AFK!
                        
Alasan :${getReason}
Sejak  : ${getTime}`)}`, id)

tobz.sendTextWithMentions(getId, `${monospace(
`[AFK REPORT]
---------------------------

WAKTU:
${time}

NO PENGETAG:
@${sender.id.match(/\d+/g)}

Group:
${formattedTitle}

Pesan:
${pesanafk}`)}`)
                }
            }
            if (checkAfkUser(sender.id) && !isCmd) {
                _afk.splice(getAfkPosition(sender.id), 1)
                fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
                await tobz.sendTextWithMentions(from, `@${sender.id.replace('@c.us','')} Sekarang tidak AFK! ~`,)
            }
        }

// FUNCTION-REMINDER
const addReminder = (userId, message, time) => {
    const obj = { id: userId, msg: message, time: Date.now() + toMs(time) }
    _reminder.push(obj)
    fs.writeFileSync('./lib/database/reminder.json', JSON.stringify(_reminder))
}

const getReminderTime = (userId) => {
    let position = false
    Object.keys(_reminder).forEach((i) => {
        if(_reminder[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _reminder[position].time
    }
}

const getReminderMsg = (userId) => {
    let position = false
    Object.keys(_reminder).forEach((i) => {
        if (_reminder[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _reminder[position].msg
    }
}

const getReminderPosition = (userId) => {
    let position = false
    Object.keys(_reminder).forEach((i) => {
        if (_reminder[i].id === userId) {
            position = i
        }
    })
    return position
}



// FUNCTION-SETGROUP
const addReminder2 = (userId, message, time) => {
    const obj = { id: userId, msg: message, time: Date.now() + toMs(time) }
    _reminder2.push(obj)
    fs.writeFileSync('./lib/database/setgroup.json', JSON.stringify(_reminder2))
}

const getReminderTime2 = (userId) => {
    let position = false
    Object.keys(_reminder2).forEach((i) => {
        if(_reminder2[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _reminder2[position].time
    }
}

const getReminderMsg2 = (userId) => {
    let position = false
    Object.keys(_reminder2).forEach((i) => {
        if (_reminder2[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _reminder2[position].msg
    }
}

const getReminderPosition2 = (userId) => {
    let position = false
    Object.keys(_reminder2).forEach((i) => {
        if (_reminder2[i].id === userId) {
            position = i
        }
    })
    return position
}

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        
        var nmr = sender.id
        var obj = pendaftar.some((val) => {
            return val.id === nmr
        })
        var cekage = pendaftar.some((val) => {
            return val.id === nmr && val.umur >= 7
        })

        function monospace(string) {
            return '```' + string + '```'
        }


        function isReg(obj){
            if (obj === true){
                return false
            } else {     
                return tobz.reply(from, `*Ups, kamu belum terdaftar!*\n\nUntuk mendaftar ketik:\n${prefix}daftar |nama|umur\n\nCukup gunakan nama depan/panggilan saja\n\ncontoh format:\n*${prefix}daftar |${pushname}|17*`, id) //if user is not registered
            }
        }

        function cekumur(obj){
            if (obj === true){
                return false
            } else {
                return tobz.reply(from, `Kamu belum cukup umur untuk menggunakan bot, min 15 tahun\n\nKamu bisa mendaftar ulang dengan cara chat owner dahulu, ketik ${prefix}owner\nHubungi Owner:\nwa.me/6289635687240`, id) //if user is not registered
            }
        }
        const slots = ['🍇', '🍊', '🍒', '🍌', '🔔']
        const sotoy1 = [
            '🍒 : 🔔 : 🍊',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍒 : 🔔',
            '🔔 : 🔔 : 🍇',
            ]
        const sotoy2 = [
            '🍒 : 🔔 : 🍊',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍒 : 🔔',
            '🔔 : 🔔 : 🍇',
            ]
		
		const apakah = [ // APAKAH
            'Ya',
            'Tidak',
            'Kayaknya',
			'Gatau',
			'Bisa jadi',
			'Jangan tanya saya',
			'Lah mana saya tau',
			'Hmm...',
			'Tau ah, gatau',
			'Kurang Tau',
			'Bener banget',
			'Iya iya iya iya',
			'Ya gitulah',
			'Wah....'
            ]
            
            
        const bisakah = [   // BISAKAH
		'Bisa',
		'Tidak Bisa',
		'Bisa kok bisa',
		'Hooh bisa',
		'Mana bisa',
		'Bisa ga yaa...',
		'Bisa kayaknya sih',
		'Kurang bisa menurut bot']

        const kapankah = ['1 Hari lagi','2 Hari lagi','3 Hari lagi','4 Hari lagi','5 Hari lagi','6 Hari lagi','7 Hari lagi','8 Hari lagi','9 Hari lagi','1 Bulan lagi','2 Bulan lagi','4 Bulan lagi','6 Bulan lagi','11 Bulan lagi','12 Bulan lagi','1 Tahun lagi','2 Tahun lagi','4 Tahun lagi','10 Tahun lagi','7 Tahun lagi','100 Tahun lagi', ]

        const rate = ['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38&','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']

        const rate2 = ['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38&','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']    

		const berapapersen = ['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38&','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']

        const teksbucin = ["Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
        "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
        "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
        "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
        "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
        "Pacar orang adalah jodoh kita yang tertunda.",
        "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
        "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
        "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
        "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
        "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
        "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
        "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
        "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
        "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
        "Aku ingin menjadi satu-satunya, bukan salah satunya.",
        "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
        "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
        "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
        "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
        "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
        "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
        "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
        "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
        "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
        "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
        "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
        "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
        "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
        "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
        "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
        "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
        "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
        "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
        "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
        "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
        "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
        "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
        "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
        "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
        "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
        "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
        "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
        "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
        "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
        "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
        "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
        "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
        "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
        "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
        "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
        "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
        "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
        "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
        "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
        "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
        "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
        "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
        "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
        "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
        "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
        "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
        "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
        "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
        "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
        "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
        "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
        "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
        "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
        "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
        "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
        "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
        "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
        "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
        "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
        "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
        "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
        "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
        "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
        "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
        "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
        "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
        "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
        "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
        "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
        "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
        "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
        "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
        "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
        "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
        "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
        "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
        "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
        "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
        "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
        "Saben dino kegowo ngimpi tapi ora biso nduweni.",
        "Ora ketemu koe 30 dino rasane koyo sewulan.",
        "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
        "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
        "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
        "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
        "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
        "Kanyaah akang moal luntur najan make Bayclean.",
        "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
        "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
        "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
        "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
        "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
        "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
        "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
        "Cukup jaringan aja yang hilang, kamu jangan.",
        "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
        "Musuhku adalah mereka yang ingin memilikimu juga.",
        "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
        "Jam tidurku hancur dirusak rindu.",
        "Cukup China aja yang jauh, cinta kita jangan.",
        "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
        "Cuma satu keinginanku, dicintai olehmu..",
        "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
        "Cukup antartika aja yang jauh. Antarkita jangan."]


        const mess = {
            wait: 'Sedang di proses, silahkan tunggu sebentar!',
            magernulissatu: 'Sedang di proses, silahkan tunggu sebentar!',
            wait2: 'Sedang di proses, silahkan tunggu sekitar ± 1 min!',
            
            error: {
                St: `[❗] Kirim gambar dengan caption *${prefix}sticker* atau tag gambar yang sudah dikirim`,
                Ti: `[❗] Replay sticker dengan caption *${prefix}toimg* atau tag sticker yang sudah dikirim`,
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg' // TUTOR
        const errorurl = 'https://i.ibb.co/x89Nd2g/Whats-App-Image-2020-12-18-at-7-31-58-AM.jpg' // ERROR IMAGE
        const errorurl2 = 'https://i.ibb.co/x89Nd2g/Whats-App-Image-2020-12-18-at-7-31-58-AM.jpg' // ERROR IMAGE 2
        const donasiimage = 'https://i.ibb.co/DrzmF04/IMG-20210108-121518.jpg'
        const ownerqr = 'https://i.ibb.co/zPK8N5d/img-20210109-174840.jpg'
       
        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }
        
        function gameAdd (id) {
            if (isAdmin) {return;}
            var found = false;
            Object.keys(glimit).forEach((i) => {
                if(glimit[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                glimit[found].glimit += 1;
                fs.writeFileSync('./lib/database/glimit.json',JSON.stringify(glimit));
            }
        }
        
        function isLimitg(id){
            if (isAdmin) {return false;}
            let found = false;
            for (let i of glimit){
                if(i.id === id){
                    let limits = i.glimit;
                    if (limits >= gcount) {
                        found = true;
                        tobz.reply(from, 'Limit game anda telah habis coba esok hari', id)
                        return true;
                    }else{
                        glimit
                        found = true;
                        return false;
                    }
                }
            }
            if (found === false){
                let obj = {id: `${id}`, glimit:1};
                glimit.push(obj);
                fs.writeFileSync('./lib/database/glimit.json',JSON.stringify(glimit));
                return false;
            }  
        }
        
        // FUNCTION
     /*   function isStickerMsg(id){
            if (isOwner, isAdmin) {return false;}
            let found = false;
            for (let i of stickerspam){
                if(i.id === id){
                    if (i.msg >= 12) {
                        found === true 
                        tobz.reply(from, '*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh Elaina', message.id).then(() => {
                            tobz.removeParticipant(groupId, id)
                        }).then(() => {
                            const cus = id
                            var found = false
                            Object.keys(stickerspam).forEach((i) => {
                                if(stickerspam[i].id == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                stickerspam[found].msg = 7;
                                const resultx = 'Database telah direset!'
                                console.log(stickerspam[found])
                                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                                tobz.sendText(from, resultx)
                            } else {
                                    tobz.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                            }
                        })
                        return true;
                    }else{
                        found === true
                        return false;
                    }   
                }
            }
            if (found === false){
                let obj = {id: `${id}`, msg:1};
                stickerspam.push(obj);
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                return false;
            }  
        }
        function addStickerCount(id){
            if (isOwner, isAdmin) {return;}
            var found = false
            Object.keys(stickerspam).forEach((i) => {
                if(stickerspam[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                stickerspam[found].msg += 1;
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
            }
        }
                */
        function isBadwordMsg(id){
            if (isOwner, isAdmin) {return false;}
            let kasar = false;
            for (let i of msgBadword){
                if(i.id === id){
                    let msg = i.msg
                    if (msg >= 12) { // 12x
                        kasar === true 
                        tobz.reply(from, '*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, kamu akan di kick otomatis oleh Elaina!', message.id).then(() => {
                            tobz.removeParticipant(groupId, id)
                        }).then(() => {
                            const cus = id
                            var found = false
                            Object.keys(msgBadword).forEach((i) => {
                                if(msgBadword[i].id == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                msgBadword[found].msg = 1;
                                const resultv = 'Database telah direset'
                                console.log(msgBadword[found])
                                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                                tobz.sendText(from, resultv)
                            } else {
                                    tobz.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                            }
                        })
                        return true;
                    }else{
                        kasar === true
                        return false;
                    }   
                }
            }
            if (kasar === false){
                let obj = {id: `${id}`, msg:1};
                msgBadword.push(obj);
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                return false;
            }  
        }
        function addBadCount(id){
            if (isOwner, isAdmin) {return;}
            var kasar = false
            Object.keys(msgBadword).forEach((i) => {
                if(msgBadword[i].id == id){
                    kasar = i
                }
            })
            if (kasar !== false) {
                msgBadword[kasar].msg += 1;
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
            }
        }

        function isMsgLimit(id){
            if (isAdmin) {return false;}
            let found = false;
            for (let i of msgLimit){
                if(i.id === id){
                    if (i.msg >= 5) {
                        found === true 
                        tobz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, id)
                        tobz.contactBlock(id)
                        banned.push(id)
                        fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                        return true;
                    }else if(i.msg >= 5){
                        found === true
                        tobz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, id)
                        return true
                    }else{
                        found === true
                        return false;
                    }   
                }
            }
            if (found === false){
                let obj = {id: `${id}`, msg:1};
                msgLimit.push(obj);
                fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                return false;
            }  
        }
function addMsgLimit(id){
            if (isAdmin) {return;}
            var found = false
            Object.keys(msgLimit).forEach((i) => {
                if(msgLimit[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                msgLimit[found].msg += 1;
                fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
            }
        }
        function isLimit(id){
                    if (isAdmin) {return false;}
					if (isPrem) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                tobz.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isAdmin) {return;}
					if (isPrem) {return ;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }

            // ----------------------------------------------------------------------- \\

                // SIMIH
                function simiAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(slimit).forEach((i) => {
                        if(slimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        slimit[found].glimit += 1;
                        fs.writeFileSync('./lib/database/slimit.json',JSON.stringify(slimit));
                    }
                }
                function isLimits(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of slimit){
                        if(i.id === id){
                            let limits = i.slimit;
                            if (limits >= scount) {
                                found = true;
                                tobz.reply(from, 'Limit game anda telah habis coba esok hari', id)
                                return true;
                            }else{
                                slimit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, slimit:1};
                        slimit.push(obj);
                        fs.writeFileSync('./lib/database/slimit.json',JSON.stringify(slimit));
                        return false;
                    }  
                }

                // ----------------------------------------------------------------------- \\
    
                // END HELPER FUNCTION
        // FUNCTION DAFTAR! NEXT UPDATE
        function monospace(string) {
            return '```' + string + '```'
        }

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        
                if(body === prefix+'mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isAdmin) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin ZXCBOT!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        tobz.reply(from, `Bot telah di mute pada chat ini!\n${prefix}unmute untuk unmute!`, id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, `Bot telah di mute pada chat ini!\n${prefix}unmute untuk unmute!`, id)
                    }
                }
                if(body === prefix+'unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isAdmin) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin ZXCBOT!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        tobz.reply(from, 'Bot telah di unmute!', id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        tobz.reply(from, 'Bot telah di unmute!', id)                   
                    }
                }
                if (body === prefix+'public') {
                    if (!isOwner) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner ZXCBOT!', id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    console.log('------------------------------------------------')
                    lolcatjs.fromString(color(figlet.textSync('> PUBLIC MODE ', { horizontalLayout: 'full' })))
                    //console.log('PUBLIC MODE')
                    console.log('------------------------------------------------')
                    tobz.reply(from, '*PUBLIC MODE*', id)
                   
				/*	 txtbcc = `Bot bisa dipakai kembali, selamat menggunakan bot!`
                const semuagrupp = await tobz.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrupp){
                        var cekgrup = await tobz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) tobz.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbcc)
				}
						tobz.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrupp){
                        var cekgrup = await tobz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) tobz.sendText(grupnya, txtbcc)
                    }
                            tobz.reply('Broadcast Success!')
                } */
				
					} 
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

            case prefix+'banchat':
                if (setting.banChats === true) return
                if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
                setting.banChats = true
                banChats = true
                fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2)) 
                console.log('------------------------------------------------')
                lolcatjs.fromString(color(figlet.textSync('> OWNER MODE', { horizontalLayout: 'full' })))
                //console.log('ONLY OWNER MODE')
                console.log('------------------------------------------------')
                tobz.reply(from, '*OWNER MODE*', id)
            /*	txtbcc = `*ONLY OWNER CAN USE BOT!*!`
                    const semuagrupp = await tobz.getAllChatIds();
                    if(quotedMsg && quotedMsg.type == 'image'){
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        for(let grupnya of semuagrupp){
                            var cekgrup = await tobz.getChatById(grupnya)
                            if(!cekgrup.isReadOnly) tobz.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbcc)
                    }
                            tobz.reply('Broadcast sukses!')
                    }else{
                        for(let grupnya of semuagrupp){
                            var cekgrup = await tobz.getChatById(grupnya)
                            if(!cekgrup.isReadOnly && isMuted(grupnya)) tobz.sendText(grupnya, txtbcc)
                        }
                                tobz.reply('Broadcast Success!')
                    }   */
                break

        case prefix+'unmute':
            console.log(`Unmuted ${name}!`)
            await tobz.sendSeen(from)
            break
        case prefix+'unbanchat':
            console.log(`Banchat ${name}!`)
            await tobz.sendSeen(from)
            break
       /* case prefix+'sticker':
        case prefix+'stiker':
            case prefix+'s':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await tobz.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await tobz.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await tobz.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    tobz.reply(from, mess.error.Iv, id)
                }
            } else {
                    tobz.reply(from, mess.error.St, id)
            }
            break */
            case prefix+'exif':
                if (!isOwner) return await tobz.reply(from, 'Fitur ini hanya khusus owner bot', id)
                const stikerwm2 = body.slice(5)
                try {
                if (!stikerwm2.includes('|')) return await tobz.reply(from, `Kirim perintah *${prefix}takestick nama|author*`, id)
                const namaPack = stikerwm2.split('|')[0]
                const authorPack = stikerwm2.split('|')[1]
                exif.create(namaPack, authorPack)
                await tobz.reply(from, 'Berhasil mengganti teks stiker wm!', id)
                 } catch (err) {
                console.log(err)
                 tobz.reply(from, 'Ada yang error!', id)
                 }
                    break
            case prefix+'takestick': 
            if(isReg(obj)) return
            if(cekumur(cekage)) return
          // if (!isOwner) return tobz.reply(from, `Fitur ini sedang dalam perbaikan.`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const pembawm = await slicedArgs.join(' ')
            try {
            if (!pembawm.includes('|')) return await tobz.reply(from, `Kirim perintah *${prefix}takestick nama|author*`, id)
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                await tobz.reply(from, mess.wait, id)
                const packname = pembawm.split('|')[0]
                const author = pembawm.split('|')[1]
                exif.create(packname, author, `takestick_${sender.id}`)
                webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                    .then((res) => {
                        sharp(res)
                            .resize(512, 512)
                            .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                if (err) return console.error(err)
                                await exect(`webpmux -set exif ./temp/takestick_${sender.id}.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: true })
                                if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                    const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                    const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                    await tobz.sendRawWebpAsSticker(from, base64)
                                    //console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                    fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                    fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                    fs.unlinkSync(`./temp/takestick_${sender.id}.exif`)
                                }
                            })
                    })
            } else {
                await tobz.reply(from, 'Reply sticker pak', id)
            }
        } catch (err) {
            tobz.reply(from, 'Ada yang error!', id)
        }
        break
        case prefix+'sticker2':
        case prefix+'stiker2':
            case prefix+'s2':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (isMedia || isQuotedImage ||isMedia && type === 'image') {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                    .then((res) => {
                        sharp(res)
                            .resize(512, 512)
                            .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                if (err) return console.error(err)
                                await exect(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                    const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                    const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                    await tobz.sendRawWebpAsSticker(from, base64)
                                    //console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                    fs.unlinkSync(`./temp/${sender.id}.webp`)
                                    fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    //limitAdd(serial)
                                }
                            })
                    })
            } else {
                await tobz.reply(from, `Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*\nJika berupa video kirim perintah *${prefix}stickergif*`, id)
            }
        break 
        case prefix+'sticker':
        case prefix+'stiker':
            case prefix+'s':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            try {
            if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                    .then((res) => {
                        sharp(res)
                            .resize({
                                width: 512,
                                height: 512,
                                fit: 'contain',
                                background: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    alpha: 0
                                }
                            })
                            .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                if (err) return console.error(err)
                                await exect(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                    const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                    const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                    await tobz.sendRawWebpAsSticker(from, base64)
                                    fs.unlinkSync(`./temp/${sender.id}.webp`)
                                    fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                }
                            })
                    })
                // STIKER URL
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await tobz.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                }
        
            } else if (isMedia && type === 'video' || mimetype === 'image/gif') {
                 tobz.reply(from, mess.wait2, id)
                 const mediaData = await decryptMedia(message, uaOverride)
                 await tobz.sendMp4AsSticker(from, mediaData, {crop: false, fps: 10, startTime: `00:00:00.0`, endTime : `00:00:10.0`,loop: 0}, { author: `${autorwm}`, pack: `${packnamewm}` })
                // tobz.sendImageAsSticker(from, image, id, { author: 'authorname', pack: 'packname' })             
            
            } else if 
            (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
            tobz.reply(from, mess.wait2, id)
             const mediaData = await decryptMedia(quotedMsg, uaOverride)
             await tobz.sendMp4AsSticker(from, mediaData, {crop: false, fps: 10, startTime: `00:00:00.0`, endTime : `00:00:10.0`,loop: 0}, { author: `${autorwm}`, pack: `${packnamewm}` })
            }
          /*  } else if  (quotedMsg.type == 'chat' ) {
            const alay3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            //const alay4 = await axios.get(`https://api.terhambar.com/bpk?kata=${alay3}`)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await tobz.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${alay3}&warna=${rttp2}&apikey=${vhtearkey}`)
            //const alay5 = alay4.data.text
            //tobz.reply(from, alay5, id)
            limitAdd(serial)
            } */
        
        }catch(error) {
            console.log(error)
            tobz.reply(from, `Hmm ada yang erorr!`, id)
        }
        break 
        case prefix+'imagetourl':
            case prefix+'imgtourl':
                case prefix+'tourl':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (isMedia || isQuotedImage ||isMedia && type === 'image') {
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                  //  const mediaData = await decryptMedia(message, uaOverride)
             //   const getUrli = await uploadImages(mediaData, false)
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, false)
                    await tobz.sendFileFromUrl(from, linkImg, `awkaowok.jpg`, `Link:\n${linkImg}`, id)
                    await limitAdd(serial)
                } else {
                    await tobz.reply(from, `Salah format! Kirim gambar dengan menggunakan caption ${prefix}imgtourl`, id)
                }
            break
            
        case prefix+'ttp':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
                try
                {
                    const string = body.toLowerCase().includes('#ttp') ? encodeURIComponent(body.slice(5)) : encodeURIComponent(body.slice(5))
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await tobz.sendImageAsSticker(from, gasMake.base64, { author: `${autorwm}`, pack: `${packnamewm}` })
                                }catch(err) {
                                    await tobz.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await tobz.reply(from, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await tobz.sendImageAsSticker(from, gasMake.base64, { author: `${autorwm}`, pack: `${packnamewm}` })
                                }catch(err) {
                                    await tobz.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await tobz.reply(from, gasMake.reason, id)
                            }
                        }
                       
                    }else{
                        await tobz.reply(from, 'Tidak boleh kosong.', id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break;
             case prefix+'ttp3':
            if (args.length === 1) return tobz.reply(from, `Tidak ada teks untuk dijadikan stiker, contoh ${prefix}ttp halo`, id)
            try {
                const input = args.join(" ")
                const res = await axios.get(`https://tobz-api.herokuapp.com/api/ttp?text=${encodeURIComponent(body.slice(5))}&apikey=${tobzkey}`)
                await tobz.sendImageAsSticker(from, res.data.base64, { author: `${autorwm}`, pack: `${packnamewm}` })
                .catch((e) => {
                    console.error(e)
                    tobz.reply(from, `Error: ${e.message}`, id)
                })
            } catch(err) {
                console.error(err)
                tobz.reply(from, `Error: ${err.message}`, id)
            }
            break
        case prefix+'ttp2':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ttp2 [ Teks ]*, contoh *${prefix}ttp2 ZXCBOT*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await tobz.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
            break
            case prefix+'hartastiker':
            case prefix+'hartasticker': 
            if(isReg(obj)) return
            if(cekumur(cekage)) return       
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)
            const tahtas = args.join(' ')
            if (args[1].toLowerCase() == args[1].toLowerCase()){
            const hartas = body.slice(12)
            const tahtas = `https://api.vhtear.com/hartatahta?text=${args[1]}&apikey=${vhtearkey}`
                    await tobz.sendStickerfromUrl(from, tahtas, { method: 'get' })
            }
            break 
        /*   case prefix+'snobg':
         case prefix+'stikernobg':
             case prefix+'stickernobg':
                if(isReg(obj)) return
            if(cekumur(cekage)) return 
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)      
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (isMedia && type === 'image') {
                      try {
                          tobz.reply(from, 'Removing background...', id)
                        var mediaData = await decryptMedia(message, uaOverride)
                        var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        var base64img = imageBase64
                        //console.log('Removing background...')
                        var outFile = './media/img/noBg.png' //5tHjBbPSh3gYoHD9rTqiVCa7 [ { title: 'Insufficient credits', code: 'insufficient_credits' } ]
                        var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'hyW66SDkKY1VvkgYPcDK4eSx', size: 'auto', type: 'auto', outFile })
                            await fs.writeFile(outFile, result.base64img)
                            await tobz.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                            await limitAdd(serial)

                             } else if (quotedMsg && quotedMsg.type == 'image') {
                        tobz.reply(from, 'Removing background...', id)
                        var mediaData = await decryptMedia(quotedMsg, uaOverride)
                        var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        var base64img = imageBase64
                        //console.log('Removing background...')
                        var outFile = './media/img/noBg.png' //5tHjBbPSh3gYoHD9rTqiVCa7 [ { title: 'Insufficient credits', code: 'insufficient_credits' } ]
                        var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'hyW66SDkKY1VvkgYPcDK4eSx', size: 'auto', type: 'auto', outFile })
                            await fs.writeFile(outFile, result.base64img)
                            await tobz.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                             }
                        } catch(err) {
                            //tobz.reply(from, `Maaf, Tidak dapat mengidentifikasi background! mungkin terlalu banyak warna.\n\n_Apabila anda terus melihat pesan ini meskipun gambar jelas mohon chat owner untuk di fix!_`, id)
                            tobz.reply(from, `Ada kesalahan saat mengkonversi gambar`, id)
                        }
                        
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        tobz.reply(from, `Maaf, media tidak terdeteksi! Kirim foto dengan caption *${prefix}snobg* bukan di reply`, id) 
                    } else {
                        tobz.reply(from, `Kirim foto dengan caption *${prefix}snobg*`, id)
                    }
                    break */
                    case prefix+'snobg':
         case prefix+'stikernobg':
             case prefix+'stickernobg':
                if(isReg(obj)) return
            if(cekumur(cekage)) return 
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)      
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)     
            if (isMedia && type === 'image') {
                try {
                    tobz.reply(from, 'Removing background...', id)
                  var mediaData = await decryptMedia(message, uaOverride)
                  var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                  var base64img = imageBase64
                  var outFile = './media/img/noBg.png' //5tHjBbPSh3gYoHD9rTqiVCa7 [ { title: 'Insufficient credits', code: 'insufficient_credits' } ]
                  var result = await removeBackgroundFromImageBase64({ base64img, apiKey: `${removenobgkey}`, size: 'auto', type: 'auto', outFile })
                      await fs.writeFile(outFile, result.base64img)
                      await tobz.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`, { author: `${autorwm}`, pack: `${packnamewm}` })
                   } catch(err) {
                      console.log(err)
                      //tobz.reply(from, `Maaf, Tidak dapat mengidentifikasi background! mungkin terlalu banyak warna.\n\n_Apabila anda terus melihat pesan ini meskipun gambar jelas mohon chat owner untuk di fix!_`, id)
                      tobz.reply(from, `_Sepertinya anda bukan member vip._`, id)
                  }
                  
              } else if (quotedMsg && quotedMsg.type == 'image') {
                  tobz.reply(from, `Maaf, media tidak terdeteksi! Kirim foto dengan caption *!stickernobg* bukan tag`, id) 
              } else {
                  tobz.reply(from, `Kirim foto dengan caption *!stickernobg*`, id)
              }
              await tobz.sendSeen(from)
              break
                         case prefix+'reminder':
                        case prefix+'pengingat':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return 
                           argz = body.trim().split('|') 
                           if (args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}reminder |waktu|Alasan\n\nContoh:\n${prefix}reminder |10s|Mau makan\n\nKeterangan:\ns - Detik\nm - Menit\nj - Jam`, id)  
                            const timeRemind = argz[1]
                            const messRemind = argz[2]
                            const parsedTime = ms(toMs(timeRemind))
                            addReminder(sender.id, messRemind, timeRemind)
                            await tobz.sendTextWithMentions(from, 
`*「 PENGINGAT 」*

• *Pesan*: ${messRemind}
• *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
• *Untuk*: @${sender.id.replace('@c.us', '')}`, id)
                            const intervRemind = setInterval(async () => {
                                if (Date.now() > getReminderTime(sender.id)) {
await tobz.sendTextWithMentions(from, 
`⏰ *「 PENGINGAT 」* ⏰
• Akhirnya tepat waktu~ @${sender.id.replace('@c.us', '')}
• *Pesan*: ${getReminderMsg(sender.id)}`)

await tobz.sendTextWithMentions(from, 
`⏰ *「 PENGINGAT 」* ⏰
• Akhirnya tepat waktu~ @${sender.id.replace('@c.us', '')}
• *Pesan*: ${getReminderMsg(sender.id)}`)
                                    _reminder.splice(getReminderPosition(sender.id), 1)
                                    fs.writeFileSync('./lib/database/reminder.json', JSON.stringify(_reminder))
                                    clearInterval(intervRemind)
                                }
                            }, 1000)
                        break

case prefix+'setgroup':
tobz.reply(from, `Silahkan pilih close atau open!`, id)
break

                        case prefix+'setgroupopen':
                                //if(isReg(obj)) return
                                //if(cekumur(cekage)) return 
                                if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
                                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
                                if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
                                if (args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}setgroupopen |waktu|Alasan\n\nContoh:\n${prefix}setgroupclose |10s|Buka ajaa\n\nKeterangan:\ns - Detik\nm - Menit\nj - Jam`, id)  
                               argz = body.trim().split('|') 
                                const timeRemind2 = argz[1]
                                const messRemind2 = argz[2]
                                const parsedTime2 = ms(toMs(timeRemind2))
                                addReminder2(sender.id, messRemind2, timeRemind2)
await tobz.sendTextWithMentions(from, 
`*「  GROUP AKAN DIBUKA  」*
                 

*GROUP AKAN DITUTUP PADA*
${parsedTime2.hours} JAM : ${parsedTime2.minutes} MENIT : ${parsedTime2.seconds} DETIK 

*OLEH*
> @${sender.id.replace('@c.us', '')}

*ALASAN DIBUKA* 
${getReminderMsg2(sender.id)}`, id)
                                const intervRemind2 = setInterval(async () => {
                                if (Date.now() > getReminderTime2(sender.id)) {
await tobz.sendText(from, 
`*「  GROUP DIBUKA  」* 
                                        
Group sudah dibuka, happy typing :D`) 
tobz.setGroupToAdminsOnly(groupId, false) 
                                        _reminder2.splice(getReminderPosition2(sender.id), 1)
                                        fs.writeFileSync('./lib/database/setgroup.json', JSON.stringify(_reminder2))
                                        clearInterval(intervRemind2)
                                    }
                                }, 1000)
                            break       

                            case prefix+'setgroupclose':
                               // if(isReg(obj)) return
                                //if(cekumur(cekage)) return 
                                if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
                                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
                                if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
                                if (args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}setgroupclose |waktu|Alasan\n\nContoh:\n${prefix}setgroupclose |10s|Tutup ajaa\n\nKeterangan:\ns - Detik\nm - Menit\nj - Jam`, id)  
                               argz = body.trim().split('|') 
                                const timeRemind3 = argz[1]
                                const messRemind3 = argz[2]
                                const parsedTime3 = ms(toMs(timeRemind3))
                                addReminder2(sender.id, messRemind3, timeRemind3)
await tobz.sendTextWithMentions(from, 
`*「  GROUP AKAN DITUTUP  」*
                 

*GROUP AKAN DITUTUP PADA*
${parsedTime3.hours} JAM : ${parsedTime3.minutes} MENIT : ${parsedTime3.seconds} DETIK 

*OLEH*
> @${sender.id.replace('@c.us', '')}

*ALASAN DITUTUP* 
${getReminderMsg2(sender.id)}`, id)
                                const intervRemind3 = setInterval(async () => {
                                if (Date.now() > getReminderTime2(sender.id)) {
await tobz.sendTextWithMentions(from, 
`*「  GROUP DITUTUP  」*
                 
Group telah ditutup oleh:
> @${sender.id.replace('@c.us', '')}

Dengan alasan:
${getReminderMsg2(sender.id)}`) 
tobz.setGroupToAdminsOnly(groupId, true) 
                                        _reminder2.splice(getReminderPosition2(sender.id), 1)
                                        fs.writeFileSync('./lib/database/setgroup.json', JSON.stringify(_reminder2))
                                        clearInterval(intervRemind3)
                                    }
                                }, 1000)
                            break  
                            //
             case prefix+'attp':
              if(isReg(obj)) return
              if(cekumur(cekage)) return
              if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                     try {
                          if (quotedMsgObj == null) {
                          if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}attp [ Teks ]*, contoh *${prefix}attp aku bukan boneka*\n\nAtau reply pesan seseorang lalu ketik ${prefix}attp\n\nFitur ini tidak bisa support emoji dan simbol2 lainnya`, id)   
                             //argz = body.trim().split(' ')
                            //var slicedArgs = Array.prototype.slice.call(argz, 1);
                             const textattp = body.slice(5)
                             const resultattp = await axios.get(`https://api.xteam.xyz/attp?text=${encodeURIComponent(textattp)}`)
                             let stik = resultattp.data.result
                             tobz.sendRawWebpAsSticker(from, stik, { author: `${autorwm}`, pack: `${packnamewm}` })
                                 limitAdd(serial)
                            } else {
                             const textattp = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                             const resultattp = await axios.get(`https://api.xteam.xyz/attp?text=${encodeURIComponent(textattp)}`)
                             let stik = resultattp.data.result
                             
                             tobz.sendRawWebpAsSticker(from, stik, { author: `${autorwm}`, pack: `${packnamewm}` })
                    }
                      } catch(e) {
                      console.log(e)
                      tobz.reply(from, 'Maaf, Server sedang Error', id)
                     }
                     break    

                 
                     case prefix+'triger2':
              if(isReg(obj)) return
              if(cekumur(cekage)) return
              if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                     try {
                        if (isMedia && type === 'image') {
                            tobz.reply(from, mess.wait, id)
                        const mediaData = await decryptMedia(message, uaOverride)
                        const linkgambarnya = await uploadImages(mediaData, false)
                        const trigerbgt = await axios.get(`https://naufalhoster.xyz/textmaker/trigerred?apikey=${naufalkey}&url=${encodeURIComponent(linkgambarnya)}`)
                        const stiktrg = trigerbgt.data.result.image
                        await tobz.sendStickerfromUrl(from, stiktrg)
                        }
                      } catch(e) {
                      console.log(e)
                      tobz.reply(from, 'Maaf, Server sedang Error', id)
                     }
                     break    
//
        case prefix+'ttg':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ttg [ Teks ]*, contoh *${prefix}ttg aku bukan boneka*`, id)
                        await tobz.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                        limitAdd(serial)
                } else {
                    await tobz.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                tobz.reply(from, 'Maaf, Server sedang Error', id)
            }
            break
				case prefix+'foliokiri':{
			        if(isReg(obj)) return
                    if(cekumur(cekage)) return
					if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    //if (!isPremium) return tobz.reply(from, 'Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan donasi, Kirim #donasi untuk melihat info donasi', id)
                   if (args.length === 1) return tobz.reply(from, `Kirim ${prefix}kiri [teks], contoh: ${prefix}foliokiri hari ini sangat cerah`, id) 
                    const tulisan = body.slice(11)
                    tobz.reply(from, 'Tunggu sebentar ya kak, lagi diproses.', id)
                    const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                    const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                    spawn('convert', [
                        './media/img/folio/sebelumkiri.jpg',
                        '-font',
                        './lib/font/Indie-Flower.ttf',
                        '-size',
                        '1720x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '4',
                        '-annotate',
                        '+48+185',
                        fixHeight,
                        './media/img/folio/setelahkiri.jpg'
                    ])
                    .on('error', () => tobz.reply(from, 'Error gan', id))
                    .on('exit', () => {
                        tobz.sendImage(from, './media/img/folio/setelahkiri.jpg', 'after.jpg', `Nih Kak`, id)
                        limitAdd(serial)
                    })
                }
                    break
                case prefix+'foliokanan': {
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
					if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    //if (!isPremium) return tobz.reply(from, 'Maaf, ini adalah fitur premium, untuk menggunakan fitur ini silahkan donasi, Kirim #donasi untuk melihat info donasi', id)
                    if (args.length === 1) return tobz.reply(from, `Kirim ${prefix}foliokanan [teks], contoh: ${prefix}foliokanan hari ini sangat cerah`, id) 
                    const tulisan = body.slice(12)
                    tobz.reply(from, 'Tunggu sebentar ya kak, lagi diproses.', id)
                    const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                    const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                    spawn('convert', [
                        './media/img/folio/sebelumkanan.jpg',
                        '-font',
                        './lib/font/Indie-Flower.ttf',
                        '-size',
                        '960x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '3',
                        '-annotate',
                        '+89+190',
                        fixHeight,
                        './media/img/folio/setelahkanan.jpg'
                    ])
                    .on('error', () => tobz.reply(from, 'Error gan', id))
                    .on('exit', () => {
                        tobz.sendImage(from, './media/img/folio/setelahkanan.jpg', 'after.jpg', `Nih gambarnya`, id)
                        limitAdd(serial)
                    })
                }
                    break
			 case prefix+'nuliskiri':
				if(isReg(obj)) return
				if(cekumur(cekage)) return
				if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
				if (args.length === 1) return tobz.reply(from, `Kirim ${prefix}nuliskiri [teks], contoh: ${prefix}nuliskiri hari ini sangat cerah`, id) 
                        const tulisann = body.slice(11)
                        tobz.reply(from, '_Tunggu Sebentar..._', id)
                        const splitTexttt = tulisann.replace(/(\S+\s*){1,9}/g, '$&\n')
                        const fixxHeight = splitTexttt.split('\n').slice(0, 31).join('\n')
                        spawn('convert', [
                            './media/img/buku/sebelumkiri.jpg',
                            '-font',
                            './lib/font/Indie-Flower.ttf',
                            '-size',
                            '960x1280',
                            '-pointsize',
                            '22',
                            '-interline-spacing',
                            '2',
                            '-annotate',
                            '+140+153',
                            fixxHeight,
                            './media/img/buku/setelahkiri.jpg'
                        ])
                        .on('error', () => tobz.reply(from, 'Error gan', id))
                        .on('exit', () => {
                            tobz.sendImage(from, './media/img/buku/setelahkiri.jpg', 'after.jpg', `Nih kak`, id)
							limitAdd(serial)
                        })
                    break
                    case prefix+'nuliskiri2':
				if(isReg(obj)) return
				if(cekumur(cekage)) return
				if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
				if (args.length === 1) return tobz.reply(from, `Kirim ${prefix}nuliskiri [teks], contoh: ${prefix}nuliskiri hari ini sangat cerah`, id) 
                await limitAdd(serial)
                        const tulisannn = body.slice(12)
                        tobz.reply(from, '_Tunggu Sebentar..._', id)
                        const splitTextttt = tulisannn.replace(/(\S+\s*){1,9}/g, '$&\n')
                        const fixxHeightt = splitTextttt.split('\n').slice(0, 31).join('\n')
                        spawn('convert', [
                            './media/img/buku/sebelumkiri.jpg',
                            '-font',
                            './lib/font/Zahraaa.ttf',
                            '-size',
                            '960x1280',
                            '-pointsize',
                            '22',
                            '-interline-spacing',
                            '2',
                            '-annotate',
                            '+140+153',
                            fixxHeightt,
                            './media/img/buku/setelahkiri.jpg'
                        ])
                        .on('error', () => tobz.reply(from, 'Error gan', id))
                        .on('exit', () => {
                            tobz.sendImage(from, './media/img/buku/setelahkiri.jpg', 'after.jpg', `Nih kak`, id)
                        })
                    break
                case prefix+'nuliskanan': 
				if(isReg(obj)) return
				if(cekumur(cekage)) return
				if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
				if (args.length === 1) return tobz.reply(from, `Kirim ${prefix}nuliskanan [teks], contoh: ${prefix}nuliskanan hari ini sangat cerah`, id)     
                {		const tulisannn = body.slice(12)
                    tobz.reply(from, '_Tunggu Sebentar..._', id)
                    const splitTextt = tulisannn.replace(/(\S+\s*){1,9}/g, '$&\n')
                    const fixHeight = splitTextt.split('\n').slice(0, 31).join('\n')
                    spawn('convert', [
                        './media/img/buku/sebelumkanan.jpg',
                        '-font',
                        './lib/font/Indie-Flower.ttf',
                        '-size',
                        '960x1280',
                        '-pointsize',
                        '23',
                        '-interline-spacing',
                        '2',
                        '-annotate',
                        '+128+129',
                        fixHeight,
                        './media/img/buku/setelahkanan.jpg'
                    ])
                    .on('error', () => tobz.reply(from, 'Error gan', id))
                    .on('exit', () => {
                        tobz.sendImage(from, './media/img/buku/setelahkanan.jpg', 'after.jpg', `Nih kak`, id)
						limitAdd(serial)
                    })
                }
                    break
                        case prefix+'emojistiker':
                        case prefix+'stikeremoji':
                        case prefix+'emojisticker':
                        case prefix+'stickeremoji':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                          if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        //const emoji2 = emojiUnicode(body.slice(13))
                       // const q = args.join(' ')
                       try {
                       if (quotedMsgObj == null) {
                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}emojistiker [Emote]*\nContoh : ${prefix}emojistiker 😭`, id)
                        const emoji = (args[1])
                        //if (emoji.length > 2) return tobz.reply(from, 'Emoji stiker hanya support 1 emot saja.', id)
                        tobz.reply(from, mess.wait, id)
                        tobz.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emojiUnicode(emoji)}&apikey=${vhtearkey}`)
                        } else {
                            const emoji2 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                            tobz.reply(from, mess.wait, id)
                        tobz.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emojiUnicode(emoji2)}&apikey=${vhtearkey}`)
                        }
                    } catch(e) {
                        console.log(e)
                        tobz.reply(from, 'Maaf, emoji yang kamu kirim tidak support untuk dijadikan sticker, cobalah emoji lain', id)
                       }
                        await limitAdd(serial)
                        await tobz.sendSeen(from) 
                        break
                        case prefix+'emo2stik':
                                if(isReg(obj)) return
                                if(cekumur(cekage)) return
                                if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                              if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}emojistiker [Emote]*\nContoh : ${prefix}emojistiker 😭`, id)
                            const emoji = (args[1])
                            //if (emoji.length > 2) return tobz.reply(from, 'Emoji stiker hanya support 1 emot saja.', id)
                            tobz.reply(from, mess.wait, id)
                            tobz.sendStickerfromUrl(from, `https://videfikri.com/api/emojitopng/?emojicode=${emojiUnicode(emoji)}`)
                            await limitAdd(serial)
                            await tobz.sendSeen(from) 
                            break
			case prefix+'alay':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}alay [ Teks ]*, contoh *${prefix}alay aku bukan boneka*\n\nAtau reply pesan seseorang lalu ketik ${prefix}alay\n\nFitur ini tidak bisa support emoji dan simbol2 lainnya`, id)   
                    argz = body.trim().split(' ')
                    var slicedArgs = Array.prototype.slice.call(argz, 1);
                    const alay = await slicedArgs.join(' ')
                    const alay1 = await axios.get(`https://api.terhambar.com/bpk?kata=${alay}`)
                    const alay2 = alay1.data.text
                    tobz.reply(from, alay2, id) 
                        limitAdd(serial)
                } else {
                    const alay3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const alay4 = await axios.get(`https://api.terhambar.com/bpk?kata=${alay3}`)
                    const alay5 = alay4.data.text
                    tobz.reply(from, alay5, id)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                tobz.reply(from, 'Maaf, Server sedang Error', id)
            }
            break

            case prefix+'kebalik':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}kebalik [ Teks ]*, contoh *${prefix}kebalik aku bukan boneka*\n\nAtau reply pesan seseorang lalu ketik ${prefix}alay\n\nFitur ini tidak bisa support emoji dan simbol2 lainnya`, id)   
                    argz = body.trim().split(' ')
                    var slicedArgs = Array.prototype.slice.call(argz, 1);
                    const kebalek = await slicedArgs.join(' ')
                    const kebalek1 = await axios.get(`https://videfikri.com/api/hurufterbalik/?query=${kebalek}`)
                    const kebalek2 = kebalek1.data.result.kata
                    tobz.reply(from, kebalek2, id) 
                        limitAdd(serial)
                } else {
                    const kebalek3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const kebalek4 = await axios.get(`https://videfikri.com/api/hurufterbalik/?query=${kebalek3}`)
                    const kebalek5 = kebalek4.data.result.kata
                    tobz.reply(from, kebalek5, id)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                tobz.reply(from, 'Maaf, Server sedang Error', id)
            }
            break
            case prefix+'hitungkata':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                try {
                    if (quotedMsgObj == null) {
                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}hitungkata [ Teks ]*, contoh *${prefix}hitungkata aku bukan boneka*\n\nAtau reply pesan seseorang lalu ketik ${prefix}alay\n\nFitur ini tidak bisa support emoji dan simbol2 lainnya`, id)   
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const hitung = await slicedArgs.join(' ')
                        const hitung1 = await axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${hitung}`)
                        const hitung2 = hitung1.data.result.jumlah
                        tobz.reply(from, hitung2, id) 
                            limitAdd(serial)
                    } else {
                        const hitung3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                        const hitungy4 = await axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${hitung3}`)
                        const hitung5 = hitung.data.result.jumlah
                        tobz.reply(from, hitung5, id)
                        limitAdd(serial)
                    }
                } catch(e) {
                    console.log(e)
                    tobz.reply(from, 'Maaf, Server sedang Error', id)
                }
                break
			
			
           // http://lolhuman.herokuapp.com/api/ninja/LoLHuman?apikey=cfecfd54d952c84a0a7f6bfb
			
			case prefix+'namaninja':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
			if (args.length == 1) return tobz.reply(from, `Kirim perintah *${prefix}lirik2 [optional]*, contoh *${prefix}lirik2 aku bukan boneka*`, id)
			const namaninja = async (ninjaa) => new Promise((resolve, reject) => {
			axios.get(`https://scrap.terhambar.com/lirik?word=${ninjaa}`)
				.then((ress2) => {
				resolve(ress2.data.result)
				})
			.catch((err) => {
				reject(err)
			})
				})
			 namaninja(body.slice(10))
			.then(async(ress2) => {
				await tobz.reply(from, `${ress2}`, id)
			})
			break
		
		
            case prefix+'hilih':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(!quotedMsg && args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}hilih [teks] atau reply suatu pesan`, id)
            if (!quotedMsg) {
                const hilih = (body.slice(6).replace(/[a|u|e|o]/gi, 'i'))
                tobz.reply(from, hilih, id)
            }else if(quotedMsg){
                const hilihh = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                const hilih2 = (hilihh.replace(/[a|u|e|o]/gi, 'i'))
                tobz.reply(from, hilih2, id)
            }
            limitAdd(serial)
            break
//https://api.terhambar.com/ninja?nama=juwen
            case prefix+'holoh':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(!quotedMsg && args.length === 0) return tobz.reply(from, `Kirim perintah ${prefix}ii [teks] atau reply suatu pesan`, id)
            if (!quotedMsg) {
                const hilih = (body.slice(6).replace(/[a|u|e|i]/gi, 'o'))
                tobz.reply(from, hilih, id)
            }else if(quotedMsg){
                const hilihh = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                const hilih2 = (hilihh.replace(/[a|u|e|i]/gi, 'o'))
                tobz.reply(from, hilih2, id)
            }
            limitAdd(serial)
            break
            case prefix+'halah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(!quotedMsg && args.length === 0) return tobz.reply(from, `Kirim perintah ${prefix}ii [teks] atau reply suatu pesan`, id)
            if (!quotedMsg) {
                const hilih = (body.slice(6).replace(/[a|u|e|i]/gi, 'a'))
                tobz.reply(from, hilih, id)
            }else if(quotedMsg){
                const hilihh = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                const hilih2 = (hilihh.replace(/[a|u|e|i]/gi, 'a'))
                tobz.reply(from, hilih2, id)
            }
            limitAdd(serial)
            break
            case prefix+'nulis2': // BY MFARELS
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return await tobz.reply(from, `Kirim Perintah *${prefix}magernulis1 |[Nama]|[Kelas]|[Teks]*\n\n*Contoh :*\n${prefix}magernulis1 |Juwen|XII|Jangan lupa donasi ya`, id) // https://github.com/MFarelS/RajinNulis-BOT
            if (args.length === 3) return await tobz.reply(from, `Kirim Perintah *${prefix}magernulis1 |[Nama]|[Kelas]|[Teks]*\n\n*Contoh :*\n${prefix}magernulis1 |Juwen|XII|Jangan lupa donasi ya`, id) // https://github.com/MFarelS/RajinNulis-BOT
            argz = body.trim().split('|') // INSTALL IMAGEMAGICK KALO MAU WORK
            const diNama = argz[1] // INSTALL, CENTANG KOLOM 1,2,3,5,6
            const diKelas = argz[2] // SUBSCRIBE MFARELS CH
            const diTulis = argz[3] // FOLLOW INSTAGRAM @mfarelsyahtiawan
            await tobz.reply(from, mess.magernulissatu, id) // NAMA, KELAS, WAKTU, BY ST4RZ
            const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
            const panjangNama = diNama.replace(/(\S+\s*){1,10}/g, '$&\n')
            const panjangKelas = diKelas.replace(/(\S+\s*){1,10}/g, '$&\n')
            const panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
            const panjangBarisNama = panjangNama.split('\n').slice(0, 30).join('\n')
            const panjangBarisKelas = panjangKelas.split('\n').slice(0, 30).join('\n')
            var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6 -', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
            var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth();
            var thisDay = date.getDay(),
                thisDay = myDays[thisDay];
            var yy = date.getYear();
            var year = (yy < 1000) ? yy + 1900 : yy;
            const waktunye = (day + ' ' + months[month] + ' ' + year)
            const harinye = (thisDay)
            spawn('convert', [
                './mager/magernulis/magernulis1.jpg',
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '20',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+78',
                harinye,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '18',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+102',
                waktunye,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '18',
                '-interline-spacing',
                '1',
                '-annotate',
                '+360+100',
                panjangBarisNama,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '18',
                '-interline-spacing',
                '1',
                '-annotate',
                '+360+120',
                panjangBarisKelas, 
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                panjangBaris,
                './mager/magernulis√/magernulis1√.jpg'
            ])
            .on('error', () => tobz.reply(from, 'Error Bjeer, Keknya Scriptnya Lagi Error', id))
            .on('exit', () => {
                tobz.sendImage(from, './mager/magernulis√/magernulis1√.jpg', 'FarelZahra.jpg', 'Nih kak', id)
            })
            await limitAdd(serial)
            await tobz.sendSeen(from) 
        break // BY MFARELS
        case prefix+'toimg':
            case prefix+'t':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            try {
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await tobz.sendFile(from, imageBase64, 'imagesticker.jpg', 'Nih', id)
            } else if (!quotedMsg) return tobz.reply(from, `Mohon reply sticker yang ingin dijadikan gambar!`, id)
        }catch(error) {
            console.log(error)
            tobz.reply(from, `Fitur toimg sedang error!`, id)
        }
            break
            
case prefix+'totitle':
    case prefix+'carilagu':
        if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
       try {
        if (isMedia && isAudio || isQuotedAudio) {
            const acr = new acrcloud({ host: "identify-eu-west-1.acrcloud.com", access_key: "5b5a985ba8255d764ad78b17c740504f", access_secret: "obnbRuhQBqpM5fKna3jZE7FE6tUzmgnSmWk36CRQ"})
            await tobz.reply(from, '_Mengindetifikasi lagu.. 🔍_', id)
            const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
            console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
            const mediaData = await decryptMedia(encryptMedia, uaOverride)
            fs.writeFile(`./temp/audio.mp3`, mediaData)
            await sleep(5000)
            const sampleq = fs.readFileSync(`./temp/audio.mp3`)
            acr.identify(sampleq).then(metadata => {
            console.log(metadata.metadata.music[0]);
            const jawabanlagunya =  monospace(
`「 DATA BERHASIL DIDAPAT 」


Judul Lagu: ${metadata.metadata.music[0].title}
Artis: ${metadata.metadata.music[0].artists[0].name}
Album: ${metadata.metadata.music[0].album.name}
Rilis: ${metadata.metadata.music[0].release_date}`)
tobz.reply(from, jawabanlagunya, id)
        })		
            setTimeout(() => {
                            fs.unlinkSync(`./temp/audio.mp3`)
                        }, 30000)
                    } else {
                        await tobz.reply(from, 'Reply audio yang ingin di deteksi lagunya', id)
                    }
    }catch(error) {
        console.log(error)
        tobz.reply(from, `Ada yang error!`, id)
    }
 break


                case prefix+'tomp3': // by: Piyobot
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    try {
                    if ((isMedia && isVideo || isQuotedVideo)) {
                    await tobz.reply(from, mess.wait, id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await tobz.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await tobz.reply(from, 'Kirim video yang ingin di konvert ke mp3 atau reply video yang ingin di konvert!', id)
                }
            }catch(error) {
                console.log(error)
                tobz.reply(from, `Silahkan kirim video dengan caption ${prefix}tomp3, karena kalau di reply sedang error dari server open wa.`, id)
            }
            break
        case prefix+'sgif2':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    tobz.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await tobz.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    tobz.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break
        case prefix+'stickergif': // INSTALL FFMPEG, IF YOU WANT THIS COMMAND WORK!
        case prefix+'stikergif': // TUTORIAL IN README, PLEASE READ!
        case prefix+'sgif': // MRHRTZ
        tobz.reply(from, mess.wait2, id)
        try{
            if (isMedia && type === 'video' || mimetype === 'image/gif') {
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    await tobz.sendMp4AsSticker(from, mediaData, {crop: false, fps: 10, startTime: `00:00:00.0`, endTime : `00:00:10.0`,loop: 0}, { author: `${autorwm}`, pack: `${packnamewm}` })
                   // tobz.sendImageAsSticker(from, image, id, { author: 'authorname', pack: 'packname' })
                } catch (error) {
                    console.log(error)
                    tobz.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`, id)
                }
            } else if 
            (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                await tobz.sendMp4AsSticker(from, mediaData, {crop: false, fps: 10, startTime: `00:00:00.0`, endTime : `00:00:10.0`,loop: 0}, { author: `${autorwm}`, pack: `${packnamewm}` })
            } else {
                tobz.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik ${prefix}stickergif`, id)
            } 
        }catch(error) {
            console.log(error)
            tobz.reply(from, `Silahkan kirim video dengan caption ${prefix}stikergif, karena kalau di reply sedang error dari server open wa.`, id)
        }
            break
			
        case prefix+'blurr':
        case prefix+'sblurr':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, mess.wait2, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const entah = imgnye.result.image
                await tobz.sendFileFromUrl(from, entah, `awkoaw.jpg`, `Nihh`, id)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const entah = imgnye.result.image
                await tobz.sendFileFromUrl(from, entah, `awkoaw.jpg`, `Nihh`, id)
            } else {
                await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}blurr`, id)
            }
            await limitAdd(serial)
            break
            case prefix+'nightvision':
                case prefix+'nightvis':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrle = await uploadImages(mediaData, false)
                        const imgnye = await nightvis1(getUrle)
                        const Slight = imgnye.result.image
                        await tobz.sendFileFromUrl(from, nightvis2, `awkaowkwa.jpg`, `Nihh`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrle = await uploadImages(mediaData, false)
                        const imgnye = await nightvis1(getUrle)
                        const nightvis2 = imgnye.result.image
                        await tobz.sendFileFromUrl(from, nightvis2, `awkaowkwa.jpg`, `Nihh`, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}nightvis`, id)
                    }
                    await limitAdd(serial)
                    break

                    case prefix+'phcomment2':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            if (args.length === 1) return await tobz.reply(from, `Kirim Perintah *${prefix}phcomment2 |Username|Komentar*\n\n*Contoh :*\n${prefix}phcomment2 |Yadi|Jad1 $agn3`, id)
                            tobz.reply(from, `Sedang di proses, silahkan tunggu ± 1 min!`, id)
                            if (isMedia && type === 'image') {
                                argz = body.trim().split('|')  
                                const usernamePh2 = argz[1] 
                                const commentPh2 = argz[2] 
                                const mediaData = await decryptMedia(message, uaOverride)
                                const getUrli = await uploadImages(mediaData, false)
                                const imgnya = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${getUrli}&text=${commentPh2}&username=${usernamePh2}`)
                                await tobz.sendFileFromUrl(from, imgnya.data.message, 'ph.jpg', 'Nih', id)
                            } else if (quotedMsg && quotedMsg.type == 'image') {
                                argz = body.trim().split('|') 
                                const usernamePh2 = argz[1] 
                                const commentPh2 = argz[2] 
                                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                                const getUrli = await uploadImages(mediaData, false)
                                const imgnya = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${getUrli}&text=${commentPh2}&username=${usernamePh2}`)
                                await tobz.sendFileFromUrl(from, imgnya.data.message, 'ph.jpg', 'Nih', id)
                            } else {
                                await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}phcomment2`, id)
                            }
                            await limitAdd(serial)
                            break
                
      
        case prefix+'stickerfire':
        case prefix+'sfire':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, `Sedang di proses, silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result
                await tobz.sendStickerfromUrl(from, Sfire, { author: `${autorwm}`, pack: `${packnamewm}` })
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result
                await tobz.sendStickerfromUrl(from, Sfire)
            } else {
                await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}stickerfire`, id)
            }
            await limitAdd(serial)
            break
           
            case prefix+'imgtopdf':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, mess.wait, id)
                    if (isMedia && type === 'image') {
                        if (args.length === 1) return await tobz.reply(from, `Beri nama untuk pdfnya!\n\nContoh:\n${prefix}imgtopdf penting`, id)
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const namanya = await slicedArgs.join(' ')
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await axios.get(`https://naufalhoster.xyz/tools/imagepdf?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                        const pdfnya = imgnya.data.result.pdf
                        await tobz.sendFileFromUrl(from, pdfnya, `${namanya}.pdf`, ``, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        if (args.length === 1) return await tobz.reply(from, `Beri nama untuk pdfnya!\n\nContoh:\n${prefix}imgtopdf penting`, id)
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const namanya = await slicedArgs.join(' ')
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await axios.get(`https://naufalhoster.xyz/tools/imagepdf?apikey=${naufalkey}&url=${getUrli}`)
                        const pdfnya = imgnya.data.result.pdf
                        await tobz.sendFileFromUrl(from, pdfnya, `${namanya}.pdf`, ``, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}imgtopdf`, id)
                    }
                    await limitAdd(serial)
                    break
                case prefix+'facedetect':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, '_Mendeteksi wajah..._', id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const apinya = await axios.get(` https://api.i-tech.id/special/detect?key=${techapikey}&link=${encodeURIComponent(getUrli)}`)
                        const datanya = apinya.data
                        const jawabannya =
`*「 FACE DETECTOR BETA! 」* 


Umur: ${datanya.age}
Gender: ${datanya.gander}
Senyum: ${datanya.smile}
Kacamata: ${datanya.glasses}
Marah: ${datanya.anger}
Penghinaan: ${datanya.contempt}
Menjijikan: ${datanya.disgust}
Ketakutan: ${datanya.fear}
Bahagia: ${datanya.happiness}
Netral: ${datanya.neutral}
Kesedihan: ${datanya.sadness}
Kejutan: ${datanya.surprise}


NB:
_Fitur ini hanya untuk hiburan semata, dan bot tidak 100% mendeteksi wajah dengan benar._`

    await tobz.sendFileFromUrl(from,  getUrli, `facetrack.jpg`, `${jawabannya}`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const apinya = await axios.get(` https://api.i-tech.id/special/detect?key=${techapikey}=${encodeURIComponent(getUrli)}`)
                        const datanya = apinya.data
                         const jawabannya =
`*「 FACE DETECTOR BETA! 」* 


Umur: ${datanya.age}
Gender: ${datanya.gander}
Senyum: ${datanya.smile}
Kacamata: ${datanya.glasses}
Marah: ${datanya.anger}
Penghinaan: ${datanya.contempt}
Menjijikan: ${datanya.disgust}
Ketakutan: ${datanya.fear}
Bahagia: ${datanya.happiness}
Netral: ${datanya.neutral}
Kesedihan: ${datanya.sadness}
Kejutan: ${datanya.surprise}


NB:
_Fitur ini hanya untuk hiburan semata, dan bot tidak 100% mendeteksi wajah dengan benar._`

await tobz.sendFileFromUrl(from,  getUrli, `facetrack.jpg`, `${jawabannya}`, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}imgtopdf`, id)
                    }
                    await limitAdd(serial)
                    break

                  /*  case prefix+'':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, mess.wait, id)
                        if (isMedia && type === 'image') {
                            if (args.length === 1) return await tobz.reply(from, `Beri nama untuk pdfnya!\n\nContoh:\n${prefix}imgtopdf penting`, id)
                            argz = body.trim().split(' ')
                            var slicedArgs = Array.prototype.slice.call(argz, 1);
                            const namanya = await slicedArgs.join(' ')
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli = await uploadImages(mediaData, false)
                            const imgnya = await axios.get(`https://naufalhoster.xyz/tools/imagepdf?apikey=${naufalkey}&url=${getUrli}`)
                            const pdfnya = imgnya.data.result.pdf
                            await tobz.sendFileFromUrl(from, pdfnya, `${namanya}.pdf`, ``, id)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            if (args.length === 1) return await tobz.reply(from, `Beri nama untuk pdfnya!\n\nContoh:\n${prefix}imgtopdf penting`, id)
                            argz = body.trim().split(' ')
                            var slicedArgs = Array.prototype.slice.call(argz, 1);
                            const namanya = await slicedArgs.join(' ')
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const getUrli = await uploadImages(mediaData, false)
                            const imgnya = await axios.get(`https://naufalhoster.xyz/tools/imagepdf?apikey=${naufalkey}&url=${getUrli}`)
                            const pdfnya = imgnya.data.result.pdf
                            await tobz.sendFileFromUrl(from, pdfnya, `${namanya}.pdf`, ``, id)
                        } else {
                            await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}imgtopdf`, id)
                        }
                        await limitAdd(serial)
                        break */
    

            case prefix+'fighter':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                tobz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await hiyaaa(getUrli)
                    const sfish = imgnya.result.GIF
                    await tobz.sendStickerfromUrl(from, sfish)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await hiyaaa(getUrli)
                    const sfish = imgnya.result.GIF
                    await tobz.sendStickerfromUrl(from, sfish)
                } else {
                    await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}fighter`, id)
                }
                await limitAdd(serial)
                break
               // https://naufalhoster.xyz/tools/falling_hearts?apikey=matchingajaa&url=https://naufalhoster.xyz/media/example.jpg&type=mp4
            
               case prefix+'lovefil':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                try {
                tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/falling_hearts?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                    const slove = imgnya.data.result.media
                    await tobz.sendStickerfromUrl(from, slove)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/falling_hearts?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                    const slove = imgnya.data.result.media
                    await tobz.sendStickerfromUrl(from, slove)
                } else {
                    await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}lovefil`, id)
                }
            }catch(error) {
                console.log(error)
                tobz.reply(from, `Ups, ada yang error!`, id)
            }
                await limitAdd(serial)
                break
                case prefix+'slightning':
                    case prefix+'slight':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    try {
                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await axios.get(`https://docs-jojo.herokuapp.com/api/lightning?image_url=${encodeURIComponent(getUrli)}`)
                        const slove = imgnya.data.result
                        await tobz.sendStickerfromUrl(from, slove)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await axios.get(`https://docs-jojo.herokuapp.com/api/lightning?image_url=${encodeURIComponent(getUrli)}`)
                        const slove = imgnya.data.results
                        await tobz.sendStickerfromUrl(from, slove)
                    } else {
                        await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}lovefil`, id)
                    }
                }catch(error) {
                    console.log(error)
                    tobz.reply(from, `Ups, ada yang error!`, id)
                }
                    await limitAdd(serial)
                    break
    

               case prefix+'fisheye':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                try {
                tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await sfisheye(getUrli)
                    const sfish = imgnya.result.image
                    await tobz.sendFileFromUrl(from, sfish, `akwokwa.jpg`, `Nih ngab`, id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await sfisheye(getUrli)
                    const sfish = imgnya.result.image
                    await tobz.sendFileFromUrl(from, sfish, `akwokwa.jpg`, `Nih ngab`, id)
                } else {
                    await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}fisheye`, id)
                }
            }catch(error) {
                console.log(error)
                tobz.reply(from, `Silahkan kirim gambar dengan caption ${prefix}fisheye, karena kalau di reply sedang error dari server open wa.`, id)
            }
                await limitAdd(serial)
                break
                case prefix+'fisheye':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                try {
                tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await sfisheye(getUrli)
                    const sfish = imgnya.result.image
                    await tobz.sendFileFromUrl(from, sfish, `akwokwa.jpg`, `Nih ngab`, id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await sfisheye(getUrli)
                    const sfish = imgnya.result.image
                    await tobz.sendFileFromUrl(from, sfish, `akwokwa.jpg`, `Nih ngab`, id)
                } else {
                    await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}fisheye`, id)
                }
            }catch(error) {
                console.log(error)
                tobz.reply(from, `Silahkan kirim gambar dengan caption ${prefix}fisheye, karena kalau di reply sedang error dari server open wa.`, id)
            }
                await limitAdd(serial)
                break
                case prefix+'scomic':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await comics(getUrli)
                    const yhahah = imgnya.result.image
                    await tobz.sendFileFromUrl(from, yhahah, `akwokwao.jpg`, `Nihh`, id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await comics(getUrli)
                    const yhahah = imgnya.result.image
                    await tobz.sendFileFromUrl(from, yhahah, `akwokwao.jpg`, `Nihh`, id)
                } else {
                    await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}scomic`, id)
                }
                await limitAdd(serial)
                break
//https://naufalhoster.xyz/tools/imagepdf?apikey=YOUR_API_KEY&url=URL
                case prefix+'memecustom':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return await tobz.reply(from, `Kirim Perintah *${prefix}memecustom |Teks atas|teks bawah*\n\n*Contoh :*\n${prefix}memecustom |Sedang menunggu|Karya terbaru`, id)
                    argz = body.trim().split('|')
                    const teksatas = argz[1] 
                    const teksbawah = argz[2]
                    tobz.reply(from, mess.wait, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli2 = await uploadImages(mediaData, false)
                        await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/tools/meme?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}&text1=${teksatas}&text2=${teksbawah}`, `awkowa.jpg`, `Nihh`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli2 = await uploadImages(mediaData, false)
                        await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/tools/meme?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}&text1=${teksatas}&text2=${teksbawah}`, `awkowa.jpg`, `Nihh`, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}memecustom |Teks Atas|Teks Bawah`, id)
                    }
                    await limitAdd(serial)
                    break
   
case prefix+'ytcomment':
    if(isReg(obj)) return
    if(cekumur(cekage)) return
    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
    if (isMedia && type === 'image') {
        argz = body.trim().split('|') 
        const nama = argz[1] 
        const comment = argz[2]
        const theme = argz[3] 
        const mediaData = await decryptMedia(message, uaOverride)
        const getUrli2 = await uploadImages(mediaData, `${serial}_yt`)
        const imgnya = await axios.get(`https://naufalhoster.xyz/textmaker/ytcomment_custom?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}&nama=${nama}&comment=${comment}&dark=${theme}`)
        const yhahah = imgnya.data.result.image
        await tobz.sendFileFromUrl(from, yhahah, `akwokwao.jpg`, `Nihh`, id)
    } else if (quotedMsg && quotedMsg.type == 'image') {
        argz = body.trim().split('|') 
        const nama = argz[1] 
        const comment = argz[2]
        const theme = argz[3] 
        const mediaData = await decryptMedia(quotedMsg, uaOverride)
        const getUrli2 = await uploadImages(mediaData, `${serial}_yt`)
        const imgnya = await axios.get(`https://naufalhoster.xyz/textmaker/ytcomment_custom?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}&nama=${nama}&comment=${comment}&dark=${theme}`)
        const yhahah = imgnya.data.result.image
        await tobz.sendFileFromUrl(from, yhahah, `akwokwao.jpg`, `Nihh`, id)
    } else {
        await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}ytcomment`, id)
    }
    await limitAdd(serial)
    break


case prefix+'photomath':
    if(isReg(obj)) return
    if(cekumur(cekage)) return
    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
    if (isMedia && type === 'image') {
        const mediaData = await decryptMedia(message, uaOverride)
        const getUrli2 = await uploadImages(mediaData, false)
        const imgnya = await axios.get(`https://naufalhoster.xyz/tools/photomath?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}`)
        const yhahah = imgnya.data.result
        const datanya = monospace(
`[ PHOTOMATH BETA! ]

Pertanyaan: ${yhahah.question}
Keyboard: ${yhahah.keyboardInput}
Jawaban: ${yhahah.solution}
Timestamp: ${yhahah.timestamp}`)
            tobz.reply(from, datanya, id)
    } else if (quotedMsg && quotedMsg.type == 'image') {
        const mediaData = await decryptMedia(quotedMsg, uaOverride)
        const getUrli2 = await uploadImages(mediaData, false)
        const imgnya = await axios.get(`https://naufalhoster.xyz/tools/photomath?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}`)
        const yhahah = imgnya.data.result
        const datanya = monospace(
`[ PHOTOMATH BETA! ]

Pertanyaan: ${yhahah.question}
Keyboard: ${yhahah.keyboardInput}
Jawaban: ${yhahah.solution}
Timestamp: ${yhahah.timestamp}`)
            tobz.reply(from, datanya, id)
    } else {
        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}photomath`, id)
    }
    await limitAdd(serial)
    break
    case prefix+'getmed':
        //if (isMedia && type === 'image') {
            const mediaData2 = await decryptMedia(message, uaOverride)
            //const getUrli2 = await uploadImages(mediaData, false)
            tobz.reply(from, mediaData2, id)
            break
                        case prefix+'pixel':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli2 = await uploadImages(mediaData, false)
                        await tobz.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/editor/pixelate?apikey=${lolkey}&img=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli2 = await uploadImages(mediaData, false)
                        await tobz.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/editor/pixelate?apikey=${lolkey}&img=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                    }
                    await limitAdd(serial)
                    break
                    case prefix+'delfile':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, false)
                            await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/windows_delete_file?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, false)
                            await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/windows_delete_file?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else {
                            await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                        }
                        await limitAdd(serial)
                        break
                    case prefix+'nightbeach':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, `${sender}_ph`)
                            await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, `${sender}_ph`)
                            await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else {
                            await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                        }
                        await limitAdd(serial)
                        break
                    case prefix+'trash':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        try {
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, false)
                        canvas.Canvas.trash(getUrli2)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await tobz.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                            await limitAdd(serial)
                        })
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli2 = await uploadImages(mediaData, false)
                    canvas.Canvas.trash(getUrli2)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await tobz.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                            await limitAdd(serial)
                        })
                    } else  {
                        for (let i = 0; i < mentionedJidList.length; i++) {
                            const ypics = await tobz.getProfilePicFromServer(mentionedJidList[i])
                            if (ypics === undefined) {
                                var ypfps = errorImg
                            } else {
                                ypfps = ypics
                            }
                        }
                        canvas.Canvas.trash(ypfps)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await tobz.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                            await limitAdd(serial)
                        })
                    }
                } catch (err) {
                    console.error(err)
                    await tobz.reply(from, 'Ups, ada yang error!', id)
                }
                    break
                    case prefix+'hitler':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        try {
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, false)
                        canvas.Canvas.hitler(getUrli2)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await tobz.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                            await limitAdd(serial)
                        })
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli2 = await uploadImages(mediaData, false)
                    canvas.Canvas.hitler(getUrli2)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await tobz.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                            await limitAdd(serial)
                        })
                    } else  {
                        for (let i = 0; i < mentionedJidList.length; i++) {
                            const ypics = await tobz.getProfilePicFromServer(mentionedJidList[i])
                            if (ypics === undefined) {
                                var ypfps = errorImg
                            } else {
                                ypfps = ypics
                            }
                        }
                        canvas.Canvas.hitler(ypfps)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await tobz.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                            await limitAdd(serial)
                        })
                    }
                } catch (err) {
                    console.error(err)
                    await tobz.reply(from, 'Ups, ada yang error!', id)
                }
                    break
                    case prefix+'wasted2':
               // if (!isRegistered) return await tobz.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                   // if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await tobz.reply(from, ind.limit(), id)
                    //limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    //await tobz.reply(from, ind.wait(), id)
                    await tobz.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini..., sticker nya lagi di kirim', id).then(() => tobz.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    //await tobz.reply(from, ind.wrongFormat(), id)
                }
            break
                        case prefix+'sarah':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            if (args.length === 1) return await tobz.reply(from, `Beri teksnya!\nContoh: ${prefix}sarah ashiyap`, id) 
                            argz = body.trim().split(' ')
                            var slicedArgs = Array.prototype.slice.call(argz, 1);
                            const tekssarah = await slicedArgs.join(' ')
                            tobz.reply(from, mess.wait, id)
                            await tobz.sendFileFromUrl(from, `https://rest.farzain.com/api/special/fansign/indo/viloid.php?apikey=rambu&text=${tekssarah}`, 'sarah.jpg', `Nih udah jadi`, id)    
                            await limitAdd(serial)
                            break
                        case prefix+'cosplay':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            if (args.length === 1) return await tobz.reply(from, `Beri teksnya!\nContoh: ${prefix}cosplay ashiyap`, id) 
                            argz = body.trim().split(' ')
                            var slicedArgs = Array.prototype.slice.call(argz, 1);
                            const tekscosplay = await slicedArgs.join(' ')
                            tobz.reply(from, mess.wait, id)
                            await tobz.sendFileFromUrl(from, `https://rest.farzain.com/api/special/fansign/cosplay/cosplay.php?apikey=rambu&text=${tekscosplay }`, 'cosplay.jpg', `Nih udah jadi`, id)    
                            await limitAdd(serial)
                            break
                    case prefix+'gtav':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, false)
                            await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, false)
                            await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else {
                            await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                        }
                        await limitAdd(serial)
                        break

                        case prefix+'pencil':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, `${sender}_ph`)
                            await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/pencil/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const getUrli2 = await uploadImages(mediaData, `${sender}_ph`)
                            await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/pencil/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                        } else {
                            await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                        }
                        await limitAdd(serial)
                        break
                      
                        case prefix+'3dline':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                            if (isMedia && type === 'image') {
                                const mediaData = await decryptMedia(message, uaOverride)
                                const getUrli2 = await uploadImages(mediaData, false)
                                await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                            } else if (quotedMsg && quotedMsg.type == 'image') {
                                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                                const getUrli2 = await uploadImages(mediaData, false)
                                await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                            } else {
                                await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                            }
                            await limitAdd(serial)
                            break

                            case prefix+'fbpg':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                            if (isMedia && type === 'image') {
                                argz = body.trim().split(' ')
                                var slicedArgs = Array.prototype.slice.call(argz, 1);
                                const cia = await slicedArgs.join(' ')
                                const mediaData = await decryptMedia(message, uaOverride)
                                const getUrli2 = await uploadImages(mediaData, false)
                                await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${encodeURIComponent(getUrli2)}&text=${cia}`, `awkowa.jpg`, `Nihh`, id)
                            } else if (quotedMsg && quotedMsg.type == 'image') {
                                argz = body.trim().split(' ')
                                var slicedArgs = Array.prototype.slice.call(argz, 1);
                                const cia = await slicedArgs.join(' ')
                                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                                const getUrli2 = await uploadImages(mediaData, false)
                                await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${encodeURIComponent(getUrli2)}&text=${cia}`, `awkowa.jpg`, `Nihh`, id)
                            } else {
                                await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                            }
                            await limitAdd(serial)
                            break

                            case prefix+'rainy':
                                if(isReg(obj)) return
                                if(cekumur(cekage)) return
                                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                                tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                                if (isMedia && type === 'image') {
                                    const mediaData = await decryptMedia(message, uaOverride)
                                    const getUrli2 = await uploadImages(mediaData, false)
                                    await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/raindrop/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                                } else if (quotedMsg && quotedMsg.type == 'image') {
                                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                                    const getUrli2 = await uploadImages(mediaData, false)
                                    await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/raindrop/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                                } else {
                                    await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                                }
                                await limitAdd(serial)
                                break
                                case prefix+'customwp':
                                    if(isReg(obj)) return
                                    if(cekumur(cekage)) return
                                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                                    if (isMedia && type === 'image') {
                                        const mediaData = await decryptMedia(message, uaOverride)
                                        const getUrli2 = await uploadImages(mediaData, `${serial}_ph`)
                                        await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/customwp/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                                    } else if (quotedMsg && quotedMsg.type == 'image') {
                                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                                        const getUrli2 = await uploadImages(mediaData, `${serial}_ph`)
                                        await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/customwp/?urlgbr=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                                    } else {
                                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}delfile`, id)
                                    }
                                    await limitAdd(serial)
                                    break
                    case prefix+'wasted':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli2 = await uploadImages(mediaData, false)
                        await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/gta?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli2 = await uploadImages(mediaData, false)
                        await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/gta?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}`, `awkowa.jpg`, `Nihh`, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}wasted`, id)
                    }
                    await limitAdd(serial)
                    break
//
                case prefix+'firee':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/photo_fire?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                    const well = imgnya.data.result.image
                    await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Nihh`, id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/photo_fire?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                    const well = imgnya.data.result.image
                    await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Nihh`, id)
                }  else {
                    await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}firee`, id)
                }
                await limitAdd(serial)
                break
               /* case prefix+'sfiree':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    await tobz.sendFile(from, imageBase64, 'imagesticker.jpg', 'Nih', id)
                    const mediaData = await decryptMedia(message, uaOverride)
                    const mediaData2 = await decryptMedia(imageBase642)
                    const getUrli = await uploadImages(mediaData2, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/photo_fire?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                    const well = imgnya.data.result.image
                    await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Nihh`, id)
                    
            }
            break */
                case prefix+'wastedgtav':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                    //argz = body.trim().split(' ')
                    //var slicedArgs = Array.prototype.slice.call(argz, 1);
                    //const text1 = await slicedArgs.join(' ')
                    //var slicedArgs2 = Array.prototype.slice.call(argz, 2);
                    //const text2 = await slicedArgs2.join(' ') 
                    argz = body.trim().split('|')
                    const text1 = argz[1] 
                    const text2 = argz[2]
                    const imgnya = `https://naufalhoster.xyz/textmaker/gta_original?apikey=${naufalkey}&text1=${text1}&text2=${text2}`
                    tobz.sendFileFromUrl(from, imgnya, ``, `Nihh`, id)
                    await limitAdd(serial)
                    break
                    //YOUR_API_KEY&url=https://naufalhoster.xyz/media/example.jpg

                case prefix+'distord':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await axios.get(`https://naufalhoster.xyz/tools/distortion?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                        const well = imgnya.data.result.image
                        await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Cakep`, id)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await axios.get(`https://naufalhoster.xyz/tools/distortion?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                        const well = imgnya.data.result.image
                        await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Cakep`, id)
                    } else {
                        await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}distord`, id)
                    }
                    await limitAdd(serial)
                    break
                    case prefix+'thermal':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const getUrli = await uploadImages(mediaData, false)
                            const imgnya = await axios.get(`https://naufalhoster.xyz/tools/thermal?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                            const well = imgnya.data.result.image
                            await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Cakep`, id)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const getUrli = await uploadImages(mediaData, false)
                            const imgnya = await axios.get(`https://naufalhoster.xyz/tools/thermal?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}`)
                            const well = imgnya.data.result.image
                            await tobz.sendFileFromUrl(from, well, `akwoawk.jpg`, `Nih`, id)
                        } else {
                            await tobz.reply(from, `Wrong Format!\nHarap Kirim Gambar Dengan ${prefix}thermal`, id)
                        }
                        await limitAdd(serial)
                        break
                case prefix+'crop':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                argz = body.trim().split('|')
                const lebarimg = argz[1] 
                const tinggiimg = argz[2]
                if (args.length === 1) return await tobz.reply(from, `Kirim Gambar lalu beri caption *${prefix}crop |Lebar|Tinggi|*\n\n*Contoh :*\n*${prefix}crop |720|720*`, id) 
                //if (args.length === 1) return await tobz.reply(from, `Kirim Gambar lalu beri caption *${prefix}crop |Lebar|Tinggi|*\n\n*Contoh :*\n*${prefix}crop |720|720*`, id) 
                tobz.reply(from, mess.wait, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/cropimg?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}&lebar=${lebarimg}&tinggi=${tinggiimg}`)
                    const infolebar = imgnya.data.result.lebar
                    const infotinggi = imgnya.data.result.tinggi
                    const cropimg  = imgnya.data.result.croppedImage
                    await tobz.sendFileFromUrl(from, cropimg , `akwoawk.jpg`, `Berhasil mengcrop dengan ukuran ${infolebar} x ${infotinggi}`, id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await axios.get(`https://naufalhoster.xyz/tools/cropimg?apikey=${naufalkey}&url=${encodeURIComponent(getUrli)}&lebar=${lebarimg}&tinggi=${tinggiimg}`)
                    const infolebar = imgnya.data.result.lebar
                    const infotinggi = imgnya.data.result.tinggi
                    const cropimg  = imgnya.data.result.croppedImage
                    await tobz.sendFileFromUrl(from, cropimg , `akwoawk.jpg`, `Berhasil mengcrop dengan ukuran ${infolebar} x ${infotinggi}`, id)
                } else {
                    await tobz.reply(from, `Wrong Format!\n Harap Kirim Gambar Dengan ${prefix}crop |lebar|tinggi`, id)
                }
                await limitAdd(serial)
                break

                case prefix+'snobg2':
                case prefix+'stikernobg2':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                tobz.reply(from, `_Removing Background..._`, id)
                if (isMedia && type === 'image') {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await stknobg(getUrli)
                    const snobg = imgnya.result.image
                    await tobz.sendStickerfromUrl(from, snobg)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const getUrli = await uploadImages(mediaData, false)
                    const imgnya = await stknobg(getUrli)
                    const snobg = imgnya.result.image
                    await tobz.sendStickerfromUrl(from, snobg)
                } else {
                    await tobz.reply(from, `Kirim gambar dengan caption ${prefix}snobg, atau reply gambar dan kirim ${prefix}snobg2`, id)
                }
                await limitAdd(serial)
                break

                case prefix+'snobg3':
                    case prefix+'stikernobg3':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    tobz.reply(from, `_Removing Background..._`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await stknobg2(getUrli)
                        const snobg = imgnya.result.image
                        await tobz.sendStickerfromUrl(from, snobg)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await stknobg2(getUrli)
                        const snobg = imgnya.result.image
                        await tobz.sendStickerfromUrl(from, snobg)
                    } else {
                        await tobz.reply(from, `Kirim gambar dengan caption ${prefix}snobg, atau reply gambar dan kirim ${prefix}snobg3`, id)
                    }
                    await limitAdd(serial)
                    break
            
            case prefix+'televisi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return 
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, `Sedang di proses, silahkan tunggu sekitar ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, `${serial}_ph`)
                const imgnya = await television(getUrli)
                const deleted = imgnya.result.image
                await tobz.sendFileFromUrl(from, deleted, `awokawo.jpg`, `Nih dah jadi`, id)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, `${serial}_ph`)
                const imgnya = await television(getUrli)
                const deleted = imgnya.result.image
                await tobz.sendFileFromUrl(from, deleted, `awokawo.jpg`, `Nih dah jadi`, id)
            } else {
                await tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}televisi`, id)
            }
            await limitAdd(serial)
            break
            


            case prefix+'text': // by: irham01
           // if (!isRegistered) return await tobz.reply(from, ind.notRegistered(), id)
            //if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await tobz.reply(from, ind.limit(), id)
          //  limit.addLimit(sender.id, _limit, isPremium, isOwner)
           // if (!isGroupMsg) return await tobz.reply(from, ind.groupOnly(), id)
           argz = body.trim().split(' ')
           var slicedArgs = Array.prototype.slice.call(argz, 2);
           const teksnyakak = await slicedArgs.join(' ')
          
            try {
                if (args[1] === 'burnpaper') {
                    tobz.reply(from, mess.wait, id)
                    const vfburn = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfburn.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'candlemug') {
                    tobz.reply(from, mess.wait, id)
                    const vfcandlemug = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfcandlemug.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'lovemsg') {
                    const vflovemsg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vflovemsg.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'mugflower') {
                    const vfmugflower = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfmugflower.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'narutobanner') {
                    const vfnarutobanner = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfnarutobanner.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'paperonglass') {
                    const vfpaperonglass = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfpaperonglass.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'romancetext') {
                    const vfromancetext = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfromancetext.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'shadowtext') {
                    const vfshadowtext = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vfshadowtext.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else if (args[1] === 'tiktokeffect') {
                    const vftiktokeffect = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text=${teksnyakak}`)
                    await tobz.sendFileFromUrl(from, vftiktokeffect.data.result.img, `${teksnyakak}.jpg`, '', id)
                } else {
                   // await tobz.reply(from, ind.menuText(), id)
                }
                
            } catch (err) {
                console.error(err)
                await tobz.reply(from, 'Error!', id)
            }
        break // Makasih Free Api nya Bang VideFikri

    
			case prefix+'addbacot':{
                if (args.length === 1)  return tobz.reply(from, `Masukan bacotannya!\nContoh *${prefix}addbacot lo jelek banget*`, id)
                    const bacot = body.slice(10)
                    dbcot.push(bacot)
                    fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
                    //tobz.reply(from, `Sukses menambahkan Kata bacot ke database\nTotal data bacot sekarang : *${dbcot.length - 1}*`, id)
                    tobz.reply(from, `Sukses menambahkan bacot ke database`, id)
                }
                break
    case prefix+'bacot':
        if(args.length == 2) {
            const no = args[1]
            const cekdb = dbcot.length
            if(cekdb <= no) return await tobz.sendText(from, `Total data saat ini hanya sampai *${cekdb - 1}*`, id)
            const ress =  dbcot[no]
            tobz.sendText(from, ress)
            } else {
            const kataa2 = dbcot[Math.floor(Math.random() * (dbcot.length))];
            tobz.reply(from, kataa2, id)
            }
        break  
		
		 case prefix+'love':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             const love = body.slice(5)
             if (!love) return tobz.reply(from, `Kirim perintah ${prefix}ove [teks]\n\nContoh ${prefix}love juwen`, id)
             tobz.reply(from, '_Tunggu sebentar sedang di proses_', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vhtearkey}`,`${love}.jpg`,`Nih Gambarnya`, id)        
             break  
			 
			 case prefix+'silk':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             const silk = body.slice(5)
             if (!silk) return tobz.reply(from, `Kirim perintah ${prefix}juwen [teks]\n\nContoh ${prefix}silk juwen`, id)
             tobz.reply(from, '_Tunggu sebentar sedang di proses_', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/silktext?text=${silk}&apikey=${vhtearkey}`,`${silk}.jpg`,`Nih Gambarnya`, id)        
             break 			 
			 case prefix+'sliding':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             const sliding = body.slice(9)
             if (!sliding) return tobz.reply(from, `Kirim perintah ${prefix}ttpgif [teks]\n\nContoh ${prefix}ttpgif`, id)
             tobz.reply(from, 'Tunggu sebentar sedang di proses...', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/slidingtext?text=${sliding}&apikey=${vhtearkey}`, ``, `Nihh`, id) .catch(() => tobz.reply(from, 'Ada yang error', id))
              await limitAdd(serial)
             break  
             case prefix+'$2':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isSimi) return tobz.reply(from, 'command/Perintah Simi belum di aktifkan di group ini!', id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}$2 [teks]*\nContoh : *${prefix}$2 hai simi*`, id)
            const que5 = body.slice(3)
            const sigo44 = await axios.get(`https://videfikri.com/api/simsimi/?teks=${que5}`)
            const sigot5 = sigo44.data
            tobz.reply(from, sigot5.jawaban, id)
            //console.log(sigot)
            tobz.seen
            break
            case prefix+'wiki':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                argz = body.trim().split(' ')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const querywiki = await slicedArgs.join(' ')
                const wikiid2 = await axios.get(`https://api.vhtear.com/wikipedia?query=${querywiki}&apikey=${vhtearkey}`)
                wikiid3 = wikiid2.data
                //wikiid4 = wikiid3.result[1].ImgResult
                tobz.reply(from, `*Pencarian* : ${querywiki}\n\n*Isi*:\n${wikiid3.result.Info}`, id)
               // await tobz.sendFileFromUrl(from, wikiid4, `shopee.jpg`, `*Pencarian* : ${querywiki}\n\n*Isi*:\n${wikiid3.result.Info}`, id)
                break
                //https://naufalhoster.xyz/textmaker/ytcomment_custom?apikey=${naufalkey}&url=${encodeURIComponent(getUrli2)}&nama=${nama}&comment=${comment}&dark=${theme}`)
                case prefix+'phcomment':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}phcomment [ @tag|username|teks ]*, contoh *${prefix}phcomment @saya|xinz|wah mantap*`, id)
                    argz = body.trim().split('|')
                    if (argz.length === 3) {
                        const orgn = mentionedJidList[0]
                        const usernamePh = argz[1]
                        const commentPh = argz[2]
                        const ppPhRaw = await tobz.getProfilePicFromServer(orgn)
                        if (ppPhRaw === undefined) {
                            var ppPh = errorImg
                        } else {
                            var ppPh = ppPhRaw
                        }
                        const dataPpPh = await bent('buffer')(ppPh)
                        const linkPpPh = await uploadImages(dataPpPh, `${serial}_ph`)
                        await tobz.reply(from, 'Wait tunggu satu jam', id)
                        const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                        await tobz.sendFileFromUrl(from, preproccessPh.data.message, 'ph.jpg', '', id)
                        limitAdd(serial)
                        console.log('Success creating image!')
                    } else {
                        await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}phcomment [ @tag|username|teks ]*, contoh *${prefix}phcomment @saya|xinz|wah mantap*`, id)
                    }
                    break
                    
             

         case prefix+'glow':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             const glow = body.slice(6)
             if (!glow) return tobz.reply(from, `Kirim perintah ${prefix}glowmaker [teks]\n\nContoh ${prefix}glowmaker Juwen`, id)
             tobz.reply(from, '_Tunggu sebentar sedang di proses_', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?text=${glow}&apikey=${vhtearkey}`, `${glow}.jpg`, `Nih Gambarnya`, id)        
             break   

//
			 case prefix+'romance':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             const romance = body.slice(7)
             if (!romance) return tobz.reply(from, `Kirim perintah ${prefix}romance [teks]\n\nContoh ${prefix}romance Juwen`, id)
             tobz.reply(from, '_Tunggu sebentar sedang di proses_', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/romancetext?text=${romance}&apikey=${vhtearkey}`, `${romance}.jpg`, `Nih Gambarnya`, id)        
             break  

             case prefix+'coffecup':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             argz = body.trim().split(' ')
             var slicedArgs = Array.prototype.slice.call(argz, 1);
             const coffeecup = await slicedArgs.join(' ')
             if (!coffeecup) return tobz.reply(from, `Kirim perintah ${prefix}coffeecup [teks]\n\nContoh ${prefix}coffeecup Juwen`, id)
             tobz.reply(from, mess.wait, id)
             await tobz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/coffeecup2/?text=${coffeecup}`, `${coffeecup}.jpg`, `Nih Gambarnya`, id)        
             break  

              case prefix+'starwars':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             await limitAdd(serial)
             argz = body.trim().split(' ')
             var slicedArgs = Array.prototype.slice.call(argz, 1);
             const starwars = await slicedArgs.join(' ')
             if (!starwars) return tobz.reply(from, `Kirim perintah ${prefix}starwars [teks]\n\nContoh ${prefix}starwars Juwen`, id)
             tobz.reply(from, mess.wait, id)
             await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/starwars?apikey=${naufalkey}&text=${starwars}`, `${starwars}.jpg`, `Nih Gambarnya`, id)        
             break  
             //matchingajaa&text=Star%0A1Wars
             
             case prefix+'watermaker':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                 //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                 if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                 await limitAdd(serial)
                 argz = body.trim().split(' ')
                 var slicedArgs = Array.prototype.slice.call(argz, 1);
                 const watermaker = await slicedArgs.join(' ')
                 if (!watermaker) return tobz.reply(from, `Kirim perintah ${prefix}watermaker [teks]\n\nContoh ${prefix}watermaker Juwen`, id)
                 tobz.reply(from, '_Tunggu sebentar sedang di proses_', id)
                 await tobz.sendFileFromUrl(from, `https://api.vhtear.com/water_maker?text=${watermaker}&apikey=${vhtearkey}`, `${watermaker}.jpg`, `Nih Gambarnya`, id)        
                 break  

             case prefix+'ninja':
                if (args.length === 0) return tobz.reply(from, `Kirim perintah *${prefix}ninja [ |Teks1|Teks2 ]*, contoh *${prefix}ninja |aqulzz|xinz*`, id)
                argz = body.trim().split('|')
                if (argz.length === 3) {
                    tobz.reply(from, mess.wait, id)
                    const ninja1 = argz[1]
                    const ninja2 = argz[2]
                    const nanji = await axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${ninja1}&text2=${ninja2}&apikey=${tobzkey}`)
                    tobz.sendFileFromUrl(from, nanji.data.result, 'ninja.jpg', 'Nih Gambarnya', id)
                } else {
                    await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}ninja [ |Teks1|Teks2 ]*, contoh *${prefix}ninja |Juwen|Botzz*`, id)
                }
                break

                
//Veza%20Hani&apikey=V3456hG822937HjHAGS
            
        case prefix+'glitch': 
		if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}glitchteks  |Teks1|Teks2, contoh ${prefix}glitchteks  |Teks1|Teks2`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                tobz.reply(from, mess.wait, id)
                const glitch1 = argz[1]
                const glitch2 = argz[2]
                if (glitch1.length > 15) return tobz.reply(from, 'Teks 1 Terlalu Panjang!\nMaksimal 15 huruf!', id)
                if (glitch2.length > 15) return tobz.reply(from, 'Teks 2 Terlalu Panjang!\nMaksimal 15 huruf!', id) 
                tobz.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${glitch1}&text2=${glitch2}&apikey=${vhtearkey}`, 'glitch.jpg', 'Nih Gambarnya', id)
                await limitAdd(serial)
            } else {
                await tobz.reply(from, `[❗] Wrong Format!\nKirim perintah ${prefix}glitch |Teks1|Teks2\n\nContoh:\n*${prefix}glitch |Juwen|Bot*`, id)
            }
            break
			//
        case prefix+'blackpink':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}blackpink [ Teks ]*, contoh *${prefix}blackpink ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const blpk = body.slice(11)
            if (blpk.length > 10) return tobz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await tobz.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${blpk}&apikey=${vhtearkey}`, 'blackpink.jpg', 'Nih Logonya', id)
            await limitAdd(serial)
            break

            // api baru nyadar bgst
            //https://rest.farzain.com/api/random.php?min=1&max=100&apikey=
           // https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=Tobz&apikey=APIKEYLU
           //pikri%20gans
          
           case prefix+'csgologo':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}csgologo [teks]*\nContoh : *${prefix}csgologo ZXCBOT*`, id)
            await tobz.reply(from, mess.wait, id)
            const csgologo = body.slice(9)
            const csgologo1 = await axios.get(`https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=${csgologo}&apikey=${tobzkey}`)
            const csgologo2 = csgologo1.data
            tobz.sendFileFromUrl(from, csgologo2.result,`csgologo.jpg`, `Nih Gambarnya`, id)
            await limitAdd(serial)
            break
            case prefix+'eroded':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}batik [teks]*\nContoh : *${prefix}batik ZXCBOT*`, id)
            await tobz.reply(from, mess.wait, id)
            const eroded = body.slice(8)
            const eroded1 = await axios.get(`https://videfikri.com/api/textmaker/eroded/?text=${eroded}`)
            const eroded2 = eroded1.data
            tobz.sendFileFromUrl(from, eroded2.result.img, `eroded.jpg`, `Nih Gambarnya`, id)
            await limitAdd(serial)
            break
            case prefix+'batik':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}batik [teks]*\nContoh : *${prefix}batik ZXCBOT*`, id)
            await tobz.reply(from, mess.wait, id)
            const modernb = body.slice(6)
            const modernb1 = await axios.get(`https://videfikri.com/api/textmaker/modernbatik/?text=${modernb}`)
            const modernb2 = modernb1.data
            tobz.sendFileFromUrl(from, modernb2.result.img,`modernb.jpg`, `Nih Gambarnya`, id)
            await limitAdd(serial)
            break
            case prefix+'labtext':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}batik [teks]*\nContoh : *${prefix}batik ZXCBOT*`, id)
                await tobz.reply(from, mess.wait, id)
                const labtext = body.slice(8)
                const labtext1 = await axios.get(`https://videfikri.com/api/textmaker/labtext/?text=${labtext}`)
                const labtext2 = labtext1.data
                tobz.sendFileFromUrl(from, labtext2.result.img,`labtext.jpg`, `Nih Gambarnya`, id)
                await limitAdd(serial)
                break
           case prefix+'namaninja':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pubglogo [teks]*\nContoh : *${prefix}pubglogo ZXCBOT*`, id)
            await tobz.reply(from, mess.wait, id)
            const ninjaa = body.slice(10)
            const ninjaa2 = await axios.get(`https://api.terhambar.com/ninja?nama=${ninjaa}`)
            const ninjaa3 = ninjaa2.data.result
           tobz.reply(from, ninjaa3.ninja, id)
            await limitAdd(serial)
            break

            case prefix+'ceknaufalkey':
                const cekapi1 = await axios.get(`https://naufalhoster.xyz/tools/checkapi?apikey=${naufalkey}`)
                const cekapi2 = cekapi1.data.apikey.tanggal_daftar
                const cekapi3 = cekapi1.data.apikey.kadaluwarsa
                const cekapi4 = cekapi1.data.statistik.hit_harian
                const cekapi5 = cekapi1.data.statistik.limit
                const cekapi6 = cekapi1.data.statistik.total_hit
                const cekapi7 = cekapi1.data.account.nama
                const cekapi8 = cekapi1.data.account.akses
                const cekapi9 =  `${monospace(
`INFO APIKEY NAUFALHOSTER

[ INFO AKUN ]

Nama Akun: ${cekapi7}
Akses: ${cekapi8}
Tanggal Daftar: ${cekapi2}
Kadaluwarsa: ${cekapi3}

----------------------

[ STATISTIK ]

Hit Harian: ${cekapi4}
Limit: ${cekapi5}
Total Hit: ${cekapi6}

https://naufalhoster.xyz`)}`
tobz.reply(from, cekapi9, id) 
    break
    
           
                case prefix+'email':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    //if (!isVip) return tobz.reply(from, `Perintah ini khusus membervip, chat owner untuk berlangganan`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}email  |Namaserial|TujuanEmail|NamaPenerima|Subjek|IsiPesan*, contoh *${prefix}email  |XINZ|xinzzzz.00@gmail.com|Aqulzz|Minta VIP|Bang minta VIP Bang*`, id)
                    argz = body.trim().split('|')
                    if(argz.length === 6){
                    const email = await axios.get(`https://naufalhoster.xyz/tools/email_sender?apikey=${naufalkey}&sender=${argz[1]}&to=${argz[2]}&penerima=${argz[3]}&subject=${argz[4]}&pesan=${argz[5]}`)
                    const { status, result } = email.data
                        if(status == 'sukses') {
                            tobz.reply(from, `Sukses bang`, id)
                        }
                    } else {
                    tobz.reply(from, `Masukan format dengan benar`, id)
                    }
                    break
                case prefix+'pubg':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pubg [|text1|text2]*, contoh *${prefix}pubg |text1|text2*`, id)
                    argz = body.trim().split('|')
                    if (argz.length === 3) {
                        tobz.reply(from, mess.wait, id)
                        const pubg = argz[1]
                        const pubg1 = argz[2]
                        tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/pubg?apikey=${naufalkey}&text1=${pubg}&text2=${pubg1}`)
                        await limitAdd(serial)
                    } else {
                        await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}pubg [|text1|text2]*, contoh *${prefix}pubg |text1|text2*`, id)
                    }
                    
                    break
                case prefix+'football':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}football [|nama|nomor]*, contoh *${prefix}football |xinz|17*`, id)
                    argz = body.trim().split('|')
                    if (argz.length === 3) {
                        tobz.reply(from, mess.wait, id)
                        const ftbl = argz[1]
                        const pung = argz[2]
                        tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/football?apikey=${naufalkey}&text1=${ftbl}&text2=${pung}`, `akwokwa.jpg`, `Nihh`, id)
                        await limitAdd(serial)
                    } else {
                        await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}football [|nama|nomor]*, contoh *${prefix}football |xinz|17*`, id)
                    }
                    break
                case prefix+'tweettrump':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}tweettrump text*, contoh *${prefix}tweettrump testtt*`, id)
                    tobz.reply(from, mess.wait, id)
                    argz = body.trim().split(' ')
                    var slicedArgs = Array.prototype.slice.call(argz, 1);
                    const tweetnya = await slicedArgs.join(' ')
                    tobz.sendFileFromUrl(from, `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${tweetnya}&raw=1`, `aowkaow.jpg`, `Nihh`, id)
                    limitAdd(serial)
                    break
                case prefix+'changemymind':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}changemymind text*, contoh *${prefix}changemymind testtt*`, id)
                    tobz.reply(from, mess.wait, id)
                    argz = body.trim().split(' ')
                    var slicedArgs = Array.prototype.slice.call(argz, 1);
                    const mymind = await slicedArgs.join(' ')
                    tobz.sendFileFromUrl(from, `https://nekobot.xyz/api/imagegen?type=changemymind&text=${mymind}&raw=1`, `awkoawkw.jpg`, `Change my mind 🙄`, id)
                    limitAdd(serial)
                    break
                    case prefix+'tabconsole':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}changemymind text*, contoh *${prefix}changemymind testtt*`, id)
                        tobz.reply(from, mess.wait, id)
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const mylol = await slicedArgs.join(' ')
                        tobz.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/carbon?apikey=${lolkey}&code=${encodeURIComponent(mylol)}`, `awkoawkw.jpg`, `Nihh`, id)
                        limitAdd(serial)
                        break
                case prefix+'tweet':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}tweet [|username|text]*, contoh *${prefix}tweet |juwennn|gg gaming gais*`, id)
                    argz = body.trim().split('|')
                    if (argz.length === 3) {
                        tobz.reply(from, mess.wait, id)
                        const usertw = argz[1]
                        const texttw = argz[2]
                        tobz.sendFileFromUrl(from, `https://nekobot.xyz/api/imagegen?type=tweet&username=${usertw}&text=${texttw}&raw=1`, `akowkwao.jpg`, `Nihh`, id)
                        await limitAdd(serial)
                    } else {
                        await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}tweet [|username|text]*, contoh *${prefix}tweet |juwennn|gg gaming gais*`, id)
                    }
                    break
                    

                    case prefix+'harrypotter':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pubglogo [teks]*\nContoh : *${prefix}pubglogo ZXCBOT*`, id)
                tobz.reply(from, mess.wait, id)
                argz = body.trim().split(' ')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const harryp = await slicedArgs.join(' ')
                await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/harrypotter?apikey=${naufalkey}&text=${harryp}`, `harrypotter.jpg`, `Nih Gambarnya`, id)
                await limitAdd(serial)
                break
            case prefix+'overwatchlg': //
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pubglogo [teks]*\nContoh : *${prefix}pubglogo ZXCBOT*`, id)
                await tobz.reply(from, mess.wait, id)
                argz = body.trim().split('|')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const overwatch = await slicedArgs.join(' ')
                const overwatch1 = await axios.get(`https://tobz-api.herokuapp.com/api/photooxy?theme=overwatch&text=${overwatch}&apikey=${tobzkey}`)
                const overwatch2 = overwatch1.data
                tobz.sendFileFromUrl(from, overwatch2.result,`pubglogo.jpg`, `Nih Gambarnya`, id)
                await limitAdd(serial)
                break
                case prefix+'ytm3': //=https://youtu.be/Iody_E2xujo
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pubglogo [teks]*\nContoh : *${prefix}pubglogo ZXCBOT*`, id)
                tobz.reply(from, mess.wait, id)
                argz = body.trim().split(' ')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const linknya = await slicedArgs.join(' ')
                const linknya1 = await axios.get(`https://api.vhtear.com/ytmp3?query=${linknya}&apikey=${vhtearkey}`)
                const linknya2 = linknya1.data.result
                const infonya =  `*「 YOUTUBE MP3 」*\n\n*Judul:* ${linknya2.title}\n*Size:* ${linknya2.size}\n*Durasi:* ${linknya2.duration}\n*Ext:* ${linknya2.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(linknya2.size.split(' MB')[0]) >= 10.00) return tobz.sendFileFromUrl(from, linknya2.image, `thumb.jpg`, `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${linknya2.title}\n• *Filesize* : ${linknya2.size}\n\n_Maaf, Durasi audio melebihi 10 MB. Silahkan download audio melalui link dibawah_.\n${linknya2.mp3}`, id)
                tobz.sendFileFromUrl(from, linknya2.image, `ytmp3.jpg`, infonya, id)
                tobz.sendFileFromUrl(from, linknya2.mp3, ``, ``, id)
                await limitAdd(serial)
                break
           case prefix+'nulis':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}bokeh [ Teks ]*, contoh *${prefix}bokeh ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const nulisbgt = await slicedArgs.join(' ')
            await tobz.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${nulisbgt}&apikey=${vhtearkey}`, 'nulis.jpg', 'Nih kak', id)
            await limitAdd(serial)
            break
            case prefix+'pentakill':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}bokeh [ Teks ]*, contoh *${prefix}bokeh ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const nulisbgt2 = body.slice(10)
            await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/pentakill?apikey=${naufalkey}&text=${nulisbgt2}`, 'shadow.jpg', 'Nih ngab', id)
            await limitAdd(serial)
            break
     /*       case prefix+'tahta':
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah #tahta [teks]', id) // BY PAREL YA TODD
            const text = body.slice(7) // KASIH AUTHOR AJG
            tobz.reply(from, 'bntr', id) // KASIH AUTHOR AJG, CAPE GW RAKIT BGSD
            const splitText = text.replace(/(\S+\s*){1,10}/g, '$&\n') // JGN DIHAPUS TODD
            const fixHeight = 'HARTA\nTAHTA\n' + splitText.toUpperCase() // BY MFARELS
            spawn('convert', [
                '-gravity',
                'Center',
                '-size',
                '1280x1280',
                'xc:black',
                '-font',
                './font/MFarelS.ttf',
                '-pointsize',
                '200',
                '-tile',
                './mager/tile_disks.jpg',
                '-annotate',
                '+20+80',
                fixHeight,
                '-wave',
                '10x175',
               '-crop',
                '1000x850+0+0',
                './mager/pantek.jpg'
            ])
            .on('error', () => zahraaa.reply(from, 'Error gan', id))
            .on('exit', () => {
                tobz.sendImage(from, './mager/pantek.jpg', 'nulis.jpg', 'Nih mhank', id)  // YT : MFARELS CH
            })
            break   */
            case prefix+'striger':
                if(isReg(obj)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                await limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await  tobz.reply(from, mess.wait2, id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData, `triger.${sender.id}`)
                            await tobz.sendStickerfromUrl(from, `https://api.zeks.xyz/api/triger?apikey=${vinzkey}&img=${imageLink}`, '', id)
                                .then(() => console.log('Success creating Sticker!'))
                        .catch(async (err) => {
                            console.error(err)
                            await tobz.reply(from, `[❗] Maaf Ada Yang Salah, Mungkin Server Lagi Error`, id)
                        })
                } else {
                    await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah`, id)
                }
            break
           case prefix+'randompuisi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await tobz.sendFileFromUrl(from, `https://api.vhtear.com/puisi_image&apikey=${vhtearkey}`, 'shadow.jpg', '', id)
            await limitAdd(serial)
            break
           case prefix+'logorandom':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}bokeh [ Teks ]*, contoh *${prefix}bokeh ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const shadoww = body.slice(11)
            await tobz.sendFileFromUrl(from, `https://api.vhtear.com/gamelogo?text=${shadoww}&apikey=${vhtearkey}`, 'shadow.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'sandwriting':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}sandwriting [ Teks ]*, contoh *${prefix}sandwriting ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const sandw = body.slice(12)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/sandwrite?text=${sandw}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'bokeh':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}bokeh [ Teks ]*, contoh *${prefix}bokeh ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const bokeh = body.slice(6)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/bokehtext?text=${bokeh}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'oldlogo':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}oldlogo [ Teks ]*, contoh *${prefix}oldlogo ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const old97 = body.slice(8)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/old1917?text=${old97}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'glue3d':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}glue3d [ Teks ]*, contoh *${prefix}glue3dk ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const glue = body.slice(7)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/glue3d?text=${glue}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'dropwater':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}dropwater [ Teks ]*, contoh *${prefix}dropwater ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const dropw = body.slice(10)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/dropwater?text=${dropw}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            break
            case prefix+'firework':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}firework [ Teks ]*, contoh *${prefix}firework ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const firew = body.slice(9)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/firework?text=${firew}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            break
            case prefix+'lavatext':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}lavatext [ Teks ]*, contoh *${prefix}lavatext ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const lavat = body.slice(9)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/lavatext?text=${lavat}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'cloudsky':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}cloudsky [ Teks ]*, contoh *${prefix}cloudsky ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const cloud = body.slice(9)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/cloudsky?text=${cloud}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'3dtext':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}3dtext [ Teks ]*, contoh *${prefix}3dtext ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const d3text = body.slice(7)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/text3d?text=${d3text}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'toxict':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}toxict [ Teks ]*, contoh *${prefix}toxict ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const toxict = body.slice(7)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/toxictext?text=${toxict}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'vintage':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}vintage [ Teks ]*, contoh *${prefix}vintage ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const vintage = body.slice(8)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/realvintage?text=${vintage}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'firetext':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}firetext [ Teks ]*, contoh *${prefix}firetext ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const firetext = await slicedArgs.join(' ')
            await tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/fire?apikey=${naufalkey}&text=${firetext}`, 'firetext.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'realcloud':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}realcloud [ Teks ]*, contoh *${prefix}realcloud ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const realc = body.slice(9)
            await limitAdd(serial)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/realcloud?text=${realc}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            break
            case prefix+'luxury':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}luxury [ Teks ]*, contoh *${prefix}luxury ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const luxxy = body.slice(7)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/luxury?text=${luxxy}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'matrix':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}matrix [ Teks ]*, contoh *${prefix}matrix ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const matrix = body.slice(7)
            await limitAdd(serial)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/matrixtext?text=${matrix}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            break
            case prefix+'foilbalon':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}foilbalon [ Teks ]*, contoh *${prefix}foilbalon ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const balonf = body.slice(10)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/foilballoon?text=${balonf}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'bloodtext':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}bloodtext [ Teks ]*, contoh *${prefix}bloodtext ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const bloodt = body.slice(10)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/bloodtext?text=${bloodt}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'holograph':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}bloodtext [ Teks ]*, contoh *${prefix}bloodtext ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const holot = body.slice(10)
            await tobz.sendFileFromUrl(from, `${linkkk2}/textpro/holographic?text=${holot}`, 'blackpink.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
            case prefix+'logomarvel':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}logomarvel [ |Teks1|Teks2 ]*, contoh *${prefix}logomarvel |juwen|keren*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                tobz.reply(from, mess.wait, id)
                const marvell = argz[1]
                const marvell2 = argz[2]
                tobz.sendFileFromUrl(from, `${linkkk2}/textpro/marvelstudio?text1=${marvell}&text2=${marvell2}`, 'blackpink.jpg', 'Nih Gambarnya', id)
                await limitAdd(serial)
            } else {
                await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}logomarvel [ |Teks1|Teks2 ]*, contoh *${prefix}logomarvel |juwen|keren*`, id)
            }
            break
            case prefix+'stonetext':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}stonetext [ |Teks1|Teks2 ]*, contoh *${prefix}stonetext |juwen|keren*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                tobz.reply(from, mess.wait, id)
                const stontext1 = argz[1]
                const stontext2 = argz[2]
                tobz.sendFileFromUrl(from, `${linkkk2}/textpro/stonetext?text1=${stontext1}&text2=${stontext2}`, 'blackpink.jpg', 'Nih Gambarnya', id)
                await limitAdd(serial)
            } else {
                await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}stonetext [ |Teks1|Teks2 ]*, contoh *${prefix}stonetext |juwen|keren*`, id)
            }
            break
            
            // STICKER
            case prefix+'smurf':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}galaxy [ Teks ]*, contoh *${prefix}galaxy ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const smurft = body.slice(6)
            if (smurft.length > 10) return tobz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            //await tobz.sendFileFromUrl(from, `${linkkk2}/flamingtext/smurf?text=${smurft}`)
            await tobz.sendStickerfromUrl(from, `${linkkk2}/flamingtext/smurf?text=${smurft}`)
            await limitAdd(serial)
            break

            case prefix+'oldlogosk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}oldlogo [ Teks ]*, contoh *${prefix}oldlogo ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const old197 = body.slice(10)
            await tobz.sendStickerfromUrl(from, `${linkkk2}/textpro/old1917?text=${old197}`)
            await limitAdd(serial)
            break

            case prefix+'glitchsk': 
		if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}glitchteks  |Teks1|Teks2, contoh ${prefix}glitchteks  |Teks1|Teks2`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                tobz.reply(from, mess.wait, id)
                const glitch11 = argz[1]
                const glitch22 = argz[2]
                if (glitch11.length > 5) return tobz.reply(from, 'Teks 1 Terlalu Panjang!\nMaksimal 5 huruf!', id)
                if (glitch22.length > 5) return tobz.reply(from, 'Teks 2 Terlalu Panjang!\nMaksimal 5 huruf!', id) 
                tobz.sendStickerfromUrl(from, `${linkkk2}/textpro/glitchtext?text1=${glitch11}&text2=${glitch22}`)
                await limitAdd(serial)
            } else {
                await tobz.reply(from, `[❗] Wrong Format!\nKirim perintah ${prefix}glitch |Teks1|Teks2\n\nContoh:\n*${prefix}glitch |Juwen|Bot*`, id)
            }
            break

            case prefix+'logomarvelsk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}logomarvel [ |Teks1|Teks2 ]*, contoh *${prefix}logomarvel |juwen|keren*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                tobz.reply(from, mess.wait, id)
                const marvell1 = argz[1]
                const marvell22 = argz[2]
                if (marvell1.length > 5) return tobz.reply(from, 'Teks 1 Terlalu Panjang!\nMaksimal 5 huruf!', id)
                if (marvell22.length > 5) return tobz.reply(from, 'Teks 2 Terlalu Panjang!\nMaksimal 5 huruf!', id) 
                tobz.sendStickerfromUrl(from, `${linkkk2}/textpro/marvelstudio?text1=${marvell1}&text2=${marvell22}`, 'blackpink.jpg', 'Nih Gambarnya', id)
                await limitAdd(serial)
            } else {
                await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}logomarvel [ |Teks1|Teks2 ]*, contoh *${prefix}logomarvel |juwen|keren*`, id)
            }
            break

            case prefix+'foilbalonsk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}foilbalon [ Teks ]*, contoh *${prefix}foilbalon ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const balonff = body.slice(12)
           
            await tobz.sendStickerfromUrl(from, `${linkkk2}/textpro/foilballoon?text=${balonff}`)
            await limitAdd(serial)
            break

            // END


            case prefix+'wattpad':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
			if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}wattpad* [ Judul ]\n\n*Contoh :* ${prefix}wattpad bengek hyung`, id)
            const wattpad = body.slice(8)
			tobz.reply(from, mess.wait, id)
            try {
                const dataplai1 = await axios.get(`https://docs-jojo.herokuapp.com/api/wattpad_search?q=${wattpad}`)//
                const dataplay1 = dataplai1.data
                 let wattpad2 = `*「 WATTPAD SEARCHING 」*\n\n*Hasil Pencarian:* ${wattpad}\n`
                for (let i = 0; i < dataplay1.result.length; i++) {
                    wattpad2 += `\n─────────────────\n\n• *Judul* : ${dataplay1.result[i].title}\n• *Dibaca* : ${dataplay1.result[i].reads}\n• *Votes*: ${dataplay1.result[i].votes}\n• *Link*: ${dataplay1.result[i].url}\n • *Deskripsi* : ${dataplay1.result[i].description}\n`
                }
                await tobz.reply(from, wattpad2, id)
            } catch (err){
                console.log(err)
            }
            await limitAdd(serial)
            break
         case prefix+'searchig':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}searchig* [ username ]\n\n*Contoh :* ${prefix}searchig eejsxx`, id)
                const iguser = body.slice(9)
                tobz.reply(from, mess.wait, id)
                try {
                    const dataplai2 = await axios.get(`http://api.zeks.xyz/api/iguser?apikey=${vinzkey}&q=${iguser}`)//
                    const dataplay2 = dataplai2.data
                     let iguser2 = `*「 INSTAGRAM SEARCHING 」*\n\n*Hasil Pencarian:* ${iguser}\n`
                    for (let i = 0; i < dataplay2.result.length; i++) {
                         iguser2 += `\n─────────────────\n\n• *Username* : ${dataplay2.result[i].username}\n• *Nama* : ${dataplay2.result[i].full_name}\n• *Private*: ${dataplay2.result[i].private_user}\n• *Verified*: ${dataplay2.result[i].verified_user}\n• *Link* : instagram.com/${dataplay2.result[i].username}\n`
                    }
                    await tobz.reply(from, iguser2, id)
                } catch (err){
                    console.log(err)
                }
                await limitAdd(serial)
                break
            case prefix+'trendtwit':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
			if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
           // if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}alkitab* [ Ayat ]\n\n*Contoh :* ${prefix}alkitab matius`, id)
            //const cineplexx = body.slice(9)
			//tobz.reply(from, mess.wait, id)
            try {
                const dataplai3 = await axios.get(`https://docs-jojo.herokuapp.com/api/trendingtwitter`)//
                const dataplay3 = dataplai3.data
                 let trendtwit = `*「 TRENDING TWITTER 」*\n`
                for (let i = 0; i < dataplay3.result.length; i++) {
                    trendtwit += `\n─────────────────\n\n• *Hastag* : ${dataplay3.result[i].hastag}\n• *Rank* : ${dataplay3.result[i].rank}\n• *Tweet* : ${dataplay3.result[i].tweet}\n• *Link* : ${dataplay3.result[i].link}\n`
                }
                await tobz.reply(from, trendtwit, id)
            } catch (err){
                console.log(err)
            }
            await limitAdd(serial)
            break
            case prefix+'cineplex':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
               // if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}alkitab* [ Ayat ]\n\n*Contoh :* ${prefix}alkitab matius`, id)
                //const cineplexx = body.slice(9)
                tobz.reply(from, mess.wait, id)
                try {
                    const dataplai = await axios.get(`https://docs-jojo.herokuapp.com/api/cineplex`)//
                    const dataplay = dataplai.data
                     let cineplex1 = `*「 CINEPLEX 」*\n\n`
                    for (let i = 0; i < dataplay.result.length; i++) {
                        cineplex1 += `\n─────────────────\n\n• *Judul* : ${dataplay.result[i].title}\n• *Link* : ${dataplay.result[i].link}\n• *Genre* : ${dataplay.result[i].genre}\n• *Rating* : ${dataplay.result[i].rating}\n`
                    }
                    await tobz.reply(from, cineplex1, id)
                } catch (err){
                    console.log(err)
                }
                await limitAdd(serial)
                break
            
			case prefix+'galaxy':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}galaxy [ Teks ]*, contoh *${prefix}galaxy ZXCBOT*`, id)
            tobz.reply(from, mess.wait, id)
            const galaxy = body.slice(7)
            if (galaxy.length > 10) return tobz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await tobz.sendFileFromUrl(from, `https://api.vhtear.com/galaxytext?text=${galaxy}&apikey=${vhtearkey}`, 'galaxy.jpg', 'Nih Gambarnya', id)
            await limitAdd(serial)
            break
        case prefix+'thunder':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}thunder [ Teks ]*, contoh **${prefix}thunder juwen*`, id)
            tobz.reply(from, mess.wait, id)
            const thndr = body.slice(9)
            if (thndr.length > 30) return tobz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 30 huruf!_', id)
            await limitAdd(serial)
            await tobz.sendFileFromUrl(from, `https://api.vhtear.com/thundertext?text=${thndr}&apikey=${vhtearkey}`, 'thunder.jpg', 'Nih Gambarnya', id)
            break
          
        case prefix+'pornhub':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pornhub |Teks1|Teks2 *, contoh *${prefix}pornhub |juwen|keren*`, id)
           // argz = body.trim().split('|')
            //if (argz.length >= 2) {
                argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const lpornhubb = await slicedArgs.join(' ')
                if (!lpornhubb.includes('|')) return await tobz.reply(from, `Kirim perintah *${prefix}pornhub teks 1|teks 2*`, id)
                const lpornhub = lpornhubb.split('|')[0]
                const lpornhub2 = lpornhubb.split('|')[1]
                tobz.reply(from, mess.wait, id)
                if (lpornhub.length > 10) return tobz.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                if (lpornhub2.length > 10) return tobz.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)//
                tobz.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${lpornhub}&text2=${lpornhub2}&apikey=${vhtearkey}`, 'pornlogo.jpg', 'Nih Gambarnya', id)
                await limitAdd(serial)

            break
            case prefix+'logoml':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}pornhub [ |Teks1|Teks2 ]*, contoh *${prefix}pornhub |juwen|keren*`, id)
                argz = body.trim().split('|')
                if (argz.length >= 2) {
                    tobz.reply(from, mess.wait, id)
                    const heronya = argz[1]
                    const namanya = argz[2]
                    tobz.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${heronya}&text=${namanya}&apikey=${vhtearkey}`, 'awokaowak.jpg', 'Nih Gambarnya', id)
                    await limitAdd(serial)
                } else {
                    await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}pornhub [ |Teks1|Teks2 ]*, contoh *${prefix}pornhub |juwen|keren*`, id)
                }
                break
                case prefix+'musik':
                    case prefix+'music':
                         if(isReg(obj)) return
                         if(cekumur(cekage)) return
                        // if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                         if (!isAdmin) return tobz.reply(from, 'Silahkan daftar menjadi premium untuk menggunakan fitur ini', id)
                         if (!isGroupMsg && !isAdmin) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}musik* _Judul lagu yang akan dicari_`)
                        const quer = body.slice(7).toString()
                        tobz.reply(from, mess.wait, id)
                        try {
                            const jsonsercmu = await get.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${encodeURIComponent(quer)}`).json()
                            const { result } = await jsonsercmu
                            let berhitung = 1
                            let xixixi = `*Hasil pencarian from ${quer}*\n\n_Note : Apabila kesusahan mengambil data id, untuk download musik tag pesan ini dan berikan perintah : *${prefix}getmusik urutan* contoh : *${prefix}getmusik 2*_\n`
                            for (let i = 0; i < result.length; i++) {
                                xixixi += `\n═════════════════\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].author}\n*Durasi* : ${result[i].timestamp}\n*Perintah download* :\n_${prefix}getmusik ${result[i].id}_\n`
                            }
                                xixixi += `\n\n`
                            for (let ii = 0; ii < result.length; ii++) {
                                xixixi += `(#)${result[ii].id}`
                            }
                            await tobz.sendFileFromUrl(from, result[0].thumb, 'thumbserc.jpg', xixixi, id)
                        } catch (err){
                            tobz.reply(from, `_Kesalahan saat mencari judul lagu ${quer}_`, id)
                        }
                        await limitAdd(serial)
                        await tobz.sendSeen(from)
                        break
                        case prefix+'musik2':
                            case prefix+'music2':
                                 if(isReg(obj)) return
                                 if(cekumur(cekage)) return
                                // if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                                 if (!isAdmin) return tobz.reply(from, 'Silahkan daftar menjadi premium untuk menggunakan fitur ini', id)
                                 if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}musik* _Judul lagu yang akan dicari_`)
                                const quer2 = body.slice(8).toString()
                                tobz.reply(from, mess.wait, id)
                                try {
                                    //tobz.reply(from, '_Sedang mencari data..._', id)
                                    const jsonsercmu = await get.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${encodeURIComponent(quer2)}`).json()
                                    // console.log(jsonsercmu)
                                    // if (!resmus.ok) throw new Error(`unexpected response ${resmus.statusText}`)
                                    // const jsonsercmu = await resmus.json()
                                    const { result } = await jsonsercmu
                                    let berhitung = 1
                                    let xixixi = `*Hasil pencarian from ${quer2}*\n\n_Note : Apabila kesusahan mengambil data id, untuk download musik tag pesan ini dan berikan perintah : *${prefix}getmusik urutan* contoh : *${prefix}getmusik 2*_\n`
                                    //console.log(result)
                                    for (let i = 0; i < result.length; i++) {
                                        xixixi += `\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].author}\n*Durasi* : ${result[i].timestamp}\n*Perintah download* :\n_${prefix}getmusik ${result[i].id}_\n`
                                    }
                                        xixixis += `\n\n`
                                    for (let ii = 0; ii < result.length; ii++) {
                                        xixixi += `(#)${result[ii].id}`
                                    }
                                    await tobz.sendFileFromUrl(from, result[0].thumb, 'thumbserc.jpg', xixixi, id)
                                } catch (err){
                                    tobz.reply(from, `_Kesalahan saat mencari judul lagu ${quer}_`, id)
                                }
                                await limitAdd(serial)
                                await tobz.sendSeen(from)
                                break
            
                        case prefix+'vidio':
                                        case prefix+'video':
                                            if(isReg(obj)) return
                         if(cekumur(cekage)) return
                         //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                         if (!isAdmin) return tobz.reply(from, 'Silahkan daftar menjadi premium untuk menggunakan fitur ini', id)
                         if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}musik* _Judul lagu yang akan dicari_`)
                        
                                            const querv = body.slice(7)
                                            tobz.reply(from, mess.wait, id)
                                            try {
                                                //tobz.reply(from, '_Sedang mencari data..._', id)
                                                const jsonsercmuv = await get.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${encodeURIComponent(querv)}`).json()
                                                // if (!resmusv.ok) throw new Error(`unexpected response ${resmusv.statusText}`)
                                                // const jsonsercmuv = await resmusv.json()
                                                // let berhitung1 = 1
                                                const { result } = await jsonsercmuv
                                                let xixixai = `*Hasil pencarian from ${querv}*\n\n_Note : Apabila kesusahan mengambil data id, untuk download video tag pesan ini dan berikan perintah : *${prefix}getvideo urutan* contoh : *${prefix}getvideo 2*_\n`
                                                for (let i = 0; i < result.length; i++) {
                                                    xixixai += `\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].author}\n*Durasi* : ${result[i].timestamp}\n*Perintah download* :\n_${prefix}getvideo ${result[i].id}_\n`
                                                }
                                                    xixixai += `\n\n`
                                                for (let ii = 0; ii < result.length; ii++) {
                                                    xixixai += `(#)${result[ii].id}`
                                                }
                                                await tobz.sendFileFromUrl(from, result[0].thumb, 'thumbserc.jpg', xixixai, id)
                                            } catch (err){
                                            }
                                            await limitAdd(serial) 
                                            await tobz.sendSeen(from)
                                    break

                      /*  case prefix+'.':
                            yta('https://youtube.com/watch?v='+args[1]).then(c => console.log(c))
                            break */
                            case prefix+'getmusik':
                                case prefix+'getmusic':
                                    if(isReg(obj)) return
                         if(cekumur(cekage)) return
                         //if (!isPrem) return tobz.reply(from, `Mohon maaf nih sebelumnya, karena jalur traffic bot yang sangat padat. Fitur ini khusus premium untuk sampe hari kedepan.\n\nUntuk mendaftar premium silahkan chat ke owner\n\nwa.me/6289635687240`, id)
                         if (!isAdmin) return tobz.reply(from, 'Silahkan daftar menjadi premium untuk menggunakan fitur ini', id)
                         if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                         if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                         await limitAdd(serial)   
                         try {
                                        if (quotedMsg && quotedMsg.type == 'image') {
                                            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getmusik 2\n\nNb: Reply pesannya lalu masukan no urutannya.\n\nContoh:\n${prefix}getmusic2`, id)
                                            if (!Number(args[1])) return tobz.reply(from, `_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *${prefix}getmusik _1_*`, id)
                                            const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                                            const pilur = dataDownmp3.split('(#)')
                                            tobz.reply(from, mess.wait, id)
                                            
                                            yta(`https://youtube.com/watch?v=${pilur[args[1]]}`)
                                            .then((res) => {
                                                const { dl_link, thumb, title, filesizeF, filesize } = res
                                                axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                .then((a) => {
                                                if (Number(filesize) >= 3000000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                                                const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                                tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captions, id)
                                                tobz.sendFileFromUrl(from, dl_link, `${title}.mp3`, `Audio telah terkirim ${pushname}`, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                                            })
                                            }).catch((e) => {
                                                tobz.reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah benar.', id)
                                            })
                        
                                        } else if (quotedMsg && quotedMsg.type == 'chat') { 
                                            tobz.reply(from, `_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`, id)
                                        } else if (body.type == 'chat'){
                                            tobz.reply(from, `_Mohon tag pesan tentang penelusuran musik!_`, id)
                                        } else {
                                            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getmusik 2\n\nNb: Reply pesannya lalu masukan no urutannya.\n\nContoh:\n${prefix}getmusic2`, id)
                                            if (args[1] <= 25) return tobz.reply(from, `_Apabila ingin mengambil data musik dengan nomor urutan, mohon reply pesan bot tentang pencarian musik!_`, id)
                                            tobz.reply(from, mess.wait, id)
                                            yta(`https://youtu.be/${args[1]}`)
                                            .then((res) => {
                                                const { dl_link, thumb, title, filesizeF, filesize } = res
                                                axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                .then((a) => {
                                                if (Number(filesize) >= 30000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                                                const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                                tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captions, id)
                                                tobz.sendFileFromUrl(from, dl_link, `${title}.mp3`, ``, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                                            })
                                            })
                                        }
                                    } catch (err) {
                                        tobz.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                                        tobz.reply(from, `_Kesalahan! Pastikan id download sudah benar._`, id)
                                    }
                                    break
   
  /*           case prefix+'video': // SEARCH VIDEO FROM YOUTUBE
             case prefix+'vidio':
             if(isReg(obj)) return
             if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}video judul video*`)
            await limitAdd(serial)
            const querv = body.slice(7)
            tobz.reply(from, mess.wait, id)
            try {
                const resmusv = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv)}&apikey=${vhtearkey}`)
                if (!resmusv.ok) throw new Error(`unexpected response ${resmusv.statusText}`)
                const jsonsercmuv = await resmusv.json()
                let berhitung1 = 1
                const { result } = await jsonsercmuv
                let xixixai = `*Hasil pencarian dari ${querv}*\n\nKetik ${prefix}getvideo [angka] untuk mengambil ID\nContoh : ${prefix}getvideo 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download* : ${prefix}getvideo ${result[i].id}\n`
                }
                    xixixai += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixai += `(#)${result[ii].id}`
                }
                await tobz.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixai, id)
            } catch (err){
                console.log(err)
            }
            break
            
            case prefix+'music': // SEARCH MUSIC FROM YOUTUBE
            case prefix+'musik':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
           if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
           if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
           if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}music judul lagu*`)
           await limitAdd(serial)
           const querv2 = body.slice(7)
           tobz.reply(from, mess.wait, id)
           try {
               const resmusv2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=${vhtearkey}`)
               if (!resmusv2.ok) throw new Error(`unexpected response ${resmusv2.statusText}`)
               const jsonsercmuv2 = await resmusv2.json()
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `*Hasil pencarian dari ${querv2}*\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic [ urutan no ].\n\nContoh:\n1. ${prefix}getmusic 1GvW5WJVYLw\n2. ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await tobz.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixai, id)
           } catch (err){
               console.log(err)
           }
           break */
           case prefix+'yts':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
           if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
           if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
           if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}yts judul lagu*`) 
           await limitAdd(serial)
           argz = body.trim().split(' ')
           var slicedArgs = Array.prototype.slice.call(argz, 1);
           const yt3 = await slicedArgs.join(' ')
           tobz.reply(from, mess.wait, id)
           const yt = await yts(yt3)
           //「 *IG PROFILE* 」
           let ytcap = `*「 Youtube Search 」*\n\nHasil pencarian dari *${yt3}*\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic [ urutan no ].\n\nContoh:\n1. ketik ${prefix}getmusic 1GvW5WJVYLw\n2. reply pesan  lalu ketik ${prefix}getmusic 2\n`
           for (let i = 0; i < yt.all.length; i++) {
               ytcap += `\n══════════════════\n\n*Urutan* : ${i+1}\n*> Judul:* ${yt.all[i].title}\n*> Durasi Video:* ${yt.all[i].timestamp}\n*> Viewers:* ${yt.all[i].views}\n*> Id Video:* ${yt.all[i].videoId}\n`
            }
               ytcap += `\n\n`
             for (let ii = 0; ii < yt.all.length; ii++) {
            ytcap += `(#)${yt.all[ii].videoId}`      } ``
               await tobz.sendFileFromUrl(from, yt.all[0].thumbnail, ``, ytcap, id)
            break

           case prefix+'ytmusic': // SEARCH MUSIC FROM YOUTUBE
            case prefix+'ytmusic':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
           if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
           if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
           if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}music judul lagu*`)
           await limitAdd(serial)
           argz = body.trim().split(' ')
           var slicedArgs = Array.prototype.slice.call(argz, 1);
           const querv3 = await slicedArgs.join(' ')
           tobz.reply(from, mess.wait, id)
           try {
               const resmusv3 = await fetch(`https://naufalhoster.xyz/dl/yts?apikey=${naufalkey}&query=${encodeURIComponent(querv3)}`)
               if (!resmusv3.ok) throw new Error(`unexpected response ${resmusv3.statusText}`)
               const jsonsercmuv3 = await resmusv3.json()
               let berhitung1 = 1
               const { result } = await jsonsercmuv3
               let xixixai = `*Hasil pencarian dari ${querv3}*\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic [ urutan no ].\n\nContoh:\n1. ketik ${prefix}getmusic 1GvW5WJVYLw\n2. reply pesan  lalu ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await tobz.sendFileFromUrl(from, result[0].thumbnail, 'thumbserc.jpg', xixixai, id)
           } catch (err){
               console.log(err)
           }
           break 

            case prefix+'bass':
                            //if (!isAdmin) return tobz.reply(from, `Udah bang, nanti error :")`, id)
                            // if (isAdmin) return tobz.reply(from, `Udah bang, nanti error :")`, id)
                            //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                            if (isQuotedAudio) {
                                let dB = 58
                                let freq = 75
                            // if (this.args[1]) dB = clamp(parseInt(this.args[1]) || 20, 0, 50)
                            // if (this.args[2]) freq = clamp(parseInt(this.args[2]) || 20, 20, 500)
                                console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                                const mediaData = await decryptMedia(quotedMsg)
                                const bass = await stream2Buffer(write => {
                                    ffmpeg(buffer2Stream(mediaData))
                                    .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                                    .format('mp3')
                                    .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                                    .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                                    .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                                    .stream(write)
                                         })
                                tobz.sendPtt(from, baseURI(bass, 'audio/mp3'), id)
                                        } else {
                                    tobz.reply(from, `Hanya tag data audio!`, id)
                                        }
                                        break

                                        case prefix+'tomp3':
                            if (isMedia || isQuotedVideo){
                                if (mimetype === 'video/mp4') {
                                    var medata = await decryptMedia(message, uaOverride)
                                    tobz.reply(from, mess.wait, id)
                                    tobz.sendPtt(from, medata, id)
                                }
                            }
                            break
                            case prefix+'triggered':
                                case prefix+'triggred':
                                case prefix+'trigger':
                                case prefix+'triger':
                                        if(isReg(obj)) return
                                        if(cekumur(cekage)) return
                                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                                        tobz.reply(from, mess.wait2, id)
                                        try {  
                                        if (isMedia && type === 'image' || isQuotedImage) {     
                                                const encryptMedia = isQuotedImage ? quotedMsg : message
                                                console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                                                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                                const temp = './temp'
                                                const name = new Date() * 1
                                                const fileInputPath = path.join(temp, `${name}.gif`)
                                                const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                                                canvas.Canvas.trigger(mediaData)
                                                    .then((buffer) => {
                                                        canvas.write(buffer, fileInputPath)
                                                        ffmpeg(fileInputPath)
                                                            .outputOptions([
                                                                '-movflags faststart',
                                                                '-pix_fmt yuv420p',
                                                                '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                                            ])
                                                            .inputFormat('gif')
                                                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                                            .on('end', async () => {
                                                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                                                await tobz.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                                                                console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                                                setTimeout(() => {
                                                                    fs.unlinkSync(fileInputPath)
                                                                    fs.unlinkSync(fileOutputPath)
                                                                }, 30000)
                                                            })
                                                           .save(fileOutputPath)
                                                    })
                                            } else {
                                                const orgc = mentionedJidList[0] ? mentionedJidList[0] : sender.id
                                                const ppRaw = await tobz.getProfilePicFromServer(orgc)
                                                if (ppRaw === undefined) {
                                                    var pepe = errorImg
                                                } else {
                                                    pepe = ppRaw
                                                }
                                                console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                                                const temp = './temp'
                                                const name = new Date() * 1
                                                const fileInputPath = path.join(temp, `${name}.gif`)
                                                const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                                                canvas.Canvas.trigger(pepe)
                                                    .then((buffer) => {
                                                        canvas.write(buffer, fileInputPath)
                                                        ffmpeg(fileInputPath)
                                                            .outputOptions([
                                                                '-movflags faststart',
                                                                '-pix_fmt yuv420p',
                                                                '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                                            ])
                                                            .inputFormat('gif')
                                                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                                            .on('end', async () => {
                                                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                                                await tobz.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                                                                console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                                                setTimeout(() => {
                                                                    fs.unlinkSync(fileInputPath)
                                                                    fs.unlinkSync(fileOutputPath)
                                                                }, 30000)
                                                            })
                                                            .save(fileOutputPath)
                                                    })
                                            }
                                            limitAdd(serial)
                                        } catch(err) {
                                            console.log(err)
                                            tobz.reply(from, 'Ups, ada yang error!', id)
                                        }
                                        break        
                                    case prefix+'getvideo':
                                     case prefix+'getvidio':
                                        if(isReg(obj)) return
                                        if(cekumur(cekage)) return
                                        //if (!isPrem) return tobz.reply(from, `Mohon maaf nih sebelumnya, karena jalur traffic bot yang sangat padat. Fitur ini khusus premium untuk sampe hari kedepan.\n\nUntuk mendaftar premium silahkan chat ke owner\n\nwa.me/6289635687240`, id)
                                        if (!isAdmin) return tobz.reply(from, 'Silahkan daftar menjadi premium untuk menggunakan fitur ini', id)
                                        if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                                        //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getvideo* _IdDownload_`, id)
                                        //let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                                        //if (!isLinks2) return tobz.reply(from, mess.error.Iv, id)
                                        await limitAdd(serial)
                                        try {    
                                        if (quotedMsg && quotedMsg.type == 'image') {
                                            if (!Number(args[1])) return tobz.reply(from, `_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *${prefix}getvideo _1_*`, id)
                                            const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                                            const pilur = dataDownmp3.split('(#)')
                                            console.log(pilur[args[1]])
                                            tobz.reply(from, mess.wait, id)
                                            ytv(`https://youtu.be/${pilur[args[1]]}`)
                                                .then((res) => {
                                                    // console.log(res)
                                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                    .then((a) => {
                                                    if (Number(filesize) >= 40000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                                    tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captions, id)
                                                    tobz.sendFileFromUrl(from, dl_link, `${title}.mp4`, `Video berhasil terkirim`, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                                                })
                            
                                                })
                                             
                                        } else if (quotedMsg && quotedMsg.type == 'chat') { 
                                                tobz.reply(from, `_Salah reply! hanya reply pesan berisi data hasil from penelusuran video._`, id)
                                        } else {
                                            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *!getvideo _Id Video_*, untuk contoh silahkan kirim perintah *!readme*')
                                            if (args[1] <= 25) return tobz.reply(from, `_Apabila ingin mengambil data video dengan nomor urutan, mohon reply pesan bot tentang pencarian video!_`,)
                                            tobz.reply(from, mess.wait, id)
                                            ytv(`https://youtu.be/${args[1]}`)
                                                .then((res) => {
                                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                    .then((a) => {
                                                    if (Number(filesize) >= 30000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                                    tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captions, id)
                                                    tobz.sendFileFromUrl(from, dl_link, `${title}.mp4`, `Video berhasil terkirim`, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                                                    })
                                                })
                                            }
                                        } catch (err) {
                                            tobz.sendText(ownerNumber, 'Error getvid4 : '+ err)
                                            tobz.reply(from, mess.error.Yt4, id)
                                        }
                                        break
            
                                        case prefix+'triggerd':
                                            var imgbb = require('imgbb-uploader')
                                             if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                             ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                             tobz.reply(mess.wait)
                                             owgi = await tobz.downloadAndSaveMediaMessage(ger)
                                             anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                            teks = `${anu.display_url}`
                                            ranpll = getRandom('.gif')
                                            ranoll = getRandom('.webp')
                                            anu1ll = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                             exec(`wget ${anu1ll} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                    fs.unlinkSync(ranpll)
                                                    if (err) return reply(mess.error.stick)
                                                    nobgll = fs.readFileSync(ranoll)
                                                    tobz.sendMessage(from, nobgll, sticker, {quoted: mek})
                                                    fs.unlinkSync(ranoll)
                                            })
                                        
                                                 } else {
                                                    tobz.reply('Gunakan foto!')
                                              }
                                              break
                                        case prefix+'hug':
                const argggg = body.trim().split(' ')
                const janjing = (`@${sender.id.replace('@c.us','')}`)
               await tobz.sendGiphyAsSticker(from, 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
			   tobz.sendTextWithMentions(from,
				janjing + ' *peyuuuk* ' + argggg[1])
                break
            case prefix+'daftar':  // NAMBAHIN NOMOR DI DATABASE
         // if (isGroupMsg) return tobz.reply(from, `Maaf perintah ini hanya bisa dilakukan di personal chat bot.\nAtau kalian bisa klik dibawah ini\n\nwa.me/${botnumber}?text=${prefix}daftar+|NAMA+KAMU|17\n\nUmur bisa diganti dengan umur kalian`, id)
                argz = body.trim().split('|')
                if (argz.length >= 2) {
                const nonye = sender.id
                const namanye = argz[1]
                const umurnye = argz[2]
                    if(isNaN(umurnye)) return await tobz.reply(from, `Umur harus berupa angka!!\n\nContoh daftar:\n${prefix}daftar |${pushname}|17`, id)
                    if(umurnye >= 40) return await tobz.reply(from, 'Umur Maximal hanya sampai 40!', id)
                    const jenenge = namanye.replace(' ','')
                    var ceknya = nonye
                        var obj = pendaftar.some((val) => {
                            return val.id === ceknya
                        })
                        if (obj === true){
                            return tobz.reply(from, 'Kamu sudah terdaftar.', id) // BAKAL RESPON JIKA NO UDAH ADA
                        } else {
                            const mentah = await tobz.checkNumberStatus(nonye) // PENDAFTARAN
                            const msg = monospace(`Pendaftaran berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${jenenge} 
[User]: @${nonye.replace(/[@c.us]/g, '')}
[Nomor]: wa.me/${nonye.replace('@c.us', '')}
[Umur]: ${umurnye}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Untuk menggunakan bot silahkan kirim [ ${prefix}menu ]


Total Pengguna yang telah terdaftar ${pendaftar.length}



			ZXCBOT BY @JUWENAJAA			`)
                            const hasil = mentah.canReceiveMessage ? msg : false
                            if (!hasil) return tobz.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
                            {
                            const register = ({
                                id: mentah.id._serialized,
                                nama: jenenge,
                                umur: umurnye
                            })
                            pendaftar.push(register)
                            fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar)) // DATABASE
                                tobz.sendTextWithMentions(from, hasil)
                            }
                        }
                    } else {
                        await tobz.reply(from, `Format yang kamu masukkan salah, kirim\n${prefix}daftar |nama|umur\n\nContoh format:\n*${prefix}daftar |juwen|18*\n\nCukup gunakan nama depan/panggilan saja`, id) //if user is not registered
                    }
                break
            case prefix+'daftarulang':
                    if (!isAdmin) return tobz.reply(from, 'Command ini hanya dapat digunakan oleh admin ZXCBOT', id) 
                    if (mentionedJidList.length === 0) return tobz.reply(from, 'Silahkan tag member yang ingin di daftar ulang!', id)
                    if (args.length === 2) return tobz.reply(from, `Silahkan masukan umurnya!`, id) 
                    const nomernya = args[1]
                    let textnya = nomernya.replace(/[-\s+@c.us]/g,'')
                    const cusnya = textnya + '@c.us'
                    const umurnya = args[2]
                    if(umurnya >= 40) return await tobz.reply(from, 'Umur terlalu tua kak, max 40 yaa :D', id)
                        var found = false
                        Object.keys(pendaftar).forEach((i) => {
                            if(pendaftar[i].id == cusnya){
                                found = i
                            }
                        })
                        if (found !== false) {
                            pendaftar[found].umur = umurnya;
                            const updated = pendaftar[found]
                            const result = monospace(`Update data berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${updated.nama} 
[User]: @${updated.id.replace(/[@c.us]/g, '')}
[Nomor]: wa.me/${updated.id.replace('@c.us', '')}
[Umur]: ${updated.umur}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻`)
                            console.log(pendaftar[found])
                            fs.writeFileSync('./lib/database/user.json',JSON.stringify(pendaftar));
                            tobz.sendTextWithMentions(from, result, id)
                        } else {
                                tobz.reply(from, `${monospace(`Di database ngga ada nomer itu kak`)}`, id)
                        }
                break
				
				case prefix+'totaldaftar':
				tobz.reply(from, `Total Pengguna\nyang terdaftar:\n\n*[ ${pendaftar.length} USER ]*`, id)
                break
                /*case `${prefix}stat`:    
            const isCas = await tobz.getIsPlugged() ? "Charging ⚡" : "Not Charged ❌"
            const loadedMsg = await tobz.getAmountOfLoadedMessages()
            const chatIds = await tobz.getAllChatIds()
            const groups = await tobz.getAllGroups()
            const timestamp = speed();
            const latensi = speed() - timestamp
            const MyPhone = await tobz.getMe()
            const { battery, plugged, phone } = MyPhone
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, os_build_number } = phone
            // console.log(os.hostname())
            tobz.reply(self, `        〘 Server Info 〙
*HOST* : _${os.hostname()}_
*PLATFORM* : _${os.platform()}_
*CPU* : _${os.cpus()[0].model}_
*SPEED* : _${os.cpus()[0].speed} MHz_ 
*CORE* : _${os.cpus().length}_
*Penggunaan RAM* : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
*Pesan masuk* : _${loadedMsg}_ 
*Group* : _${groups.length}_ 
*Private Chat* : _${chatIds.length - groups.length}_ 
*Total* : _${chatIds.length}_ 
*Latensi* : _${latensi.toFixed(4)} detik/req_
         〘 Phone Info 〙
*Baterai* : _${battery} ${isCas}_
*Versi WhatsApp* : _${wa_version}_
*MCC* : _${mcc}_
*MNC* : _${mnc}_
*Versi OS* : _${os_version}_
*Tipe Perangkat* : _${device_manufacturer}_
*Model Perangkat* : _${device_model}_
*OS Build Number* : _${os_build_number}_`, id)
            break     */       
        /*case `${prefix}ping`:
        case `${prefix}speed`:
        case `${prefix}stat`:
            const isCas = await tobz.getIsPlugged() ? "Charging ⚡" : "Not Charged ❌"
            const loadedMsg = await tobz.getAmountOfLoadedMessages()
            const chatIds = await tobz.getAllChatIds()
            const groups = await tobz.getAllGroups()
            const timestamp = speed();
            const latensi = speed() - timestamp
            const MyPhone = await tobz.getMe()
            const { battery, plugged, phone } = MyPhone
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, os_build_number } = phone
            // console.log(os.hostname())
            tobz.reply(self, `        〘 Server Info 〙
*HOST* : _${os.hostname()}_
*PLATFORM* : _${os.platform()}_
*CPU* : _${os.cpus()[0].model}_
*SPEED* : _${os.cpus()[0].speed} MHz_ 
*CORE* : _${os.cpus().length}_
*Penggunaan RAM* : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
*Pesan masuk* : _${loadedMsg}_ 
*Group* : _${groups.length}_ 
*Private Chat* : _${chatIds.length - groups.length}_ 
*Total* : _${chatIds.length}_ 
*Latensi* : _${latensi.toFixed(4)} detik/req_
         〘 Phone Info 〙
*Baterai* : _${battery} ${isCas}_
*Versi WhatsApp* : _${wa_version}_
*MCC* : _${mcc}_
*MNC* : _${mnc}_
*Versi OS* : _${os_version}_
*Tipe Perangkat* : _${device_manufacturer}_
*Model Perangkat* : _${device_model}_
*OS Build Number* : _${os_build_number}_`, id)
            break     */     
/*    case prefix+'runtime':
                const tanda = '```'
                const titit1 = moment().millisecond()
                const timestamp = speed();
                const latensi = speed() - timestamp
                function format(seconds){
                function pad(s){
                return (s < 10 ? '0' : '') + s;
                }
                var hours = Math.floor(seconds / (60*60));
                var minutes = Math.floor(seconds % (60*60) / 60);
                var seconds = Math.floor(seconds % 60);
    
return pad(hours) + ' Jam, ' + pad(minutes) + ' Menit, ' + pad(seconds) + ' Detik';
                  }
    
                var uptime = process.uptime();  
                    tobz.reply(from, `${monospace(`
Speed :
${latensi.toFixed(4)} Detik   
    
Latency :
${titit1} Ms
    
Running : 
${format(uptime)}
    `)}`, id)
    
    break*/
            case prefix+'statswa':
            case prefix+'swa':
                const titit1 = moment().millisecond()
                const timestamp = speed();
                const latensi = speed() - timestamp
                function format(seconds){
                function pad(s){
                return (s < 10 ? '0' : '') + s;
                }
                var hours = Math.floor(seconds / (60*60));
                var minutes = Math.floor(seconds % (60*60) / 60);
                var seconds = Math.floor(seconds % 60);
    
return pad(hours) + ' Jam, ' + pad(minutes) + ' Menit, ' + pad(seconds) + ' Detik';
                  }
    
                var uptime = process.uptime();  
                const loadedMsg = await tobz.getAmountOfLoadedMessages()
                const chatIds = await tobz.getAllChatIds()
                const groups = await tobz.getAllGroups()
                const blok = await tobz.getBlockedIds()
                const me = await tobz.getMe()
                const used = process.memoryUsage()
                const titit = moment().millisecond() 
                const isCas = await tobz.getIsPlugged() ? "Charging ⚡" : "Not Charged"
                const MyPhone = await tobz.getMe()
                const { battery, plugged, phone } = MyPhone
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, os_build_number } = phone
tobz.reply(from, `${monospace(`
❏ 『 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐁𝐎𝐓 』 

${loadedMsg} : Pesan Masuk
${groups.length} : Pesan Grup
${chatIds.length - groups.length} : Chat Pribadi
${blok.length} : Kontak Diblokir
${chatIds.length} : Jumlah Chat
   
                
❏ 『 𝐒𝐘𝐒𝐓𝐄𝐌 𝐁𝐎𝐓 』

HOST : ${os.hostname()}
PLATFORM : ${os.platform()}
SPEED : ${os.cpus()[0].speed} MHz
CORE : ${os.cpus().length}
RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
N.Latency : ${titit} Ms


❏ 『 𝐒𝐓𝐀𝐓𝐈𝐒𝐓𝐈𝐊 𝐇𝐏 』

Baterai : ${battery}%
Charger : ${isCas}
V.WhatsApp : ${wa_version}
MCC : ${mcc}
MNC : ${mnc}
Versi OS : ${os_version}
Merk HP : ${device_manufacturer}
Versi HP : ${device_model}

---------------------
❏  『 𝐒𝐏𝐄𝐄𝐃 』 
${latensi.toFixed(4)} Detik   

❏  『 𝐋𝐀𝐓𝐄𝐍𝐂𝐘 』 
${titit1} Ms

❏  『 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 』 
${format(uptime)}
    `)}`
    , id)
                break
				
        case prefix+'groupinfo' :
            case prefix+'infogroup' :
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var antig = antiig.includes(chat.id)
            var simu = simi_.includes(chat.id)
            //var stprt = antisticker.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await tobz.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await tobz.sendFileFromUrl(from, pfp, 'group.png', 
`*「 GROUP INFO 」*

*• Name : ${groupname}* 
*• Members : ${totalMem}*
*• Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*• Left : ${leftgrp ? 'Aktif' : 'Tidak Aktif'}*
*• NSFW : ${ngrp ? 'Aktif' : 'Tidak Aktif'}*
*• Simsimi : ${simu ? 'Aktif' : 'Tidak Aktif'}*
*• Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
*• Anti Link : ${antig ? 'Aktif' : 'Tidak Aktif'}*
*• Anti Badword : ${antbad ? 'Aktif' : 'Tidak Aktif'}*

*• Group Description* 
${desc}`, id)
            break
            case prefix+'ytsearch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ytsearch [ Query ]*, Contoh : #ytsearch alan walker alone`)
            const ytsher2= body.slice(10)
            tobz.reply(from, mess.wait, id)
            try {
                const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(ytsher2)}&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Hasil Pencarian : ${ytsher2}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Judul* : ${result[i].title}\n• *Ditonton* : ${result[i].views}\n• *Durasi* : ${result[i].duration}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].urlyt}\n`
                }
                await tobz.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    tobz.sendText(ownerNumber, 'YT Search Error : ' + err)
            }
            break
            case prefix+'maluser':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const username = body.slice(18)
                tobz.reply(from, mess.wait, id)
                try {
                    const result = await axios.get(`https://api.jikan.moe/v3/user/${username}`)
                    const jikan =  result.data
                    const Data = `*「 USER - MYANIMELIST 」*
    • Username: ${jikan.username}
    • User ID: ${jikan.user_id}
    • Gender: ${jikan.gender}
    • Location: ${jikan.location}
    • Joined: ${jikan.joined}
    ⭐️ Anime Stats ⭐️
    • Days Watched: ${jikan.anime_stats.days_watched}
    • Mean Score: ${jikan.anime_stats.mean_score}
    • Currently Watching: ${jikan.anime_stats.watching}
    • Completed: ${jikan.anime_stats.completed}
    • On Hold: ${jikan.anime_stats.on_hold}
    • Dropped: ${jikan.anime_stats.dropped}
    • Plan to Watch: ${jikan.anime_stats.plan_to_watch}
    🎯️ Manga Stats 🎯️
    • Days Read: ${jikan.manga_stats.days_read}
    • Mean Score: ${jikan.manga_stats.mean_score}
    • Currently Reading: ${jikan.manga_stats.reading}
    • Completed: ${jikan.manga_stats.completed}
    • On Hold: ${jikan.manga_stats.on_hold}
    • Dropped: ${jikan.manga_stats.dropped}
    • Plan to Read: ${jikan.manga_stats.plan_to_read}`
    
                    await tobz.sendFileFromUrl(from, `${jikan.image_url}`,`user.png`, Data)
                    limitAdd(serial)
                } catch (err) {
                    console.log(err)
                    await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                }    
                break
        case prefix+'distance':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
               // if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                try {
                    const distance = body.slice(9)
                    if (!distance.includes('|')) return await tobz.reply(from, `Kirim perintah *${prefix}takestick nama|author*`, id)
                    //const namaPack = stikerwm2.split('|')[0]
                    //authorPack = stikerwm2.split('|')[1]
                    const dfdc1 = distance.split('|')[0]
                    const dfdc2 = distance.split('|')[1]
                    const dfdcres = await axios.get('https://api.vhtear.com/distance?from='+dfdc1+'&to='+dfdc2+'&apikey='+vhtearkey)
                    const { result } = dfdcres.data
                    await tobz.reply(from, result.data, id)
                    await limitAdd(serial)
                } catch (err) {
                    console.error(err.message)
                    await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Lokasi tidak ditemukan')
                    tobz.sendText(ownerNumber, 'Distance Error : ' + err)
                }
                break
        case prefix+'shopee':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}shopee [ Query ]*, Contoh : *${prefix}shopee HP Samsul a20*`, id)
            const shopek = body.slice(8)
            tobz.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/shopee?query=${shopek}&count=5&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${shopek}*\n`
                for (let i = 0; i < dataplay.items.length; i++) {
                    shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay.items[i].nama}\n• Harga* : ${dataplay.items[i].harga}\n• *Terjual* : ${dataplay.items[i].terjual}\n• *Lokasi Toko* : ${dataplay.items[i].shop_location}\n• *Deskripsi* : ${dataplay.items[i].description}\n• *Link Product : ${dataplay.items[i].link_product}*\n`
                }
                await tobz.sendFileFromUrl(from, dataplay.items[0].image_cover, `shopee.jpg`, shopeq, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
            }
            break
            case prefix+'darkjoke':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
			const dark = await axios.get('http://api.zeks.xyz/api/darkjokes?apikey=apivinz')
			tobz.sendFileFromUrl(from, dark.data.result, 'dark.jpg', '', id)


                case prefix+'igstory':
                    if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}igstory [ username ]*\nContoh : *${prefix}igstory spotify*`, id)
                argz = body.trim().split(' ')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const userignya = await slicedArgs.join(' ') 
                await tobz.reply(from, mess.wait, id);
                try {
                    const wanu = await axios.get(`https://api.vhtear.com/igstory?query=${userignya}&apikey=${vhtearkey}`)
                    const anjay = wanu.data.result.story
                    for (let i = 0; i < anjay.itemlist.length; i++){
                    tobz.sendFileFromUrl(from, anjay.itemlist[i].urlDownload, ``, `Berhasil mendapatkan story dari *${userignya}*`, id)
                    }
                        } catch (e){
                        console.log(e)
                        tobz.reply(from, 'Mungkin user tersebut belum membuat story atau mungkin storynya di privasi.', id)
                        }
            break 

            case prefix+'gimage':
                if(isReg(obj)) return
        if(cekumur(cekage)) return
        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}gimage [ username ]*, Contoh : *${prefix}gimage pisang*`)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const gimage = await slicedArgs.join(' ') 
            await tobz.reply(from, mess.wait, id);
            try {
                const wanu2 = await axios.get(`https://naufalhoster.xyz/dl/googleimages?apikey=${naufalkey}&query=${gimage}`)
                const anjay2 = wanu2.data
                for (let i = 0; i < anjay2.result.length; i++){
                tobz.sendFileFromUrl(from, anjay2.result[i].url, ``, `Berhasil mendapatkan gambar *${gimage}*`, id)
                }
                    } catch (e){
                    console.log(e)
                    tobz.reply(from, 'Mungkin user tersebut belum membuat story atau mungkin storynya di privasi.', id)
                    }
        break 
            case prefix+'lk21':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}lk21 [ Query ]*, Contoh : *${prefix}lk21 cars*`)
            const lk21111 = body.slice(5)
            tobz.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/downloadfilm?judul=${lk21111}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq2 = `*「 LK21 SEARCHING 」*\n\n*Hasil Pencarian : ${lk21111}*\n`
                for (let i = 0; i < dataplay.data.length; i++) {
                    shopeq2 += `\n─────────────────\n\n• *Resolusi* : ${dataplay.data[i].resolusi}\n• *Link* : ${dataplay.data[i].urlDownload}`
                }
                tobz.reply(from, shopeq2, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
            }
            break
            case prefix+'xxxsearch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}shopee [ Query ]*, Contoh : *${prefix}shopee HP Samsul a20*`)
            const xxx2s = body.slice(10)
            tobz.reply(from, mess.wait, id)
           /* let berhitung = 1
            let xixixi = `\n\n*Hasil Pencarian : ${querXXX}*\n\n─────────────────\n\nKetik #getxxx [angka] untuk mengambil ID, Contoh : #getxxx 2\n`
            for (let i = 0; i < data.length; i++) {
                xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${data[i].title}\n*Duration* : ${data[i].duration}\n*Perintah download* : *${prefix}getxxx ${data[i].url}*\n` */
            try { //${encodeURIComponent(querXXX)}
                const dataplai = await axios.get(`https://api.vhtear.com/xxxsearch?query=${encodeURIComponent(xxx2s)}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                let berhitung = 1
                 let xxx1s = `*「 XVIDEOS 」*\n\n*Hasil Pencarian : ${xxx2s}*\n`
                for (let i = 0; i < dataplay.data.length; i++) {
                    xxx1s += `\n══════════════════\n\n• *Urutan* : ${berhitung+i}\n• *Judul* : ${dataplay.data[i].title}\n• *Durasi* : ${dataplay.data[i].duration}\n• *Perintah download* : *${prefix}getxxx ${dataplay.data[i].url}*`
            }
            xxx1s += `\n\n`
        for (let ii = 0; ii < dataplay.data.length; ii++) {
            xxx1s += `(#)${dataplay.data[ii].url}`
        }
        await tobz.reply(from, xxx1s, id)
        //await tobz.sendFileFromUrl(from, dataplay.data[0].image, 'thumbxxx.jpg', xxx1s, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
            }
            break
            case prefix+'neonime':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}neonime [ Query ]*, Contoh : ${prefix}neonime danmachi`)
                const nenon = body.slice(9)
                tobz.reply(from, mess.wait, id)
                try {
                    const response2 = await fetch('https://tobz-api.herokuapp.com/api/neonime?q=' + nenon)
                    if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                    const jsonserc = await response2.json()
                    const { result } = await jsonserc
                    let xixixi = `*「 NEONIME 」*\n\n*Hasil Pencarian : ${nenon}*\n`
                    for (let i = 0; i < result.length; i++) {
                        xixixi += `\n─────────────────\n\n• *Title* : ${result[i].title}\n• *Deskripsi* : ${result[i].desc}\n• *Link* : ${result[i].link}`
                    }
                    await tobz.sendFileFromUrl(from, result[0].image, 'neon.jpg', xixixi, id)
                    await limitAdd(serial)
                } catch (err) {
                        console.log(err)
                        await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
                }
                break
        case prefix+'playstore':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}playstore [ Query ]*, Contoh : *${prefix}playstore Mobile Legends*`, id)
            const keywotp = body.slice(11)
            tobz.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/playstore?query=${keywotp}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data
                 let keluarplay = `*「 PLAYSTORE 」*\n\nHasil Pencarian : ${keywotp}*\n`
                for (let i = 0; i < dataplay.result.length; i++) {
                    keluarplay += `\n─────────────────\n\n• *Nama* : ${dataplay.result[i].title}\n• *Developer* : ${dataplay.result[i].developer}\n• *Deskripsi* : ${dataplay.result[i].description}\n• *Paket ID* : ${dataplay.result[i].app_id}\n• *Harga* : ${dataplay.result[i].price}\n• *Link App* : https://play.google.com${dataplay.result[i].url}\n`
                }
                await tobz.sendFileFromUrl(from, dataplay.result[0].icon, `iconapk.webp`, keluarplay, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
            }
            break
           /* case prefix+'lk21':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname},Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota LimitKamu`, id)
 if (args.length === 1) return tobz.reply(from, `Kirim perintah${prefix}lk21 [judul]. Contoh: *${prefix}lk21 joker*`, id)
        lk21(body.slice(6)).then(async(res) => {
        for (let i = 0; i < res.data.length; i++) {
            const { resolusi, urlDownload } = res.data[i]
        const lk21 = `*Judul DITEMUKAN*
        ➸ *Pencarian : ${body.slice(6)}*
        ➸ *Resolusi : ${resolusi}*
        ➸ *Link : ${urlDownload}*`
        tobz.sendText(from, lk21)
        }
        }).catch ((err) => {
        console.error(err.message)
        tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔 Maaf, film tidak ditemukan')
        tobz.sendText(ownerNumber, 'Error lk21 : '+ err)
        })

 limitAdd(serial)
 break */
            case prefix+'asupan':  
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)          
            fetch('http://sansekai.my.id/sansekai.txt')
                .then(res => res.text())
                .then(body => {
                    let asupan = body.split('\n')
                    let asupanx = asupan[Math.floor(Math.random() * asupan.length)]
                tobz.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, '', '*ASUPAN*', id)
                })
            break
           
        case prefix+'newstickerline':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, mess.wait, id)
            try {
                const stcline = await fetch(`https://api.vhtear.com/newsticker?apikey=${vhtearkey}`)
                if (!stcline.ok) throw new Error(`unexpected response ${stcline.statusText}`)
                const stcline2 = await stcline.json()
                const { hasil } = await stcline2.result
                let xixixi = `*「 NEW STICKER LINE 」*\n\n`
                for (let i = 0; i < hasil.length; i++) {
                    xixixi += `\n─────────────────\n\n*Title* : ${hasil[i].title}\n*Url* : ${hasil[i].uri}\n`
                }
                await tobz.sendFileFromUrl(from, 'https://play-lh.googleusercontent.com/BkvRJsjYiEjb0-XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs', 'newstc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    tobz.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case prefix+'news':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, mess.wait, id)
            try {
                const response2 = await fetch(`https://api.vhtear.com/beritaterbaru&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonber = await response2.json()
                const { data } = await jsonber.result
                let xixixi = `*「 BERITA TERKINI 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Source* : ${data[i].url}\n*Penulis* : ${data[i].author}\n*Judul* : ${data[i].title}\n*Deskripsi* : ${data[i].description}\n*Dipublikasi* : ${data[i].publishedAt}\n*Konten* : ${data[i].content}\n`
                }
                await tobz.sendFileFromUrl(from, data[0].urlToImage, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    tobz.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
			case prefix+'alkitab':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
			if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}alkitab* [ Ayat ]\n\n*Contoh :* ${prefix}alkitab matius`, id)
            const alkitabx = body.slice(9)
			tobz.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://docs-jojo.herokuapp.com/api/alkitabsearch?q=${alkitabx}`)
                const dataplay = dataplai.data
                 let alkitabb = `*「 ALKITAB SEARCH 」*\n\n*Hasil Pencarian:* ${alkitabx}\n`
                for (let i = 0; i < dataplay.result.length; i++) {
                    alkitabb += `\n─────────────────\n\n• *Ayat* : ${dataplay.result[i].ayat}\n• *Isi* : ${dataplay.result[i].isi}\n`
                }
                await tobz.reply(from, alkitabb, id)
            } catch (err){
                console.log(err)
            }
            break
        case prefix+'jadwalbola':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, mess.wait, id)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*「 JADWAL BOLA 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}`
                }
                await tobz.sendText(from, xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
                    tobz.sendText(ownerNumber, 'Jadwal Bola Error : ' + err)
            }
            break
            case prefix+'gdrive':
                if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const regex = new RegExp("\/d\/(.+)\/", 'gi')
                if (!args[1].match(regex)) { await tobz.reply(from, `Url Google Drive Yang Kamu Masukkan Salah!\nContoh : #gdrive https://drive.google.com/file/d/1Cd8KjB9-cUU_Jy8Q/view`, id) }
                    const urla = args[1]
                    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                    function niceBytes(x){
                        let l = 0, n = parseInt(x, 10) || 0;
                        while(n >= 1024 && ++l){
                            n = n/1024;
                        }
                        return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
                    }
                    const m = urla.match(regex)
                    const fileid = m.toString().trimStart('/', 'd').trim('/');
                    const linke = 'https://drive.google.com/file' + fileid + 'view?usp=sharing'
                    fetch('https://gdbypass.host/api/?link='+linke)
                        .then((res) => {
                            status = res.status
                            return res.json()
                        })
                        .then(async(body) => {
                            const fileName = body.data.Filename
                            const size = body.data.Filesize
                            const newLink = body.data.NewUnlimitedURL
                            const ling = await urlShortener(newLink)
                                tobz.reply(from, `*「 GOOGLE DRIVE 」*\n\n• *Nama File :* ${fileName}\n*• File Size :* ${niceBytes(size)}\n*• Short Link :* ${ling}`, id)
                                limitAdd(serial)
                        })
                        .catch((err) => {
                            tobz.reply(from, `Maaf, Sepertinya Link Tidak Berhasil Di Bypass\n` + err, id)
                        })
        case prefix+'tts':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}tts [ Bahasa ] [ Teks ]*, contoh *${prefix}tts id halo semua*`)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return tobz.reply(from, 'Masukkan teksnya', id)
                if (dataText.length > 500) return tobz.reply(from, 'Teks terlalu panjang!', id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                tobz.sendPtt(from, './media/tts.mp3', id)
                limitAdd(serial)
                })
            } catch (err){
                console.log(err)
                tobz.reply(from, `Silahkan pilih bahasa yang disediakan, ketik ${prefix}bahasa untuk melihat daftar bahasa`, id)
            }
            break

			 case prefix+'tagrandom':  
			  case prefix+'randomtag':  
		    if(isReg(obj)) return
            if(cekumur(cekage)) return		
                    if (!isGroupMsg) return tobz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup!', id)
                    if (args.length === 0) {	  
					{   const mem = groupMembers
                        const randMem = mem[Math.floor(Math.random() * mem.length)];
                        const sapaa = `*[ RANDOM TAG ]*\n\nDari    :  @${sender.id.replace('@c.us','')}\nUntuk :  @${randMem}\n\nHaii ~ 👋`
                        await tobz.sendTextWithMentions(from, sapaa)
                        await tobz.sendText(from, `Untuk memakai pesan silahkan gunakan ${prefix}randomtag pesan kalian`)
                    }
                        }else if (!quotedMsg) {   
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const pesan = await slicedArgs.join(' ')
                        const mem = groupMembers
                        const randMem = mem[Math.floor(Math.random() * mem.length)];
                        const sapaa = `*[ RANDOM TAG ]*\n\nDari    :  @${sender.id.replace('@c.us','')}\nUntuk :  @${randMem}\n\n\n*PESAN:*\n${pesan}  `
                        await tobz.sendTextWithMentions(from, sapaa)
                     
                    }
                    break 

			 case prefix+'randomkick':  
		    if(isReg(obj)) return
            if(cekumur(cekage)) return		
            //zif (!isOwner) return tobz.reply(from, 'perintah ini hanya dapat digunakan oleh owner bot!', id)  
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
                    if (!isGroupMsg) return tobz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup!', id)  
					   const memkick = groupMembers
                        const randMem = memkick[Math.floor(Math.random() * memkick.length)];
                        const sapaa = 
`*[ RANDOM KICK ]*

Oleh Admin   :  @${sender.id.replace('@c.us','')}
Yang terkick :  @${randMem}


YHAHAHA KENA KICK ~ 👋`
                        tobz.sendTextWithMentions(from, sapaa)
                        //await tobz.sendText(from, `Untuk memakai pesan silahkan gunakan ${prefix}randomtag pesan kalian`)
                        await sleep(1500)
                        await tobz.removeParticipant(groupId, randMem)
                        break

                        
			  case prefix+'tagrandom2':  
			  case prefix+'randomtag2':  		
			if(isReg(obj)) return
            if(cekumur(cekage)) return			  
                    if (!isGroupMsg) return tobz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                    if (!args.length >= 1) return await tobz.reply(from, 'pesan tidak boleh kosong', id) ;{
                        const texxt = body.slice(11)
                        const memm = groupMembers
                        const randMemm = memm[Math.floor(Math.random() * memm.length)];
                        const sapaaa =
`*┌	[ RANDOM TAG ]*
│						
│	Dari  :  @${sender.id.replace('@c.us','')}
│	Untuk :  @${randMemm}
│						  
│						  
└	*PESAN:* 

↬	${texxt}  `
                        await tobz.sendTextWithMentions(from, sapaaa)
                    }
                    break 					

		case prefix+'cocok':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
                    if (!isGroupMsg) return tobz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                    const mem = groupMembers
                    const aku = mem[Math.floor(Math.random() * mem.length)];
                    const kamu = mem[Math.floor(Math.random() * mem.length)];
				    const ajgbgt = rate2[Math.floor(Math.random() * (rate.length))];
                    const sapa = `@${aku.replace(/[@c.us]/g, '')} sama @${kamu.replace(/[@c.us]/g, '')}\n\nYa kecocokan kalian sekitar ${ajgbgt} lah`
                    await tobz.sendTextWithMentions(from, sapa)
                    break  
        case prefix+'koin':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              tobz.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
            } else {
              tobz.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
            }
            break
            case prefix+'flip':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const sidee = Math.floor(Math.random() * 2) + 1
            if (sidee == 1) {
              tobz.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png', { method: 'get' })
            } else {
              tobz.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png', { method: 'get' })
            }
            break
        case prefix+'dadu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const dice = Math.floor(Math.random() * 6) + 1
            await tobz.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            break
        case prefix+'kapankah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) tobz.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, id)
            await tobz.reply(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`, id)
            break
        case prefix+'nilai':
        case prefix+'rate':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const rating = args.join(' ')
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) tobz.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, id)
            await tobz.reply(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`, id)
            break
			case prefix+'berapapersen':
		case prefix+'brppersen':
            const ohhh = args.join(' ')
            const cuk = berapapersen[Math.floor(Math.random() * (rate.length))]
            if (!ohhh) tobz.reply(from, `⚠️ Format salah! Ketik *!menu* untuk penggunaan.`, id)
            await tobz.reply(from, `Pertanyaan: *${ohhh}* \n\nJawaban: ${cuk}`, id)
            break
        case prefix+'apakah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) tobz.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, id)
            await tobz.reply(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`, id)
            break
            case prefix+'bucin':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                const lubucin = teksbucin[Math.floor(Math.random() * (teksbucin.length))]
                await tobz.reply(from, lubucin, id)
                break
         case prefix+'bisakah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) tobz.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, id)
            await tobz.reply(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`, id)
            break
        case prefix+'owner':
            tobz.sendContact(from, '6289635687240@c.us')
            tobz.sendFileFromUrl(from, ownerqr, 'owner.jpg', 'Pengen tanya - tanya tentang botnya? Chat ownernya aja ya kak.', id)
            break
            case prefix+'getcont':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!args.length === 1) return tobz.reply(from, `*MASUKAN NOMORNYA*\n\nContoh:\n${prefix}getcont 6289635687240`, id) 
                try{
                argz = body.trim().split(' ')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const nomornyadia = await slicedArgs.join(' ')
                await tobz.sendContact(from, `${nomornyadia}@c.us`)
                await tobz.reply(from, 'Tuh dia kontaknya', id)
            } catch (err){
                console.log(err)
                tobz.reply(from, 'Ada yang error!, mungkin anda salah memasukan nomor.', id)
            }
                break
        case prefix+'resetsticker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isAdmin) return tobz.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh Admin ZXCBOT!`, id)
            if (!args.length === 1) return tobz.reply(from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: ${prefix}resetsticker 62852262236155 / ${prefix}resetsticker @member`, id) 
            const nomebr = args[1]
            let textz = nomebr.replace(/[-\s+@c.us]/g,'')
            const cuss = textz + '@c.us'
                var found = false
                Object.keys(stickerspam).forEach((i) => {
                    if(stickerspam[i].id == cuss){
                        found = i
                    }
                })
                if (found !== false) {
                    stickerspam[found].msg = 1;
                    const result = 'DB Sticker Spam has been reset'
                    console.log(stickerspam[found])
                    fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                    tobz.reply(from, result, from)
                    limitAdd(serial)
                } else {
                        tobz.reply(from, `Maaf, Nomor itu tidak terdaftar di database!`, id)
                }
            break
        case prefix+'resetbadword':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
                    if(isLimit(serial)) return
                    if (!isGroupAdmins) return tobz.reply(from, 'Command ini hanya dapat digunakan oleh admin grup')  
                    if (!args.length === 1) return tobz.reply(from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: ${prefix}resetbadword 6285112554122 / ${prefix}resetbadword @member`, id) 
                    const nomer = args[1]
                    let text = nomer.replace(/[-\s+@c.us]/g,'')
                    const cus = text + '@c.us'
                        var found = false
                        Object.keys(msgBadword).forEach((i) => {
                            if(msgBadword[i].id == cus){
                                found = i
                            }
                        })
                        if (found !== false) {
                            msgBadword[found].msg = 1;
                            const result = 'DB Badword Spam has been reset'
                            console.log(msgBadword[found])
                            fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                            tobz.reply(from, result, from)
                            limitAdd(serial)
                        } else {
                                tobz.reply(from, `${monospace(`Di database ngga ada nomer itu dik`)}`, id)
                        }
                break
        // ON OFF
        case prefix+'antilink':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return tobz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Sudah Aktif`, id) //if number already exists on database
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    tobz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Aktif`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return tobz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Sudah DiNonaktif`, id) //if number already exists on database
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    tobz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Nonaktif`, id)
                }
            } else {
                tobz.reply(from, `Pilih enable atau disable!`, id)
            }
            break    
            case prefix+'antiig':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'on') {
                var cek = antiig.includes(chatId);
                if(cek){
                    return tobz.reply(from, `「 ANTI LINK INSTAGRAM 」\n[ Status : Sudah Aktif ]`, id) //if number already exists on database
                } else {
                    antiig.push(chatId)
                    fs.writeFileSync('./lib/database/antiig.json', JSON.stringify(antiig))
                    tobz.reply(from, `「  ANTI LINK INSTAGRAM   」\n[ Status : Aktif ]`, id)
                }
            } else if (args[1] == 'off') {
                var cek = antiig.includes(chatId);
                if(!cek){
                    return tobz.reply(from, `*「  ANTI LINK INSTAGRAM  」*\n[ Status : Sudah DiNonaktif ]`, id) //if number already exists on database
                } else {
                    let nixx = antiig.indexOf(chatId)
                    antiig.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antiig.json', JSON.stringify(antiig))
                    tobz.reply(from, `*「  ANTI LINK INSTAGRAM  」*\n[ Status : Nonaktif ]`, id)
                }
            } else {
                tobz.reply(from, `Pilih on atau off!`, id)
            }
            break    
     /*   case prefix+'antisticker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return tobz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudah Aktif`, id)
                 } else {
                    antisticker.push(chatId)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    tobz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Aktif`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return tobz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudak DiNonaktif`, id) //if number already exists on database
                } else {
                    let nixx = antisticker.indexOf(chatId)
                    antisticker.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    tobz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Nonaktif`, id)
                    limitAdd(serial)
                }
            } else {
                tobz.reply(from, `Pilih enable atau disable!`, id)
            }
            break   */
        case prefix+'antibadword':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return tobz.reply(from, `*「 ANTI BADWORD 」*\nSudah diaktifkan di grup ini`, id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    tobz.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau ZXCBOT Akan Kick!`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return tobz.reply(from, `*「 ANTI BADWORD 」*\nSudah dinonaktifkan di grup ini`, id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    tobz.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\n\nHarap Jangan Toxic Di Sini Atau ZXCBOT Akan Kick!`, id)
                }
            } else {
                tobz.reply(from, `Pilih enable atau disable!`, id)
            } 
            break   
        case prefix+'nsfw':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins && !isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                var cek = nsfw_.includes(chatId);
                if(cek){
                    return tobz.reply(from, `NSFW Sudah diaktifkan di grup ini`, id)
                } else {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                tobz.reply(from, `NSFW berhasil di aktifkan di group ini! kirim perintah *${prefix}nsfwMenu* untuk mengetahui menu`, id)
                }
            } else if (args[1].toLowerCase() === 'disable') {
                var cek = nsfw_.includes(chatId);
                if(cek){
                    return tobz.reply(from, `NSFW Sudah dinonaktifkan di grup ini`, id)
                } else {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                tobz.reply(from, 'NSFW berhasil di nonaktifkan di group ini!', id)
                }
            } else {
                tobz.reply(from, 'Pilih enable atau disable!', id)
            }
            break //
            
                break
            case prefix+'simi':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                
                if (!isAdmin) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin ZXCBOT!', id) // Hanya Admin yang bisa mengaktifkan
                if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id)
                if (args[1].toLowerCase() === 'enable') {
                    var cek = simi_.includes(chatId);
                    if(cek){
                        return tobz.reply(from, `Simsimi Sudah diaktifkan di grup ini`, id)
                    } else {
                    simi_.push(chat.id)
                    fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                    tobz.reply(from, `Simsimi berhasil di aktifkan di group ini! Kirim perintah *${prefix}$ [teks]*\nContoh : *${prefix}$ halo*`, id)
                    }
                } else if (args[1].toLowerCase() === 'disable') {
                    var cek = simi_.includes(chatId);
                    if(cek){
                        return tobz.reply(from, `Simsimi Sudah diaktifkan di grup ini`, id)
                    } else {
                    simi_.splice(chat.id, 1)
                    fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                    tobz.reply(from, 'Simsimi berhasil di nonaktifkan di group ini!', id)
                    }
                } else {
                    tobz.reply(from, 'Pilih enable atau disable!', id)
                }
                break
                case prefix+'autovn':
                if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di dalam group!', id)
                if (!isGroupAdmins) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan oleh admin group!', id)
                if (args[1] === 'enable') {
                    if (isAutoVn) return await tobz.reply(from, 'Auto VN sudah dinyalakan di grup ini!', id)
                    _autovn.push(groupId)
                    fs.writeFileSync('./lib/database/autovn.json', JSON.stringify(_autovn))
                    await tobz.reply(from, 'Auto VN diaktifkan', id)
                } else if (args[1] === 'disable') {
                    var grup = _autovn.indexOf(groupId)
                    _autovn.splice(grup, 1)
                    fs.writeFileSync('./lib/database/autovn.json', JSON.stringify(_autovn))
                    await tobz.reply(from, 'Auto VN dinonaktifkan', id)
                } else {
                    await tobz.reply(from, 'Pilih enable atau disable!', id)
                }
            break
        case prefix+'group':
		case prefix+'gc':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (args.length === 1) return tobz.reply(from, 'Pilih open atau close!', id)
            if (args[1].toLowerCase() === 'open') {
                tobz.setGroupToAdminsOnly(groupId, false)
                tobz.sendTextWithMentions(from, `Group telah dibuka oleh admin @${sender.id.replace('@c.us','')}\nSekarang *semua member* dapat mengirim pesan`)
            } else if (args[1].toLowerCase() === 'close') {
                tobz.setGroupToAdminsOnly(groupId, true)
                tobz.sendTextWithMentions(from, `Group telah ditutup oleh admin @${sender.id.replace('@c.us','')}\nSekarang *hanya admin* yang dapat mengirim pesan`)
            } else {
                tobz.reply(from, 'Pilih open atau disable close!', id)
            }
            break

           
            case prefix+'left':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id)
                if (args[1].toLowerCase() === 'enable') {
                    if (lefton) return await tobz.reply(from, 'Pesan left sudah diaktifkan sebelumnya!', id)
                    left.push(chat.id)
                    fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                    tobz.reply(from, 'Fitur left berhasil di aktifkan di group ini!', id)
                } else if (args[1].toLowerCase() === 'disable') {
                    var grup = left.indexOf(groupId)
                    left.splice(grup, 1)
                    fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                    tobz.reply(from, 'Fitur left berhasil di nonaktifkan di group ini!', id)
                } else {
                    tobz.reply(from, 'Pilih enable atau disable!', id)
                }
                break
            case prefix+'welcome':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id)
                if (args[1].toLowerCase() === 'enable') {
                    if (welkomon) return await tobz.reply(from, 'Pesan welcome sudah diaktifkan sebelumnya!', id)
                    welkom.push(chat.id)
                    fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                    tobz.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
                } else if (args[1].toLowerCase() === 'disable') {
                    var grup = welkom.indexOf(groupId)
                    welkom.splice(grup, 1)
                    fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                    tobz.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
                } else {
                    tobz.reply(from, 'Pilih enable atau disable!', id)
                }
                break
            case prefix+'setwelcome':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                if (args.length === 1) return tobz.reply(from, `Untuk mengcostum kalimat welcome\n\n${prefix}setwelcome haii @nama selamat datang di @grup\n\n@nama - user mention\n@grup - nama grup`, id)
                if(isSetWelkom) {
                    welkomlef.cengwelkom(chatId, body.slice(12), setwelkom)
                    tobz.reply(from, 'Welcome berhasil di set!', id)
                } else {
                    welkomlef.setwelcome(chatId, body.slice(12), setwelkom)
                    tobz.reply(from, 'Welcome berhasil di set!', id)
                }
                break
            case prefix+'delwelcome':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                setwelkom.splice(welkomlef.welkomposition(chatId, setwelkom), 1)
                fs.writeFileSync('./lib/database/setwelkom.json', JSON.stringify(setwelkom))
                tobz.reply(from, 'Berhasil menghapus welcome!', id)
                break
            case prefix+'setleft':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                if (args.length === 1) return tobz.reply(from, `Untuk mengcostum kalimat left\n${prefix}setleft _pesan_\n@nama = nama\n@grup = grup`, id)
                if(isSetLeft) {
                    welkomlef.cengleft(chatId, body.slice(9), setleft)
                    tobz.reply(from, 'Left berhasil di set!', id)
                } else {
                    welkomlef.setleft(chatId, body.slice(9), setleft)
                    tobz.reply(from, 'Left berhasil di set!', id)
                }
                break
            case prefix+'delleft':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
                setleft.splice(welkomlef.leftposition(chatId, setleft), 1)
                fs.writeFileSync('./lib/database/setleft.json', JSON.stringify(setleft)) 
                tobz.reply(from, 'Berhasil menghapus left!', id)
                break

        // ANIME //
        case prefix+'otakudesu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#otakudesu [query]*\nContoh : *#otakudesu darling in the franxx*', id)
            const animes = await axios.get('https://mhankbarbars.herokuapp.com/api/otakudesu?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animes.data.error) return tobz.reply(from, animes.data.error, id)
            const res_animes = `${animes.data.title}\n\n${animes.data.info}\n\n${animes.data.sinopsis}`
            tobz.sendFileFromUrl(from, animes.data.thumb, 'otakudesu.jpg', res_animes, id)
            await limitAdd(serial)
            break
        case prefix+'kusonime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#kusonime [query]*\nContoh : *#kusonime darling in the franxx*', id)
            const kusonim = body.slice(9)
            const animeq = await axios.get(`https://tobz-api.herokuapp.com/api/kuso?q=${kusonim}&apikey=${tobzkey}`)
            if (animeq.data.error) return tobz.reply(from, animeq.data.error, id)
            const res_animeq = `${animeq.data.title}\n\n${animeq.data.info}\n\n${animeq.data.sinopsis}\n\n${animeq.data.link_dl}`
            tobz.sendFileFromUrl(from, animeq.data.thumb, 'kusonime.jpg', res_animeq, id)
            await limitAdd(serial)
            break
        case prefix+'dewabatch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}dewabatch [query]*\nContoh : *${prefix}dewabatch darling in the franxx*`, id)
            const dewabatcht = body.slice(7)
            const animek = await axios.get(`https://tobz-api.herokuapp.com/api/dewabatch?q=${dewabatcht}&apikey=${tobzkey}`)
            if (animek.data.error) return tobz.reply(from, animek.data.error, id)
            const res_animek = `${animek.data.result}\n\n${animek.data.sinopsis}`
            tobz.sendFileFromUrl(from, animek.data.thumb, 'dewabatch.jpg', res_animek, id)
            await limitAdd(serial)
            break
        case prefix+'komiku':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}komiku [query]*\nContoh : *${prefix}komiku darling in the franxx*`, id)
            const animep = await axios.get('https://mhankbarbars.herokuapp.com/api/komiku?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animep.data.error) return tobz.reply(from, animep.data.error, id)
            const res_animep = `${animep.data.info}\n\n${animep.data.sinopsis}\n\n${animep.data.link_dl}`
            tobz.sendFileFromUrl(from, animep.data.thumb, 'komiku.jpg', res_animep, id)
            await limitAdd(serial)
            break
        case prefix+'pinterest':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah **${prefix}pinterest [query]*\nContoh : *${prefix}pinterest ZXCBOT*`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const ptrsq = await slicedArgs.join(' ')
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await tobz.sendImage(from, base64, 'ptrs.jpg', `*Pinterest*\n\n*Hasil Pencarian : ${ptrsq}*`, id)
            await limitAdd(serial)
            break
            case prefix+'nhentai':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#nhentai* [ Query ]')
            const quernh = body.slice(9)
            tobz.reply(from, mess.wait, id)
            try {
                const resnh = await fetch(`https://api.vhtear.com/nhentaisearch?query=${encodeURIComponent(quernh)}&apikey=${vhtearkey}`)
                if (!resnh.ok) throw new Error(`unexpected response ${resnh.statusText}`)
                const jsonnh = await resnh.json()
                const { doujins } = await jsonnh.result
                let berhitung = 1
                let xixixi = `*「 NHENTAI 」*\n\n*Hasil Pencarian* : ${quernh}\n*Sort* : ${jsonnh.result.sort}\n*Total Pencarian* : ${jsonnh.result.totalResults}\n\n─────────────────\n\nKetik #getnhentai [ Angka ] untuk mengambil ID, Contoh : #getnhentai 2\n`
                for (let i = 0; i < doujins.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${doujins[i].title}\n*Bahasa* : ${doujins[i].lang}\n*Perintah download* : *#getnhentai ${doujins[i].id}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < doujins.length; ii++) {
                    xixixi += `(#)${doujins[ii].id}`
                }
                await tobz.sendFileFromUrl(from, doujins[0].cover, 'thumbnh.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
                tobz.sendFileFromUrl(from, errorurl, 'error.png', '💔️ Maaf, Nhentai tidak ditemukan')
                tobz.sendText(ownerNumber, 'Nhentai Error : ' + err)
            }
            break
        case prefix+'getnhentai':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *#getnhentai [ Id Download ]*, untuk contoh silahkan kirim perintah *#readme*`, id)
                    if (!Number(args[1])) return tobz.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *#getnhentai 1*`, id)
                    const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = dataDownmp3.split('(#)')
                    console.log(pilur[args[1]])
                    tobz.reply(from, mess.wait, id)
                    const vezasukadoujin = await fetch(`https://api.vhtear.com/nhentaidoujin?query=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!vezasukadoujin.ok) throw new Error(`Error barbaryt3 ${vezasukadoujin.statusText}`)
                    const doujinveza = await vezasukadoujin.json()
                    const nhppdf = await fetch(`https://api.vhtear.com/nhentaipdfdownload?query=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!nhppdf.ok) throw new Error(`Error barbaryt3 ${nhppdf.statusText}`)
                    const nhppdf2 = await nhppdf.json()
                    if (doujinveza.error) {
                        tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { title, artists, categories, secondary_title, languages, images, tags, pages } = await doujinveza.result
                        console.log(`CHANGE API BARBAR : ${artists}\n${categories}\n${title}`)
                        const captions = `*「 NHENTAI DOWNLOADER 」*\n\n*Title* : ${title}\n*Secondary Title* : ${secondary_title}\n*Artist* : ${artists}\n*Categories* : ${categories}\n*Pages* : ${pages}\n*Languages* : ${languages}\n*Tags* : ${tags}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        tobz.sendText(from, captions, id)
                        tobz.sendFileFromUrl(from, nhppdf2.result.pdf_file, `${secondary_title}.pdf`,id)
                        limitAdd(serial)
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    tobz.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran nhentai.*`, id)
                } else {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *#getnhentai [ Id Download ]*, untuk contoh silahkan kirim perintah *#readme*`)
                    if (args[1] <= 25) return tobz.reply(from, `*Apabila ingin mengambil data nhentai dengan nomor urutan, mohon tag pesan bot tentang pencarian nhentai!*`,)
                    tobz.reply(from, mess.wait, id)
                    const vezasukadoujin = await fetch(`https://api.vhtear.com/nhentaidoujin?query=${args[1]}&apikey=${vhtearkey}`)
                    if (!vezasukadoujin.ok) throw new Error(`Error barbaryt3 ${vezasukadoujin.statusText}`)
                    const doujinveza = await vezasukadoujin.json()
                    const nhppdf = await fetch(`https://api.vhtear.com/nhentaipdfdownload?query=${args[1]}&apikey=${vhtearkey}`)
                    if (!nhppdf.ok) throw new Error(`Error barbaryt3 ${nhppdf.statusText}`)
                    const nhppdf2 = await nhppdf.json()
                    if (doujinveza.error) {
                        tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        const { title, artists, categories, secondary_title, languages, images, tags, pages } = await doujinveza.result
                        console.log(`CHANGE API BARBAR : ${artists}\n${categories}\n${title}`)
                        const captions = `*「 NHENTAI DOWNLOADER 」*\n\n*Title* : ${title}\n*Secondary Title* : ${secondary_title}\n*Artist* : ${artists}\n*Categories* : ${categories}\n*Pages* : ${pages}\n*Languages* : ${languages}\n*Tags* : ${tags}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        tobz.sendText(from, captions, id)
                        tobz.sendFileFromUrl(from, nhppdf2.result.pdf_file, `${secondary_title}.pdf`,id)
                        limitAdd(serial)
                   }
                }
            } catch (err) {
                tobz.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break
            case prefix+'xvideos':
                if (!isNsfw) return tobz.reply(from, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
	    if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}xvideos* [ Judul ]`)
            const querVID = body.slice(9)
            tobz.reply(from, mess.wait, id)
            try {
                const resvid = await fetch(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(querVID)}`)
                if (!resvid.ok) throw new Error(`unexpected response ${resvid.statusText}`)
                const jsonserxvid = await resvid.json()
                const { result } = await jsonserxvid
                let berhitung = 1
                let xixixi = `*「 XVIDEOS 」*\n\n*Hasil Pencarian : ${querVID}*\n\n─────────────────\n\nKetik #getxvideos [angka] untuk mengambil ID, Contoh : #getxvideos 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Actors* : ${result[i].actors}\n*Durasi* : ${result[i].duration}\n*Perintah download* : *${prefix}getxvideos ${result[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixi += `(#)${result[ii].url}`
                }
                await tobz.sendFileFromUrl(from, result[0].image, 'thumbxvid.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
                tobz.sendFileFromUrl(from, errorurl, 'error.png', '💔️ Maaf, Xvideos tidak ditemukan')
                tobz.sendText(ownerNumber, 'Xvideos Error : ' + err)
            }
            break
            case prefix+'getxvideos':
                if (!isNsfw) return tobz.reply(from, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
	    if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getxvideos [ Id Download ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`)
                    if (!Number(args[1])) return tobz.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}getxvideos 1*`, id)
                    const datavideo = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = datavideo.split('(#)')
                    console.log(pilur[args[1]])
                    tobz.reply(from, mess.wait, id)
                    const vidxvid = await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`)
                    if (!vidxvid.ok) throw new Error(`Error Get Video : ${vidxvid.statusText}`)
                    const vidxvideo = await vidxvid.json()
                     if (vidxvideo.status == false) {
                        tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { mp4 } = await vidxvideo
                        const shortvidxv = await urlShortener(mp4)
                        const captions = `*「 XVIDEOS DOWNLOADER 」*\n\n*Website* : XVideos\n*Ext* : MP3\n\n*Silahkan download file media sedang melalui link yang tersedia.*\n${shortvidxv}`
                        tobz.sendFileFromUrl(from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, id)
                        // await tobz.sendFileFromUrl(from, result, `${title}.mp3`, `XVIDEOS BY TOBZ`, id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    tobz.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran videp.*`, id)
                } else {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getxvideos [ Id Download ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`)
                    if (args[1] <= 25) return tobz.reply(from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian videp!*`,)
                    tobz.reply(from, mess.wait, id)
                    const getvide = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`).json
                    if (getvide.error) {
                        tobz.reply(from, getvide.error, id)
                    } else {
                        const { mp4 } = await mhankyt35
                        const shortvidxv2 = await urlShortener(mp4)
                        console.log(`CHANGE API BARBAR : ${ext}\n${filesize}\n${status}`)
                        const captions = `*「 XVIDEOS DOWNLOADER 」*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        tobz.sendFileFromUrl(from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, id)
                        // await tobz.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                   }
                }
            } catch (err) {
                tobz.sendText(ownerNumber, 'Error XVideos : '+ err)
                tobz.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break
            case prefix+'xxx':
                if (!isNsfw) return tobz.reply(from, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
	    if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}xxx* [ Judul ]`)
            const querXXX = body.slice(9)
            tobz.reply(from, mess.wait, id)
            try {
                const resxxx = await fetch(`https://api.vhtear.com/xxxsearch?query=${encodeURIComponent(querXXX)}&apikey=${vhtearkey}`)
                if (!resxxx.ok) throw new Error(`unexpected response ${resxxx.statusText}`)
                const resxxx2 = await resxxx.json()
                const { data } = await resxxx2.result
                let berhitung = 1
                let xixixi = `*「 XVIDEOS 」*\n\n*Hasil Pencarian : ${querXXX}*\n\n─────────────────\n\nKetik #getxxx [angka] untuk mengambil ID, Contoh : #getxxx 2\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${data[i].title}\n*Duration* : ${data[i].duration}\n*Perintah download* : *${prefix}getxxx ${data[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < data.length; ii++) {
                    xixixi += `(#)${data[ii].url}`
                }
                await tobz.sendFileFromUrl(from, data[0].image, 'thumbxxx.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
                tobz.sendFileFromUrl(from, errorurl, 'error.png', '💔️ Maaf, XXX tidak ditemukan')
                tobz.sendText(ownerNumber, 'XXX Error : ' + err)
            }
            break
            case prefix+'getxxx':
                if (!isNsfw) return tobz.reply(from, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
	    if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getxxx [ Id Download ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`)
                    if (!Number(args[1])) return tobz.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}getxxx 1*`, id)
                    const dataplay = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = dataplay.split('(#)')
                    //console.log(pilur[args[1]])
                    tobz.reply(from, mess.wait, id)
                    const getxxx = await fetch(`https://api.vhtear.com/xxxdownload?link=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!getxxx.ok) throw new Error(`Error XXX : ${getxxx.statusText}`)
                    const getxxx2 = await getxxx.json()
                     if (getxxx2.status == false) {
                        tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { title, urlVideo, response } = await getxxx2.result
                        //console.log(`STATUS API : ${response}`)
                        let xixixi = `*「 XXX DOWNLOADER 」*\n\n${title}`
                        for (let i = 0; i < urlVideo.length; i++) {
                            xixixi += `\n─────────────────\n\n*Title* : ${urlVideo[i].title}\n*Default Quality* : ${urlVideo[i].defaultQuality}\n*Format* : ${urlVideo[i].format}\n*Quality* : ${urlVideo[i].quality}\n*Url Video* : ${urlVideo[i].videoUrl}\n\n`
                        }
                        const captions = `*「 XXX DOWNLOADER 」*\n\n*Title* : ${title}\n\n*Ext* : MP4\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        tobz.sendFileFromUrl(from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, id)
                        // await tobz.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    tobz.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran video.*`, id)
                } else {
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}getxxx [ Id Download ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`)
                    if (args[1] <= 25) return tobz.reply(from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!*`,)
                    tobz.reply(from, mess.wait, id)
                    const getxxx = await fetch(`https://api.vhtear.com/xxxsearch?link=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!getxxx.ok) throw new Error(`Error XXX : ${getxxx.statusText}`)
                    const getxxx2 = await getxxx.json()
                     if (getxxx2.status == false) {
                        tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        //if (Number(getxxx2.result.data.duration.split(':')[0]) > 5) return tobz.sendFileFromUrl(from, imgUrl, `thumb.jpg`, `*「 XXX DOWNLOADER 」*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`, id)
                        const { title, urlVideo, response } = await getxxx2.result
                        //console.log(`STATUS API : ${response}`)
                        let xixixi = `*「 XXX DOWNLOADER 」*\n\n*Title* : ${title}`
                        for (let i = 0; i < urlVideo.length; i++) {
                            xixixi += `\n─────────────────\n\n*Default Quality* : ${urlVideo[i].defaultQuality}\n*Format* : ${urlVideo[i].format}\n*Quality* : ${urlVideo[i].quality}\n*Url Video* : ${urlVideo[i].videoUrl}\n\n`
                        }
                        const captions = `*「 XXX DOWNLOADER 」*\n\n*Title* : ${title}\n\n*Ext* : MP4\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        tobz.sendFileFromUrl(from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, id)
                        // await tobz.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                   }
                }
            } catch (err) {
                tobz.sendText(ownerNumber, 'Error XVideos : '+ err)
                tobz.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break

        case prefix+'nhview':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#nhview [212121]*\nContoh : *#nhview 321421*', id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await tobz.sendImage(from, nhsh2[i].data, 'thumbserc.jpg', '', id)
                }
            limitAdd(serial)
            break
            case prefix+'loli':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
                const loly = loli.data.result
                tobz.sendFileFromUrl(from, loly.result, 'loli.jpeg', '*LOLI*', id)
                await limitAdd(serial)
                break
            case prefix+'shota':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const imageToBase64 = require('image-to-base64')
                var shouta = ['shota anime','anime shota'];
                var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
                var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
                axios.get(urlshot)
                .then((result) => {
                var sht = JSON.parse(JSON.stringify(result.data));
                var shotaak =  sht[Math.floor(Math.random() * sht.length)];
                imageToBase64(shotaak)
                .then(
                    (response) => {
                let img = 'data:image/jpeg;base64,'+response
                tobz.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
                limitAdd(serial)
                        }) 
                    .catch(
                        (error) => {
                            console.log(error);
                        })
                })
                break
            case prefix+'waifu':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const waifu = await axios.get(`https://tobz-api.herokuapp.com/api/waifu?apikey=${tobzkey}`)
                tobz.sendFileFromUrl(from, waifu.data.image, 'Waifu.jpg', `*Name:* ${waifu.data.name}\n*Description:* ${waifu.data.desc}\n\nSource : ${waifu.data.source}`, id)
                await limitAdd(serial)
                break
            case prefix+'husbu':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const diti = fs.readFileSync('./lib/database/husbu.json')
                const ditiJsin = JSON.parse(diti)
                const rindIndix = Math.floor(Math.random() * ditiJsin.length)
                const rindKiy = ditiJsin[rindIndix]
                tobz.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
                await limitAdd(serial)
                break
            case prefix+'randomnekonime':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const nekonime = await axios.get(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${tobzkey}`)
                const nekon = nekonime.data
                if (nekon.result.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                tobz.sendFileFromUrl(from, nekon.result, `Nekonime${ext}`, 'Nekonime!', id)
                await limitAdd(serial)
                break
        // MFARELS
        case prefix+'indohot':
            const bokep = async () => new Promise((resolve, reject) => {
                axios.get(`https://test.mumetndase.my.id/indohot`)
                .then((res) => {
                    const textv = `Negara: ${res.data.result.terakhir}\nDurasi: ${res.data.result.durasi}\nGenre: ${res.data.result.genre}\nJudul: ${res.data.result.judul}\nLink: ${res.data.result.url}`
                    resolve(textv)
                })
                .catch((err) => {
                    reject(err)
                })
            })
			.then(async (res) => {
				await tobz.reply(from, `${res}`, id)
			})
			break       
        case prefix+'randombokep': // MFARELS
        case prefix+'bkp': // MFARELS
            if(isReg(obj)) return
            if(cekumur(cekage)) return
             // MFARELS
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id) // MFARELS
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id) // MFARELS
            const mskkntl = fs.readFileSync('./lib/database/18+.json') // MFARELS
            const kntlnya = JSON.parse(mskkntl) // MFARELS
            const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
            const rindBkep = kntlnya[rindBkp] // MFARELS
            tobz.sendFileFromUrl(from, rindBkep.image, 'Bokep.jpg', rindBkep.teks, id) // MFARELS
            await limitAdd(serial)
            break // MFARELS
        // MFARELS
        case prefix+'randomtrapnime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const trapnime = await axios.get(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${tobzkey}`)
            const trapn = trapnime.data.result
            if (trapn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            tobz.sendImage(from, trapn.result, `trapnime${ext}`, 'Trapnime!', id)
            await limitAdd(serial)
            break
        case prefix+'randomhentai':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const hentai = await axios.get(`https://tobz-api.herokuapp.com/api/hentai?apikey=${tobzkey}`)
            const henta = hentai.data
            if (henta.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            tobz.sendImage(from, henta.result, `RandomHentai${ext}`, 'Random Hentai!', id)
            await limitAdd(serial)
            break
        case prefix+'randomnsfwneko':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const nsfwneko = await axios.get(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${tobzkey}`)
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            tobz.sendImage(from, nsfwn.result, `NsfwNeko${ext}`, 'NsfwNeko!', id)
            await limitAdd(serial)
            break
        case prefix+'randomanime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const ranime = await axios.get(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${tobzkey}`)
            const ranimen = ranime.data
            if (ranimen.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            tobz.sendFileFromUrl(from, ranimen.result, `RandomAnime${ext}`, 'Random Anime!', id)
            await limitAdd(serial)
            break
        case prefix+'randomblowjob':
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            await limitAdd(serial)
            const sblow = await axios.get(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${tobzkey}`)
            const rblow = sblow.data
            tobz.sendFileFromUrl(from, rblow.result, `RandoBlow${ext}`, 'Random Blowjob!', id)
            break
        case prefix+'randomhug':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const shug = await axios.get(`https://tobz-api.herokuapp.com/api/hug?apikey=${tobzkey}`)
            const rhug = shug.data
            tobz.sendFileFromUrl(from, rhug.result, `RandomHug${ext}`, 'Random Hug!', id)
            break
        case prefix+'randomcry':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const scry = await axios.get(`https://tobz-api.herokuapp.com/api/cry?apikey=${tobzkey}`)
            const rcry = scry.data
            tobz.sendFileFromUrl(from, rcry.result, `RandomCry${ext}`, 'Random Cry!', id)
            await limitAdd(serial)
            break
        case prefix+'randomkiss':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const skiss = await axios.get(`https://tobz-api.herokuapp.com/api/kiss?apikey=${tobzkey}`)
            const rkiss = skiss.data
            tobz.sendFileFromUrl(from, rkiss.result, `RandomKiss${ext}`, 'Random Kiss!', id)
            await limitAdd(serial)
            break
        case prefix+'subreddit':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split(' ')
            const sr = argz[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
                if (nsfw == true) {
                    if ((isGroupMsg) && (isNsfw)) {
                        await tobz.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                        limitAdd(serial)
                    } else if ((isGroupMsg) && (!isNsfw)) {
                        await tobz.reply(from, `Nsfw belum diaktifkan di Grup *${name}*`, id)
                    }
                } else { 
                    await tobz.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                }
            } catch(err) {
                await tobz.sendFileFromUrl(from, errorurl, id) 
            }
            break
        case prefix+'nhder':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                const short = []
                const shortener = await urlShortener(url)
                url['short'] = shortener
                short.push(url)
                const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                tobz.sendText(from, caption)
                limitAdd(serial)
            } else {
                tobz.sendText(from, 'Maaf tolong masukan code nuclear')
            }
            break
        case prefix+'wallanime' :
            
            const walnime = ['https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            tobz.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', id)
            break
        case prefix+'quotesnime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const skya = await axios.get(`https://naufalhoster.xyz/anime/quotesnime?apikey=${naufalkey}`)
            skya_ = skya.data
            tobz.reply(from, `*Quotes*: _${skya_.result.quotes}_\n\n*Character*:\n${skya_.result.character}\n*Anime*:\n${skya_.result.anime}`, id)
            await limitAdd(serial)
            break//
            case prefix+'cersex':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const xxxs1 = await axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
            xxxs2 = xxxs1.data.result.judul // JUDUL
            xxxs3 = xxxs1.data.result.image // GAMBAR
            xxxs4 = xxxs1.data.result.cerita // CERITA
            tobz.sendFileFromUrl(from, xxxs3, `crot.jpg`, `*${xxxs2}*\n\n${xxxs4}`, id)
            await limitAdd(serial)
            break
            case prefix+'infono':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}infono [NO Telepon]*\nContoh : *${prefix}infono 085155078806`, id)
            const infono = body.slice(7)
            const infono2 = await axios.get(`https://docs-jojo.herokuapp.com/api/infonomor?no=${infono}`)
            infono3 = infono2.data
            tobz.reply(from, `*Nomor*: ${infono3.nomor}\n*Operator*: ${infono3.op}`, id)
            await limitAdd(serial)
            break
      /*      case prefix+'covid':
                const country = body.slice(6)   //https://coronavirus-19-api.herokuapp.com/countries/indonesia
                const kawal = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
                tobz.reply(from, `Negara: ${kawal.data.country}\nKasus: ${kawal.data.todayCases}\nTotal meninggal: ${kawal.data.deaths}\n`, id)
                break */
                
                case prefix+'ceklokasi':
                    //if (type === 'chat') return tobz.reply(from, `Mohon tag lokasi anda! (sharelok)`, id)
                    //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)            
                    try {
                        tobz.reply(from, mess.wait, id)
                        if (quotedMsg.type !== 'location') return tobz.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption !ceklokasi`, id)
                        console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
                        const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
                        if (zoneStatus.kode !== 200) tobz.reply(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.', id)
                        console.log(zoneStatus)
                        let datax = ''
                        for (let i = 0; i < zoneStatus.data.length; i++) {
                            const { zone, region } = zoneStatus.data[i]
                            const _zone = zone == 'green' ? 'Hijau* (Aman) ✅\n' : zone == 'yellow' ? 'Kuning* (Waspada) ⚠️\n' : 'Merah* (Bahaya) 📛\n'
                            datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
                        }
                        const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan from lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
                        tobz.reply(from, text, id)
                    } catch(e){
                        //console.log(e)
                        tobz.reply(from, `Mohon tag data lokasi anda! (sharelok) lalu kirim perintah *!ceklokasi*`)
                    }
                    break
                    //
        case prefix+'meme':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const memeindo = await axios.get(`https://naufalhoster.xyz/tools/memeindo?apikey=${naufalkey}`)
            const memeindo2 = memeindo.data.result
            tobz.sendFileFromUrl(from, memeindo2.meme, `awokawokwa.jpg`, ``, id)
            await limitAdd(serial)
            break
            case prefix+'cerpen':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const cerpen1 = await axios.get(`https://masgi.herokuapp.com/api/cerpen`)
            const cerpen2 = cerpen1.data.data
            tobz.reply(from, cerpen2, id)
            await limitAdd(serial)
            break
            case prefix+'cerhoror':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const cerhoror1 = await axios.get(`https://naufalhoster.xyz/tools/story_horror?apikey=${naufalkey}`)
            const cerhoror2 = cerhoror1.data.result
            tobz.reply(from, `${cerhoror2.title}\n\n${cerhoror2.story}`, id)
            await limitAdd(serial)
            break
            case prefix+'puisi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const puisi1 = await axios.get('https://masgi.herokuapp.com/api/puisi1')
            const puisi2 = puisi1.data.data
            tobz.reply(from, puisi2, id)
            await limitAdd(serial)
            break
            case prefix+'puisi2':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const puisi10 = await axios.get('https://masgi.herokuapp.com/api/puisi2')
            const puisi20 = puisi10.data.data
            tobz.reply(from, puisi20, id)
            await limitAdd(serial)
            break
         case prefix+'nekopoi':
            
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah ${prefix}nekopoi [linkNekopoi]*\nContoh : ${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*`, id)
            try {
            tobz.reply(from, mess.wait, id)
            const nekipoi = await axios.get('https://mhankbarbars.herokuapp.com/api/nekopoi?url=' + body.slice(7) + '&apikey=' + vhtearkey)
            const nekop = nekipoi.data.result
            const nekop2 = `*Anime Ditemukan!*\n➸ Judul : ${nekop.judul}\n➸ Dilihat : ${nekop.dilihat}\n➸ Info : ${nekop.info}`
            const image = await bent("buffer")(nekop.thumbnail)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            tobz.sendImage(from, base64, judul, nekop2)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
             tobz.sendText(ownerNumber, 'Nekopoi Error : ' + err)
           } 
            break
        case prefix+'quoteanime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    tobz.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                    limitAdd(serial)
                                }).catch(err => {
                                    tobz.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    tobz.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                    limitAdd(serial)
                                }).catch(err => {
                                    tobz.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                tobz.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`) 
                                limitAdd(serial)
                            }).catch(err => {
                                console.log(err)
                            })
                        }
            break
        case prefix+'malanime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            tobz.sendImage(from, base64, title, content)
             await limitAdd(serial)
           } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        case prefix+'malcharacter':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            tobz.sendImage(from, base64, name, contentt)
            await limitAdd(serial)
           } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        // PRAY //
        case prefix+'jadwalshalat':
        case prefix+'jadwalsholat':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `[❗] Kirim perintah *${prefix}jadwalShalat [ Daerah ]*\ncontoh : *${prefix}jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *${prefix}listDaerah*`)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return tobz.reply(from, jadwalShalat.data.error, id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
        case prefix+'quran':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*${prefix}quran* [ Urutan Surat ]\nContoh :\n*${prefix}quran 1*`, id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await tobz.reply(from, `${hasqu}`, id).catch((e) => tobz.reply(from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, id))
            await limitAdd(serial)
            break
        case prefix+'listsurah': // ARUGAZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    tobz.reply(from, hehex, id)
                })
            } catch(err) {
                tobz.reply(from, err, id)
            }
            break

            case prefix+'memeindo':
			if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
		//	if (args.length == 1) return tobz.reply(from, `Kirim perintah *${prefix}lirik2 [optional]*, contoh *${prefix}lirik2 aku bukan boneka*`, id)
			const lirikkk = async (lirikk) => new Promise((resolve, reject) => {
			axios.get(`http://api-zeks.harispoppy.com/api/memeindo?apikey=benbenz`)
				.then((ress1) => {
				resolve(ress1.data.result.lirik)
				})
			.catch((err) => {
				reject(err)
			})
				})
			.then(async(ress1) => {
				await tobz.reply(from, `${ress1}`, id)
			})
			break

           


        case prefix+'infosurah': // ARUGAZ
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return tobz.reply(from, `Kirim perintah *${prefix}infosurah [ Nama Surah ]*\nContoh : *${prefix}infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                    pesan = pesan + "➸ *Nama* : "+ data[idx].name.transliteration.id + "\n" + "➸ *Asma* : " +data[idx].name.short+"\n"+"➸ *Arti* : "+data[idx].name.translation.id+"\n"+"➸ *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"➸ *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"➸ *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    tobz.reply(from, pesan, message.id)
                    limitAdd(serial)
                }catch{
                    tobz.reply(from, 'Data tidak ditemukan, atau nama surah salah', id)
                }
            break
        case prefix+'tafsir': // ARUGAZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return tobz.reply(from, `Kirim perintah *${prefix}tafsir [ Nama Surah ] [ Ayat ]*\nContoh : *${prefix}tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    tobz.reply(from, pesan, message.id)
                    limitAdd(serial)
                }
            }catch{
                tobz.reply(from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', id)
            }
            break
        // MEDIA //
        case prefix+'infogempa':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const bmkg = await axios.get(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${tobzkey}`)
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            tobz.sendFileFromUrl(from, map, 'shakemap.jpg', hasil, id)
            await limitAdd(serial)
            break
        case prefix+'ssphone':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ssphone [linkWeb]*\nContoh : *${prefix}ssphone https://neonime.vip*`, id)
            const ssphone = body.slice(9)
            tobz.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${vhtearkey}`, 'ssphone.jpg', '', id)
            await limitAdd(serial)
            break
        case prefix+'sspc':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (args.length === 1) return tobz.reply(from, `Kirim perintah **${prefix}sspc [linkWeb]*\nContoh : *${prefix}sspc https://neonime.vip*`, id)
            const sspc = body.slice(6)
            tobz.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${sspc}&type=pc&apikey=${vhtearkey}`, 'sspc.jpg', '', id)
            await limitAdd(serial)
            break
            case prefix+'shorturl':
                if (args.length === 1) return tobz.reply(from, `Ketik ${prefix}shorturl <url>`, id)
                //let isUrl2 = args[1].match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/)
                //let isUrl2 = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
                //if (!isUrl2) return tobz.reply(from, mess.error.Iv, id)
                //if (url.match(isUrl)) return tobz.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id)
                const shortlink12 = await urlShortener2(args[1])
                const surl2 = `*Link :*\n` + args[1] + `\n\n*Short Url :*\n${shortlink12}`
                await tobz.reply(from, surl2, id)
                break
           
         case prefix+'weather':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}weather [tempat]*\nContoh : *${prefix}weather tangerang`, id)
            const weather12 = body.slice(8)
            const weather2 = await axios.get(`https://api.vhtear.com/weather?city=${weather12}&apikey=${vhtearkey}`)
            const weatherr2 = weather2.data.result
            if (weatherr2.error) {
                tobz.reply(from, weatherr2.error, id)
            } else {
                tobz.reply(from, `${weatherr2.weather}\n\n${weatherr2.location}\n`, id)
                limitAdd(serial)
            }
            break 
        case prefix+'cuaca':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}cuaca [tempat]*\nContoh : *${prefix}cuaca tangerang`, id)
            const tempat = body.slice(7)
            const weather = await axios.get(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tempat}&apikey=${tobzkey}`)
            const weatherr = weather.data
            if (weatherr.error) {
                tobz.reply(from, weatherr.error, id)
            } else {
                tobz.reply(from, `Tempat: ${weatherr.result.tempat}\n\nAngin: ${weatherr.result.angin}\nCuaca: ${weatherr.result.cuaca}\nDeskripsi: ${weatherr.result.desk}\nKelembapan: ${weatherr.result.kelembapan}\nSuhu: ${weatherr.result.suhu}\nUdara: ${weatherr.result.udara}`, id)
                limitAdd(serial)
            }
            break
        case prefix+'covid':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const country = await slicedArgs.join(' ')
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country)
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
            await tobz.reply(from, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.', id)
            await limitAdd(serial)
            break 

            case prefix+'corona':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const response3 = await axios.get('https://api.terhambar.com/negara/World')
                const covidimg = 'https://i.pinimg.com/originals/d4/ec/87/d4ec8796ed2c047abe9cf360f1cddc1b.jpg'
                const { total, meninggal, kasus_baru, sembuh, meninggal_baru, terakhir, penanganan } = response3.data
                await tobz.sendFileFromUrl(from, covidimg, `awokaowkawo.jpg`, '*[ INFO COVID DUNIA ]*' + '\n\n*Total:* ' + `${total}` + '\n*Kasus Baru:* ' + `${kasus_baru}` + '\n*Total Meninggal:* ' + `${meninggal}` + '\n*Meninggal Terbaru:* ' + `${meninggal_baru}` + '\n*Sembuh:* ' + `${sembuh}` + '\n*Penanganan:* '  + `${penanganan}`+ '\n*Update:* '  + `${terakhir}` + '\n\n*Jangan lupa gunakan masker dan selalu cuci tangan saat setelah berpergian.*', id)
                await limitAdd(serial)
                break 
        case prefix+'spamcall':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const spam = await slicedArgs.join(' ')
            const call2 = await axios.get(`https://tobz-api.herokuapp.com/api/spamcall?no=${spam}&apikey=${tobzkey}`)
            const call3 = call2.data.logs
            await tobz.reply(from, `Logs : ${call3}`, id)
            await limitAdd(serial)
            break
           //=echos%20gold
              /*  case prefix+'play':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    //if (!isPrem) return tobz.reply(from, `Mohon maaf nih sebelumnya, karena jalur traffic bot yang sangat padat. Fitur ini khusus premium untuk sampe hari kedepan.\n\nUntuk mendaftar premium silahkan chat ke owner\n\nwa.me/6289635687240`, id)
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                        tobz.reply(from, `Untuk mencari lagu dari youtube\nPenggunaan: ${prefix}play1 judul lagu\n\nSilahkan pilih:\n\n> *${prefix}play1*\n> *${prefix}play2*  \n> *${prefix}play3 (dengan file vn, voice note)*\n\nNb: Bila ingin mendownload dengan file kecil, kamu bisa pakai *${prefix}play2*`, id)
                        break */
             /*           case prefix+'play'://silahkan kalian custom sendiri jika ada yang ingin diubah
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                       // if (!isVip) return tobz.reply(from, `Perintah ini khusus membervip, chat owner untuk berlangganan`, id)
                       if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                       if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        if (args.length === 1) return tobz.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
                        try {
                            tobz.reply(from, mess.wait, id)
                            const serplay = body.slice(6)
                            const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                            if (!webplay.ok) throw new Error(`Error Get Video : ${webplay.statusText}`)
                            const webplay2 = await webplay.json()
                             if (webplay2.status == false) {
                                tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                            } else {
                                if (Number(webplay2.result.size.split(' MB')[0]) >= 10.00) return tobz.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
                                const { image, mp3, size, ext, title, duration } = await webplay2.result
                                const captplay = `*「 PLAY 」*\n\n*Judul* : ${title}\n*Durasi* : ${duration}\n*Filesize* : ${size}\n*Exp* : ${ext}\n\n_*Music Sedang Dikirim*_`
                                const responses = await fetch(mp3);
                                const buffer = await responses.buffer();   
                                tobz.sendFileFromUrl(from, image, `thumb.jpg`, captplay, id)
                                await fs.writeFile(`./media/audio.mp3`, buffer)
                                await tobz.sendFile(from,'./media/audio.mp3', `${title}.mp3`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                                await limitAdd(serial)
                                // await tobz.sendFileFromUrl(from, mp3, `${title}.mp3`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                               await limitAdd(serial)
                            }
                        } catch (err) {
                            tobz.sendText(ownerNumber, 'Error Play : '+ err)
                            tobz.reply(from, mess.error.Yt3, id)
                        }
                        break */
                      /*  case prefix+'play':
                        if(isReg(obj)) return
                     if(cekumur(cekage)) return
                     tobz.reply(from, `Ingin play media apa? Silahkan pilih\n\n> ${prefix}playmusic [judulnya]\n${prefix}playvideo [judulnya]`, id)
                     break */

                    case prefix+'play':
                     if(isReg(obj)) return
                     if(cekumur(cekage)) return
                     //if (!isPrem) return tobz.reply(from, `Mohon maaf nih sebelumnya, karena jalur traffic bot yang sangat padat. Fitur ini khusus premium untuk sampe hari kedepan.\n\nUntuk mendaftar premium silahkan chat ke owner\n\nwa.me/6289635687240`, id)
                     if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    // if (!isVip) return tobz.reply(from, `Perintah ini khusus membervip, chat owner untuk berlangganan`, id)
                    if (!isGroupMsg && !isAdmin) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                    if (args.length === 1) return tobz.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play [judul lagu]`, id)
                    const playy = await get.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${encodeURIComponent(body.slice(6))}`).json()
                    const mulaikah = playy.result[0].url
                    try {
                        tobz.reply(from, mess.wait, id)
                        yta(mulaikah)
                        .then((res) => {
                            const { dl_link, thumb, title, filesizeF, filesize } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                            .then(async (a) => {
                            if (Number(filesize) >= 30000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                            const captions = `*「Data Berhasil Didapatkan 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captions, id)
                            // INFOLOG(dl_link)
                            await tobz.sendFileFromUrl(from, dl_link, `${title}.mp3`, `Audio telah terkirim ${pushname}`, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                            await limitAdd(serial)
                            })
                        })
                    } catch (err) {
                        tobz.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                        tobz.reply(from, mess.error.Yt3, id)
                    }
                    break 
                    case prefix+'playvideo':
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (isPrem) return tobz.reply(`Maaf fitur ini hanya untuk user premium. Silahkan chat owner untuk mendaftar menjadi premium user.`, id)
                        if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                        tobz.reply(from, mess.wait, id)
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const judulnye = await slicedArgs.join(' ')
                        const playvid = await axios.get(`https://naufalhoster.xyz/dl/ytplayvideo?apikey=${naufalkey}&query=${judulnye}`)
                        const { title, thumbnail, duration, viewCount, likeCount, dislikeCount, filesize, video } = await playvid.data.result
                        await tobz.sendFileFromUrl(from, thumbnail, `awokako.jpg`, `*Title:* ${title}\n*Durasi:* ${duration}\n*Size:* ${filesize}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
                        await tobz.sendFileFromUrl(from, video, `nyee.mp4`, `Video berhasil di download!`, id)
                        break

                        case prefix+'playmusic':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isPrem) return tobz.reply(`Maaf fitur ini hanya untuk user premium. Silahkan chat owner untuk mendaftar menjadi premium user.`, id)
                            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                            tobz.reply(from, mess.wait, id)
                            argz = body.trim().split(' ')
                            var slicedArgs = Array.prototype.slice.call(argz, 1);
                            const judulnye2 = await slicedArgs.join(' ')
                            const playaud = await axios.get(`https://naufalhoster.xyz/dl/ytplayaudio?apikey=${naufalkey}&query=${judulnye2}`)
                            const dataaud = playaud.data.result
                            await tobz.sendFileFromUrl(from, dataaud.thumbnail, `awokako.jpg`, `*Title:* ${dataaud.title}\n*Durasi:* ${dataaud.duration}\n*Size:* ${dataaud.filesize}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
                            //const responses = await fetch(dataaud.audio);
                            //const buffer2 = await responses.buffer();   
                            //await fs.writeFile(`./media/audio.mp3`, buffer2)
                            //await tobz.sendPtt(from,'./media/audio.mp3', `${dataaud.title}.mp3`, ``,  id)
                            await tobz.sendFileFromUrl(from, dataaud.audio, `${dataaud.title}.mp3`, ``, id)
                            break
                        /*      case prefix+'play2':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    //if (!isPrem) return tobz.reply(from, `Mohon maaf nih sebelumnya, karena jalur traffic bot yang sangat padat. Fitur ini khusus premium untuk sampe hari kedepan.\n\nUntuk mendaftar premium silahkan chat ke owner\n\nwa.me/6289635687240`, id)
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                    if (args.length === 1) return tobz.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play3 judul lagu`, id)
                        tobz.reply(from, mess.wait, id)
                    const getvids = await axios.get(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(6)}&apikey=apivinz`)
                    if (getvids.data.status == false) return tobz.reply(from, getvids.data.message, id)
                    if (Number(getvids.data.result.url_audio.split(' MB')[0]) >= 20.00) return tobz.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
                    const responses = await fetch(getvids.data.result.url_audio);
                    const buffer = await responses.buffer(); 
                    await tobz.sendFileFromUrl(from, getvids.data.result.thumbnail, 'gambar.jpg', `*Title:* ${getvids.data.result.title}\n*Size:* ${getvids.data.result.size}\n*File:* Mp3\n\n_*Music sedang dikirim*_`, id)
                    await fs.writeFile(`./media/play.mp3`, buffer)
                    await tobz.sendFile(from,'./media/play.mp3', ``, ``, id)
                    await limitAdd(serial)
                    break */
           /*     case prefix+'play3':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    //if (!isPrem) return tobz.reply(from, `Mohon maaf nih sebelumnya, karena jalur traffic bot yang sangat padat. Fitur ini khusus premium untuk sampe hari kedepan.\n\nUntuk mendaftar premium silahkan chat ke owner\n\nwa.me/6289635687240`, id)
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
                    if (args.length === 1) return tobz.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play4 judul lagu`, id)
                        tobz.reply(from, mess.wait, id)
            const getvidss = await axios.get(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(6)}&apikey=${vinzkey}`)
            if (getvidss.data.status == false) return tobz.reply(from, getvidss.data.message, id)
            if (Number(getvidss.data.result.url_audio.split(' MB')[0]) >= 20.00) return tobz.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
            const responsess = await fetch(getvidss.data.result.url_audio);
            const bufferr = await responsess.buffer(); 
            await tobz.sendFileFromUrl(from, getvidss.data.result.thumbnail, 'gambar.jpg', `*Title:* ${getvidss.data.result.title}\n*Size:* ${getvidss.data.result.size}\n*File:* Mp3\n\n_*Music sedang dikirim*_\n\nNB:\nFORMAT : *VN*`, id)
            await fs.writeFile(`./media/play.mp3`, bufferr)
            await tobz.sendPtt(from,'./media/play.mp3', id)
            await limitAdd(serial)
                break */
			case prefix+'premplay':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
           if (!isPrem) return tobz.reply(from, `Perintah ini hanya untuk user Premium *ZXCBOT*\n\nKetik* ${prefix}premmenu* untuk melihat menu premium`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #ceklimit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return tobz.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            try {
                tobz.reply(from, 'Tunggu sebentar, permintaan sedang di proses', id)
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Get Video : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    tobz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(webplay2.result.size.split(' MB')[0]) >= 20.00) return tobz.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 20 MB!', id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `*「 PREMIUM USER - PLAY 」*\n\n*Judul* : ${title}\n*Durasi* : ${duration}\n*Filesize* : ${size}\n*Exp* : ${ext}\n\n_*Music Sedang Dikirim*_`
                    tobz.sendFileFromUrl(from, image, `thumb.jpg`, captplay, id)
                    await tobz.sendFileFromUrl(from, mp3, `${title}.mp3`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                tobz.sendText(ownerNumber, 'Error Play : '+ err)
                tobz.reply(from, mess.error.Yt3, id)
            }
            break   
            case prefix+'ytmp3':
                    if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ytmp3 [linkYt]*`, id)
            await limitAdd(serial)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return tobz.reply(from, mess.error.Iv, id)
            try {
                tobz.reply(from, mess.wait, id)
                yta(args[1])
                .then((res) => {
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                    if (Number(filesize) >= 20000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                    tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captions, id)
                    tobz.sendFileFromUrl(from, dl_link, `${title}.mp3`, ``, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                    })

                })
            } catch (err) {
                tobz.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                tobz.reply(from, mess.error.Yt3, id)
            }
            break   
                case prefix+'ytmp4':
                    if(isReg(obj)) return
                     if(cekumur(cekage)) return
                     if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                    if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ytmp4* _linkYt_`, id)
                    await limitAdd(serial)
                    let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                    if (!isLinks2) return tobz.reply(from, mess.error.Iv, id)
                    try {
                        tobz.reply(from, mess.wait, id)
                        ytv(args[1])
                        .then((res) => {
                            const { dl_link, thumb, title, filesizeF, filesize } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                            .then((a) => {
                            if (Number(filesize) >= 20000) return tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, id)
                            const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            tobz.sendFileFromUrl(from, thumb, `thumb.jpg`, captionsYtmp4, id)
                            tobz.sendFileFromUrl(from, dl_link, `${title}.mp3`, `Video berhasil didownload`, id).catch(() => tobz.reply(from, mess.error.Yt3, id))
                            })
        
                        })
                    } catch (err) {
                        tobz.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                        await tobz.reply(from, mess.error.Yt4, id)
                    }
                    break   
                   
                case prefix+'google2':
                //if (!isRegistered) return await tobz.reply(from, ind.notRegistered(), id)
                //if (!q) return await tobz.reply(from, ind.wrongFormat(), id)
               // if (isBatas(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
               argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const q2 = await slicedArgs.join(' ')
               await tobz.reply(from, mess.wait, id)
				const options = {
				method: 'GET',
				url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+ q2 +'&num=5',
				headers: {
				'x-rapidapi-key': '796b0b7803msh196643e1abe67abp155916jsne9d9ea9750b7',
				'x-rapidapi-host': 'google-search3.p.rapidapi.com'
				}
				};
				axios.request(options).then(function (response) {
				//console.log(response.data)
				let googles = `Hasil Pencaharian *${q2}*`
                        for (let i = 0; i < response.data.results.length; i++) {
                            googles +=  `\n\n➸ *Judul:* : ${response.data.results[i].title}\n➸ *Deskripsi:* : ${response.data.results[i].description}\n➸ *URL*: ${response.data.results[i].link}\n\n________________________\n`
                        }
				tobz.reply(from, googles,id)
				limitAdd(serial)
				}).catch(async (err) => {
                    console.error(err)
                    await tobz.reply(from, 'Error!', id)
				});
                break
        case prefix+'google':
            if(isReg(obj)) return
            if(cekumur(cekage)) return  
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, mess.wait, id)
            
            const googleQuery = body.slice(8)
             if(googleQuery == undefined || googleQuery == ' ') return tobz.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
            /* google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
            }
                tobz.reply(from, vars, id);
                limitAdd(serial) */
                google({ 'query': googleQuery }) .then(async (results) => {
                        let txt = `-----[ *GOOGLE SEARCH* ]-----\n\n*by: rashidsiregar28*\n\n_*Search results for: ${googleQuery}*_`
                        for (let i = 0; i < results.length; i++) {
                            txt += `\n\n➸ *Title*: ${results[i].title}\n➸ *Desc*: ${results[i].snippet}\n➸ *Link*: ${results[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await tobz.reply(from, txt, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await tobz.reply(from, 'Error!', id)
            })
            break
        case prefix+'translate':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            await limitAdd(serial)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var texxta = body.slice(11+codelang.length);
                translatte(texxta, {to: codelang}).then(res => {
                    tobz.sendText(from,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     tobz.sendText(from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            break
            case prefix+'translate2':
                //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                if (args.length === 1) return tobz.reply(from, `Penggunaan untuk translate teks\n\nPenggunaan 1 : *!translate [data bahasa] [teks yang akan ditranslate]* _(tanpa tag)_\nPenggunaan 2 : *!translate [data bahasa]* _(dengan tag)_\n\nContoh 1 : *!translate id hello how are you* _(tanpa tag)_\nContoh 2 : *!translate id* _(tag pesan yang akan ditranslate)_`, id)
               
                //if (!quotedMsg) return tobz.reply(from, 'Tag pesan yang akan ditranslate!', id)
                if (quotedMsg) {
                    const dataTextReal = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const lang = args[1].toString()
                        const trans = async (dataText, lang) => {
                        INFOLOG(`Translate text to ${lang}...`)
                        const result = await translate(dataTextReal, {
                            to: lang
                            })
                          .then((res) => tobz.reply(from, res.text, id))
                          .catch((err) => {
                            //   tobz.reply(from, `Sepertinya tidak ada data bahasa ${lang}\n\n${bahasa_list}`, id)
                            console.log(err)
                        })
                        // console.log(result.data[0])
                    }
                    trans(dataTextReal, lang) 
                } else if (args.length >= 2) {
                    // !translate id 
                    const dataTextManu = body.slice(13)
                    const lang = args[1].toString()
                        const trans = async (dataText, lang) => {
                        console.log(`Translate text to ${lang}...`)
                        const result = await translate(dataTextManu, {
                            to: lang
                            })
                          .then((res) => tobz.reply(from, res.text, id))
                          .catch((err) => tobz.reply(from, `Sepertinya tidak ada data bahasa ${lang}\n\n${bahasa_list}`, id))
                        // console.log(result.data[0])
                    }
                    trans(dataTextManu, lang)
                } else {
                    tobz.reply(from, `Kesalahan mentranslate`, id)
                }
                await tobz.sendSeen(from)
                break
        case prefix+'xnxx':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#xnxx [linkXnxx]*, untuk contoh silahkan kirim perintah *#readme*')
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return tobz.reply(from, mess.error.Iv, id)
            try {
                tobz.reply(from, mess.wait, id)
                const resq = await axios.get('https://mhankbarbars.herokuapp.com/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey)
                const resp = resq.data
                 if (resp.error) {
                    tobz.reply(from, ytvv.error, id)
                } else {
                    if (Number(resp.result.size.split(' MB')[0]) > 20.00) return tobz.reply(from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', id)
                    tobz.sendFileFromUrl(from, resp.result.thumb, 'thumb.jpg', `➸ *Judul* : ${resp.result.judul}\n➸ *Deskripsi* : ${resp.result.desc}\n➸ *Filesize* : ${resp.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await tobz.sendFileFromUrl(from, resp.result.vid, `${resp.result.title}.mp4`, '', id)}
                    await limitAdd(serial)
            } catch (err) {
                console.log(err)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                tobz.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }
            break
        case prefix+'ramalpasangan':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            //if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#ramalpasangan [kamu|pasangan]*\nContoh : *#ramalpasangan Juwen|Doi*', id)
           // const hadehhh = body.slice(14)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const hadehhh = await slicedArgs.join(' ')
            if (!hadehhh.includes('|')) return await tobz.reply(from, `Kirim perintah *${prefix}ramalpasangan nama kamu|pacar kamu*`, id)
           const kamu2 = hadehhh.split('|')[0]
           const pacar = hadehhh.split('|')[1]
         /*   const argg = body.trim().split('|')
            if (argg.length >= 2) {
            tobz.reply(from, mess.wait, id)
            const kamu = argz[0]
            const pacar = argz[1] */
            const rpmn = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn2 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn3 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn4 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn5 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn6 = rate[Math.floor(Math.random() * (rate.length))]
            const rjh2 = `*Hasil Pengamatan!*\n\nPasangan dengan nama:\n*${kamu2}* dan *${pacar}*\n\nCinta : ${rpmn}\nJodoh : ${rpmn2}\nKemiripan : ${rpmn3}\nKesukaan : ${rpmn4}\nKesamaan : ${rpmn5}\nKebucinan ${rpmn6}`
            tobz.reply(from, rjh2, id)
            limitAdd(serial)
            await limitAdd(serial)
            break
        case prefix+'artinama':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}artinama [query]*\nContoh : *${prefix}artinama Juwen*`, id)
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `➸ Artinama : ${resp.data.result.hasil}`
            tobz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                tobz.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
        case prefix+'zodiak':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
          if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}zodiak [zodiak kamu]*\nContoh : *${prefix}zodiak scorpio*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `Zodiak: ${resp.data.result.zodiak}\n\nRamalan: ${resp.data.result.ramalan}\nNomor Keberuntungan: ${resp.data.result.nomorKeberuntungan}\n\n Motivasi: ${resp.data.result.motivasi}\n\n Inspirasi: ${resp.data.result.inspirasi}`
            tobz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Zodiak tidak ditemukan')
                tobz.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           await limitAdd(serial)
           break
        case prefix+'caklontong':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Deskripsi : ${resp.data.result.desk}\n➸ Poin : ${resp.data.result.poin}`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            tobz.reply(from, anm2, id)
            tobz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            tobz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            tobz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            tobz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                tobz.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           await limitAdd(serial)
           break
           case prefix+'tod':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, `Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n-> ${prefix}truth\n-> ${prefix}dare`, id)
            break
    case prefix+'truth':
        if(isReg(obj)) return
            if(cekumur(cekage)) return
        if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
            .then(res => res.text())
            .then(body => {
                let truthx = body.split('\n')
                let truthz = truthx[Math.floor(Math.random() * truthx.length)]
                tobz.reply(from, truthz, id)
            })
            .catch(() => {
                tobz.reply(from, 'Hayolohhh, ada yang error!!', id)
            })
            //await limitAdd(serial)
            break
    case prefix+'dare':
        if(isReg(obj)) return
            if(cekumur(cekage)) return
        if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
            .then(res => res.text())
            .then(body => {
                let darex = body.split('\n')
                let darez = darex[Math.floor(Math.random() * darex.length)]
                tobz.reply(from, darez, id)
            })
            .catch(() => {
                tobz.reply(from, 'Hayolohhh, ada yang error!!', id)
            })
            break
            case prefix+'suit':
                if(isReg(obj)) return
            if(cekumur(cekage)) return
        if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                        const s_batu = await fs.readFileSync(`./media/suit/batu.png`, { encoding: "base64" })
                        const s_gunting = await fs.readFileSync(`./media/suit/gunting.png`, { encoding: "base64" })
                        const s_kertas = await fs.readFileSync(`./media/suit/kertas.png`, { encoding: "base64" })
                        
                        const acaksuit = Math.floor(Math.random() * 3)
            
                        if (acaksuit === 0) {
                            await tobz.sendImageAsSticker(from, `data:image/png;base64,${s_batu.toString('base64')}`)
                        } else if (acaksuit === 1) {
                            await tobz.sendImageAsSticker(from, `data:image/png;base64,${s_gunting.toString('base64')}`)
                        } else {
                            await tobz.sendImageAsSticker(from, `data:image/png;base64,${s_kertas.toString('base64')}`)
                        }
                        break

                        case prefix+'buylimit':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}buylimit _jumlah limit yang dibeli_*\ncontoh *${prefix}buylimit 1*\nNote : 1 Limit = $300 balance`, id)
                            if(isNaN(args[1])) return tobz.reply(from, 'Pembeliaan limit harus berupa angka', id)
                            const jimit = args[1] * 300
                            var j = getbalance(serial)
                            if(j < jimit) return tobz.reply(from, 'Upsss balance kamu kurang\n1 limit = $300 balance', id)
                            kurangbalance(serial, jimit)
                            addlimit(serial, args[1])
                            tobz.reply(from,`${monospace(
`Pembelian limit berhasil
Sisa balance : $${getbalance(serial)}
Jumlah limit : ${ceklumut(serial)}`)}`, id)
                            break
                        case prefix+'balance':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            var j = getbalance(serial)
                            tobz.reply(from, `Balance kamu adalah $${j}`, id)
                            break
                        case prefix+'mining':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimitg(serial)) return tobz.reply(from, limitgame, id)
                            var pemain = sender.id
                            const hadiahm = Math.floor(Math.random() * 500) + 1
                    if(hadiahm <= 100){
                        addbalance(pemain, hadiahm)
                        var j = getbalance(pemain)
                        tobz.reply(from, 
`*Yah kamu tidak menemukan apa - apa*
*Namun kerja kerasmu akan dibayar sebanyak :* $${hadiahm}
*Total balance :* $${j}`, id)
                    } else if(hadiahm <= 200){
                        addbalance(pemain, hadiahm)
                        var j = getbalance(pemain)
                        tobz.reply(from, 
`*Kamu mendapatkan coal*
*Balance yang didapat* $${hadiahm}
*Total balance :* $${j}`, id)
                    } else if(hadiahm <= 300){
                        addbalance(pemain, hadiahm)
                        var j = getbalance(pemain)
                        tobz.reply(from, `
*Yeay kamu mendapatkan Iron*
*Balance yang didapat* $${hadiahm}
*Total balance :* $${j}`, id)
                    } else if(hadiahm <= 400){
                        addbalance(pemain, hadiahm)
                        var j = getbalance(pemain)
                        tobz.reply(from, `
*Yeay kamu mendapatkan Gold*
*Balance yang didapat* $${hadiahm}
*Total balance :* $${j}`, id)
                    } else if(hadiahm <= 500){
                        addbalance(pemain, hadiahm)
                        var j = getbalance(pemain)
                        tobz.reply(from, 
`*Jackpot!!! Kamu mendapatkan Diamond*
*Balance yang didapat* $${hadiahm}
*Total balance :* $${j}`, id)
                    }
                            gameAdd(serial)
                            break
                        case prefix+'slot':
                            if(isReg(obj)) return
                            if(cekumur(cekage)) return
                            if (isLimitg(serial)) return tobz.reply(from, limitgame, id)
                            var pemain = sender.app_id
                            const slotOne = slots[Math.floor(Math.random() * slots.length)]
                            const slotTwo = slots[Math.floor(Math.random() * slots.length)]
                            const slotThree = slots[Math.floor(Math.random() * slots.length)]
                            const slothAtas = sotoy1[Math.floor(Math.random() * sotoy1.length)]
                            const slothbawah = sotoy1[Math.floor(Math.random() * sotoy2.length)]
                            const hadiah1 = Math.floor(Math.random() * 150) + 501
                            if(slotOne === slotTwo && slotTwo === slotThree){
                                addbalance(pemain, hadiah1)
                                var j = getbalance(pemain)
tobz.reply(from,
` [  🎰 | SLOTS ]
------------------
${slothAtas}
${slotOne} : ${slotTwo} : ${slotThree} <==
${slothbawah}
------------------
*Selamat anda menang*
*Hadiah : $${hadiah1}*
*Jumlah balance : ${j}*`, id)
} else {
tobz.reply(from,` [  🎰 | SLOTS ]
------------------
${slothAtas}
${slotOne} : ${slotTwo} : ${slotThree} <==
${slothbawah}
------------------
*Coba lagi lain kali*`, id)
} gameAdd(serial)
                    break
         case prefix+'tebakgambar':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            tobz.sendFileFromUrl(from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
            tobz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            tobz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            tobz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            tobz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal eo-=uiz tidak ditemukan')
                tobz.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
         case prefix+'family100':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            tobz.reply(from, anm2, id)
            tobz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            tobz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            tobz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            tobz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                tobz.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
        case prefix+'heroml':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#heroml [nama hero]*\nContoh : *#heroml akai*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `➸ Title : ${resp.data.result.title}\n➸ Quotes : ${resp.data.result.quotes}\n➸ Info : ${resp.data.result.info}\n➸ Atribut : ${resp.data.result.attributes}`
            tobz.sendFileFromUrl(from, resp.data.result.pictHero, 'hero.jpg', anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Hero tidak ditemukan')
                tobz.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
            break
        case prefix+'nomorhoki':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *#nomorhoki [no hp kamu]*\nContoh : *${prefix}nomorhoki 0895384009405*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `➸ Hasil :\n ${resp.data.result.hasil}`
            tobz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                tobz.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
           }
            break
        case prefix+'artimimpi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#artimimpi [mimpi]*\nContoh : *#artimimpi ular*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return tobz.reply(from, resp.data.error, id)
            const anm2 = `➸ Artimimpi : ${resp.data.result.hasil}`
            tobz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                tobz.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break

        /*    case prefix+'wiki':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *!wiki [query]*\nContoh : *${prefix}wiki asu`, id)
            const query_ = body.slice(6)
            tobz.reply(from, mess.wait, id)
            //tobz.reply(from, '_Sedang mencari data..._', id)
            try {
                const wiki = await get.get(`https://api.vhtear.com/wikipedia?query=${encodeURIComponent(query_)}&apikey=${vhtearkey}`).json()
                if (wiki.error) {
                    tobz.reply(from, wiki.error, id)
                } else {
                    // console.log(wiki)
                    //tobz.reply(from, `_Mohon tunggu sedang mencari data.._`, id)
                    //tobz.reply(from, `➣ *Query* : ${query_}\n\n➣ *Result* : ${wiki.result}`, id)
                    tobz.sendFileFromUrl(from, wiki.result.ImgResult[0], wiki.jpg, `*Hasil wikipedia from ${query_}*\n\n${wiki.result.Info}`, id).catch(() => tobz.reply(from, `*Hasil wikipedia from ${query_}*\n\n${wiki.result.Info}`, id))
                    //console.log(wiki.result.ImgResult[0],wiki.result.Info)
                }
            } catch (err){
                console.log(err)
                tobz.reply(from, `_Mohon maaf kesalahan saat mencari data ${query_}_`)
            }
            break */
            
         /*   case prefix+'wiki':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *#wiki [ Query ]*\nContoh : *#wiki asu*`, id)
                const queryz_ = body.slice(6)
                const wiki = await axios.get(`https://api.vhtear.com/wikipedia?query=${queryz_}&apikey=${vhtearkey}`)
                if (wiki.data.error) {
                    tobz.reply(from, wiki.data.error, id)
                } else {
                    tobz.sendFileFromUrl(from, wiki.data.result.ImgResult, '', `*「 WIKI 」*\n\n➸ *Query* : ${queryz_}\n\n➸ *Result* : ${wiki.data.result.Info}`, id)
                    await limitAdd(serial)
                }
                break   */
        case prefix+'kbbi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}kbbi [ Query ]*\nContoh : *${prefix}kbbi asu*`, id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://api.vhtear.com/kbbi?query=${kbbl}&apikey=${vhtearkey}`)

            if (kbbl2.data.error) {
                tobz.reply(from, kbbl2.data.error, id)
            } else {
                tobz.sendText(from, `*「 KBBI 」*\n\n➸ *Query* : ${kbbl}\n\n➸ *Result* : ${kbbl2.data.result.hasil}`, id)
                await limitAdd(serial)
            }
            break
        case prefix+'googleimage':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            const qwery = argz[1]
            const jum = argz[2]
            if(!qwery) return await tobz.reply(from, `Kirim perintah *${prefix}googleimage [ |Query|Jumlah ]*, contoh = ${prefix}googleimage |loli|3`, id)
            if(!jum) return await tobz.reply(from, `Jumlah gambar diperlukan, contoh = ${prefix}googleimage |loli|3`, id)
            if(jum >= 8) return await tobz.reply(from, 'Jumlah terlalu banyak! Max 7', id)
            var gis = require('g-i-s');
            var opts = {
                searchTerm: qwery
                };
                gis(opts, logResults);
                    
                function logResults(error, results) {
                    if (error) {
                        tobz.reply(from, 'Maaf, Fitur Sedang Error', id)
                    } else {
                        const item = results.slice(0, jum)
                        item.forEach(async(res) => {
                        console.log(res)
                        const yurl = await urlShortener(res.url)
                        tobz.sendFileFromUrl(from, res.url, null, `Link : ${yurl}\nImage size : ${res.height} x ${res.width}`, id)  
                        limitAdd(serial) 
                        })
                    }
                }
            }
            break
         case prefix+'tahta':
             if(isReg(obj)) return
             if(cekumur(cekage)) return
             
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             const jreng = body.slice(7)
             if (!jreng) return tobz.reply(from, `Kirim perintah *#tahta [teks]*\n\nContoh *${tahta}tahta ZXCBOT*`, id)
             tobz.reply(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${jreng}&apikey=${vhtearkey}`,`${jreng}.jpg`,`Harta Tahta ${jreng}`, id)        
             await limitAdd(serial)
             break
        case prefix+'resepmasakan':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return tobz.reply(from, `Kirim perintah *${prefix}resepmasakan [optional]*\nContoh *${prefix}resepmasakan rawon*`, id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
			
			
*Judul:* ${title}

*Bahan:* ${bahan}


*Cara:* 
${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, title, rmk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             tobz.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break
        case prefix+'twitterstalk':
        case prefix+'twtstalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return tobz.reply(from, 'Kirim perintah *#twtstalk @username*\nContoh *#twtstalk @miakhalifah*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbars.herokuapp.com/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*

• *Nama:* ${name}
• *Nama Panjang:* ${full_name}
• *Jumlah Pengikut:* ${followers_count}
• *Jumlah Postingan:* ${status_count}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, name, twstalk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             tobz.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
          case prefix+'igstalk':
        //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
        tobz.reply(from, mess.wait, id)
           try {
            if (args.length === 1)  return tobz.reply(from, 'Kirim perintah *!igStalk @username*\nContoh *!igStalk @hanif_az.sq.61*', id)
            await getUser(args[1].replace('@','')).then((user) => {
                const { biography, subscribersCount, subscribtions, postsCount, fullName, username, profilePicHD, isPrivate, isVerified, posts } = user
                const priv_ = isPrivate ? "✅" : "❌"
                const verif_ = isVerified ? "✅" : "❌"
                let isi_post = ``
                for (let i = 0; i < user.posts.length; i++) {
                    const vid_post_ = user.posts[i].isVideo ?  "✅" : "❌"
                    isi_post += `
================================

Capt : ${user.posts[i].caption}
Url : ${user.posts[i].url}
Timestamp : ${new Date(user.posts[i].timestamp * 1000)}
Video : ${vid_post_}
                        `
                }
                const swtich_ = isPrivate ? "Mohon maaf akun ini private" : isi_post
                const captuserig = 
`*Nama* : ${fullName}
*Username* : ${username}
*Terverifikasi* : ${verif_}
*Akun Private* : ${priv_}
*Jumlah Followers* : ${subscribersCount}
*Jumlah Following* : ${subscribtions}
*Jumlah Postingan* : ${postsCount}
*Biodata* : ${biography}

*Post* : ${swtich_}

`
                tobz.sendFileFromUrl(from, profilePicHD, 'Profile.jpg', captuserig, id)
            })
            await tobz.sendSeen(from)
        } catch (e) {
            console.log(e)
            tobz.reply(from, `_Terdapat kesalahan saat stalk ${args[1]}_`, id)
        }
         break
        case prefix+'igprofile':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
             if (args.length === 1)  return tobz.reply(from, `Kirim perintah *${prefix}igprofile @username*\nContoh *!igprofile eejsxx*`, id)
				 const argzz = body.trim().split(' ')
				 tobz.reply(from, 'Tunggu sebentar, mencari profile dengan username:\n\n' + '@' + argzz[1], id)
            const igStalk = body.trim().split(' ')
			var slicedArgs = Array.prototype.slice.call(igStalk, 1);
            const istalk = await slicedArgs.join(' ')
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { biography, follower, follow, picture, post_count, full_name, username, is_private } = istalk2.data.result
            const istalk3 = 
`‎‏‏‎「 *IG PROFILE* 」

*Username:* ${username}
*Nama:* ${full_name}
*Pengikut:*	${follower}
*Mengikuti:* ${follow}
*Jumlah Postingan:* ${post_count}
*Private:* ${is_private}
 
*Bio:* 
${biography}

-----------------------------------------
Link Instagram:
www.instagram.com/${username}`
            
            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, username, istalk3, id)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
             tobz.sendText(ownerNumber, 'IG Profile Error! : ' + err)
           }
          break
          case prefix+'igprofile2':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
             if (args.length === 1)  return tobz.reply(from, `Kirim perintah *${prefix}igprofile @username*\nContoh *!igprofile eejsxx*`, id)
             argz = body.trim().split(' ')
             var slicedArgs = Array.prototype.slice.call(argz, 1);
             const iguser1 = await slicedArgs.join(' ')
            try {
            const iguservh = await axios.get('https://videfikri.com/api/igstalk/?username=' + iguser1)
            const { bio, followers, following, picture, post_count, full_name, username, is_private, is_verified } = iguservh.data.result
            const iguser2 = 
`‎‏‏‎「 *IG PROFILE* 」

*Username:* [ ${username} ]
*Nama:* [ ${full_name} ]
*Pengikut:*	[ ${followers} ]
*Mengikuti:* [ ${following} ]
*Jumlah Postingan:* [ ${post_count} ]
*Private:* [ ${is_private} ]
*Verified:* [ ${is_verified} ]

*Bio:* 
${bio}

-----------------------------------------
Link Instagram:
www.instagram.com/${username}`
            
            
            tobz.sendFileFromUrl(from, iguservh.data.result.profile_hd, ``, iguser2, id)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             tobz.sendText(ownerNumber, 'IG Profile Error! : ' + err)
           }
          break
        case prefix+'tiktokstalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) retur
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return tobz.reply(from, 'Kirim perintah *#tiktokstalk @username*\nContoh *#tiktokstalk @duar_amjay*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
*Username:* ${username}
*Judul:* ${title}
*Bio:* ${bio}
*Mengikuti:* ${follow}
*Pengikut:* ${follower}
*Jumlah Like*: ${like_count}
*Jumlah Postingan:* ${video_post}
*Deskripsi:
* ${description}



-------------------------------
*Link:* 
${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, title, tiktod)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             tobz.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case prefix+'smulestalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#smulestalk [@username]*\nContoh : *#smulestalk loli*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Full Name:* ${title}
➸ *Biografi:* ${biography}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *VIP*: ${is_vip}
➸ *Total Rekaman:* ${recording}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, title, smule)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             tobz.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
          case '$':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isSimi) return tobz.reply(from, 'command/Perintah Simi belum di aktifkan di group ini!', id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}$ [teks]*\nContoh : *${prefix}$ hai simi*`, id)
            try{
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const que = await slicedArgs.join(' ')
            const sigo = await axios.get(`https://naufalhoster.xyz/tools/simsimi?apikey=${naufalkey}&pesan=${que}`)
            //const gosi = await axios.get(`https://videfikri.com/api/simsimi/?teks=${que}`)
            const sigot = sigo.data.result.response
            const sigot2 = sigo.data.result.pesan
            await tobz.sendSeen(from)
            tobz.reply(from, sigot, id)
            //const gosi2 = gosi.data
            //tobz.reply(from, gosi2.jawaban, id)
            //console.log(`IN: ${sigot2}\nOUT:${sigot}`)
        } catch (err) {
            tobz.reply(from, `Ups, simsimi error. Mungkin bahasa anda tidak di mengerti atau simsimi belum update`, id)
            console.log(err)
        }
            break
            case prefix+'fml':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                const sigo4 = await axios.get(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=${tobzkey}`)
                const sigot4 = sigo4.data 
                tobz.reply(from, sigot4.result, id)
                //console.log(sigot)
                break
          /*  case prefix+'bot':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isSimiPc) return tobz.reply(from, 'Perintah ini hanya diizinkan oleh owner bot!', id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}$ [teks]*\nContoh : *${prefix}$ hai simi*`, id)
                const quee = body.slice(4)
                const sigoo = await axios.get(`http://simsumi.herokuapp.com/api?text=${quee}&lang=id`)
                const sigott = sigoo.data
                tobz.reply(from, sigott.success, id)
                //console.log(
     /*   case prefix+'ig': 
        case prefix+'instagram':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *#readme*`)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return tobz.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
            await tobz.reply(from, mess.wait, id)
            const instagram = async (url) => new Promise(async (resolve, reject) => {
                const api = `https://api.vhtear.com/instadl?link=${url}&apikey=${vhtearkey}`
                axios.get(api).then(async(res) => {
                    const st = res.data.result
                    if(st.status === false){
                        resolve(`Media Tidak Di Temukan`)
                    }else{
                        resolve(st)
                    }
                }).catch(err => {
                    console.log(err)
                    resolve(`Maaf, Server Sedang Error`)
                })
            instagram(args[1]).then(async(res) => {
                let username = res.owner_username;
                for (let i = 0; i < res.post.length; i++) {
                if (res.post[i].type == "image") {
                        await tobz.sendFileFromUrl(from, res.post[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n➸ *Username* : ${username}\n➸ *Tipe* : Image/Jpg`, id);
                        limitAdd(serial)
                    } else if (res.post[i].type == "video") {
                        await tobz.sendFileFromUrl(from, res.post[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n➸ *Username* : ${username}\n➸ *Tipe* : Video/MP4`);
                        limitAdd(serial)
                    }
                }
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break */
            case prefix+'instagram2':
            case prefix+'ig2':
            try {
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ig2 Link Instagram*\n\nContoh:\n ${prefix}ig2 https://www.instagram.com/p/CHFhycxga-B/`, id)
                if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return tobz.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
                tobz.reply(from, mess.wait, id)
                let arrBln = ["Januari","Februaru","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
                const idRegex = /([-_0-9A-Za-z]{11})/
                const idIGG = args[1].match(idRegex)
                await getPost(idIGG[0]).then((post) => {
                    let a = new Date(post.date * 1000)
                    const jam = a.getHours()
                    const menit = a.getMinutes()
                    const bulan = a.getMonth()
                    const tanggal = a.getDate()
                    const tahun = a.getFullYear()
                    const captig = 
`*VIDEO BERHASIL DIDOWNLOAD!*

~> *Username* : ${post.owner_user}
~> *Waktu Publish* : ${jam}:${menit} ${tanggal}-${arrBln[bulan - 1]}-${tahun}
~> *Capt* : ${post.capt}`

tobz.sendFileFromUrl(from, post.url, `Insta`, captig, id)
                })
            } catch (err) {
                tobz.reply(from, `Kesalahan dengan kode error : ${err}`)
                console.log(err)
            }
            await tobz.sendSeen(from)
            break
        case prefix+'ig': 
        case prefix+'instagram':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ig Link Instagram*\n\nContoh:\n ${prefix}ig https://www.instagram.com/p/CHFhycxga-B/`, id)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return tobz.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
            await tobz.reply(from, mess.wait, id);
            const instagram = async (url) => new Promise(async (resolve, reject) => {
                const api = `https://api.vhtear.com/instadl?link=${url}&apikey=${vhtearkey}`
                axios.get(api).then(async(res) => {
                    const st = res.data.result
                    if(st.status === false){
                        resolve(`Media Tidak Di Temukan`)
                    }else{
                        resolve(st)
                    }
                }).catch(err => {
                    console.log(err)
                    resolve(`Maaf, Server Sedang Error`)
                })
            })
            instagram(args[1]).then(async(res) => {
                let username = res.owner_username;
                for (let i = 0; i < res.post.length; i++) {
                if (res.post[i].type == "image") {
                        await tobz.sendFileFromUrl(from, res.post[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n~> *Username* : ${username}\n~> *Tipe* : Image/Jpg`, id);
                        limitAdd(serial)
                    } else if (res.post[i].type == "video") {
                        await tobz.sendFileFromUrl(from, res.post[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n~> *Username* : ${username}\n~> *Tipe* : Video/MP4`, id);
                    }
                }
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break 
            





            case prefix+'igstory2':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *#readme*`)
                //if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return tobz.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
                await tobz.reply(from, mess.wait, id);
                const igstory2 = async (url) => new Promise(async (resolve, reject) => {
                    const api = `https://api.vhtear.com/igstory?query=${url}&apikey=${vhtearkey}`
                    axios.get(api).then(async(res) => {
                        const st = res.data.result
                        if(st.status === false){
                            resolve(`Media Tidak Di Temukan`)
                        }else{
                            resolve(st)
                        }
                    }).catch(err => {
                        console.log(err)
                        resolve(`Maaf, Server Sedang Error`)
                    })
                })
                igstory2(args[1]).then(async(res) => {
                    for (let i = 0; i < res.post.length; i++) {
                    if (res.itemlist[i].type == "image") {
                            await tobz.sendFileFromUrl(from, res.itemlist[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n*Tipe* : Image/Jpg`, id);
                            limitAdd(serial)
                        } else if (res.itemlist[i].type == "video") {
                            await tobz.sendFileFromUrl(from, res.itemlist[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n*Tipe* : Video/MP4`, id);
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                    tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
                })
                break 


















        case prefix+'fb':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *#fb [ Link Fb ]*\nContoh : *#fb https://www.facebook.com/24609282673/posts/10158628585367674/*`, id)
            tobz.reply(from, mess.wait, id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*「 FACEBOOK DOWNLOADER 」*\n➸ *Aplikasi*: Facebook\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                tobz.sendFileFromUrl(from, VideoUrl, `Facebook.mp4`, epbe2, id)
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
            case prefix+'pigtext':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 0) return tobz.reply(from, `Kirim perintah ${prefix}pigtext [ teks ], contoh ${prefix}pigtext ZXCBOT`, id)
                tobz.reply(from, mess.wait, id)
					const piggy = body.slice(8)
					tobz.sendStickerfromUrl(from, `https://naufalhoster.xyz/textmaker/pigtext?apikey=${naufalkey}&text=${piggy}`)
					await limitAdd(serial)
                    break

            case prefix+'tahtacustom': 
            case prefix+'tahtacs': 
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            ////if (!isVipUser) return tobz.reply(self, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281220439155_ ', id)       
            //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
		    if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}searchteks [ |Teks1|Teks2|teks3 ]*, contoh *${prefix}searchteks |Juwen|Gans|Banget*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                tobz.reply(from, mess.wait, id)
                const tahtacs = argz[1]
                const tahtacs2 = argz[2]
                const tahtacs3 = argz[3]
                tobz.sendFileFromUrl(from, `https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=${naufalkey}&text1=${tahtacs}&text2=${tahtacs2}&text3=${tahtacs3}`, `aawkowkaw.jpg`, `${tahtacs} ${tahtacs2} ${tahtacs3}`,  id)
                await limitAdd(serial)
            }    else {
			await tobz.reply(from, `Wrong Format!\nKirim perintah *${prefix}tahtacustom  [ |Teks1|Teks2|teks3 ]*, contoh *${prefix}tahtacustom |Juwen|Gans|Banget*`, id)
            }
            break

        case prefix+'waktu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await tobz.sendText(from, `Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
            await limitAdd(serial)
            break

     /*       case prefix+'tiktok':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Pilih:\n\n> ${prefix}tiktok wm *linknya*\n> ${prefix}tiktok nowm *linknya*\n> ${prefix}tiktok song *linknya*`, id)
            tobz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const tiktod = await slicedArgs.join(' ')
            if (args[2].toLowerCase() === 'wm') {
                const tiktoknowm1 = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${tiktod}`) 
                const tiktoknowm2 = tiktoknowm1.data
                tobz.sendFileFromUrl(from, tiktoknowm2.result.videoNoWatermark,``, `Data berhasil di dapatkan!\n\n*Username*: [ ${tiktoknowm2.result.username} ]\n*Nickname*: [ ${tiktoknowm2.result.nickname} ]\n*Caption*: [ ${tiktoknowm2.result.caption} ]`, id)
            } else if (args[2].toLowerCase() === 'nowm') {
                const tiktoknowm1 = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${tiktod}`) 
            const tiktoknowm2 = tiktoknowm1.data
            tobz.sendFileFromUrl(from, tiktoknowm2.result.videoWithWatermark,``, `Data berhasil di dapatkan!\n\n*Username*: [ ${tiktoknowm2.result.username} ]\n*Nickname*: [ ${tiktoknowm2.result.nickname} ]\n*Caption*: [ ${tiktoknowm2.result.caption} ]`, id)
            } else if (args[2].toLowerCase() === 'song') {
                const tiktok1nowm1 = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${tiktod}`) 
                const tiktok1nowm2 = tiktok1nowm1.data
                await tobz.sendFileFromUrl(from, tiktok1nowm2.result.thumbnail, `awkokw.jpg`, `*Data berhasil di dapatkan!*\n\n*Username*: [ ${tiktok1nowm2.result.username} ]\n*Nickname*: [ ${tiktok1nowm2.result.nickname} ]\n*Caption*: [ ${tiktok1nowm2.result.caption} ]\n\n_Tunggu sebentar, file membutuhkan beberapa menit untuk dikirim_`, id)
                tobz.sendFileFromUrl(from, tiktok1nowm2.result.audioOnly, ``, ``, id)
            } else {
                tobz.reply(from, `Pilih:\n\n> ${prefix}tiktok wm\n> ${prefix}tiktok nowm\n> ${prefix}tiktok`, id)
            }
            break */
            case prefix+'ttnowm':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ttnowm [linkVideoTikTod]*\nContoh : *${prefix}ttnowm link*`, id)
            tobz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const tiktoknowm = await slicedArgs.join(' ')
            const tiktoknowm1 = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${tiktoknowm}`) 
            const tiktoknowm2 = tiktoknowm1.data
            tobz.sendFileFromUrl(from, tiktoknowm2.result.videoNoWatermark,``, `Data berhasil di dapatkan!\n\n*Username*: [ ${tiktoknowm2.result.username} ]\n*Nickname*: [ ${tiktoknowm2.result.nickname} ]\n*Caption*: [ ${tiktoknowm2.result.caption} ]`, id)
            await limitAdd(serial)
            break
            case prefix+'tiktok':      
            if(isReg(obj)) return        
            if(cekumur(cekage)) return
            if (isLimit(serial)) return juwen.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return juwen.reply(from, `Kirim perintah *${prefix}ttnowm [linkVideoTikTod]*\nContoh : *${prefix}ttnowm link*`, id)
            juwen.reply(from, `Tunggu sebentar, sedang di proses...\n\nUntuk mendownload tanpa wm gunakan ${prefix}ttnowm`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const tiktoknowm0 = await slicedArgs.join(' ')
            const tiktoknowm5 = await axios.get(`https://api.vhtear.com/tiktokdl?link=${tiktoknowm0}&apikey=${vhtearkey}`) 
            const tiktoknowm6 = tiktoknowm5.data
            juwen.sendFileFromUrl(from, tiktoknowm6.result.video, ``, `*[ Data berhasil di dapatkan! ]*`, id)
            await limitAdd(serial)
            break
            case prefix+'ttsong':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}ttnowm [linkVideoTikTod]*\nContoh : *${prefix}ttnowm link*`, id)
                //tobz.reply(from, mess.wait, id)
                argz = body.trim().split(' ')
                var slicedArgs = Array.prototype.slice.call(argz, 1);
                const tiktok1nowm = await slicedArgs.join(' ')
                const tiktok1nowm1 = await axios.get(`https://naufalhoster.xyz/dl/tiktok?apikey=${naufalkey}&url=${tiktok1nowm}`) 
                const tiktok1nowm2 = tiktok1nowm1.data
                await tobz.sendFileFromUrl(from, tiktok1nowm2.result.thumbnail, `awkokw.jpg`, `*Data berhasil di dapatkan!*\n\n*Username*: [ ${tiktok1nowm2.result.username} ]\n*Nickname*: [ ${tiktok1nowm2.result.nickname} ]\n*Caption*: [ ${tiktok1nowm2.result.caption} ]\n\n_Tunggu sebentar, file membutuhkan beberapa menit untuk dikirim_`, id)
                tobz.sendFileFromUrl(from, tiktok1nowm2.result.audioOnly, ``, ``, id)
                await limitAdd(serial)
                break

            case prefix+'tiktok2':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}tiktok* _linkVideoTikTod_`, id)
            await limitAdd(serial)
            tobz.reply(from, mess.wait, id)
            try{
            function tiktod(url) {
              return new Promise((resolve, reject) => {
                try {
                  tiktok.getVideoMeta(url)
                  .then((result) => {
                    const data = result.collector[0]
                    let Tag = []
                    for (let i = 0; i < data.hashtags.length; i++) {
                      const name = data.hashtags[i].name
                      Tag.push(name)
                    }
                    // console.log(data)
                    const id = data.id
                    const text = data.text
                    const date = data.createTime
                    const name = data.authorMeta.name
                    const nick = data.authorMeta.nickName
                    const music = data.musicMeta.musicName
                    const thumb = data.imageUrl
                    const hastag = Tag

                    resolve({
                      id: id,
                      name: name,
                      nickname: nick,
                      timestamp: date,
                      thumb: thumb,
                      text: text,
                      music: music,
                      hastag: hastag
                    })
                  })
                .catch(reject)
              } catch (error) {
                console.log(error)
              }
              })
            }

            tiktod(args[1]).then(resul => {
              const meta = resul
              const exekute = exec('tiktok-scraper video ' + args[1] + ' -d')

              exekute.stdout.on('data', function(data) {
                const res = { loc: `${data.replace('Video location: ','').replace('\n','')}` }
                const json = {
                  meta,
                  res,
                } 
                let hastagtik = `[ `
                for (var i = 0; i < json.meta.hastag.length; i++) {
                    hastagtik += `${json.meta.hastag[i]} `
                }
                hastagtik += ` ]`
                const capt_tikt = `*Data berhasil didapatkan!*

*Nama* : ${json.meta.name}
*Nickname* : ${json.meta.nickname}
*Caption* : ${json.meta.text}
*Music* : ${json.meta.music}
*Hastag* : ${hastagtik}
`
            tobz.sendFile(from, json.res.loc, `tiktod.${json.res.loc.substr(-3)}`, capt_tikt, id)
              })
            })
            } catch (err){
                tobz.sendText(ownerNumber, 'Error tiktod = '+err)
                tobz.reply(from, `Terjadi kesalahan saat mengakses file tersebut, tidak bisa mengirim video!`)
            }
            await tobz.sendSeen(from)
            break 
        case prefix+'smule':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#smule [linkSmule]*\nContoh : *#smule https://www.smule.com/p/767512225_3062360163*', id)
            tobz.reply(from, mess.wait, id)
            smule(args[1]).then(async(res) => {
                let { Type, title, url, image } = await res
                let tsmule = `*「 SMULE DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ *Type:* ${Type}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                tobz.sendFileFromUrl(from, image, 'thumb.jpg', tsmule, id)
                await tobz.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'starmaker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#starmaker [linkStarmaker]* untuk contoh silahkan kirim perintah *#readme*')
            tobz.reply(from, mess.wait, id)
            starmaker(args[1]).then(async(res) => {
                let { image, desc, url, title } = await res
                let tstarmaker = `*「 STARMAKER DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                tobz.sendFileFromUrl(from, image, 'thumb.jpg', tstarmaker, id)
                await tobz.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
            case prefix+'twitter':
            case prefix+'twt':
                    try {
                        if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}twt [linkVideoTwitter]* untuk contoh silahkan kirim perintah *!readme*` , id)
                        if (!args[1].includes('twitter.com')) return tobz.reply(from, mess.error.Iv, id)
                        linktwit = args[1].toString()
                        tobz.reply(from, mess.wait, id)
                        const twit = await twitter2(args[1])
                        tobz.sendFileFromUrl(from, twit.url, `Ignyakk${twit.exts}`, twit.capt, id)
                    } catch (err) {
                        tobz.reply(from, `Kesalahan dengan kode error : ${err}`)
                        console.log(err)
                    }
                    await tobz.sendSeen(from)
                    break
       /* case prefix+'twitter':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *#twitter [ Link Twitter ]* untuk contoh silahkan kirim perintah *#readme*`)
            tobz.reply(from, mess.wait, id)
            twitter(args[1]).then(async(res) => {
                let { desk, urlVideo } = await res
                let ttwitter = `*「 TWITTER DOWNLOADER 」*\n\n➸ *Aplikasi:* Twitter\n➸ *Deskripsi:* ${desk}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                await tobz.sendFileFromUrl(from, urlVideo, `twit.mp3`, ttwitter, id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break */
        case prefix+'maps':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#maps [optional]*, Contoh : *#maps Jakarta*')
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, 'maps.jpg', `*Hasil Maps : ${mapz}*`)
            limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             tobz.sendText(ownerNumber, 'Error Maps : '+ err)
           }
          break
          case prefix+'spotify':
            if (!isUser) return tobz.sendTextWithMentions(from, BelumDaftar(serial))
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}spotify [judul]*`, id)
            tobz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const wahyus = await slicedArgs.join(' ')
            try {
                const spotify = await axios.get(`https://api.vhtear.com/spotify?query=${wahyus}&apikey=${vhtearkey}`)
                const spoti  = spotify.data.result
                console.log(spoti)
                for (let i = 0; i < spoti.length; i++){
                tobz.sendFileFromUrl(from, spoti[0].url, ``, ``, id)
                }
                limitAdd(serial)
            } catch (err) {
                tobz.sendText(ownerNumber, 'Error Spotify : '+ err)
                tobz.reply(from, mess.error.Yt3, id)
            }
            break
          case prefix+'joox':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 0) return tobz.reply(from, `Kirim perintah ${prefix}joox [ Optional ]\nContoh : ${prefix}joox Alan Walker`, id)
            tobz.reply(from, mess.wait, id)
            const joox = async (url) => new Promise(async (resolve, reject) => {
                const api = `https://api.vhtear.com/music?query=${url}&apikey=${vhtearkey}`
                axios.get(api).then(async(res) => {
                    const st = res.data.result[0]
                    if(st.status === false){
                        resolve(`Media Tidak Di Temukan`)
                    }else{
                        resolve(st)
                    }
                }).catch(err => {
                    console.log(err)
                    resolve(`Maaf, Server Sedang Error`)
                })
            })
            joox(body.slice(6)).then(async(res) => {
                let { penyanyi, judul, album, linkImg, linkMp3, filesize, ext, duration } = await res
                let tjoox = `*「 JOOX DOWNLOADER 」*\n\n*Penyanyi:* ${penyanyi}\n*Judul:* ${judul}\n*Album:* ${album}\n*Ext:* ${ext}\n*Size:* ${filesize}\n*Durasi:* ${duration}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                tobz.sendImage(from, linkImg, judul, tjoox)
                tobz.sendFileFromUrl(from, linkMp3, `${judul}.${ext}`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            await limitAdd(serial)
            break


      /*    case prefix+'joox':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            tobz.reply(from, mess.wait, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *#joox [ Optional ]*\nContoh : *#joox Alan Walker*`, id)
            tobz.reply(from, mess.wait, id)
            joox(args[1]).then(async(res) => {
                let { penyanyi, judul, album, linkImg, linkMp3, filesize, ext, duration } = await res
                let tjoox = `*「 JOOX DOWNLOADER 」*\n\n➸ *Penyanyi:* ${penyanyi}\n➸ *Judul:* ${judul}\n➸ *Album:* ${album}\n➸ *Ext:* ${ext}\n➸ *Size:* ${filesize}\n➸ *Durasi:* ${duration}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                tobz.sendImage(from, linkImg, judul, tjoox)
                tobz.sendFileFromUrl(from, linkMp3, `${judul}.${ext}`, '', id).catch(() => tobz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                tobz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break   */
        case prefix+'checkip':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*', id)
            tobz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`

            const pictk = await bent("buffer")(location.country_flag)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            tobz.sendImage(from, base64, city, cekip3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await tobz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             tobz.sendText(ownerNumber, 'Error Check IP : '+ err)
           }
          break
        /*case prefix+'nhentai':
        case prefix+'nh':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                tobz.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            tobz.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id).then(() => 
                            tobz.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() => 
                            tobz.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        tobz.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    tobz.reply(from, '[❗] Kode nuklir Salah!')
                }
            } else {
                tobz.reply(from, '[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*')
            }
            break*/
        case prefix+'brainly':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return tobz.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                tobz.reply(from, `*Pertanyaan* : ${tanya.split('.')[0]}\n\n*Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            tobz.reply(from, ` *Pertanyaan* : ${x.pertanyaan}\n\n*Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                            limitAdd(serial)
                        } else {
                            tobz.reply(from, ` *Pertanyaan* : ${x.pertanyaan}\n\n*Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                            limitAdd(serial)
                        }
                    })
                })
            } else {
                tobz.reply(from, 'Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2', id)
            }
            await limitAdd(serial)
            break
			case prefix+'save':
			if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
			if (args.length === 1) return tobz.reply(from, `Beri nama untuk gambarnya!`, id)
			const namas = body.slice(6)
			tobz.reply(from, `Tunggu sebentar, sedang diupload ke database.`, id)
                if (isMedia || isQuotedImage ||isMedia && type === 'image') {
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
					{
                    const aqule = ({
                        nama: namas,
                        linkpo: linkImg
                            })
					svimage.push(aqule)
                    fs.writeFileSync('./lib/database/svimage.json', JSON.stringify(svimage)) // DATABASE
                    tobz.reply(from, `Image berhasil disimpan dengan nama : *${namas}*`, id) 
					}
				} else if (quotedMsg && quotedMsg.type == 'sticker'){
					const mediaData = await decryptMedia(quotedMsg)
					const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
					const stiimg = (imageBase64, 'imgsticker.jpg')
					const linkImg = await uploadImages(stiimg, `${sender.id}_img`)
					{
                    const aqule = ({
                        nama: namas,
                        linkpo: linkImg
                            })
					svimage.push(aqule)
                    fs.writeFileSync('./lib/database/svimage.json', JSON.stringify(svimage)) // DATABASE
                    tobz.reply(from, `Sticker berhasil disimpan dengan nama : *${namas}*`, id) 
                    }
				}else{
					tobz.reply(from, 'Reply gambar atau sticker', id)
				}
				
            break
            case prefix+'savestiker':
                if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
                //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                if (args.length === 1) return tobz.reply(from, `Hai ${pushname} untuk menggunakan fitur save stiker ketik *${prefix}savestiker* _Nama nya_`, id)
                if (quotedMsg) {
                    if (quotedMsg.type === 'sticker') {
                        try {
                            mediaData = await decryptMedia(quotedMsg, uaOverride)
                            fs.writeFileSync(`./media/saved_stickers/${body.slice(12)}.jpg`, mediaData)
                            tobz.reply(from, `Stiker berhasil tersimpan!\n\nUntuk melihat list ketik *${prefix}liststiker*`, id)
                        } catch(e) {
                            tobz.reply(from, `Gagal save sticker!`, id)
                            tobz.reply(owner, util.format(e), id)
                        }
                    } else {
                        tobz.reply(from, `Harus tag stiker!`, id)
                    }
                } else {
                    tobz.reply(from, `Gaada data yang ditag gan`, id)
                }
                break
            case prefix+'liststiker':
                if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
                //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                const listed_stick = fs.readdirSync('./media/saved_stickers/')
                let capliststik = `Ketik perintah *${prefix}getstiker _Nama nya_* untuk mengambil data stiker\n\n*Jumlah stiker* : ${listed_stick.length}\n\n*Stiker tersimpan :*\n`
                for (let i = 0; i < listed_stick.length; i++) {
                    capliststik += `\n➣ ${listed_stick[i].replace('.jpg','')}`
                }
                tobz.reply(from, capliststik, id)
                break
            case prefix+'getstiker':
                if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
                //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                if (args.length === 1) return tobz.reply(from, `Hai ${pushname} untuk menggunakan fitur get stiker ketik *!getstiker* _Nama nya_`, id)
                try {
                    const get_stick = await fs.readFileSync('./media/saved_stickers/' + body.slice(11) + '.jpg', { encoding: "base64" })
                    await tobz.sendImageAsSticker(from, `data:image/jpeg;base64,${get_stick.toString('base64')}`, ``, ``, id)
                } catch (e){
                    tobz.reply(from, `Kesalahan mengambil stiker! cek kembali nama stiker dengan ketik *!liststiker*`)
                }
                break
            case prefix+'delstiker':
                if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
                //if (!isGroupMsg) return tobz.reply(from, menuPriv, id)
                if (!isOwner) return tobz.reply(from, `Hanya untuk owner bot!`, id)
                try {
                    await fs.unlinkSync('./media/saved_stickers/' + body.slice(11) + '.jpg').then(() => {
                        tobz.reply(from, `Menghapus Stiker ${body.slice(11)}`, id)
                    })
                } catch (e) {
    
                }
                break
			case prefix+'listsvimg':
            if (!isAdmin) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin ZXCBOT!`, id)
                const badd = fs.readFileSync('./lib/database/svimage.json')
                const listee = JSON.parse(badd)
                let listzz = '*「 LIST SV IMAGE 」*\n'
                listzz += `*Total : ${listee.length}*\n`
                let nomree = 1
                     for (let i = 0; i < listee.length; i++){
                        listzz += `\n*${nomree}.* ${listee[i]}`
                        nomree++
                    }
                    tobz.sendText(from, listzz) 
                    break
		case prefix+'simg':
			if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
			const konci = body.slice(6)
			const senim = fs.readFileSync('./lib/database/svimage.json')
            const imagii = JSON.parse(senim)
			var found = false
                Object.keys(svimage).forEach((i) => {
                    if(svimage[i].nama == konci){
                        found = i
                    }
                })
				if (found !== false) {
					const senimg = svimage[found]
					tobz.sendFileFromUrl(from, senimg.linkpo, 'image.jpg', senimg.nama, id)
				} else {
					tobz.reply(from, 'ga ada di database anjir', id)
				}
			break
		case prefix+'ssticker':
			if(!isAdmin) return tobz.reply(from, 'Khusus admin bot doang yang bisa!', id)
			const koncis = body.slice(10)
			const senims = fs.readFileSync('./lib/database/svimage.json')
            const imagiis = JSON.parse(senims)
			var found = false
                Object.keys(svimage).forEach((i) => {
                    if(svimage[i].nama == koncis){
                        found = i
                    }
                })
				if (found !== false) {
					const senimgs = svimage[found]
					tobz.sendStickerfromUrl(from, senimgs.linkpo, '', '', id)
											
				} else {
					tobz.reply(from, 'ga ada di database anjir', id)
				}
			break
        case prefix+'math':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, '[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
            const mtk = body.slice(6)
            if (typeof Math_js.evaluate(mtk) !== "number") {
            tobz.reply(from, `"${mtk}", bukan angka!\n[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
            limitAdd(serial)
        } else {
            tobz.reply(from, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`, id)
        }
        break
        case prefix+'wait':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                tobz.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        tobz.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    tobz.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        tobz.reply(from, teks, id)
                        limitAdd(serial)
                    })
                })
                .catch(() => {
                    tobz.reply(from, 'Error !', id)
                })
            } else {
                tobz.sendFileFromUrl(from, tutor, 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
        case prefix+'textmaker':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                argz = body.trim().split('|')
                tobz.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if ((isMedia || isQuotedImage) && argz.length >= 2) {
                const top = argz[1]
                const bott = argz[2]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await custom(getUrl, top, bott)
                await tobz.sendFile(from, ImageBase64, 'image.png','neh...')
                await limitAdd(serial)
                } else {
                await tobz.reply(from, 'Wrong Format!', id)
                }
                break
        case prefix+'quotemaker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 4) {
                tobz.reply(from, mess.wait, id)
                const quotes = argz[1]
                const author = argz[2]
                const theme = argz[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    limitAdd(serial)
                    tobz.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       tobz.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                tobz.reply(from, 'Usage: \n#quotemaker |teks|watermark|theme\n\nEx :\n#quotemaker |ini contoh|bicit|random', id)
            }
            break
        /*case prefix+'listchannel':
            
            tobz.reply(from, listChannel, id)
            break
        case prefix+'jadwaltv':
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#jadwalTv [channel]*', id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            tobz.reply(from, jadwal, id)
            break
        case prefix+'jadwaltvnow': // API MATI
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const jadwalNow = await axios.get('https://api.haipbis.xyz/jadwaltvnow')
            tobz.reply(from, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, id)
            break*/
       /* case prefix+'nulis':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *#nulis [teks]*, contoh *#nulis aku bukan boneka*', id)
            const ngettik = body.slice(7)
            const ngetikk = await axios.get(`https://arugaz.herokuapp.com/api/nulis?text=${ngettik}`)
            if (ngetikk.data.error) return tobz.reply(from, ngetikk.data.error, id)
            tobz.sendFileFromUrl(from, ngetikk.data.result, 'nulis.jpg', '', id)
            await limitAdd(serial)
            break */
			
			
        case prefix+'inu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            tobz.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            await limitAdd(serial)
            break
        case prefix+'qrcode':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(!args.lenght >= 2) return
            let qrcodes = body.slice(8)
            await tobz.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!', id)
            await limitAdd(serial)
            break
      /*  case prefix+'ptl':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            tobz.sendFileFromUrl(from, pep, 'pptl.jpg', 'Follow ig : https://www.instagram.com/ptl_repost untuk mendapatkan penyegar timeline lebih banyak', message.id)
            await limitAdd(serial)
            break */
        case prefix+'neko':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            tobz.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko')
            await limitAdd(serial)
            break
        case prefix+'pokemon':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            q7 = Math.floor(Math.random() * 890) + 1;
            tobz.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            await limitAdd(serial)
            break
            //V3456hG822937HjHAGS
        case prefix+'quote':
        case prefix+'quotes':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const quotez2 = await axios.get(`https://tobz-api.herokuapp.com/api/randomquotes?apikey=${tobzkey}`)
            tobz.reply(from, `_${quotez2.data.quotes}_\n\n ~ ${quotez2.data.author}`, id)
            await limitAdd(serial)
            break
            case prefix+'dilan':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const dilan = await axios.get(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                tobz.reply(from, `${dilan.data.result}`, id)
                await limitAdd(serial)
                break
                case prefix+'bucin2':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const bucin2 = await axios.get(`http://api.lolhuman.xyz/api/random/bucin?apikey=${lolkey}`)
                tobz.reply(from, `${bucin2.data.result}`, id)
                await limitAdd(serial)
                break
               
		case prefix+'quoteid':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const quotez3 = await axios.get('https://api.vhtear.com/quoteid&apikey=juwenajaa')
            tobz.reply(from, quotez3.data.kata, id)
            await limitAdd(serial)
            break
        case prefix+'pastebin': //BY VINZ
        if(isReg(obj)) return
        if(cekumur(cekage)) return
        if (args.length == 1) return tobz.reply(from, `Ketik command ${prefix}pastebin [text]|[nama]\nContoh ${prefix}pastebin laptop adalah blablabla|juwen`, id)
           await tobz.reply(from, mess.wait, id)
           var bdtrm = body.slice(10).trim().split('|')
           const pstbn = await axios.get(`https://zeksapi.herokuapp.com/api/pastebin?apikey=benbenz&text=${bdtrm[0]}&name=${bdtrm[1]}`) 
		console.log(bdtrm[0])
		if (pstbn.data.status == false) return tobz.reply(from, pstbn.data.message ,id)
        await tobz.reply(from, pstbn.data.result, id) 
        break
		
		
	/*	case prefix+'lirik':
		tobz.reply(from, `Pilih Salah satu:\n\n> ${prefix}lirik1\n> ${prefix}lirik2`, id)
		break
        case `prefix+'lirik`1':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return tobz.reply(from, `Kirim perintah *${prefix}lirik1 [optional]*, contoh *${prefix}lirik1 aku bukan boneka*`, id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            tobz.reply(from, lirik, id)
            await limitAdd(serial)
            break */
			
			
			case prefix+'lirik':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return tobz.reply(from, `Kirim perintah *${prefix}lirik1 [optional]*, contoh *${prefix}lirik1 aku bukan boneka*`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const queryy__ = await slicedArgs.join(' ')
            const chordd = await axios.get(`https://api.vhtear.com/liriklagu?query=${queryy__}&apikey=${vhtearkey}`)
            //if (chordd.data.error) return tobz.reply(from, chordd.data.error, id)
            tobz.reply(from, chordd.data.result.result, id)
            await limitAdd(serial)
            break
			
			
			
        case prefix+'chord':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}chord [query]*, contoh *${prefix}chord aku bukan boneka*`, id)
            try{
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const  query__ = await slicedArgs.join(' ')
            const chord = await axios.get(`https://naufalhoster.xyz/tools/chord?apikey=${naufalkey}&query=${query__}`)
            const chord2 = chord.data.result
            tobz.reply(from, `*Pencarian Lagu: ${query__}*\n\n*Chord:*\n${chord2.chord}`, id)
        } catch (err) {
            console.error(err)
            await tobz.reply(from, 'Maaf chord yang anda cari mungkin tidak ada.', id)
        }
            await limitAdd(serial)
            break
        case prefix+'listdaerah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const listDaerah = await axios.get('https://tobz-api.herokuapp.com/api/daerah')
            tobz.reply(from, listDaerah.data.result, id)
            await limitAdd(serial)
            break
            case prefix+'gift': // Hanya Admin & Owner Elaina yang bisa gift Limit
            if (!isOwner && !isAdmin) return tobz.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh AdminBan!`, id)
            const nomernyaa = args[1]
                    let textnyaaa = nomernyaa.replace(/[-\s+@c.us]/g,'')
                    const nomerr = textnyaaa + '@c.us'
                    const jmla = args[2]
                    if(!nomerr) return tobz.reply(from, `Masukkan nomor yang akan di gift, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    let texta = nomerr.replace(/[-\s+@c.us]/g,'')
                    const cusz = texta + '@c.us'
                    if(!jmla) return tobz.reply(from, `Masukkan Jumlah gift quota, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    if(jmla > 99999999999) return await tobz.reply(from, `Maximal  20!`, id)
                        var found = false
                        Object.keys(limit).forEach((i) => {
                            if(limit[i].id == cusz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            limit[found].limit = Math.max(0, limit[found].limit);
                            if(limit[found].limit <= 0) return tobz.reply(from, `Kuota Limit pada nomor tersebut masih penuh\n\nUntuk gift pastikan kuota limit target sudah habis`, id)
                            if(limit[found].limit <= 0) { // JIKA LIMIT 0 MAKA BISA GIFT
                                return tobz.reply(from, `Kuota limit pada nomor tersebut sudah penuh!`, id)
                            }else{
                            limit[found].limit -= jmla
                            const updated = limit[found]
                            const usergift = `@${updated.id.replace('@c.us','')}`
                            const userlimit = limitCount-updated.limit
                            const usertime = moment().format('DD/MM/YY HH:mm:ss')
                            const result = monospace( 
`⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻

GIFT KUOTA LIMIT SUKSES DENGAN:

SN: ${SN} 
PADA: ${usertime}


「 GIFT KUOTA LIMIT 」

• User : ${usergift}
• Limit: ${userlimit}

⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻`)
                            console.log(limit[found])
                            fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                            tobz.sendTextWithMentions(from, result)
                            }
                        } else {
                                tobz.reply(from, `Maaf, nomor itu tidak terdaftar di database!`, id)
						
				}
                break
        case prefix+'slap':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const slap = arg.split(' ')[0]
            const person = author.replace('@c.us', '')
            await tobz.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
            tobz.sendTextWithMentions(from, '@' + person + ' *slapped* ' + slap)
            limitAdd(serial)
            break
            case prefix+'retro': 
            ////if (!isVipUser) return tobz.reply(self, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281220439155_ ', id)       
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *#searchteks [ |Teks1|Teks2|teks3 ]*, contoh *#searchteks |Juwen|Gans|Banget*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                tobz.reply(from, mess.wait, id)
                const retro = argz[1]
                const retro2 = argz[2]
                const retro3 = argz[3]
                if (retro.length > 6) return tobz.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 6 huruf!_', id)
                if (retro2.length > 6) return tobz.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 6 huruf!_', id)
                if (retro3.length > 6) return tobz.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 6 huruf!_', id)    
                tobz.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/neon?text1=${retro}&text2=${retro2}&text3=${retro3}`)
                await limitAdd(serial)
            } else {
			await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}searchteks [ |Teks1|Teks2|teks3 ]*, contoh *${prefix}searchteks |Juwen|Gans|Banget*`, id)
            }
            break
			
			
            case prefix+'searchteks': 
            case prefix+'googleteks': 
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            ////if (!isVipUser) return tobz.reply(self, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281220439155_ ', id)       
            //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
		if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}searchteks [ |Teks1|Teks2|teks3 ]*, contoh *${prefix}searchteks |Juwen|Gans|Banget*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                tobz.reply(from, mess.wait, id)
                const missing = argz[1]
                const missing2 = argz[2]
                const missing3 = argz[3]
                if (missing.length > 35) return tobz.reply(from, '*Teks 1 Terlalu Panjang!*\n_Maksimal 35 huruf!_', id)
                if (missing2.length > 35) return tobz.reply(from, '*Teks 2 Terlalu Panjang!*\n_Maksimal 35 huruf!_', id)
                if (missing3.length > 35) return tobz.reply(from, '*Teks 2 Terlalu Panjang!*\n_Maksimal 35 huruf!_', id)    
                tobz.sendFileFromUrl(from, `https://api.vhtear.com/googletext?text1=${missing}&text2=${missing2}&text3=${missing3}&apikey=${vhtearkey}`, 'searchteks.jpg', 'Nih Gambarnya', id)
                await limitAdd(serial)
            } else {
			await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}searchteks [ |Teks1|Teks2|teks3 ]*, contoh *${prefix}searchteks |Juwen|Gans|Banget*`, id)
            }
            break
            
       
			
			 case prefix+'fakta':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                tobz.reply(from, randomnix, id)
            })
            .catch(() => {
                tobz.reply(from, 'Ada yang Error!', id)
            })
            await limitAdd(serial)
            break
			case prefix+'katabijak':
                if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                tobz.reply(from, randombijak, id)
            })
            .catch(() => {
                tobz.reply(from, 'Ada yang Error!', id)
            })
            await limitAdd(serial)
            break		
            //
            case prefix+'ptl':
                if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/VideFrelan/words/main/ptl.txt')
            .then(res2 => res2.text())
            .then(body => {
                let splitmotivasi2 = body.split('\n')
                let randommotivasi2 = splitmotivasi2[Math.floor(Math.random() * splitmotivasi2.length)]
                tobz.sendFileFromUrl(from, randommotivasi2, ``, `*PTL*`,  id)
            })
            .catch(() => {
                tobz.reply(from, 'Ada yang Error!', id)
            })
            await limitAdd(serial)
            break
			case prefix+'motivasi':
                if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                tobz.reply(from, randommotivasi, id)
            })
            .catch(() => {
                tobz.reply(from, 'Ada yang Error!', id)
            })
            await limitAdd(serial)
            break
	
			
		case prefix+'pantun':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                tobz.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            .catch(() => {
                tobz.reply(from, 'Ada yang Error!', id)
            })	
            await limitAdd(serial)
				break
				case prefix+'katacinta':
                    if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/beniismael/whatsapp-bot/master/bucin.txt')
            .then(res => res.text())
            .then(body => {
                let splitcinta = body.split('11')
                let randomcinta = splitcinta[Math.floor(Math.random() * splitcinta.length)]
                tobz.reply(from, randomcinta, id)
            })
            .catch(() => {
                tobz.reply(from, 'Ada yang Error!', id)
            })
            await limitAdd(serial)
            break
          
        // ADMIN & OWNER
        case 'prefix':
           // tobz.reply(from, `[ PREFIX YANG SAAT INI DIGUNAKAN ]\n\n    *「* ${prefix} *」*`, id)
            tobz.reply(from, `*「 MULTI PREFIX 」*`, id)
            break
        case prefix+'setpackname':
            if(!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}setpackname this is ZXCBOT*`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const packnamewm2 = await slicedArgs.join(' ')
            setting.packnamewm = `${packnamewm2}`
            packnamewm = `${packnamewm2}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            tobz.reply(from, `Berhasil Mengganti Packname WM Ke 「 ${packnamewm2} 」`, id)
            break
            case prefix+'setautor':
            if(!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}setautor JUWEN`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const autorwm2 = await slicedArgs.join(' ')
            setting.autorwm = `${autorwm2}`
            autorwm = `${autorwm2}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            tobz.reply(from, `Berhasil Mengganti Author WM Ke *「 ${autorwm2} 」*`, id)
            break
            case prefix+'setprefix':
            if(!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const prefa = await slicedArgs.join(' ')
            setting.prefix = `${prefa}`
            prefix = `${prefa}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            tobz.reply(from, `Berhasil Mengganti Prefix Ke *「 ${prefa} 」*`, id)
            break

            case prefix+'setapikey':
            if(!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, id)
            const setapikey = body.slice(10)
            setting.vhtearkey = `${setapikey}`
            vhtearkey = `${setapikey}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            tobz.sendText(from, `Berhasil Mengatur limit menjadi *「* ${setapikey} *」*`)
            break
            case prefix+'setting':
                if(!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)   
                tobz.reply(from, `
> ${prefix}setprefix [prefix] (if multi prefix this is not work)
> ${prefix}setautor [name autor]
> ${prefix}setpackname [wm pack]
> ${prefix}setapikey [vhtearkey]
> ${prefix}setprofilepic [reply massage]
> ${prefix}setstatus [about]
> ${prefix}setname [name bot]`, id)
break
        case prefix+'addbadword':
            if (!isAdmin) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin ZXCBOT!`, id)
            if (!args.length >= 1) return tobz.reply(from, `Masukkan kata kasar yang akan di blacklist `, id) 
            const word = body.slice(12)
            var cek = dbbadword.includes(word);
            if(cek){
                return tobz.reply(from, `Badword Sudah Ada Di Database`, id)
            } else { 
                dbbadword.push(word)
                fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                tobz.reply(from, `Success Menambahkan Blacklist Badword\nTotal Data Badword Sekarang : *${dbbadword.length - 1}*`, id)
            }
            break
        case prefix+'delbadword':
            if (!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
                const delbd = dbbadword.indexOf(body.slice(12))
                dbbadword.splice(delbd, 1)
                fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                tobz.reply(from, `Success Menghapus Badword!`, id)
            break
        case prefix+'listbadword':
            if (!isAdmin) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin ZXCBOT!`, id)
                const bad = fs.readFileSync('./lib/database/katakasar.json')
                const liste = JSON.parse(bad)
                let listz = '*「 LIST BADWORD 」*\n'
                listz += `*Total : ${liste.length}*\n`
                let nomre = 1
                     for (let i = 0; i < liste.length; i++){
                        listz += `\n*${nomre}.* ${liste[i]}`
                        nomre++
                    }
                    tobz.sendText(from, listz) 
                    break
                    case prefix+'shutdown': // DANGER
                if (!isOwner) return await tobz.reply(from, 'FITUR KHUSUS OWNER', id)
                await tobz.sendText(from, 'SERVER DIMATIKAN!~ 👋')
                console.log('SERVER DI MATIKAN OLEH OWNER VIA WHATSAPP')
                await sleep(2000)
                    .then(async () => await tobz.kill())
            break
        case prefix+'bc': // KASIH CREDIT DONG KALO COPAS
            if (!isOwner) return tobz.reply(from, `Perintah ini hanya untuk Owner ZXCBOT`, id)
                bctxt = body.slice(4)
                txtbc = `*「 ZXCBOT BROADCAST 」*\n\n${bctxt}`
                const semuagrup = await tobz.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await tobz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) tobz.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    tobz.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await tobz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) tobz.sendText(grupnya, txtbc)
                    }
                            tobz.reply('Broadcast Success!')
                }
                break
                
        case prefix+'adminlist':
		case prefix+'admlist':
         if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
           var groupname = name
            let mimin = `*List Admin*\n*${groupname}*\n\n` 
            for (let admon of groupAdmins) {
                mimin += `• [ @${admon.replace(/@c.us/g, '')} ]\n` 
            }
            await tobz.sendTextWithMentions(from, mimin, id)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await tobz.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case prefix+'otagall': // FOR OWNER & ADMIN ZXCBOT
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner, !isAdmin) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)
            const groupMek = await tobz.getGroupMembers(groupId)
            let berhitung2 = 1
            let heho = `*[ TAGALL MEMBER! ]*\n\n*From:* @${sender.id.replace('@c.us','')}\n\n*Pesan:*\n${body.slice(7)}\n\n\n`
            for (let i = 0; i < groupMek.length; i++) {
                heho += `${i+1}. ` 
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            await tobz.reply(from, '*Tunggu!* Scanning Anggota...', id)
            await tobz.sendTextWithMentions(from, heho)
            break
            case prefix+'afk':
                if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isAfkOn) return await tobz.reply(from, `Anda sudah AFK sebelumnya`, id)
                const reason = body.slice(4)
                addAfkUser(sender.id, time, reason)
                await tobz.sendTextWithMentions(from, `@${sender.id.replace('@c.us','')} Sekarang AFK! ~`, id)
                break
            case prefix+'autosticker':
            case prefix+'autostiker':
            case prefix+'autostik':
                if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di dalam group!', id)
                if (!isGroupAdmins) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan oleh admin group!', id)
                if (args[1] === 'enable') {
                    if (isAutoStickerOn) return await tobz.reply(from, 'Auto stiker sudah dinyalakan di grup ini!', id)
                    _autosticker.push(groupId)
                    fs.writeFileSync('./lib/database/autosticker.json', JSON.stringify(_autosticker))
                    await tobz.reply(from, 'Autosticker diaktifkan', id)
                } else if (args[1] === 'disable') {
                    var grup = _autosticker.indexOf(groupId)
                    _autosticker.splice(grup, 1)
                    fs.writeFileSync('./lib/database/autosticker.json', JSON.stringify(_autosticker))
                    await tobz.reply(from, 'Autosticker dinonaktifkan', id)
                } else {
                    await tobz.reply(from, 'Pilih enable atau disable!', id)
                }
            break
            case prefix+'autostickervideo':
            case prefix+'autostikervideo':
            case prefix+'autostikvid':
                if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di dalam group!', id)
                if (!isGroupAdmins) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan oleh admin group!', id)
                if (args[1] === 'enable') {
                    if (isAutoStickerVideoOn) return await tobz.reply(from, 'Auto stiker sudah dinyalakan di grup ini!', id)
                    _autostickervideo.push(groupId)
                    fs.writeFileSync('./lib/database/autostickervideo.json', JSON.stringify(_autostickervideo))
                    await tobz.reply(from, 'Autosticker diaktifkan', id)
                } else if (args[1] === 'disable') {
                    var grup = _autostickervideo.indexOf(groupId)
                    _autostickervideo.splice(grup, 1)
                    fs.writeFileSync('./lib/database/autostickervideo.json', JSON.stringify(_autostickervideo))
                    await tobz.reply(from, 'Autosticker dinonaktifkan', id)
                } else {
                    await tobz.reply(from, 'Pilih enable atau disable!', id)
                }
            break

                case prefix+'level':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di group!', id)
                    if (!isLevelingOn) return await tobz.reply(from, 'Leveling belum diaktifkan!', id)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const userXp = level.getLevelingXp(sender.id, _level)
                    if (userLevel === undefined && userXp === undefined) return await tobz.reply(from, 'Kamu belum memiliki level', id)
                    const ppLink = await tobz.getProfilePicFromServer(sender.id)
                    if (ppLink === undefined) {
                        var pepe = errorurl
                    } else {
                        pepe = ppLink
                    }
                    const bege = card.getBg(sender.id, _bg)
                    const requiredXp = 200 * (Math.pow(2, userLevel) - 1)
                    const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                    const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                    const rank = new canvas.Rank()
                        .setAvatar(pepe)
                        .setLevel(userLevel)
                        .setRank(1, `${role}`, true) // Set value to true if you want to display user's roles
                        .setCurrentXP(userXp)
                        .setRequiredXP(requiredXp)
                        .setProgressBar([randomHexs, randomHex], 'GRADIENT')
                        .setBackground('IMAGE', bege)
                        .setUsername(pushname)
                        .setDiscriminator(sender.id.substring(6, 10))
                    rank.build()
                        .then(async (buffer) => {
                            canvas.write(buffer, `${pushname}_card.png`)
                            await tobz.sendFile(from, `${pushname}_card.png`, `${pushname}_card.png`, '', id)
                            fs.unlinkSync(`${pushname}_card.png`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await tobz.reply(from, 'Error!', id)
                        })
                break 
                case prefix+'leaderboard':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di dalam group!', id)
                    if (!isLevelingOn) return await tobz.reply(from, 'Leveling belum diaktifkan!', id) 
                    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                    let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                    let nom = 0
                    try {
                        for (let i = 0; i < 10; i++) {
                            nom++
                            leaderboard += `${nom}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n\n`
                        }
                        await tobz.reply(from, leaderboard, id)
                    } catch (err) {
                        console.error(err)
                        await tobz.reply(from, 'Perlu setidaknya 10 user dalam database', id)
                    }
                break
                case prefix+'setbackground':
                case prefix+'setbg':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (!isLevelingOn) return await tobz.reply(from, 'Leveling belum diaktifkan!', id)
                    if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan didalam group!', id)
                    const levels = level.getLevelingLevel(sender.id, _level)
                    const xps = level.getLevelingXp(sender.id, _level)
                    if (levels === undefined && xps === undefined) return await tobz.reply(from, 'Kamu belum memiliki level', id)
                    if (isMedia || isQuotedImage ||isMedia && type === 'image') {
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const link = await uploadImages(mediaData, `${sender.id}_bg`)
                        card.replaceBg(sender.id, link, _bg)
                        await tobz.reply(from, 'Success set new background!', id)
                    } else {
                        await tobz.reply(from, `Reply gambar atau kirim gambar dengan caption ${prefix}setbg`, id)
                    }
                break
                case prefix+'leveling':
                    if(isReg(obj)) return
                    if(cekumur(cekage)) return
                    if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini khusus di dalam group!', id)
                    if (!isGroupAdmins) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan oleh admin group!', id)
                    if (args[1] === 'enable') {
                        if (isLevelingOn) return await tobz.reply(from, 'Leveling udah aktif sebelumnya', id)
                        _leveling.push(groupId)
                        fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(_leveling))
                        await tobz.reply(from, 'Leveling diaktifkan', id)
                    } else if (args[1] === 'disable') {
                        var grup = _leveling.indexOf(groupId)
                        _leveling.splice(grup, 1)
                        fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(_leveling))
                        await tobz.reply(from, 'Leveling dinonaktifkan', id)
                    } else {
                        await tobz.reply(from, 'Pilih enable atau disable!', id)
                    }
                break 

                case prefix+'tagall':
                    case prefix+'mentionall':
                    if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
                    if (args.length === 1) {
                        const groupMem = await tobz.getGroupMembers(groupId)
                        let hehe = `*MENTION ALL MEMBER! ~*\n\n`
                        for (let i = 0; i < groupMem.length; i++) {
                            hehe += `*#* ` 
                            hehe += `@${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                        //await tobz.reply(from, '*Tunggu!* Scanning Anggota...', id)
                        await tobz.sendTextWithMentions(from, hehe)
                    } else if (!quotedMsg) {
                        argz = body.trim().split(' ')
                        var slicedArgs = Array.prototype.slice.call(argz, 1);
                        const pesan = await slicedArgs.join(' ')
                        const groupMem = await tobz.getGroupMembers(groupId)
                        let hehe2 = `*[ TAGALL MEMBER! ]*\n*Dari Admin:* @${sender.id.replace('@c.us','')}\n\n*Pesan:*\n${pesan}\n\n`
                        for (let i = 0; i < groupMem.length; i++) {
                            hehe2 += `${i+1}. ` 
                            hehe2 += `@${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                        await tobz.sendText(from, 'Tunggu! Scanning Anggota ~', id)
                        await tobz.sendTextWithMentions(from, hehe2)
                    }
                    break

     /*   case prefix+'tagall': // FOR GROUP ADMINS
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await tobz.getGroupMembers(groupId)
		    //const argzz1 = body.trim().split(' ')
            let berhitung1 = 1
            let hehe = `*[ TAGALL MEMBER! ]*\n\n*From:* @${sender.id.replace('@c.us','')}\n\n*Pesan:*\n${body.slice(7)}\n\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehe += `${i+1}. ` 
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            await tobz.reply(from, '*Tunggu!* Scanning Anggota...', id)
            await tobz.sendTextWithMentions(from, hehe)
            break
            //} else if (args.length === 2) {
     /*   case prefix+'ekickall':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await tobz.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await tobz.removeParticipant(groupId, allMem[i].id)
                }
            }
            tobz.reply(from, 'Success kick all member', id)
            break */
        case prefix+'okickall':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMeq = await tobz.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await tobz.removeParticipant(groupId, allMeq[i].id)
                }
            }
            tobz.reply(from, 'Succes kick all member', id)
            break 
        case prefix+'kickall':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await tobz.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await tobz.removeParticipant(groupId, allMek[i].id)
                }
            }
            tobz.reply(from, 'Success kick all member', id)
            break
        case prefix+'leaveall':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)
            const allChats = await tobz.getAllChatIds()
            const allGroups = await tobz.getAllGroups()
            for (let gclist of allGroups) {
                await tobz.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await tobz.leaveGroup(gclist.contact.id)
            }
            tobz.reply(from, 'Succes leave all group!', id)
            break
        case prefix+'clearall':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)
            const allChatz = await tobz.getAllChats()
            for (let dchat of allChatz) {
                await tobz.deleteChat(dchat.id)
            }
            tobz.reply(from, 'Succes clear all chat!', id)
            break
        case prefix+'oadd':
            const orang = args[1]
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return tobz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isOwner, !isAdmin) return tobz.reply(from, 'Perintah ini hanya untuk Admin ZXCBOT', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await tobz.addParticipant(from,`${orang}@c.us`)
            } catch {
                tobz.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'inv':
            case prefix+'add':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (!quotedMsg && args.length === 1) return tobz.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}add* 628xxxxx atau reply pesan orang`, id)
            if (!quotedMsg) {
            try {
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const orgh = await slicedArgs.join(' ')
            await tobz.addParticipant(from,`${orgh}@c.us`)
        } catch {
            tobz.reply(from, 'Ada yang error!', id)
        }
                 }else if(quotedMsg){
            try {
                var qmoed2 = quotedMsgObj.sender.id
                await tobz.addParticipant(from, qmoed2)
                tobz.reply(from, 'Permintaan diterima, menambahkan member yang di reply', id)
            } catch {
                tobz.reply(from, 'Ada yang error!', id)
            }
        } 
            break
        case prefix+'okick':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner Bot!', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}okick* @tagmember`, id)
            await tobz.sendTextWithMentions(from, `${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} akwokawokawo di kick`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return tobz.reply(from, mess.error.Sp, id)
                await tobz.removeParticipant(groupId, mentionedJidList[i])
            }
            break 
        case prefix+'kick':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (!quotedMsg && mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}kick* @tagmember atau reply pesan orang dan ketik *${prefix}kick*`, id)
            if (!quotedMsg) {
            await tobz.sendTextWithMentions(from, `${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} akwokawokawo di kick`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await tobz.removeParticipant(groupId, mentionedJidList[i])
            }
             }else if(quotedMsg){
                try {
                    var qmoed2 = quotedMsgObj.sender.id
                    await tobz.removeParticipant(from, qmoed2)
                    tobz.reply(from, 'Permintaan diterima, mengeluarkan member yang di reply', id)
                } catch {
                    tobz.reply(from, 'Ada yang error!', id)
                }
            } 
            break
         /*   case prefix+'edotensei':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return tobz.reply(from, `Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah ${prefix}edotensei @tagmember`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await tobz.removeParticipant(groupId, mentionedJidList[i])
                tobz.reply(from, '*Di add lagi sekarang!!*', id)
                await sleep(3500)
                await tobz.addParticipant(from,`${mentionedJidList}`)
				
            } 
            break */
            case prefix+'setkick':
                if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
                if (!isGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
                if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            tobz.reply(from, `Akan di kick dalam 30 detik`, id)
            await sleep(10000)
            await sleep(10000)
            await sleep(10000)
            await tobz.sendTextWithMentions(from, `${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} akwokawokawo di kick`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await tobz.removeParticipant(groupId, mentionedJidList[i]) }
                break

			case prefix+'gabut': // By Juwenajaa
			if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
			if (mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}add* @tagmember\n\nNote:\nFitur ini bisa dilakukan kalau member sebelumnya pernah join.`, id)
			if (!groupAdmins.includes(mentionedJidList[0])) return tobz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
			tobz.reply(from, '*Pertama di udm dulu*', id)
			await sleep(3500)
			await tobz.demoteParticipant(from,`${mentionedJidList}`)
			tobz.reply(from, '*Terus di kick*', id)
			await sleep(3500)
			for (let i = 0; i < mentionedJidList.length; i++) 
			{
            await tobz.removeParticipant(groupId, mentionedJidList[i])
			tobz.reply(from, '*Terus di add*', id)
			await sleep(3500)
			await tobz.addParticipant(from,`${mentionedJidList}`)
			await sleep(3500)
			tobz.reply(from, '*Jadiin adm lagi deh*', id)
			await sleep(3500)
			await tobz.promoteParticipant(from,`${mentionedJidList}`)
			tobz.reply(from, '*Tamat*.', id)
			await sleep(3500)
			}
			break
			
            case prefix+'nyoba':
			if(isOwner || isAdmin) {
			tobz.reply(from, 'test', id)
				} else {
			tobz.reply(from, 'Kalau bukan admin bot jangan sok keras', id)
				}
			break
            case prefix+'nyoba':
			if(isOwner || isAdmin) {
			tobz.reply(from, 'test', id)
				} else {
			tobz.reply(from, 'Kalau bukan admin bot jangan sok keras', id)
				}
			break
			
            case prefix+'oedotensei':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return tobz.reply(from, `Fitur ini hanya bisa di gunakan oleh Owner Bot!`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return tobz.reply(from, `Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah ${prefix}edotensei @tagmember`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await tobz.removeParticipant(groupId, mentionedJidList[i])
                tobz.reply(from, '*Di add lagi sekarang!!*', id)
                await sleep(3500)
                await tobz.addParticipant(from,`${mentionedJidList}`)
				 await sleep(3500)
				 tobz.reply(from, '*Di Promote lagi sekarang*', id)
				await tobz.promoteParticipant(from,`${mentionedJidList}`)
			}
          break
            break
        case prefix+'oleave':
		case prefix+'byeebot':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT!', id)
            await tobz.sendText(from,'ZXCBOT DIPERINTAHKAN KELUAR OLEH OWNER ZXCBOT!!', id).then(() => tobz.leaveGroup(groupId))
            break
            case prefix+'aleave':
		case prefix+'byebott':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isAdmin) return tobz.reply(from, 'Perintah ini hanya untuk Admin ZXCBOT!', id)
            await tobz.sendText(from,'ZXCBOT DIPERINTAHKAN KELUAR OLEH ADMIN ZXCBOT!!', id).then(() => tobz.leaveGroup(groupId))
            break
        case prefix+'leave':
		 case prefix+'byebot':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group!', id)
            tobz.sendText(from, 'ZXCBOT DIKELUARKAN DARI GRUP! ~ 👋', id)
            await sleep(2500) 
            tobz.leaveGroup(groupId)
            break
       case prefix+'opromote':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner Bot!', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}promote* @tagmember`, id)
            if (mentionedJidList.length >= 2) return tobz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return tobz.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await tobz.promoteParticipant(groupId, mentionedJidList[0])
            await tobz.sendTextWithMentions(from, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break 
        case prefix+'promote':
		case prefix+'adm':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (!quotedMsg && mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}promote* @tagmember atau bisa reply pesan member dan ketik ${prefix}adm`, id)
            if (mentionedJidList.length >= 3) return tobz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return tobz.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            if (!quotedMsg) {
            await tobz.promoteParticipant(groupId, mentionedJidList[0])
            await tobz.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)

              }else if(quotedMsg){
             var qmoed3 = quotedMsgObj.sender.id
             tobz.promoteParticipant(from, qmoed3)
             tobz.reply(from, `Berhasil menambahkan sebagai admin.`, id)
                 } 
             break

        case prefix+'odemote':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner Bot!', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}demote* @tagadmin`, id)
            if (mentionedJidList.length >= 2) return tobz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return tobz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await tobz.demoteParticipant(groupId, mentionedJidList[0])
            await tobz.sendTextWithMentions(from, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'demote':
		case prefix+'udm':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (!quotedMsg && mentionedJidList.length === 0) return tobz.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}demote* @tagadmin atau bisa reply pesan dari admin dan ketik ${prefix}udm`, id)
            if (mentionedJidList.length >= 2) return tobz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return tobz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            if (!quotedMsg) {
            await tobz.demoteParticipant(groupId, mentionedJidList[0])
            await tobz.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
         
        }else if(quotedMsg){
            var qmoed4 = quotedMsgObj.sender.id
             tobz.demoteParticipant(from, qmoed4)
            tobz.reply(from, `Berhasil menurunkan jabatan dari admin.`, id)
        }
            break
            case prefix+'cekgroupkey':
                if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Admin Bot!', id)
                tobz.reply(from, `Group Key Saat Ini:\n\n*[ ${groupkey} ]*`, id)
                break

                case prefix+'setgroupkey':
            if(!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, id)
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const groupkeynya = await slicedArgs.join(' ')
            setting.groupkey = `${groupkeynya}`
            groupkey = `${groupkeynya}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            tobz.reply(from, `Berhasil Mengganti GroupKey Ke *「 ${groupkeynya} 」*`, id)
            break

            case prefix+'join':
                //if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Admin Bot!', id)
                if (args.length === 1) return tobz.reply(from, 'Silahkan masukan link terlebih dahulu!', id)
                //const link = body.slice(6)
                if (!quotedMsg) {
                const link = args[1]
                const key = args[2]
                const tGr = await tobz.getAllGroups()
                //const minMem = 1
                const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
                const check = await tobz.inviteInfo(link)
                if (!isLink) return tobz.reply(from, 'Ini link?', id)
                if (key !== `${groupkey}`) return tobz.reply(from, '*GROUP KEY SALAH!*\n\nSilahkan chat owner bot unruk mendapatkan key yang valid', id)
                if (tGr.length > 256) return tobz.reply(from, 'Maaf jumlah group sudah maksimal!', id)
                if (check.size < 2) return tobz.reply(from, 'Member group tidak melebihi 2, bot tidak bisa masuk', id)
                if (check.status === 200) {
                    await tobz.joinGroupViaLink(link).then(() => tobz.reply(from, `*ZXCBOT AKAN SEGERA MASUK!*\n\nTerima kasih telah memakai layanan *ZXCBOT* Di grup anda :D`, id))
                    await sleep(2000) 
                    await tobz.sendText(check.id, `*ZXCBOT BERHASIL MASUK!*\nUntuk melihat menu ketik *${prefix}help*`)
                }

           /*  else if (quotedMsg) {
            const link02 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            const key02 = args[1]
            const tGr02 = await tobz.getAllGroups()
            const check02 = await tobz.inviteInfo(link)
            if (!isLink02) return tobz.reply(from, 'Pastikan hanya link group chat!', id)
            if (key02 !== `${groupkey}`) return tobz.reply(from, '*GROUP KEY SALAH!*\n\nSilahkan chat owner bot unruk mendapatkan key yang valid', id)
            if (tGr02.length > 256) return tobz.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check02.size < 2) return tobz.reply(from, 'Member group tidak melebihi 2, bot tidak bisa masuk', id)
            if (check02.status === 200) {
                await tobz.joinGroupViaLink(link02).then(() => tobz.reply(from, `*ZXCBOT AKAN SEGERA MASUK!*\n\nTerima kasih telah memakai layanan *ZXCBOT* Di grup anda :D`, id))
                await sleep(3000) 
                await tobz.sendText(check02.id, `*ZXCBOT BERHASIL MASUK!*\nUntuk melihat menu ketik *${prefix}help*`)

            }
        } */
             } else {
                    tobz.reply(from, 'Link group tidak valid!', id)
                    }
                break
        case prefix+'odelete':
		case prefix+'odell':
		case prefix+'odel':
		case prefix+'odl':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return tobz.reply(from, 'Perintah ini hanya untuk Admin ZXCBOT', id)
            if (!quotedMsg) return tobz.reply(from, `Salah!!, kirim perintah *${prefix}delete [tagpesanbot]*`, id)
            if (!quotedMsgObj.fromMe) return tobz.reply(from, `Salah!!, Bot tidak bisa mengahapus chat user lain!`, id)
            tobz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'delete':
		case prefix+'dell':
		case prefix+'del':
		case prefix+'dl':
            if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return tobz.reply(from, `Salah!!, kirim perintah *${prefix}delete [tagpesanbot]*`, id)
            if (!quotedMsgObj.fromMe) return tobz.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            tobz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'sider':
		case prefix+'nyimak':
	   case prefix+'reader':
            if (!isGroupMsg) return tobz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
            if (!quotedMsg) return tobz.reply(from, `Tolong Reply Pesan ZXCBOT`, id)
            if (!quotedMsgObj.fromMe) return tobz.reply(from, `Tolong reply pesan zxcbot`, id)
            try {
                const reader = await tobz.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                tobz.sendTextWithMentions(from, `Yang baca pesan bot yang direply sama @${sender.id.replace('@c.us','')}\n------------------\n\n${list}`)
            } catch(err) {
                console.log(err)
                tobz.reply(from, `Maaf, Belum Ada Yang Membaca Pesan ZXCBOT atau Mereka Menonaktifkan Read Receipts`, id)    
            }
            break
        case prefix+'linkgroup':
		case prefix+'getlink':
            if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagcnye = chat.formattedTitle
            var gclink = await tobz.getGroupInviteLink(groupId)
            var linkgc  = `Link group : *${namagcnye}*\n\n ${gclink}`
            tobz.reply(from, linkgc, id)
			tobz.sendLinkWithAutoPreview(from, linkgc)
            break
        case prefix+'setlink':
		 case prefix+'resetlink':
            if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isGroupMsg) {
                await tobz.revokeGroupInviteLink(groupId);
                tobz.sendTextWithMentions(from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
        case prefix+'getses':
		case prefix+'gss':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)            
            const sesPic = await tobz.getSnapshot()
            tobz.sendFile(from, sesPic, 'session.png', 'Nih boss', id)
            break
            await tobz.reply(from, admn, id)
            break
			case prefix+'zxcadmin':
            let admnn = `This is list of ZXCBOT Admin\nTotal : ${adminNumber.length}\n\n`
            for (let i of adminNumber) {
                admnn += `• @${i.replace(/@c.us/g,'')}\n`
            }
            await tobz.sendTextWithMentions(from, admnn, id)
            break
			case prefix+'zxcpremium': 
            let prem = `*[ USER PREMIUM ZXCBOT ]*\n\nTotal yang sudah mendaftar menjadi user premium *ZXCBOT*: [ ${premNumber.length} ]\n\n`
            for (let i of premNumber) {
                prem += `• @${i.replace(/@c.us/g,'')}\n`
            }
            await tobz.sendTextWithMentions(from, prem, id)
            break
            /*
            case 'limit':
    if(isReg(obj)) return
    if(cekumur(cekage)) return
    if(isOwnerBot) return tobz.reply(from, 'Lu owner ga usah sok2 cek limit segala', id)
    if(isAdmin) return tobz.reply(from, 'Kamu adalah Admin XINZ BOT\nAdmin Bot tidak memiliki limit harian', id)
 if(isVip) */
        case prefix+'limit':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if(isOwner) return tobz.reply(from, 'Lu kan owner bot bego, ngapa cek limit dah', id)
            if(isAdmin) return tobz.reply(from, 'Admin bot tidak memiliki limit harian / unlimitied limit.', id)
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return tobz.reply(from, `Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    tobz.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                tobz.reply(from, `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
            }
            break
        case prefix+'eval':
            const q = args.join(' ')
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
            try {
                let evaled = await eval(body.slice(5))
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                tobz.sendText(from, evaled)
            } catch (err) {
                tobz.reply(from, err, id)
            }
                break
              case prefix+'setlimit':
                if(!isOwner) return (from, 'Fitur ini hanya bisa dilakukan oleh owner bot!', id)
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                tobz.reply(from, 'Limit berhasil di reset!', id)
                break

        case prefix+'restart': // WORK IF YOU RUN USING PM2
        if(!isOwner) return (from, 'Fitur ini hanya bisa dilakukan oleh owner bot!', id)
            console.log(color('[EXEC]', 'green'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color('~> RESTART'), 'from', color(pushname))
                tobz.reply(from, '*[WARN]* Restarting ...', id)
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                //fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                //fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            
            //tobz.reply(from, 'Restart Berhasil!', id)
            break
        case prefix+'addadmin':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
				if (mentionedJidList.length === 0) return tobz.reply(from, 'Tag User!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                adminNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                tobz.reply(from, 'Success Menambahkan Admin ZXCBOT!', id)
                }
                break
        case prefix+'deladmin':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
                adminNumber.splice(inq, 1)
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                tobz.reply(from, 'Success Menghapus Admin ZXCBOT!', id)
            break
			case prefix+'addpremium':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!')
				if (mentionedJidList.length === 0) return tobz.reply(from, 'Tag User!')
				const arrgg = body.trim().split(' ')
                for (let i = 0; i < mentionedJidList.length; i++) {
                premNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premNumber))
                tobz.sendTextWithMentions(from, 
`Berhasil mendaftarkan ` + arrgg[1] + ` sebagai user premium.

Untuk melihat command premium silahkan ketik *${prefix}premmenu*

Terima kasih telah beralih menjadi user premium.

Total Pengguna yang telah terdaftar menjadi user premium ${premNumber.length}`)
                }
            break
        case prefix+'delprem':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
                let inqq = premNumber.indexOf(mentionedJidList[0])
                premNumber.splice(inqq, 1)
                fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premNumber))
                tobz.reply(from, 'Success Menghapus user Premium!', id)
            break
        case prefix+'block':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await tobz.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    tobz.sendTextWithMentions(from, `Success Block ${args[1]} !`, id)
                })
            }
            break
        case prefix+'unblock':
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await tobz.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    tobz.sendTextWithMentions(from, `Success Unblock ${args[1]} !`, id)
                })
            } 
            break
            

            case prefix+'unblockk':
            if (!isOwner & !isOwner2) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await tobz.contactUnblock(unblock).then((a)=>{
                         console.log(a)
                tobz.sendTextWithMentions(from, `Success Unblock ${args[1]} !`, id)
                tobz.sendTextWithMentions(from, `Tapi boong`, id)
            })
                tobz.contactBlock(unblock).then((b)=>{
                        console.log(b)
                tobz.sendTextWithMentions(from, `Success block ${args[1]}`, id)
                })
            }
            await tobz.sendTextWithMentions(from, `${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} Terkick`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await tobz.removeParticipant(groupId, mentionedJidList[i])
            }
            break
            
		/*	case '!fake':
        const no = arg.split(' |')[2]
const no1 = arg.split('|')[3]
const teks = arg.split('|')[4]
const pen = no.replace(' ','')
                console.log(`no: ${pen} isi: ${teks}`)
            tobz.costumreply(from, teks, id, number: ${pen} message: ${no1})
            break */
        case prefix+'setname':
            if (!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
                const setnem = body.slice(9)
                await tobz.setMyName(setnem)
                tobz.reply(from, `Berhasil memperbarui nama!`, id)
            break
        case prefix+'setstatus':
            if (!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
                const setstat = body.slice(11)
                await tobz.setMyStatus(setstat)
                tobz.reply(from, `Berhasil memperbarui status!`, id)
            break
        case prefix+'setprofilepic':
            if (!isOwner) return tobz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ZXCBOT!`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await tobz.setProfilePic(imageBase64)
                tobz.sendTextWithMentions(`Berhasil memperbaru foto profil bot oleh @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await tobz.setProfilePic(imageBase64)
                tobz.reply(from, 'Berhasil memperbarui foto profil bot!', id)
            } else {
                tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}setprofilepic`, id)
            }
            break
        case prefix+'getpic':
            if (mentionedJidList.length === 0) return tobz.reply(from, 'Tag seseorang yang ingin diambil foto profilnya!', id)
            if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            const texnugm = body.slice(8)
            const getnomber =  await tobz.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    //var jnck = await tobz.getProfilePicFromServer(useriq)
                    const dpd2 = await tobz.getProfilePicFromServer(useriq)
                    if (dpd2 == undefined) {
                        var pfp2 = errorImg // cuman buat triger errornya wkwk
                        } else {
                            var pfp2 = dpd2
                        } 
                    tobz.sendFileFromUrl(from, pfp2, `awok.jpg`, 'Berhasil mendapatkan foto profil!', id)
                } catch(err) {
                    //console.log(err)
                    tobz.reply(from, 'Ups, ada yang error!  Mungkin ppnya depresi atau di privasi.', id)
                }
            break
                case prefix+'totalmem':
                    if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
                    var totalMem2 = chat.groupMetadata.participants.length
                    tobz.reply(from, `Total member sekarang : ${totalMem2}`, id)
                    break
            case prefix+'getppgrup':
            case prefix+'getpicgrup':
            case prefix+'getppgc':        
            if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            var grouppic = await tobz.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await tobz.sendFileFromUrl(from, pfp, 'group.png', `Nih`, id)   
            break
            
			case prefix+'cekadminb':
            if (!isAdmin) return tobz.reply(from, 'Anda bukan user AdminBan ZXCBOT!', id)
                tobz.reply(from, `Anda adalah user AdminBan ZXCBOT!`,id)
            break
        case prefix+'ban':
            if (!isAdmin) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin ZXCBOT!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((ownerNumber).includes(mentionedJidList[i])) return tobz.reply(from,`Sopan kah lu gitu, mau ban owner bot?`, id)
                if ((adminNumber).includes(mentionedJidList[i])) return tobz.reply(from,`Maaf, Kamu tidak bisa membanned Admin Bot!`, id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                tobz.reply(from, `Succes ban target!`,id)
            }
            break
        case prefix+'unban':
            if (!isAdmin) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin ZXCBOT!', id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                tobz.reply(from, 'Unbanned User!', id)
            break
        case prefix+'listgroup':
		if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Bot!', id)
                tobz.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                tobz.reply(from, gc, id)
            })
            break
        case prefix+'listbanned':
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `wa.me/${i.replace(/@c.us/g,'')}\n`
            }
            await tobz.reply(from, bened, id)
            break
			
			case prefix+'listbannedtag':
            let benedd = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                benedd += ` @${i.replace(/@c.us/g,'')}\n`
            }
            await tobz.sendTextWithMentions(from, benedd, id)
            break
        case prefix+'listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await tobz.reply(from, hih, id)
            break
            case prefix+'listblocktag':
                let hoh = `This is list of *BLOCKED* number\nTotal : ${blockNumber.length}\n\n`
                for (let i of blockNumber) {
                    hoh += `~>  @${i.replace(/@c.us/g,'')}\n`
                }
                await tobz.sendTextWithMentions(from, hoh, id)
                break
        case prefix+'ping':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const loadedMsg2 = await tobz.getAmountOfLoadedMessages()
            const chatIds2 = await tobz.getAllChatIds()
            const groups2 = await tobz.getAllGroups()
            const timestamp2 = speed();
            const batteryLevel = await tobz.getBatteryLevel()
            const charged = await tobz.getIsPlugged();
            const latensi2 = speed() - timestamp2
            const pingnya = 
`Penggunaan :
*RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*CPU: ${os.cpus().length}*


Status :
- *Loaded Messages: ${loadedMsg2}*
- *Group Chats: ${groups2.length}* 
- *Personal Chats: ${chatIds2.length - groups2.length}* 
- *Total Chats: ${chatIds2.length}* 

*_Speed: ${latensi2.toFixed(4)} Second_*
*Status bot : ${'%state'.replace('%state', state.status)}*
*Battery Level : ${batteryLevel}%*
*Is Charging : ${charged}*
*Jam : ${moment(t * 1000).format('HH:mm:ss')}*
`
            tobz.reply(from, pingnya, id)
            break
        case prefix+'setgroupname':
            if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagrup = body.slice(14)
            //let sebelum = chat.groupMetadata.formattedName
            var groupname = name
            let halaman = global.page ? global.page : await tobz.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            tobz.reply(from, `Nama group berhasil diubah, menjadi  ${namagrup}`, id)
            //await sleep(1000) 
            //.then(async () => await tobz.kill())
            break
        case prefix+'setgroupicon':
            if (!isGroupMsg) return tobz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return tobz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await tobz.setGroupIcon(from, imageBase64)
                tobz.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await tobz.setGroupIcon(from, imageBase64)
                tobz.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                tobz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan *${prefix}setgroupicon`, id)
            }
            break
        case prefix+'bugreport':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (args.length === 1) return tobz.reply(from, 'Kirim perintah *${prefix}bugreport [teks]*\ncontoh : *${prefix}bugreport Permisi Owner, Ada bug pada command ${prefix}nulis, Tolong diperbaiki*')
           const reportNumber = `6289635687240@c.us`
            argz = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            const bug = await slicedArgs.join(' ')
            if(!bug) return
            if(isGroupMsg){
                tobz.sendTextWithMentions(reportNumber, `*[BUG REPORT]*\n\n*WAKTU* : ${time}\n*NO PENGIRIM*: @${serial.replace('@c.us', '')}\n*GROUP*: ${formattedTitle}\n\nPesan: ${bug}`)
                tobz.sendText(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
            }else{
                tobz.sendTextWithMentions(reportNumber, `*[BUG REPORT]*\n\n*WAKTU* : ${time}\n*NO PENGIRIM*: @${serial.replace('@c.us', '')}\n\nPesan: ${bug}`)
                tobz.sendText(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
            }
            break
         case prefix+'profile':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isGroupMsg) {
                if (!quotedMsg) {
                     //let limitCounts = limitCount-lmt.limit
                    var block = blockNumber.includes(author)
                    var bend = banned.includes(author)
                    var sts = await tobz.getStatus(author)
                    var adm = isGroupAdmins
                    var donate = isAdmin
                    prema = isPrem
                    
                    var ctt = await tobz.getContact(author)
                    const { status } = sts
                    var found = false
                    Object.keys(pendaftar).forEach((i) => {
                        if(pendaftar[i].id == author){
                            found = i
                        }
                    })
                    if (found !== false) {
                        pendaftar[found].id = author;
                        var registe = 'Yes'
                    } else {
                        var registe = 'No'
                    }
                    if (ctt == null) {
                    return await tobz.reply(from, `Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]`, id) 
                    } else {
                        const contact = ctt.pushname
                        const dpd = await tobz.getProfilePicFromServer(author)
                    if (dpd == undefined) {
                        var pfp = errorurl
                        } else {
                            var pfp = dpd
                        } 
                    if (contact == undefined) {
                        var namae = '*Tidak Ada Nama*' 
                    } else {
                        var namae = contact
                    } 
                        tobz.sendFileFromUrl(from, pfp, 'pfp.jpg', `*「 PROFILE 」*\n\n• *Username:* ${namae}\n• *User Info:* ${status}\n*• Block :* ${block}\n*• Banned :* ${bend}\n• *Admin Group:* ${adm}\n• *Admin ZXCBOT:* ${donate}\n• *Registered User :* ${registe}\n• *User* : *${prema ? 'Premium' : 'Free'}*\n`, id)
                    }
                } else if (quotedMsg) {
                    var qmid = quotedMsgObj.sender.id
                    var block = blockNumber.includes(qmid)
                    var bend = banned.includes(qmid)
                    var gpic = await tobz.getProfilePicFromServer(qmid)
                    var namae = quotedMsgObj.sender.name
                    var sts = await tobz.getStatus(qmid)
                    var ctt = await tobz.getContact(qmid)
                    var adm = isGroupAdmins
                    var donate = isAdmin
                    var prema = isPrem
                    const { status } = sts
                    Object.keys(pendaftar).forEach((i) => {
                        if(pendaftar[i].id == qmid){
                            found = i
                        }
                    })
                    if (found !== false) {
                        pendaftar[found].id = qmid;
                        var registe = '✔'
                    } else {
                        var registe = '❌'
                    }
                    if (ctt == null) {
                    return await tobz.reply(from, `Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]`, id) 
                    } else {
                        const contact = ctt.pushname
                        const dpd = await tobz.getProfilePicFromServer(qmid)
                    if (dpd == undefined) {
                        var pfp = errorurl
                        } else {
                            var pfp = dpd
                        } 
                    if (contact == undefined) {
                        var namae = '*Tidak Ada Nama*' 
                    } else {
                        var namae = contact
                    }                                                   
                    tobz.sendFileFromUrl(from, pfp, 'pfp.jpg', `*「 PROFILE 」*\n\n• *Username:* ${namae}\n• *User Info:* ${status}\n*• Block : ${block}*\n*• Banned : ${bend}*\n• *Admin Group: ${adm}*\n• *Admin ZXCBOT: ${donate}*\n• *Registered User :* ${registe}\n• *User* : *${prema ? 'Premium' : 'Free'}`)
                    }
                }
            }
            break
/*✻  *${prefix}video [judul]*
✻  *${prefix}getvideo [reply pesan bot]*
✻  *${prefix}music [judul]*
✻  *${prefix}getmusic [reply pesan bot]*
contoh get video & music:
✻  *${prefix}getvideo 1*
✻  *${prefix}getmusic 1*
*/
	
        // LIST MENU
		
        case 'tagme':
       case prefix+'tagme':
		tobz.sendTextWithMentions(from, `@${sender.id.replace('@c.us','')}`)
		break
		
		case '@6283899530094':
        console.log(color('[EXEC]', 'green'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color('~> CALLING BOT'), 'from', color(pushname))
		tobz.reply(from, `Iya? Ada yang bisa dibantu?\nKetik *${prefix}help* untuk melihat commands`, id)
        break

        case prefix+'nsfwmenu':
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return tobz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            tobz.reply(from, 
 `✻  *${prefix}randombokep*
✻  *${prefix}randomhentai*
✻  *${prefix}randomnsfwneko*
✻  *${prefix}randomtrapnime*



*INGET DOSA YA BANG*`, id)
break
                /*
   『 *IMAGE MAKER MENU* 』

✻  *${prefix}thunder [teks]*
✻  *${prefix}holograph [teks]*

✻  *${prefix}glow [teks]*
✻  *${prefix}vintage [teks]*
✻  *${prefix}matrix [teks]*
✻  *${prefix}glue3d [teks]* 
✻  *${prefix}luxury [teks]*
✻  *${prefix}bokeh [teks]*
✻  *${prefix}dropwater [teks]*
✻  *${prefix}oldlogo [teks]*
✻  *${prefix}firework [teks]*
✻  *${prefix}lavatext [teks]*
✻  *${prefix}3dtext [teks]*
✻  *${prefix}toxict [teks]*
✻  *${prefix}realcloud [teks]*
✻  *${prefix}ninja [teks]*
✻  *${prefix}cloudsky [teks]* 
✻  *${prefix}love [teks]*
✻  *${prefix}blackpink [teks]*
✻  *${prefix}sandwriting [teks]*
✻  *${prefix}foilbalon [teks]*
✻  *${prefix}logomarvel [teks1|teks2]*
✻  *${prefix}glitch [teks1|teks2]*
✻  *${prefix}searchteks [|teks|teks2|teks3]*



 */
case prefix+'textkosong':
tobz.reply(from, '‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎', id)
break
/*case prefix+'menu':
    case prefix+'help':
    case prefix+'commands':
    if(isReg(obj)) return
     if(cekumur(cekage)) return
        tobz.reply(from, 
`‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎     ＺＸＣＢＯＴ 


*Hai  ${pushname} 👋*
Untuk menu kalian bisa lihat dibawah ini ya.     


|  *PREFIX* = *${prefix}*

JANGAN MENELPON BOT!!
*TELPON BOT : AUTO BLOCK*


     『 *CREATOR MENU* 』

✻  *${prefix}sticker*
✻  *${prefix}stickergif*
✻  *${prefix}ttp [teks]*
✻  *${prefix}ttp2 [teks]*
✻  *${prefix}snobg*
✻  *${prefix}toimg*
✻  *${prefix}slightning*
✻  *${prefix}sfire*
✻  *${prefix}tahta [teks]*
✻  *${prefix}qrcode [optional]*
✻  *${prefix}tts [kode bhs] [teks]*
✻  *${prefix}quotemaker [|teks|author|theme]*


    『 *NULIS MENU* 』

✻  *${prefix}nulis [teks]*
✻  *${prefix}nuliskiri [teks]*
✻  *${prefix}nuliskanan [teks]*
✻  *${prefix}foliokanan [teks]*
✻  *${prefix}foliokiri [teks]*
✻  *${prefix}magernulis1 [|Nama|Kelas|Teks]


    『 *KERANG MENU* 』

✻  *${prefix}apakah [optional]*
✻  *${prefix}rate [optional]*
✻  *${prefix}bisakah [optional]*
✻  *${prefix}brppersen [optional]*
✻  *${prefix}kapankah [optional]*


    『 *FUN MENU / GROUP* 』

✻  *${prefix}caklontong*
✻  *${prefix}family100*
✻  *${prefix}tebakgambar*
✻  *${prefix}ramalpasangan [kamu|pasangan]*
✻  *${prefix}zodiak [zodiak kamu]*
✻  *${prefix}artinama [nama]*
✻  *${prefix}artimimpi [mimpi]*
✻  *${prefix}randomtag [pesan]*
✻  *${prefix}cocok*
✻  *${prefix}hug [tag]*
✻  *${prefix}dadu*
✻  *${prefix}koin*
✻  *${prefix}flip*
✻  *${prefix}tod* *[TRUTH OR DARE]*
✻  *${prefix}igprofile [@username]*
✻  *${prefix}heroml [nama hero]*


    『 *DOWNLOADER* 』

✻  *${prefix}ytmp3 [linkYt]*
✻  *${prefix}ytmp4 [linkYt]*
✻  *${prefix}ig [linkIg]*
✻  *${prefix}fb [linkFb]*
✻  *${prefix}twitter [linkTwitter]*
✻  *${prefix}smule [linkSmule]*
✻  *${prefix}tiktok [linkTiktok]*
✻  *${prefix}starmaker [linkStarmaker]*
✻  *${prefix}nhder [kodeNuclear]*
✻  *${prefix}joox [lagu]*
✻  *${prefix}play [lagu]*
✻  *${prefix}gdrive [linkGDrive]*
✻  *${prefix}playstore*
✻  *${prefix}play [lagu]*

    『 *ANIME MENU* 』

✻  *${prefix}loli*
✻  *${prefix}shota*
✻  *${prefix}waifu*
✻  *${prefix}husbu*
✻  *${prefix}randomNekoNime*
✻  *${prefix}randomTrapNime*
✻  *${prefix}randomAnime*
✻  *${prefix}quotesnime*
✻  *${prefix}wait*
✻  *${prefix}koin*
✻  *${prefix}malanime [optional]*
✻  *${prefix}malcharacter [optional]*
✻  *${prefix}kusonime [optional]*
✻  *${prefix}otakudesu [optional]*
✻  *${prefix}dewabatch [optional]*
✻  *${prefix}animesearch [query]*



    『 *EDUCATIONAL MENU* 』

✻  *${prefix}brainly [pertanyaan] [.jumlah]*
✻  *${prefix}resepmasakan [optional]*
✻  *${prefix}kbbi [query]*
✻  *${prefix}wiki [query]*


    『 *RANDOM TEKS MENU* 』

✻  *${prefix}fancyfont*
✻  *${prefix}quotes*
✻  *${prefix}fakta*
✻  *${prefix}katabijak*
✻  *${prefix}pantun*
✻  *${prefix}alay [teks]*
✻  *${prefix}hilih [teks] / reply pesan*
✻  *${prefix}bacot*
✻  *${prefix}addbacot*


    『 *HELPER MENU* 』

✻  *${prefix}lirik [optional]*
✻  *${prefix}chord [optional]*
✻  *${prefix}covid [negara]*
✻  *${prefix}shorturl [linkWeb]*
✻  *${prefix}ssphone [linkWeb]* 
✻  *${prefix}sspc [linkWeb]* 
✻  *${prefix}checkip [ipaddress]*
✻  *${prefix}maps [optional]*
✻  *${prefix}translate [bahasa] [teks]*
✻  *${prefix}pastebin [teks|author]*
✻  *${prefix}jadwalbola [query]*
✻  *${prefix}distance [query]*
✻  *${prefix}ytsearch*
✻  *${prefix}infoGempa*
✻  *${prefix}news*
✻  *${prefix}shopee*
✻  *${prefix}wame*



_*zxcbot by @juwenajaa*_`, id)
.then(() => ((isGroupMsg)) ? tobz.sendText(from, `► 『 *MENU GROUP* 』\n\n ✻  ${prefix}menugrup`) : null)
break 


*/
case prefix+'animemenu':
        tobz.reply(from,
` 
┌「 *ANIME MENU* 」 
│
├ *${prefix}loli*
├ *${prefix}shota*
├ *${prefix}waifu*
├ *${prefix}husbu*
├ *${prefix}randomNekoNime*
├ *${prefix}randomTrapNime*
├ *${prefix}randomAnime*
├ *${prefix}quotesnime*
├ *${prefix}malanime [optional]*
├ *${prefix}malcharacter [optional]*
├ *${prefix}kusonime [optional]*
├ *${prefix}otakudesu [optional]*
├ *${prefix}dewabatch [optional]*
├ *${prefix}animesearch [query]*
│
└─────────────────`, id)
case prefix+'menu':
    case prefix+'help':
    if(isReg(obj)) return
     if(cekumur(cekage)) return
     const userLevel2 = level.getLevelingLevel(sender.id, _level)
     const userXp2 = level.getLevelingXp(sender.id, _level)

     var prema = isAdmin

/* if (isGroupMsg) {  ├ *${prefix}gtav*
├ *${prefix}pencil*
├ *${prefix}fbpg*

│
├─「 *NULIS MENU* 」
├ *${prefix}nulis [teks]*
├ *${prefix}nulis2 [|Nama|Kelas|Teks]*
├ *${prefix}nuliskiri [teks]*
├ *${prefix}nuliskanan [teks]*
├ *${prefix}foliokanan [teks]*
├ *${prefix}foliokiri [teks]*
│*/ 
const menubot = 
`*Haii ${pushname} 👋*

*Telpon = Blocked!*
*Spam = Banned!*

Kalau kamu belum ngerti cara pakainya, ketik *${prefix}readme* aja biar paham pakainya.

Nb: Perintah tidak perlu menggunakan tanda [ ]

┌──
│ *~> Nama*  : ${pushname}
│ *~> User*  :  *${prema ? 'VIP' : 'Free'}*
│ *~> Level/Xp* : ${userLevel2} / ${userXp2} 
│ *~> Link*  : wa.me/${serial.replace('@c.us', '')}
└────────────────────

┌───│ ＺＸＣＢＯＴ
│
├── *PREFIX:* *「 MULTI PREFIX 」*
├── *Total Pengguna : ${pendaftar.length}*
├────────────────────
│
│
├─「 *BASIC MENU* 」
├ *${prefix}sticker*
├ *${prefix}sticker2 (rasio 1:1)*
├ *${prefix}snobg*
├ *${prefix}snobg2*
├ *${prefix}toimg*
├ *${prefix}tomp3*
├ *${prefix}bass*
├ *${prefix}imgtourl*
├ *${prefix}emojisticker 😁*
├ *${prefix}reminder |waktu|alasan*
│
│
├─「 *MAKER MENU* 」
├ *${prefix}ttp [teks]*
├ *${prefix}ttp2 [teks]*
├ *${prefix}attp [teks]*
├ *${prefix}tahta [teks]*
├ *${prefix}silk [teks]*
├ *${prefix}sarah [teks]*
├ *${prefix}cosplay [teks]*
├ *${prefix}sliding [teks]*
├ *${prefix}qrcode [optional]*
├ *${prefix}glitch |teks1|teks2*
├ *${prefix}logoml |caracter|teks*
├ *${prefix}tts [kode bhs] [teks]*
├ *${prefix}tahtacs |teks1|teks2|teks3*
├ *${prefix}quotemaker |teks|author|theme*
│
│
├─「 *MANIPULATION* 」
├ *${prefix}blurr*
├ *${prefix}wasted*
├ *${prefix}televisi*
├ *${prefix}nightvis*
├ *${prefix}dellfile*
├ *${prefix}fisheye*
├ *${prefix}firee*
├ *${prefix}scomic*
├ *${prefix}zoomy*
├ *${prefix}trash*
├ *${prefix}hitler*
├ *${prefix}trigger*
├ *${prefix}ytcomment [gambar|username|comment|thema]*
├ *${prefix}phcomment [@tag|username|comment]*
├ *${prefix}phcomment2 [gambar|username|comment]*
├ *${prefix}memecustom [|teks atas|teks bawah]*
│
│
├─「 *KERANG MENU* 」
├ *${prefix}apakah [optional]*
├ *${prefix}rate [optional]*
├ *${prefix}bisakah [optional]*
├ *${prefix}brppersen [optional]*
├ *${prefix}kapankah [optional]*
│
│
├─「 *FUN MENU / GROUP* 」    
├ *${prefix}caklontong*
├ *${prefix}family100*
├ *${prefix}tebakgambar*
├ *${prefix}ramalpasangan [kamu|pasangan]*
├ *${prefix}zodiak [zodiak kamu]*
├ *${prefix}artinama [nama]*
├ *${prefix}artimimpi [mimpi]*
├ *${prefix}randomtag [pesan]*
├ *${prefix}cocok*
├ *${prefix}hug [tag]*
├ *${prefix}dadu*
├ *${prefix}koin*
├ *${prefix}flip*
├ *${prefix}tod* *[TRUTH OR DARE]*
├ *${prefix}igprofile [@username]*
├ *${prefix}heroml [nama hero]*
│
│
├─「 *DOWNLOADER MENU* 」    
├ *${prefix}ytmp3 [linkYt]*
├ *${prefix}ytmp4 [linkYt]*
├ *${prefix}ig [linkIg]*
├ *${prefix}ig2 [linkIg]*
├ *${prefix}fb [linkFb]* [ERROR!]
├ *${prefix}twitter [link vid Twtr]* 
├ *${prefix}tiktok [linkTiktok]*
├ *${prefix}tiktok2 [linkTiktok]*
├ *${prefix}ttnowm [linkTiktok]*
├ *${prefix}lk21 [judul film]*
├ *${prefix}joox [lagu]*
├ *${prefix}play [judul lagu]*
├ *${prefix}play [link yt]*
├ *${prefix}music [judul lagu]*
├ *${prefix}video [judul video]*
│
│
├─「 *EDUKASI MENU* 」
├ *${prefix}brainly [pertanyaan] [.jumlah]*
├ *${prefix}resepmasakan [optional]*
├ *${prefix}kbbi [query]*
├ *${prefix}wiki [query]*
│
│
├─「 *RANDOM MENU* 」
├ *${prefix}quotes*
├ *${prefix}fakta*
├ *${prefix}katabijak*
├ *${prefix}pantun*
├ *${prefix}alay [teks]*
├ *${prefix}bucin [teks]*
├ *${prefix}bacot*
├ *${prefix}cerpen*
├ *${prefix}puisi*
├ *${prefix}addbacot*
├ *${prefix}hilih [teks] / reply pesan*
├ *${prefix}halah [teks] / reply pesan*
├ *${prefix}holoh [teks] / reply pesan*
│
│
├─「 *HELPER MENU* 」
├ *${prefix}lirik [optional]*
├ *${prefix}chord [optional]*
├ *${prefix}covid [negara]*
├ *${prefix}shorturl [linkWeb]*
├ *${prefix}ssphone [linkWeb]* 
├ *${prefix}sspc [linkWeb]* 
├ *${prefix}checkip [ipaddress]*
├ *${prefix}maps [optional]*
├ *${prefix}translate [bahasa] [teks]*
├ *${prefix}jadwalbola [query]*
├ *${prefix}distance [query]*
├ *${prefix}playstore [query]*
├ *${prefix}gdrive [ BAYPASS ]*
├ *${prefix}ytsearch*
├ *${prefix}infoGempa*
├ *${prefix}news*
├ *${prefix}shopee*
├ *${prefix}wame*
│
│
├─「 *GROUP MENU* 」
├ *${prefix}sider*
├ *${prefix}wame*
├ *${prefix}groupinfo*
├ *${prefix}add 62858xxxxx*
├ *${prefix}kick @tagmember*
├ *${prefix}promote @tagmember*
├ *${prefix}demote @tagadmin*
├ *${prefix}edotensei @tagmember*
├ *${prefix}getpic @tagsomeone* 
├ *${prefix}tagall [pesan]*
├ *${prefix}afk [reason]*
├ *${prefix}adminList*
├ *${prefix}ownerGroup*
├ *${prefix}leave*
├ *${prefix}setgroup close/open [waktu|alasan]*
├ *${prefix}setgroupname [teks]*
├ *${prefix}setgroupicon [reply]*
├ *${prefix}delete [replyChatBot]*
├ *${prefix}group [open|close]*
├ *${prefix}autosticker [enable|disable]*
├ *${prefix}autovn [enable/disable]* *[BETA!]*
├ *${prefix}leveling [enable|disable]*
├ *${prefix}NSFW [enable|disable]*
├ *${prefix}left [enable|disable]*
├ *${prefix}welcome [enable|disable]*
├ *${prefix}simi [enable|disable]*
├ *${prefix}antilink [enable|disable]*
├*${prefix}antiIG [enable|disable]* *[BETA!]*
│
│
├─「 *OTHER* 」
├ *${prefix}iklan*
├ *${prefix}info*
└ *${prefix}owner*
 


*「 SET WELCOME BETA! 」*

- *${prefix}setwelcome @nama @grup*
- *${prefix}setleft @nama @grup*
- *${prefix}delwelcome*
- *${prefix}delldeft*

*Contoh atur set welcome:*
*${prefix}setwelcome Haii @nama selamat datang di @grup*

*Contoh atur set left:*
*${prefix}setleft Bayy @nama selamat tinggal dari @grup*

*@nama - Mention User*
*@grup - Nama Grup*


Ada fitur yang error?, PC OWNER!


 _*zxcbot by @juwenajaa*_` 

/* const updatebot = 
`┌「 *NEW FITUR* 」
├ *${prefix}autovn [enable/disable]*
├ *${prefix}igstory*
└ *${prefix}*` */
 tobz.reply(from, menubot, id)
 //await sleep(900)
 //tobz.reply(from, updatebot, id)
 
break

case prefix+'adminmenu':
if (!isAdmin) return tobz.reply(from, 'Perintah ini hanya untuk Admin ZXCBOT', id)
tobz.reply(from,
`*「  ADMINBOT  MENU  」*

✻  *${prefix}mute*
✻  *${prefix}unmute*
✻  *${prefix}ban @tagmember*
✻  *${prefix}unban @tagmember*
✻  *${prefix}daftarulang @tagmember umur*
✻  *${prefix}spamtag @tagsomeone*
✻  *${prefix}spamcall [81273xxxx]*
✻  *${prefix}oadd 62813xxxxx*
✻  *${prefix}otagall*


_*zxcbot by @juwenajaa*_`, id)
break

case prefix+'ownermenu':
if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner ZXCBOT', id)
tobz.reply(from, 
`*「  OWNER MENU  」*

~>  *${prefix}block 62858xxxxx*
~>  *${prefix}unblock 62858xxxxx*
~>  *${prefix}addadmin @tagmember*
~>  *${prefix}deladmin @tagmember*
~>  *${prefix}spamtag @tagmember*
~>  *${prefix}restart*
~>  *${prefix}ekickall*
~>  *${prefix}banchat*
~>  *${prefix}unbanchat*
~>  *${prefix}eval*[case]
~>  *${prefix}setname [teks]*
~>  *${prefix}setstatus [teks]*
~>  *${prefix}setprofilepic*
~>  *${prefix}getss*
~>  *${prefix}shutdown*


_*zxcbot by @juwenajaa*_`, id)
break
    // INFORMATION
    case prefix+'donate':
    case prefix+'donasi':
    
tobz.sendFileFromUrl(from, donasiimage, 'donasi.png', 

`DONASI JUWEN YUK, BIAR DIA GA MISKIN. 

Kamu bisa membantu juwen dengan cara 

┌─┤ *GOPAY / PULSA*
│
└─┤ *085155078806*


┌─┤ *OVO*
│
└─┤ *089635687240*


*FOLLOW INSTAGRAM :*
*instagram.com/juwendy_s*


*TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*`, id)
        break
    case prefix+'readme':
        tobz.sendText(from, readme, id)
        break
    case prefix+'sewa':
    case prefix+'iklan':
    tobz.reply(from, 
`LIST HARGA *ZXCBOT*

*ZXCBOT PREMIUM*
Nikmati akses tanpa batas dari ZXCBOT, dan tidak perlu khawatir takut limit habis.

Harga:
5 Hari - 7k
15 Hari - 14k
1 Bulan - 20k
1 Bulan with join 1 gc - 25k

*ZXCBOT ADMIN*
Nikmati akses zxcbot dengan adminban, adminban ialah akses" bot yang sama dengan owner.

Fitur:
- Limit unlimitied
- Bisa akses fitur premium tanpa jadi premium lagi
- Bisa join gc sampe 3
- Bisa ban orang
- Bisa mendapatkan akses terbaru dari admin.

Harga:
1 Bulan - 35k

Nb: Bisa menambahkan limit teman / gift limit ke teman jika kamu seorang adminban ZXCBOT


Cuman mau masukin ke GC?
Bisa banget, nikmati akses nya juga.

Harga:
2 Hari - Free (Trial)
14 Hari - 5k
1 Bulan - 14k


*ZXCBOT CLONE*
Ingin no kamu jadi clone ZXCBOT? Apasih clone itu, clone ada lah cloningan ZXCBOT, jadi kamu akan menjadikan no bot kamu menjadi clone ZXCBOT. Nama bot bisa sesuai kamu mau, dan bisa atur limit dan juga bisa joinin gc sesuka kamu.

Harga:
1 Bulan - 70k 

Terima kasih sudah memakai layanan ZXCBOT`, id)
break
  /*  case prefix+'info':
     if(isReg(obj)) return
        if(cekumur(cekage)) return
        tobz.sendTextWithMentions(from,
`*TENTANG ZXCBOT*

Hai 👋 @${sender.id.replace('@c.us','')}, sebelumnya terima kasih ya telah menggunakan *ZXCBOT*. Bot ini merupakan free pubic bot atau bot gratis. Bot ini di recode oleh *juwennn*, kalian bisa menggunakan bot ini kapan saja dan dimanapun, ya tapi tetap saja ada limit nya ya kak. Bila kalian ingin *ZXCBOT* berkembang kalian bisa donasi owner bot ini biar dia semangat jalanin botnya.

Terima kasih juga yang sudah membantu mengembangkan *ZXCBOT*

*Big Thanks To:*

>   Aqulzz  
| instagram.com/a_muhammad_f15

>   Pipiy   
| instagram.com/pitrirr_


>   Dhanu 
| instagram.com/alfijulian.07

>   Jeniii 
| instagram.com/oowl.jeniar


Kalian bisa sewa *ZXCBOT*, chat dengan ownernya aja ya. 
*Ketik ${prefix}owner*, utamakan salam biar adem.
Jangan lupa beri kita donasi yaa biar kita semangat jalanin nih bot.`, id)
        break */
    case prefix+'bahasa':
tobz.reply(from,
`*Code       Bahasa*

sq        Albanian
ar        Arabic
hy        Armenian
ca        Catalan
zh        Chinese
zh-cn     Chinese (China)
zh-tw     Chinese (Taiwan)
zh-yue    Chinese (Cantonese)
hr        Croatian
cs        Czech
da        Danish
nl        Dutch
en        English
en-au     English (Australia)
en-uk     English (United Kingdom)
en-us     English (United States)
eo        Esperanto
fi        Finnish
fr        French
de        German
el        Greek
ht        Haitian Creole
hi        Hindi
hu        Hungarian
is        Icelandic
id        Indonesian
it        Italian
ja        Japanese
ko        Korean
la        Latin
lv        Latvian
mk        Macedonian
no        Norwegian
pl        Polish
pt        Portuguese
pt-br     Portuguese (Brazil)
ro        Romanian
ru        Russian
sr        Serbian
sk        Slovak
es        Spanish
es-es     Spanish (Spain)
es-us     Spanish (United States)
sw        Swahili
sv        Swedish
ta        Tamil
th        Thai
tr        Turkish
vi        Vietnamese
cy        Welsh`, id)
        break
        case prefix+'listaudio':
        tobz.reply(from, 'List - List Sound\n\n- fbi\n- yamate\n- tapiboong\n- pp')
        break
        
        case 'makanyaganteng': 
        tobz.sendPtt(from, './media/sound/makanyaganteng.mp3', id) 
        break
            
        case 'makasihh': 
        tobz.sendPtt(from, './media/sound/makasih.mp3', id) 
        break
        
        case 'gantengdoang': 
        tobz.sendPtt(from, './media/sound/gantengdoang.mp3', id) 
        break
        
        case 'bebernyanyi': 
        tobz.sendPtt(from, './media/sound/bebernyanyi.mp3', id) 
        break
        
        case 'anakngentot': 
        tobz.sendPtt(from, './media/sound/anakngentot.mp3', id) 
        break
        
        case 'iri': 
        tobz.sendPtt(from, './media/sound/iri.mp3', id) 
        break
        
        case 'makanyacantik': 
        tobz.sendPtt(from, './media/sound/makanyacantik.mp3', id) 
        break
        
        case 'hadapiboy': 
        tobz.sendPtt(from, './media/sound/hadapiboy.mp3', id) 
        break
        
        case 'ngentotsong': 
        tobz.sendPtt(from, './media/sound/ngentotsong.mp3', id) 
        break
        
        case 'yamate': 
        tobz.sendPtt(from, './media/sound/yamate.mp3', id) 
        break
        
        case 'fbi': 
        tobz.sendPtt(from, './media/sound/fbi.mp3', id) 
        break
        
        case 'tapiboong': 
        tobz.sendPtt(from, './media/sound/tapiboong.mp3', id) 
        break
        
        case 'pp': 
        tobz.sendPtt(from, './media/sound/pp.mp3', id) 
        break

            case prefix+'igjuwen':
            tobz.sendLinkWithAutoPreview(from, '*@juwenajaa|@eejsxx*\n*> https://www.instagram.com/juwendy_s*\n\nmending follow ig gue', ``, ``, id)
            break
			
			case prefix+'igmejaa':
            tobz.reply(from, 'FOLLOW IG *@MZLNECHA_*\n*> www.instagram.com/mzlnecha_*\n\nNanti di follback kok', id)
            break
			
			case prefix+'iggilangg':
            tobz.reply(from, 'FOLLOW IG *@MHMDGLNG._*\n*> www.instagram.com/mhmdglng._*\n\nodading mang oleh, rasanya anjing banget', id)
            break
			
			case prefix+'ighkm':
            tobz.reply(from, '*Polow ya cntip*\n*> www.instagram.com/mhdhkimm*', id)
            break
			
			case prefix+'ighelen':
            tobz.reply(from, '*polow ya*\n*> www.instagram.com/helenyhns_*', id)
            break
			
			case prefix+'igrepaa':
            tobz.reply(from, '*fllw nnti fllbck*\n*> www.instagram.com/rplia_*', id)
            break
			
			case prefix+'igmikhail':
            tobz.reply(from, '*Punten, di followan teh*\n*> www.instagram.com/khasaav*', id)
            break
			
			case prefix+'igquila':
            tobz.reply(from, '*ga polow ga asik*\n*> www.instagram.com/quillaaulia*', id)
            break
			
			case prefix+'igarmin':
            tobz.reply(from, '*Follow 1jt followers give alok*\n*> www.instagram.com/_aaaarrmin*', id)
            break
			
			case prefix+'igmujidin':
            tobz.reply(from, '*follow ajg*\n*> www.instagram.com/urifpratama*', id)
            break
			
			case prefix+'ighaddad':
            tobz.reply(from, '*coba*\n*> www.instagram.com/haddad_ar*', id)
            break
			
			case prefix+'igcecil':
            tobz.reply(from, '*fllw dong*\n*> www.instagram.com/ceciliaelviera*', id)
            break
			
			case prefix+'igbot':
            tobz.reply(from, '*KALAU ADA MASALAH SAMA BOT, LAPOR DM AJAA*\n*> www.instagram.com/bot_ajaa*', id)
            break
			
			case prefix+'igmarthin':
            tobz.reply(from, '*follow dong*\n*> www.instagram.com/marthinsamuel25*', id)
            break
			
			case prefix+'igowen':
            tobz.reply(from, '*follow orang gamtenk*\n*> www.instagram.com/owenizer*', id)
            break
			
			case prefix+'igpipiy':
            tobz.reply(from, '*@pitrirr_*\n*> www.instagram.com/pitrirr_*\n\nmending follow ig gue', id)
            break
			
			case prefix+'igagungg':
            tobz.reply(from, '*@agnd2_|follow second akun gw*\n*> https://www.instagram.com/agnd2_*', id)
            break
			
			case prefix+'igdhanu':
            tobz.sendLinkWithAutoPreview(from, '𝐤𝐚𝐥𝐨 𝐝𝐢𝐬𝐮𝐫𝐮𝐡 𝐦𝐚𝐣𝐢𝐤𝐚𝐧 𝐟𝐥𝐥𝐰 𝐲𝐚 𝐟𝐥𝐥𝐰!\n*> https://www.instagram.com/alfijulian.07*', ``, ``, id)
            break
			
			case prefix+'igpuat':
            tobz.reply(from, '*follow ig gw nih*\n*> www.instagram.com/puubat*', id)
            break
			
			case prefix+'igrisky':
            tobz.reply(from, '*follow ig gw nih*\n*> www.instagram.com/@rizky.afs17*', id)
            break
			
			case prefix+'iganggit':
            tobz.reply(from, '*follow ig gw nih*\n*> http://www.instagram.com/ag.anggita*', id)
            break
			
			case prefix+'iganggit':
            tobz.reply(from, '*follow ig gw nih*\n*> http://www.instagram.com/ag.anggita*', id)
            brea
            
// By Gimenz
case prefix+'wame':
    if(isReg(obj)) return
    if(cekumur(cekage)) return
    const pesann1 = body.slice(6)
    const pesannn = (pesann1.replace(/ /g, '+'))
    const pesann = ('?text='+ pesannn)
    await tobz.sendTextWithMentions(from, `No @${sender.id.replace('@c.us','')} dan pesan dari @${sender.id.replace('@c.us','')} \n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}${pesann}*`, id)
    break
			// By juwen
			case prefix+'spamtag':
			if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
			if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin ZXCBOT!', id)
			if (mentionedJidList.length === 0) return tobz.reply(from, 'Tag orang yang ingin di spam!', id)
			const arg = body.trim().split(' ')
			const janjingg = (` @${sender.id.replace('@c.us','')}`)
			tobz.sendText(from, '*WARNING!*', id)
			tobz.sendText(from, '*SPAM TAG STARTING!...*', id)
			tobz.sendTextWithMentions(from, arg[1] + ' anda di spam oleh ' + janjingg)
			tobz.sendTextWithMentions(from, arg[1])	//1
			tobz.sendTextWithMentions(from, arg[1])	//2
			tobz.sendTextWithMentions(from, arg[1])	//3
			tobz.sendTextWithMentions(from, arg[1])	//4
			tobz.sendTextWithMentions(from, arg[1]) //5
			tobz.sendTextWithMentions(from, arg[1]) //6
			tobz.sendTextWithMentions(from, arg[1]) //7
			tobz.sendTextWithMentions(from, arg[1]) //8
			tobz.sendTextWithMentions(from, arg[1]) //9
			tobz.sendTextWithMentions(from, arg[1]) //10
			tobz.sendTextWithMentions(from, arg[1]) //11
			tobz.sendTextWithMentions(from, arg[1]) //12
			tobz.sendTextWithMentions(from, arg[1]) //13
			tobz.sendTextWithMentions(from, arg[1]) //14
			tobz.sendTextWithMentions(from, arg[1]) //15
			tobz.sendTextWithMentions(from, arg[1]) //16
			tobz.sendTextWithMentions(from, arg[1]) //17
			tobz.sendTextWithMentions(from, arg[1]) //18
			tobz.sendTextWithMentions(from, arg[1]) //19
			tobz.sendTextWithMentions(from, arg[1]) //20
			tobz.sendTextWithMentions(from, arg[1])  //21
			tobz.sendTextWithMentions(from, arg[1])  //22
			tobz.sendTextWithMentions(from, arg[1])  //23
			tobz.sendTextWithMentions(from, arg[1])  //24
			tobz.sendTextWithMentions(from, arg[1])  //25
			tobz.sendTextWithMentions(from, arg[1])  //26
			tobz.sendTextWithMentions(from, arg[1])  //27
			tobz.sendTextWithMentions(from, arg[1])  //28
 			tobz.sendTextWithMentions(from, arg[1])  //29
			tobz.sendTextWithMentions(from, arg[1])  //30
			tobz.sendTextWithMentions(from, '*SPAM TAG DONE TO* ' + arg[1]  )
			break
        case prefix+'snk':
            tobz.reply(from, snk, id)
            break
            case 'p':
        await tobz.sendSeen(from) 
        if (isGroupMsg)
        tobz.reply(from, `Apa bang`, id)
        break
;

        // DEFAULT
        default:
        /*    if (command.startsWith(`${prefix}`)) {
                if (isBanned) return tobz.reply(from, `Maaf anda di banned, anda tidak dapat memakai bot!`, id)
            } */
            if (command.startsWith('b1ottttt')) {
                if (!isGroupMsg)
                tobz.sendTextWithMentions(from, `Hai *@${sender.id.replace('@c.us','')}* ada yang bisa dibantu? ketik *${prefix}help* untuk melihat commands`, id)
        
            }
          	if (command.startsWith('savegw')) {
                tobz.reply(from, `api.whatsapp.com/send?phone=${serial.match(/\d+/g)}&text=${args[0]}`, id)
                console.log(from, 'WAS MAKE A NUMBER / WA.ME')
        
            }
			if (command.startsWith('bot')) {
				if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) {
                tobz.sendTextWithMentions(from, `Hai *@${sender.id.replace('@c.us','')}* ada yang bisa dibantu? ketik *${prefix}help* untuk melihat commands`, id)
                }
                if (isGroupMsg) {
                    tobz.reply(from, `Iya? Ada yang bisa dibantu?\nKetik *${prefix}help* untuk melihat commands`, id)
                }

                
            }
            await tobz.sendSeen(from) 
            }
        }
			
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //tobz.kill().then(a => console.log(a))
    }
}


