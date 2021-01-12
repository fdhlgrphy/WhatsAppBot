require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const axios = require('axios')
const fetch = require('node-fetch')
const Math_js = require('mathjs');
const appRoot = require('app-root-path')
const speed = require('performance-now')
const os = require('os')
const get = require('got')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const google = require('google-it')
const request = require('request')
const translatte = require('translatte')
const translate = require('translatte')
const imageToBase64 = require('image-to-base64')
const { getStickerMaker } = require('./lib/ttp')
const bent = require('bent')
const db_group = new FileSync(appRoot+'/lib/data/group.json')
const cariKasar = require('./lib/kataKotor')
const db = low(db_group)
db.defaults({ group: []}).write()
const {
 removeBackgroundFromImageBase64
} = require('remove.bg')
const {
 stickerburn,
 stickerlight
 } = require('./lib/sticker')
const {
sleep
} = require('./lib/functionsss')
const {
 exec
} = require('child_process')
const {
bahasalist
} = require('./lib/help')
const {
joox,
instagram,
 tiktok,
 starmaker,
 twitter,
 shopee,
 lk21
} = require('./lib/downloader')
const {
 menuId,
 cekResi,
 urlShortener,
 meme,
brainly,
b a y,
ttp,
 getLocationData,
 images,
 resep,
 rugapoi,
 rugaapi
} = require('./lib')
const {
 msgFilter,
 color,
 processTime,
 isUrl
} = require('./utils')
const { uploadImages } = require('./utils/fetcher')
const fs = require('fs-extra')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
//const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
//const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
const _afk = JSON.parse(fs.readFileSync('./lib/data/afk.json'))
const _level = JSON.parse(fs.readFileSync('./lib/data/level.json'))
const _leveling = JSON.parse(fs.readFileSync('./lib/data/leveling.json'))
//LOAD File
let limit = JSON.parse(fs.readFileSync('./lib/data/limit.json'))
let point = JSON.parse(fs.readFileSync('./lib/data/point.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/data/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/data/left.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/data/antilink.json'))
let muted = JSON.parse(fs.readFileSync('./lib/data/muted.json'))
let msgLimit = JSON.parse(fs.readFileSync('./lib/data/msgLimit.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/data/user.json'))
let VipNumber = JSON.parse(fs.readFileSync('./lib/data/vip.json'))
let adminNumber = JSON.parse(fs.readFileSync('./lib/data/admin.json'))
let stickerspam = JSON.parse(fs.readFileSync('./lib/data/stickerspam.json'))
let antisticker = JSON.parse(fs.readFileSync('./lib/data/antisticker.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/data/antibadword.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/data/msgBadword.json'))
let dbbadword = JSON.parse(fs.readFileSync('./lib/data/katakasar.json'))
let badword = JSON.parse(fs.readFileSync('./lib/data/badword.json'))
let {
 ownerNumber,
 groupLimit,
 memberLimit,
 banChats,
limitCount,
 prefix
} = setting
const {
 apiNoBg,
apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))
function formatin(duit){
 let reverse = duit.toString().split('').reverse().join('');
 let ribuan = reverse.match(/\d{1,3}/g);
 ribuan = ribuan.join('.').split('').reverse().join('');
 return ribuan;
}
}
//Level
const getLevelingXp = (userId) => {
 let position = false
 Object.keys(_level).forEach((i) => {
 if (_level[i].id === userId) {
 position = i
 }
 })
 if (position !== false) {
 return _level[position].xp
 }
 }
 const getLevelingLevel = (userId) => {
 let position = false
 Object.keys(_level).forEach((i) => {
 if (_level[i].id === userId) {
 position = i
 }
 })
 if (position !== false) {
 return _level[position].level
 }
 }
 const getLevelingId = (userId) => {
 let position = false
 Object.keys(_level).forEach((i) => {
 if (_level[i].id === userId) {
 position = i
 }
 })
 if (position !== false) {
 return _level[position].id
 }
 }
 const addLevelingXp = (userId, amount) => {
 let position = false
 Object.keys(_level).forEach((i) => {
 if (_level[i].id === userId) {
 position = i
 }
 })
 if (position !== false) {
 _level[position].xp += amount
 fs.writeFileSync('./lib/data/level.json',
JSON.stringify(_level))
 }
 }
 const addLevelingLevel = (userId, amount) => {
 let position = false
 Object.keys(_level).forEach((i) => {
 if (_level[i].id === userId) {
 position = i
 }
 })
 if (position !== false) {
 _level[position].level += amount
 fs.writeFileSync('./lib/data/level.json',
JSON.stringify(_level))
 }
 }
 const addLevelingId = (userId) => {
 const obj = {id: userId, xp: 1, level: 1}
 _level.push(obj)
 fs.writeFileSync('./lib/data/level.json', JSON.stringify(_level))
 }
//end
const inArray = (needle, haystack) => {
 let length = haystack.length;
 for(let i = 0; i < length; i++) {
 if(haystack[i].id == needle) return i;
 }
 return false;
}
const addAfkUser = (userId, time, reason) => {
 const obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
 _afk.push(obj)
 fs.writeFileSync('./lib/data/afk.json', JSON.stringify(_afk))
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
module.exports = HandleMsg = async (aruga, message) => {
 try {
 const { type, id, from, t, sender, author, isGroupMsg, chat, chatId,
caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } =
message
 let { body } = message
 var { name, formattedTitle } = chat
 let { pushname, verifiedName, formattedName } = sender
 pushname = pushname || verifiedName || formattedName // verifiedName is
the name of someone who uses a business account
 const time = moment(t * 1000).format('DD/MM HH:mm:ss')
 const blockNumber = await aruga.getBlockedIds()
 const botNumber = await aruga.getHostNumber() + '@c.us'
 const groupId = isGroupMsg ? chat.groupMetadata.id : ''
 const groupAdmins = isGroupMsg ? await aruga.getGroupAdmins(groupId) :
''
 const isGroupAdmins = groupAdmins.includes(sender.id) || false
const chats = (type === 'chat') ? body : (type === 'image' ||
type === 'video') ? caption : ''
const pengirim = sender.id
 const SN = GenerateSerialNumber("000000000000000000000000")
 // Bot Prefix
 body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type ===
'image' && caption || type === 'video' && caption) &&
caption.startsWith(prefix)) ? caption : ''
 const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
 const arg = body.trim().substring(body.indexOf(' ') + 1)
 const args = body.trim().split(/ +/).slice(1)
 const isCmd = body.startsWith(prefix)
const stickermsg = message.type === 'sticker'
 const uaOverride = process.env.UserAgent
 const userId = sender.id.substring(9, 13)
 const url = args.length !== 0 ? args[0] : ''
 const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
 const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
 const mess = {
 wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
 magernulissatu: 'Harap Tunggu, BOT Sedang Menulis Di Buku 1!',
 error: {
 St: '[❗] Kirim gambar dengan caption *${prefix}sticker* atau
tag gambar yang sudah dikirim',
 Ti: '[❗] Replay sticker dengan caption *${prefix}stickertoimg*
atau tag sticker yang sudah dikirim',
 Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
 Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke
mp3!',
 Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh
sistem.',
 Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
 Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
S '[❗] B t tid k bi l k Ad i '
 Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
 Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
 Bk: '[❗] Bot tidak bisa memblockir Owner',
 Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di
private',
 Iv: '[❗] Link yang anda kirim tidak valid!'
 }
 }

const errorurl = 'https://i.ibb.co/1Rs6jxq/20201220-095224.jpg'
 const errorurl2 = 'https://i.ibb.co/1Rs6jxq/20201220-095224.jpg'
const errorImg = 'https://i.ibb.co/1Rs6jxq/20201220-095224.jpg'
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
// [IDENTIFY]
const isOwnerBot = ownerNumber.includes(pengirim)
 const isBanned = banned.includes(pengirim)
 const isBlocked = blockNumber.includes(pengirim)
//const isSimi = simi.includes(chatId)
//const isNgegas = ngegas.includes(chatId)
//const isKasar = await cariKasar(chats)
 const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
 const isLevelingOn = isGroupMsg ? _leveling.includes(chat.id) :
false
 const isAfkOn = checkAfkUser(sender.id)
const isAdmin = adminNumber.includes(pengirim)
const isVip = VipNumber.includes(pengirim)
 const GroupLinkDetector = antilink.includes(chatId)
const isBadword = badword.includes(chatId)
const isKasar = await cariKasar(chats)
const AntiStickerSpam = antisticker.includes(chatId)
const isWhite = (chatId) => adminNumber.includes(chatId) ? true
: false
 const isWhiteList = (chatId) => {
 if(adminNumber.includes(sender.id)){
 if(muted.includes(chatId)) return false
 return true
 }else{
 return false
 }
 }
//LINK DETECTOR
if (isGroupMsg && GroupLinkDetector && !isGroupAdmins &&
!isAdmin && !isOwnerBot){
 if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
 const check = await aruga.inviteInfo(chats);
 if (!check) {
 return
} l {
 } else {
 aruga.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu
mengirimkan link grup chat, maaf kamu di kick dari grup :(`, id).then(() => {
 aruga.removeParticipant(groupId, sender.id)
 })
 }
 }
 }
if (isGroupMsg && AntiStickerSpam && !isGroupAdmins && !isAdmin
&& !isOwnerBot){
 if(stickermsg === true){
 if(isStickerMsg(pengirim)) return
 addStickerCount(pengirim)
 }
 }
 //Point
 function pointAdd (id) {
 if (isAdmin) {return;}
 if (isVip) {return;}
 var found = false;
 Object.keys(point).forEach((i) => {
 if(point[i].id == id){
 found = i
 }
 })
 if (found !== false) {
 point[found].point += 1;
 fs.writeFileSync('./lib/data/point.json',JSON.stringify(point));
 }
 }
//badword
function isBadwordMsg(id){
 if (isAdmin) {return false;}
 let kasar = false;
 for (let i of msgBadword){
 if(i.id === id){
 let msg = i.msg
 if (msg >= 3) { // 3X BADWORD AKAN TERKENA KICK
 kasar === true
 aruga.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah
berkata kasar di grup ini, kamu akan di kick otomatis oleh XINZ!`, id).then(()
=> {
 aruga.removeParticipant(groupId, id)
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

fs.writeFileSync('./lib/data/msgBadword.json',JSON.stringify(msgBadword));
 return false;
 }
 }
 function addBadCount(id){
 if (isAdmin) {return;}
 var kasar = false
 Object.keys(msgBadword).forEach((i) => {
 if(msgBadword[i].id == id){
 kasar = i
 }
 })
 if (kasar !== false) {
 msgBadword[kasar].msg += 1;

fs.writeFileSync('./lib/data/msgBadword.json',JSON.stringify(msgBadword));
 }
 }
//LIMIT
 function isMsgLimit(id){
 if (isAdmin) {return false;}
 if (isVip) {return false;}
 let found = false;
 for (let i of msgLimit){
 if(i.id === id){
 if (i.msg >= 12) {
 found === true
 aruga.reply(from, '*[ANTI-SPAM]*\nMaaf, akun
anda kami blok karena SPAM, dan tidak bisa di UNBLOK!', id)
 aruga.contactBlock(id)
 banned.push(id)
 fs.writeFileSync('./settings/banned.json',
JSON.stringify(banned))
 return true;
 }else if(i.msg >= 7){
 found === true
 aruga.reply(from, '*[ANTI-SPAM]*\nNomor anda
terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!', id)
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

fs.writeFileSync('./lib/data/msgLimit.json',JSON.stringify(msgLimit));
 return false;
 }
 }
 function addMsgLimit(id){
 if (isAdmin) {return;}
 if (isVip) {return;}
 var found = false
 Object.keys(msgLimit).forEach((i) => {
 if(msgLimit[i].id == id){
 found = i
 }
 })
 if (found !== false) {
 msgLimit[found].msg += 1;

fs.writeFileSync('./lib/data/msgLimit.json',JSON.stringify(msgLimit));
 }
 }
 function isLimit(id){
 if (isAdmin) {return false;}
if (isVip) {return false;}
 let found = false;
 for (let i of limit){
 if(i.id === id){
 let limits = i.limit;
;
 if (limits >= limitCount) {
 found = true;
 aruga.reply(from, 'Perintah BOT anda sudah
mencapai batas, coba esok hari :)', id)
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

fs.writeFileSync('./lib/data/limit.json',JSON.stringify(limit));
 return false;
 }
 }
 function limitAdd (id) {
 if (isAdmin) {return;}
if (isVip) {return;}
 var found = false;
 Object.keys(limit).forEach((i) => {
 if(limit[i].id == id){
 found = i
 }
 })
 if (found !== false) {
 limit[found].limit += 1;

fs.writeFileSync('./lib/data/limit.json',JSON.stringify(limit));
 }
 }

 function monospace(string) {
 return '```' + string + '```'
 }
 // FUNCTION
 function isStickerMsg(id){
 if (isAdmin) {return false;}
 let found = false;
 for (let i of stickerspam){
 if(i.id === id){
 if (i.msg >= 6) {
 found === true
 aruga.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu
telah SPAM STICKER di grup, kamu akan di kick otomatis oleh XINZ`, id).then(()
=> {
 aruga.removeParticipant(groupId, id)
 })
 return true;
 }else if(i.msg >= 6){
 found === true
 aruga.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu
terdeteksi spam sticker!\nMohon tidak spam 5 sticker lagi atau nomor akan di
kick oleh XINZ!`, id)
 return true
 }else{
 found === true
 return false;
 }
 }
}
 }
 if (found === false){
 let obj = {id: `${id}`, msg:1};
 stickerspam.push(obj);

fs.writeFileSync('./lib/data/stickerspam.json',JSON.stringify(stickerspam));
 return false;
 }
 }
 function addStickerCount(id){
 if (isAdmin) {return;}
 var found = false
 Object.keys(stickerspam).forEach((i) => {
 if(stickerspam[i].id == id){
 found = i
 }
 })
 if (found !== false) {
 stickerspam[found].msg += 1;

fs.writeFileSync('./lib/data/stickerspam.json',JSON.stringify(stickerspam));
 }
 }
 // [BETA] Avoid Spam Message
 //if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) { return
console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY
HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from',
color(pushname)) }
 //if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) { return
console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY
HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from',
color(pushname), 'in', color(name || formattedTitle)) }
 //
 //if(!isCmd && isKasar && isGroupMsg) { console.log(color('[BADW]',
'orange'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'),
color(`${argx}`), 'from', color(pushname), 'in', color(name || formattedTitle))
}
 if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t
* 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command}
[${args.length}]`), 'from', color(pushname)) }
 if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t *
1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command}
[${args.length}]`), 'from', color(pushname), 'in', color(name ||
formattedTitle)) }
 // FUNCTION
 //MUTE
 if(chats === `${prefix}mutu` && isMuted(chatId) == true){
 if(isGroupMsg) {
 if (!isAdmin && !isOwnerBot) return aruga.reply(from, `Maaf,
perintah ini hanya dapat dilakukan oleh admin XINZ!`, id)
 if(isMsgLimit(pengirim)){
 return
 }else{
 addMsgLimit(pengirim)
 }
 muted.push(chatId)
 fs.writeFileSync('./lib/data/muted.json', JSON.stringify(muted,
null, 2))
 aruga.reply(from, `Bot telah di mute pada chat ini!
${prefix}unmutu untuk unmute!`, id)
 }else{
 if(isMsgLimit(pengirim)){
 return
 }else{
 addMsgLimit(pengirim)
}
 }
 muted.push(chatId)
 fs.writeFileSync('./lib/data/muted.json', JSON.stringify(muted,
null, 2))
 reply(from, `Bot telah di mute pada chat ini! ${prefix}unmutu
untuk unmute!`, id)
 }
 }
 if(chats === `${prefix}unmutu` && isMuted(chatId) == false){
 if(isGroupMsg) {
 if (!isAdmin && !isOwnerBot) return aruga.reply(from, 'Maaf,
perintah ini hanya dapat dilakukan oleh admin XINZ!', id)
 if(isMsgLimit(pengirim)){
 return
 }else{
 addMsgLimit(pengirim)
 }
 let index = muted.indexOf(chatId);
 muted.splice(index,1)
 fs.writeFileSync('./lib/data/muted.json', JSON.stringify(muted,
null, 2))
 aruga.reply(from, 'Bot telah di unmute!', id)
 }else{
 if(isMsgLimit(pengirim)){
 return
 }else{
 addMsgLimit(pengirim)
 }
 let index = muted.indexOf(chatId);
 muted.splice(index,1)
 fs.writeFileSync('./lib/data/muted.json', JSON.stringify(muted,
null, 2))
 aruga.reply(from, 'Bot telah di unmute!', id)
 }
 }
 if (chats === `${prefix}unbanchat`) {
 if (!isOwner) return tobz.reply(from, 'Maaf, perintah ini hanya
dapat dilakukan oleh Owner Elaina!', id)
 if(setting.banChats === false) return
 setting.banChats = false
 banChats = false
 fs.writeFileSync('./settings/setting.json', JSON.stringify(setting,
null, 2))
 tobz.reply('Global chat has been disable!')
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
 var pengirimNumber = "";
 if(mask != null){
 for(var i=0; i < mask.length; i++){
 var maskChar = mask[i];
 pengirimNumber += maskChar == "0" ? GenerateRandomChar() :
maskChar;
 }
 }
 return pengirimNumber;
 }

 var nmr = sender.id
 var obj = pendaftar.some((val) => {
 return val.id === nmr
 })
 var cekage = pendaftar.some((val) => {
 return val.id === nmr && val.umur >= 11
 })
 function monospace(string) {
 return '```' + string + '```'
 }
 function isReg(obj){
 if (obj === true){
 return false
 } else {
 return aruga.reply(from, `Kamu belum terdaftar sebagai Teman
XINZ\nuntuk mendaftar kirim ${prefix}daftar |nama|umur\n\ncontoh format:
${prefix}daftar |aqull|17\n\ncukup gunakan nama depan/panggilan saja`, id) //if
user is not registered
 }
 }
 function cekumur(obj){
 if (obj === true){
 return false
 } else {
 return aruga.reply(from, `Kamu belum cukup umur untuk
menggunakan XINZ, min 12 tahun\n\nKamu bisa mendaftar ulang dengan cara donasi
terlebih dahulu, bales ${prefix}donasi\nHubungi Owner : wa.me/6285157226383?
text=Bang+mau+daftarulang \natau masuk grup berikut
:\nhttps://chat.whatsapp.com/JdxmiWbZOKKLBu89nPXzTn`, id) //if user is not
registered
 }
 }
 //AFK
 if (isGroupMsg) {
 for (let ment of mentionedJidList) {
 if (checkAfkUser(ment)) {
 const pesanafk = chats.replace('@c.us', '')
 const getId = getAfkId(ment)
 const getReason = getAfkReason(getId)
 const getTime = getAfkTime(getId)
 aruga.reply(from, `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi
AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`, id)
 aruga.sendTextWithMentions(getId, `${monospace(`[AFK
REPORT]\n\nWAKTU : \n${time}\n\nNO PENGETAG : \n@${pengirim}\n\nGroup :
\n${formattedTitle}\n\nPesan : \n${pesanafk}`)}`)
 }
 }
 if (checkAfkUser(sender.id) && !isCmd) {
 _afk.splice(getAfkPosition(sender.id), 1)
 fs.writeFileSync('./lib/data/afk.json', JSON.stringify(_afk))
 await aruga.sendTextWithMentions(from,
`${monospace(`@${sender.id.replace('@c.us','')} telah kembali`)}`)
 }
 }
 // Serial Number Generator
 function GenerateRandomNumber(min,max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
 }
 // Generates a random alphanumberic character
 function GenerateRandomChar() {
 var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
 var randomNumber = GenerateRandomNumber(0,chars.length - 1);
 return chars[randomNumber];
 }
 // Generates a Serial Number, based on a certain mask
 function GeneratePengirimNumber(mask){
 var pengirimNumber = "";
 if(mask != null){
 for(var i=0; i < mask.length; i++){
 var maskChar = mask[i];
 pengirimNumber += maskChar == "0" ? GenerateRandomChar() :
maskChar;
 }
 }
 return pengirimNumber;
 }
// Leveling [ALPHA]
 if (isGroupMsg && isLevelingOn && !isCmd) {
 const currentLevel = getLevelingLevel(sender.id)
 const checkId = getLevelingId(sender.id)
 try {
 if (currentLevel === undefined && checkId === undefined) {
 addLevelingId(sender.id)
 } else {
 const amountXp = Math.floor(Math.random() * 10) + 500
 const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
 addLevelingXp(sender.id, amountXp)
 const getXp = getLevelingXp(sender.id)
 if (requiredXp <= getXp) {
 addLevelingLevel(sender.id, 1)
 await aruga.sendText(from, `Selamat ${pushname}! Kamu
naik ke level *${getLevelingLevel(sender.id)}*!`)
 }
 }
 } catch (err) {
 console.error(err)
 }
 }
if(!isCmd && isKasar && isGroupMsg && isBadword &&
!isGroupAdmins) {
 console.log(color('[BADWORD]', 'red'), color(moment(t *
1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${argx}`), 'from',
color(pushname), 'in', color(name || formattedTitle))
 if(isBadwordMsg(pengirim)) return
 addBadCount(pengirim)
 }
 // [BETA] Avoid Spam Message
 msgFilter.addFilter(from)
//[AUTO READ] Auto read message
aruga.sendSeen(chatId)

 //SELF
 if (chats === `${prefix}public`) {
 if (!isOwnerBot) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dilakukan oleh Owner XINZ!', id)
 if(setting.banChats === false) return
 setting.banChats = false
 banChats = false
 fs.writeFileSync('./settings/setting.json', JSON.stringify(setting,
null, 2))
 await aruga.reply(from, '*MODE PUBLIC!*', id)
}
 }
// Filter Banned People
 if (isBanned) {
 return console.log(color('[BAN]', 'red'), color(moment(t *
1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command}
[${args.length}]`), 'from', color(pushname))
 }

 if (isMuted(chatId) && banChat() && !isBlocked && !isBanned ||
isOwnerBot ) {
 switch (command) {
 // Menu and TnC
 case `self`:
 if (setting.banChats === true) return
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan oleh Owner XINZ!', id)
 setting.banChats = true
 banChats = true
 fs.writeFileSync('./settings/setting.json', JSON.stringify(setting,
null, 2))
 await aruga.reply(from, '*MODE SELF!*', id)
 break
 case 'banchat':
 if (setting.banChats === true) return
 if (!isOwner) return aruga.reply(from, 'Perintah ini hanya bisa di
gunakan oleh Owner XINZ!', id)
 setting.banChats = true
 banChats = true
 fs.writeFileSync('./settings/setting.json', JSON.stringify(setting,
null, 2))
 aruga.reply('Global chat has been enable!')
 break
case 'public':
 console.log(`Self ${name}!`)
 await aruga.sendSeen(from)
 break
 case 'unbanchat':
 console.log(`Banchat ${name}!`)
 await aruga.sendSeen(from)
 break
 case 'mutu':
 console.log(`mute ${name}!`)
 await aruga.sendSeen(from)
 break
 case 'unmutu':
 console.log(`Unmuted ${name}!`)
 await aruga.sendSeen(from)
 break
/*case 'level':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
if (!isLevelingOn) return await aruga.reply(from,
'Leveling ga on', id)
 if (!isGroupMsg) return await aruga.reply(from, 'Hanya dapat
digunakan di grup', id)
 const userLevel = getLevelingLevel(sender.id)
 const userXp = getLevelingXp(sender.id)
 if (userLevel === undefined && userXp === undefined) return
await aruga.reply(from, `Kamu belum memiliki level!`, id)
 const ppLink = await aruga.getProfilePicFromServer(sender.id)
 if (ppLink === undefined) {
 var pepe = errorImg
 } else {
 var pepe = ppLink
 }
 const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
 const userId = sender.id.substring(9, 13)
 const randomHexs = `#${(Math.random() * 0xFFFFFF <<
0).toString(16).padStart(6, '0')}`
 const randomHex = `#${(Math.random() * 0xFFFFFF <<
0).toString(16).padStart(6, '0')}`
 const rank = new canvas.Rank()
 .setAvatar(pepe)
 .setLevel(userLevel)
 .setRankColor('#2c2f33', '#2c2f33')
 .setCurrentXP(userXp)
 .setRequiredXP(requiredXp)
 .setProgressBar([randomHexs, randomHex], 'GRADIENT')
 .setUsername(pushname)
 .setDiscriminator(userId)
 rank.build()
 .then(async (buffer) => {
 canvas.write(buffer, `${pushname}.png`)
 await aruga.sendFile(from, `${pushname}.png`,
`${pushname}.png`, '', id)
 fs.unlinkSync(`${pushname}.png`)
 })
 .catch(async (err) => {
 console.error(err)
 await aruga.reply(from, `Error!\n${err}`, id)
 })
 break
 case 'leaderboard':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
if (!isLevelingOn) return await aruga.reply(from,
'Leveling ga on', id)
 if (!isGroupMsg) return await aruga.reply(from, 'Hanya dapat
digunakan di grup', id)
 _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
 let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
 let nom = 0
 try {
 for (let i = 0; i < 10; i++) {
 nom++
 leaderboard += `${nom}. @${_level[i].id.replace('@c.us',
'')}\n➸ XP: *${_level[i].xp}* Level: *${_level[i].level}*\n\n`
 }
 await aruga.sendTextWithMentions(from, leaderboard)
 } catch (err) {
 console.error(err)
 await aruga.reply(from, 'Perlu setidaknya *10* user yang
memiliki level di database!', id)
 }
 break*/
/*case 'leveling':
if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return await aruga.reply(from, 'Hanya dapat
digunakan di grup', id)
 if (args.length === 0) return aruga.reply(from, 'Pilih on atau
off!', id)
 if (!isGroupAdmins) return await aruga.reply(from, 'Hanya dapat
diaktifkan oleh admin', id)
 if (args[0] === 'on') {
 if (isLevelingOn) return await aruga.reply(from, 'Leveling
sudah diaktifkan sebelumnya', id)
 _leveling.push(chat.id)
 fs.writeFileSync('./lib/data/leveling.json',
JSON.stringify( leveling))
g y(_ g))
 await aruga.reply(from, 'Leveling diaktifkan', id)
 } else if (args[0] === 'off') {
 _leveling.splice(chat.id, 1)
 fs.writeFileSync('./lib/data/leveling.json',
JSON.stringify(_leveling))
 await aruga.reply(from, 'Leveling dinonaktifkan', id)
 } else {
 await aruga.reply(from, 'Pilih on atau off bambang', id)
 }
 break*/
 case 'speed':
 case 'ping':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 await aruga.sendText(from, `Pong!!!!\nSpeed: ${processTime(t,
moment())} _Second_`)
 break
 case 'tnc':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 await aruga.sendText(from, menuId.textTnC())
 break
 case 'info':
 case 'menu':
 case 'help':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 var prema = isVip
 function format(seconds){
 function pad(s){
 return (s < 10 ? '0' : '') + s;
 }
 var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
 var seconds = Math.floor(seconds % 60);
 return pad(hours) + ' Jam, ' + pad(minutes) + ' Menit, ' +
pad(seconds) + 'Detik';
 }
 var uptime = process.uptime();
aruga.reply(from, `═══ 《 XINZ BOT 》 ═══
─────────────────────
-❥ *XINZ BOT Versi 2.0*
-❥ *Owner : aqulzz*
-❥ *Link* : wa.me/6285157226383
-❥ *Prefix : 「 ${prefix} 」*
-❥ *Total Pengguna : ${pendaftar.length}*
─────────────────────
═══ 《 USER INFO 》 ═══
─────────────────────
-❥ *Name* : *${pushname}*
-❥ *User* : *${prema ? 'VIP' : 'Free'}*
-❥ *Limit* : *${prema ? 'Unlimited' : '20/Hari'}*
-❥ *Link* : wa.me/${pengirim.replace('@c.us', '')}
-❥ *Tanggal / Jam : ${time}*
-❥ *Bot telah berjalan selama:*
-❥ *${format(uptime)}*
─────────────────────
*Call Bot = BLOCK*
*Auto Spam = OFF*
*${prefix}daftar |namamu|umur*
 -❥ *untuk daftar member XINZ BOT*
*${prefix}limit*
 -❥ *untuk mengecek limit harian*
─────────────────────
═══ 《 XINZ MENU 》 ═══
-❥ *${prefix}allmenu*
-❥ *${prefix}creatormenu*
-❥ *${prefix}islammenu*
-❥ *${prefix}kerangmenu*
-❥ *${prefix}searchmenu*
-❥ *${prefix}randommenu*
-❥ *${prefix}downloadmenu*
-❥ *${prefix}sosmedmenu*
-❥ *${prefix}grupmenu*
-❥ *${prefix}ramalanmenu*
-❥ *${prefix}vipmenu*
-❥ *${prefix}adminmenu*
-❥ *${prefix}botmenu*
-❥ *${prefix}ownermenu*
─────────────────────
═══ 《 Other 》 ═══
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*
-❥ *${prefix}wame*
-❥ *${prefix}profile*
-❥ *${prefix}spamtag*
─────────────────────
═══ 《 By aqulzz 》 ═══`, id)
 break
 case 'allmenu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 await aruga.sendText(from, `═══ 《 All Menu 》 ═══
─────────────────────
-❥ *XINZ BOT Versi 2.0*
-❥ *Script : Arugaz X Tobz*
-❥ *Owner : aqulzz*
-❥ *Link* : wa.me/6285157226383
-❥ *Prefix : 「 ${prefix} 」*
-❥ *Total Pengguna : ${pendaftar.length}*
─────────────────────
═══ 《 Creator Menu 》 ═══
─────────────────────
-❥ *${prefix}cooltext*
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}slightning*
-❥ *${prefix}sfire*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*
-❥ *${prefix}stimg*
-❥ *${prefix}magernulis*
-❥ *${prefix}romancetext*
-❥ *${prefix}glitchtext*
-❥ *${prefix}lovemaker*
-❥ *${prefix}tahta [teks]*
-❥ *${prefix}ttp [teks]*
-❥ *${prefix}pornlogo [|teks1|teks2]*
❥ *${ fi }bl k i k [t k ]*
-❥ *${prefix}blackpink [teks]*
-❥ *${prefix}epep*
-❥ *${prefix}gaming*
-❥ *${prefix}qrcode*
-❥ *${prefix}joker*
-❥ *${prefix}glowmaker*
-❥ *${prefix}thunder*
─────────────────────
═══ 《 Islam Menu 》 ═══
─────────────────────
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*
─────────────────────
═══ 《 Kerang Menu 》 ═══
─────────────────────
-❥ *${prefix}kapankah*
-❥ *${prefix}rate*
-❥ *${prefix}apakah*
-❥ *${prefix}bisakah*
─────────────────────
═══ 《 Search Menu 》 ═══
─────────────────────
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*
-❥ *${prefix}google*
-❥ *${prefix}pinterest*
-❥ *${prefix}brainly*
-❥ *${prefix}math*
-❥ *${prefix}heroml*
-❥ *${prefix}kbbi*
─────────────────────
═══ 《 Random Menu 》 ═══
─────────────────────
-❥ *${prefix}dadu*
-❥ *${prefix}koin*
-❥ *${prefix}randomtag [pesan]*
-❥ *${prefix}howbucin*
-❥ *${prefix}motivasi*
-❥ *${prefix}howgay*
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*
-❥ *${prefix}cerpen*
-❥ *${prefix}puisi*
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*
-❥ *${prefix}loli*
-❥ *${prefix}shota*
-❥ *${prefix}waifu*
-❥ *${prefix}husbu*
-❥ *${prefix}baka*
-❥ *${prefix}neko*
─────────────────────
═══ 《 Download Menu 》 ═══
─────────────────────
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*
-❥ *${prefix}play*
-❥ *${prefix}joox*
-❥ *${prefix}ig*
-❥ *${prefix}tiktok*
-❥ *${prefix}twitter*
-❥ *${prefix}starmaker*
─────────────────────
═══ 《 Sosmed Menu 》 ═══
─────────────────────
-❥ *${prefix}igstalk*
-❥ *${prefix}twtstalk*
-❥ *${prefix}tiktokstalk*
-❥ *${prefix}smulestalk*
─────────────────────
═══ 《 Grup Menu 》 ═══
─────────────────────
-❥ *${prefix}caklontong*
-❥ *${prefix}family100*
-❥ *${prefix}tebakgambar*
-❥ *${prefix}groupinfo*
-❥ *${prefix}sider*
-❥ *${prefix}getpic*
-❥ *${prefix}afk*
─────────────────────
═══ 《 Ramalan Menu 》 ═══
─────────────────────
-❥ *${prefix}cekzodiak*
-❥ *${prefix}zodiak*
-❥ *${prefix}cekjodoh*
-❥ *${prefix}ramalpasangan*
-❥ *${prefix}artinama*
-❥ *${prefix}artimimpi*
-❥ *${prefix}nomorhoki*
─────────────────────
═══ 《 VIP Menu 》 ═══
─────────────────────
-❥ *${prefix}play [judul]*
-❥ *${prefix}glitchtext*
-❥ *${prefix}lovemaker*
-❥ *${prefix}tahta [teks]*
-❥ *${prefix}ttp [teks]*
-❥ *${prefix}pornlogo*
-❥ *${prefix}bkp*
-❥ *${prefix}randomhentai*
-❥ *${prefix}randomtrapnime*
-❥ *${prefix}randomcry*
-❥ *${prefix}randomhug*
-❥ *${prefix}randomnsfwneko*
-❥ *${prefix}randomblowjob*
-❥ *${prefix}randomkiss*
-❥ *${prefix}lolinsfw*
-❥ *${prefix}dnhnt [codenuklir]*
─────────────────────
═══ 《 Search Menu 》 ═══
─────────────────────
-❥ *${prefix}aa*
-❥ *${prefix}ii*
❥ ${p e }
-❥ *${prefix}uu*
-❥ *${prefix}ee*
-❥ *${prefix}oo*
-❥ *${prefix}aiueo*
─────────────────────
═══ 《 Admin Grup 》 ═══
─────────────────────
-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall [pesan]*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*
-❥ *${prefix}bye*
─────────────────────
═══ 《 Bot Menu 》 ═══
─────────────────────
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*
-❥ *${prefix}bugreport*
-❥ *${prefix}saran*
-❥ *${prefix}speed*
-❥ *${prefix}listvip*
-❥ *${prefix}listadmin*
-❥ *${prefix}listblock*
─────────────────────
═══ 《 Owner Menu 》 ═══
─────────────────────
-❥ *${prefix}daftarulang*
-❥ *${prefix}addvip*
-❥ *${prefix}delvip*
-❥ *${prefix}addadmin*
-❥ *${prefix}deladmin*
-❥ *${prefix}ban*
-❥ *${prefix}bc*
-❥ *${prefix}leaveall*
-❥ *${prefix}clearall*
-❥ *${prefix}setprefix*
-❥ *${prefix}setname*
-❥ *${prefix}setstatus*
-❥ *${prefix}setprofilepic*
-❥ *${prefix}getses*
-❥ *${prefix}mute*
-❥ *${prefix}unmute*
─────────────────────
═══ 《 Other 》 ═══
─────────────────────
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*
-❥ *${prefix}wame*
-❥ *${prefix}profile*
-❥ *${prefix}spamtag*
─────────────────────
═══ 《 By aqulzz 》 ═══` id)
═══ 《 By aqulzz 》 ═══ , id)
 break
 case 'sosmedmenu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 await aruga.sendText(from, `═══ 《 Sosmed Menu 》 ═══
─────────────────────
-❥ *${prefix}igstalk*
-❥ *${prefix}twtstalk*
-❥ *${prefix}tiktokstalk*
-❥ *${prefix}smulestalk*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
 break
case 'adminmenu':
 case 'menuadmin':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 await aruga.sendText(from, `═══ 《 Admin Grup 》 ═══
─────────────────────
-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall [pesan]*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*
-❥ *${prefix}bye*
─────────────────────
═══ 《 Owner Grup 》 ═══
-❥ *${prefix}kickall*
═══ 《 XINZ BOT 》 ═══`, id)
 break
case 'menuvip':
case 'vipmenu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 VIP Menu 》 ═══
─────────────────────
*Menu berikut hanya dapat di gunakan oleh member VIP*
*Silahkan chat owner dan membayar 5k untuk mengakses menu VIP*
─────────────────────
*Member VIP tidak memiliki limit harian*
─────────────────────
-❥ *${prefix}play [judul]*
-❥ *${prefix}glitchtext*
-❥ *${prefix}lovemaker*
-❥ *${prefix}tahta [teks]*
-❥ *${prefix}ttp [teks]*
-❥ *${prefix}pornlogo*
-❥ *${prefix}bkp*
-❥ *${prefix}randomhentai*
-❥ *${prefix}randomtrapnime*
-❥ *${prefix}randomcry*
-❥ *${prefix}randomhug*
-❥ *${prefix}randomnsfwneko*
-❥ *${prefix}randomblowjob*
-❥ *${prefix}randomkiss*
-❥ *${prefix}lolinsfw*
❥ $ i i
-❥ *${prefix}dnhnt [codenuklir]*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
 case 'creatormenu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
aruga.sendText(from, `═══ 《 Creator Menu 》 ═══
─────────────────────
-❥ *${prefix}cooltext*
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}slightning*
-❥ *${prefix}sfire*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*
-❥ *${prefix}stimg*
-❥ *${prefix}magernulis*
-❥ *${prefix}romancetext*
-❥ *${prefix}glitchtext*
-❥ *${prefix}lovemaker*
-❥ *${prefix}tahta [teks]*
-❥ *${prefix}ttp [teks]*
-❥ *${prefix}pornlogo [|teks1|teks2]*
-❥ *${prefix}blackpink [teks]*
-❥ *${prefix}epep*
-❥ *${prefix}gaming*
-❥ *${prefix}qrcode*
-❥ *${prefix}joker*
-❥ *${prefix}thunder*
-❥ *${prefix}glowmaker*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'islammenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Islam Menu 》 ═══
─────────────────────
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'kerangmenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Kerang Menu 》 ═══
─────────────────────
-❥ *${prefix}kapankah*
-❥ *${prefix}rate*
-❥ *${prefix}apakah*
-❥ *${prefix}bisakah*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'searchmenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Search Menu 》 ═══
g
─────────────────────
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*
-❥ *${prefix}google*
-❥ *${prefix}pinterest*
-❥ *${prefix}brainly*
-❥ *${prefix}math*
-❥ *${prefix}heroml*
-❥ *${prefix}kbbi*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'randommenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Random Menu 》 ═══
─────────────────────
-❥ *${prefix}dadu*
-❥ *${prefix}koin*
-❥ *${prefix}randomtag [pesan]*
-❥ *${prefix}howbucin*
-❥ *${prefix}motivasi*
-❥ *${prefix}howgay*
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*
-❥ *${prefix}cerpen*
-❥ *${prefix}puisi*
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*
-❥ *${prefix}loli*
-❥ *${prefix}shota*
-❥ *${prefix}waifu*
-❥ *${prefix}husbu*
-❥ *${prefix}baka*
-❥ *${prefix}neko*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'downloadmenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Download Menu 》 ═══
─────────────────────
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*
-❥ *${prefix}play*
-❥ *${prefix}joox*
-❥ *${prefix}ig*
-❥ *${prefix}tiktok*
-❥ *${prefix}twitter*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'grupmenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Grup Menu 》 ═══
─────────────────────
-❥ *${prefix}caklontong*
-❥ *${prefix}family100*
-❥ *${prefix}tebakgambar*
-❥ *${prefix}groupinfo*
-❥ *${prefix}sider*
-❥ *${prefix}getpic*
-❥ *${prefix}afk*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'botmenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Bot Menu 》 ═══
─────────────────────
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*
-❥ *${prefix}bugreport*
-❥ *${prefix}saran*
-❥ *${prefix}speed*
-❥ *${prefix}listvip*
-❥ *${prefix}listadmin*
-❥ *${prefix}listblock*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'ownermenu':
if(isReg(obj)) return
 if(cekumur(cekage)) return
await aruga.sendText(from, `═══ 《 Owner Menu 》 ═══
─────────────────────
-❥ *${prefix}daftarulang*
-❥ *${prefix}addvip*
-❥ *${prefix}delvip*
-❥ *${prefix}addadmin*
-❥ *${prefix}deladmin*
-❥ *${prefix}ban*
-❥ *${prefix}bc*
-❥ *${prefix}leaveall*
-❥ *${prefix}clearall*
-❥ *${prefix}setprefix*
-❥ *${prefix}setname*
-❥ *${prefix}setstatus*
-❥ *${prefix}setprofilepic*
-❥ *${prefix}getses*
-❥ *${prefix}mute*
-❥ *${prefix}unmute*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
case 'ramalanmenu':
case 'ramalan':
if(isReg(obj)) return
 if(cekumur(cekage)) return
it dT t(f ` 《 R l 》
await aruga.sendText(from, ═══ 《 Ramalan 》 ═══
─────────────────────
-❥ *${prefix}cekzodiak*
-❥ *${prefix}zodiak*
-❥ *${prefix}cekjodoh*
-❥ *${prefix}ramalpasangan*
-❥ *${prefix}artinama*
-❥ *${prefix}artimimpi*
-❥ *${prefix}nomorhoki*
─────────────────────
═══ 《 XINZ BOT 》 ═══`, id)
break
 case 'donate':
 case 'donasi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 await aruga.sendText(from, menuId.textDonasi())
 break
 case 'owner':
 case 'ownerbot':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 await aruga.sendContact(from, ownerNumber)
 .then(() => aruga.sendText(from, 'Kalo mo minta limit, daftar vip,
ama minta unblock chat dia aja'))
 break
 case 'addadmin':
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan oleh Owner XINZ!', id)
 for (let i = 0; i < mentionedJidList.length; i++) {
 adminNumber.push(mentionedJidList[i])
 fs.writeFileSync('./lib/data/admin.json',
JSON.stringify(adminNumber))
 aruga.reply(from, 'Success Menambahkan Admin XINZ!', id)
 }
 break
 case 'addvip':
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan oleh Owner XINZ!', id)
 for (let i = 0; i < mentionedJidList.length; i++) {
 VipNumber.push(mentionedJidList[i])
 fs.writeFileSync('./lib/data/vip.json',
JSON.stringify(VipNumber))
 const nuvip = body.slice(8)
 const nuvip1 = await aruga.checkNumberStatus(nuvip)
 const novip = nuvip1.id.replace('@','') + '@c.us'
 var pic = await aruga.getProfilePicFromServer(novip)
 if (pic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = pic
 }
 aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `${monospace(`═══ 《
Add VIP 》 ═══\n\nName : ${novip}\nTanggal / Jam : ${time}\n\n═══ 《 XINZ BOT 》
═══`)}`, id)
 }
 break
 case 'deladmin':
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan oleh Owner XINZ!', id)
 let inq = adminNumber.indexOf(mentionedJidList[0])
 adminNumber.splice(inq, 1)
 fs.writeFileSync('./lib/data/admin.json',
JSON.stringify(adminNumber))
 aruga.reply(from, 'Success Menghapus Admin XINZ!', id)
 break
 case 'delvip':
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan oleh Owner XINZ!', id)
 let inw = VipNumber.indexOf(mentionedJidList[0])
 VipNumber.splice(inw, 1)
 fs.writeFileSync('./lib/data/vip.json',
JSON.stringify(VipNumber))
 aruga.reply(from, 'Success Menghapus Member VIP!', id)
 break
 case 'aiueo':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if(!quotedMsg && args.length === 0) return aruga.reply(from,
`Kirim perintah ${prefix}aiueo [teks] atau reply suatu pesan`, id)
 if (!quotedMsg) {
 const halahh = (body.slice(4).replace(/[a|i|u|e|o]/gi, ''))
 aruga.reply(from, halahh, id)
 }else if(quotedMsg){
 const halahhh = quotedMsg.type == 'chat' ? quotedMsg.body :
quotedMsg.type == 'image' ? quotedMsg.caption : ''
 const halahh2 = (halahhh.replace(/[a|i|u|e|o]/gi, ''))
 aruga.reply(from, halahh2, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'aa':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if(!quotedMsg && args.length === 0) return aruga.reply(from,
`Kirim perintah ${prefix}aa [teks] atau reply suatu pesan`, id)
 if (!quotedMsg) {
 const halah = (body.slice(4).replace(/[i|u|e|o]/gi, 'a'))
 aruga.reply(from, halah, id)
 }else if(quotedMsg){
 const halahh = quotedMsg.type == 'chat' ? quotedMsg.body :
quotedMsg.type == 'image' ? quotedMsg.caption : ''
 const halah2 = (halahh.replace(/[i|u|e|o]/gi, 'a'))
 aruga.reply(from, halah2, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'ii':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if(!quotedMsg && args.length === 0) return aruga.reply(from, `Kirim
perintah ${prefix}ii [teks] atau reply suatu pesan`, id)
 if (!quotedMsg) {
 const hilih = (body.slice(4).replace(/[a|u|e|o]/gi, 'i'))
 aruga.reply(from, hilih, id)
 }else if(quotedMsg){
 const hilihh = quotedMsg.type == 'chat' ? quotedMsg.body :
quotedMsg.type == 'image' ? quotedMsg.caption : ''
 const hilih2 = (hilihh.replace(/[a|u|e|o]/gi, 'i'))
( p (/[ | | | ]/g , ))
 aruga.reply(from, hilih2, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'uu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if(!quotedMsg && args.length === 0) return aruga.reply(from, `Kirim
perintah ${prefix}uu [teks] atau reply suatu pesan`, id)
 if (!quotedMsg) {
 const huluh = (body.slice(4).replace(/[a|i|e|o]/gi, 'u'))
 aruga.reply(from, huluh, id)
 }else if(quotedMsg){
 const huluhh = quotedMsg.type == 'chat' ? quotedMsg.body :
quotedMsg.type == 'image' ? quotedMsg.caption : ''
 const huluh2 = (huluhh.replace(/[a|i|e|o]/gi, 'u'))
 aruga.reply(from, huluh2, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'ee':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if(!quotedMsg && args.length === 0) return aruga.reply(from, `Kirim
perintah ${prefix}ee [teks] atau reply suatu pesan`, id)
 if (!quotedMsg) {
 const heleh = (body.slice(4).replace(/[a|u|i|o]/gi, 'e'))
 aruga.reply(from, heleh, id)
 }else if(quotedMsg){
 const helehh = quotedMsg.type == 'chat' ? quotedMsg.body :
quotedMsg.type == 'image' ? quotedMsg.caption : ''
 const heleh2 = (helehh.replace(/[a|u|i|o]/gi, 'e'))
 aruga.reply(from, heleh2, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'oo':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if(!quotedMsg && args.length === 0) return aruga.reply(from, `Kirim
perintah ${prefix}oo [teks] atau reply suatu pesan`, id)
 if (!quotedMsg) {
 const holoh = (body.slice(4).replace(/[a|u|e|i]/gi, 'o'))
 aruga.reply(from, holoh, id)
 }else if(quotedMsg){
 const holohh = quotedMsg.type == 'chat' ? quotedMsg.body :
quotedMsg.type == 'image' ? quotedMsg.caption : ''
 const holoh2 = (holohh.replace(/[a|u|e|i]/gi, 'o'))
 aruga.reply(from, holoh2, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
break
 break
 case 'listadmin':
 let admn = `═══ 《 Admin XINZ 》 ═══
─────────────────────\n`
 for (let i of adminNumber) {
 admn += `➸ @${i.replace(/@c.us/g,'')}\n`
 }
admn += `─────────────────────
═══ 《 Total : ${adminNumber.length} 》 ═══`
 await aruga.sendTextWithMentions(from, admn, id)
 break
 case 'listvip':
 let vvip = `═══ 《 VIP Member 》 ═══
─────────────────────\n`
 for (let i of VipNumber) {
 vvip += `➸ @${i.replace(/@c.us/g,'')}\n`
 }
vvip += `─────────────────────
═══ 《 Total : ${VipNumber.length} 》 ═══`
 await aruga.sendTextWithMentions(from, vvip, id)
 break
 case 'listbanned':
 let bened = `Berikut list banned\nTotal : ${banned.length}\n`
 for (let i of banned) {
 bened += `➸ @${i.replace(/@c.us/g,'')}\n`
 }
 await aruga.sendTextWithMentions(from, bened, id)
 break
 case 'listblock':
 let hih = `Berikut list block\nTotal : ${blockNumber.length}\n`
 for (let i of blockNumber) {
 hih += `➸ @${i.replace(/@c.us/g,'')}\n`
 }
 await aruga.sendTextWithMentions(from, hih, id)
 break
 case 'join':
if (!isAdmin && !isOwnerBot) return aruga.reply(from,
'Maaf, perintah ini hanya dapat digunakan oleh Owner dan AdminXINZ', id)
 if (args.length == 0) return aruga.reply(from, `Jika kalian ingin
mengundang bot kegroup silahkan invite atau dengan\nketik ${prefix}join [link
group]`, id)
 let linkgrup = body.slice(6)
 let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
 let chekgrup = await aruga.inviteInfo(linkgrup)
 if (!islink) return aruga.reply(from, 'Maaf link group-nya salah!
silahkan kirim link yang benar', id)
 if (isOwnerBot) {
 await aruga.joinGroupViaLink(linkgrup)
 .then(async () => {
 await aruga.sendText(from, 'Berhasil join grup via
link!')
 await aruga.sendText(chekgrup.id, `Hai semua, aku XINZ
Bot. Untuk melihat fitur bot ketik ${prefix}menu`)
 })
 } else {
 let cgrup = await aruga.getAllGroups()
 if (cgrup.length > groupLimit) return aruga.reply(from, `Sorry,
the group on this bot is full\nMax Group is: ${groupLimit}`, id)
 if (cgrup.size < memberLimit) return aruga.reply(from, `Sorry,
BOT wil not join if the group members do not exceed ${memberLimit} people`, id)
 await aruga.joinGroupViaLink(linkgrup)
 .then(async () =>{
 await aruga.reply(from, 'Berhasil join grup via
link!', id)
 })
t h(() {
 .catch(() => {
 aruga.reply(from, 'Gagal!', id)
 })
 }
 break
 case 'botstat':
 const loadedMsg = await aruga.getAmountOfLoadedMessages()
 const chatIds = await aruga.getAllChatIds()
 const groups = await aruga.getAllGroups()
 const waversion = await aruga.getWAVersion()
 const timestamp = speed();
 const latensi = speed() - timestamp
 const batteryLevel = await aruga.getBatteryLevel()
 const charged = await aruga.getIsPlugged();
 aruga.sendText(from, `═══ 《 XINZ STAT 》 ═══
─────────────────────
-❥ *Status bot : Online*
-❥ *Battery Level : ${batteryLevel}%*
-❥ *Is Charging : ${charged}*
-❥ *Penggunaan RAM : ${(process.memoryUsage().heapUsed / 1024 /
1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
-❥ *CPU : ${os.cpus().length}*
-❥ *Versi WA : ${waversion}*
─────────────────────
-❥ *${loadedMsg} Loaded Messages*
-❥ *${groups.length} Group Chats*
-❥ *${chatIds.length - groups.length} Personal Chats*
-❥ *${chatIds.length} Total Chats*
_Speed_ : _${latensi.toFixed(4)} Second_
─────────────────────
═══ 《 *Total User : ${pendaftar.length}* 》 ═══`)
 break
 case 'daftar': // NAMBAHIN NOMOR DI DATABASE
 argz = body.trim().split('|')
 if (argz.length >= 2) {
 const nonye = sender.id
 const namanye = argz[1]
 const umurnye = argz[2]
 if(isNaN(umurnye)) return await aruga.reply(from, 'Umur
harus berupa angka!!', id)
 if(umurnye >= 40) return await aruga.reply(from, 'Kamu
terlalu tua, kembali lagi ke masa muda untuk menggunakan XINZ', id)
 const jenenge = namanye.replace(' ','')
 var ceknya = nonye
 var obj = pendaftar.some((val) => {
 return val.id === ceknya
 })
 if (obj === true){
 return aruga.reply(from, 'kamu sudah terdaftar', id)
// BAKAL RESPON JIKA NO UDAH ADA
 } else {
 const mentah = await aruga.checkNumberStatus(nonye)
// PENDAFTARAN
 const msg = monospace(`Pendaftaran berhasil dengan
SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${jenenge} [@${nonye.replace(/[@c.us]/g, '')}]
[Nomor]: wa.me/${nonye.replace('@c.us', '')}
[Umur]: ${umurnye}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Untuk menggunakan bot silahkan kirim ${prefix}menu
Total Pengguna yang telah terdaftar ${pendaftar.length}`)
 const hasil = mentah.canReceiveMessage ? msg : false
 if (!hasil) return aruga.reply(from, 'Nomor WhatsApp
tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
 {
 const register = ({
 id: mentah.id._serialized,
 nama: jenenge,
 umur: umurnye
 })
 pendaftar.push(register)
 fs.writeFileSync('./lib/data/user.json',
JSON.stringify(pendaftar)) // DATABASE
 aruga.sendTextWithMentions(from, hasil)
 }
 }
 } else {
 await aruga.reply(from, `Format yang kamu masukkan
salah, kirim ${prefix}daftar |nama|umur\n\ncontoh format: ${prefix}daftar
|ahmad|17\n\ncukup gunakan nama depan/panggilan saja`, id) //if user is not
registered
 }
 break
 case 'daftarulang':
 if (!isAdmin) return aruga.reply(from, 'Command ini hanya
dapat digunakan oleh admin XINZ', id)
 const nomernya = args[0]
 let textnya = nomernya.replace(/[-\s+@c.us]/g,'')
 const cusnya = textnya + '@c.us'
 const umurnya = args[1]
 if(umurnya >= 40) return await aruga.reply(from, 'Umur
terlalu tua kak, max 40 yaa :D', id)
 var found = false
 Object.keys(pendaftar).forEach((i) => {
 if(pendaftar[i].id == cusnya){
 found = i
 }
 })
 if (found !== false) {
 pendaftar[found].umur = umurnya;
 const updated = pendaftar[found]
 const result = monospace(`Update data berhasil
dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${updated.nama} | @${updated.id.replace(/[@c.us]/g, '')}
[Nomor]: wa.me/${updated.id.replace('@c.us', '')}
[Umur]: ${updated.umur}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Total Pengguna yang telah terdaftar ${pendaftar.length}`)
 console.log(pendaftar[found])

fs.writeFileSync('./lib/data/user.json',JSON.stringify(pendaftar));
 aruga.sendTextWithMentions(from, result, id)
 } else {
 aruga.reply(from, `${monospace(`Di database ngga
ada nomer itu kak`)}`, id)
 }
 break
 //Sticker Converter
 case 'toimg':
case 'stimg':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 
 if (quotedMsg && quotedMsg.type == 'sticker') {
 const mediaData = await decryptMedia(quotedMsg)
 aruga.reply(from, `Sedamg di proses! Silahkan tunggu
sebentar...`, id)
 const imageBase64 =
`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
 await aruga.sendFile(from, imageBase64, 'imgsticker.jpg',
'Berhasil convert Sticker to Image!', id)
 .then(() => {
 console.log(`Sticker to Image Processed for ${processTime(t,
moment())} Seconds`)
 })
 } else if (!quotedMsg) return aruga.reply(from, `Format salah, silahkan
tag sticker yang ingin dijadikan gambar!`, id)
 pointAdd(pengirim)
 await limitAdd(pengirim)
 break
 // Sticker Creator
case 'coolteks':
case 'cooltext':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (!quotedMsg && args.length == 0) return aruga.reply(from, `Untuk
membuat teks keren CoolText pada gambar, gunakan ${prefix}cooltext
teks\n\nContoh: ${prefix}cooltext fikriganteng`, id)
rugaapi.cooltext(args[0])
.then(async(res) => {
await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
})
break
 case 'stickerlightning':
 case 'slightning':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1
min!`, id)
 if (isMedia && type === 'image') {
 const mediaData = await decryptMedia(message, uaOverride)
 const getUrle = await uploadImages(mediaData, false)
 const imgnye = await stickerlight(getUrle)
 const Slight = imgnye.result.imgUrl
 await aruga.sendStickerfromUrl(from, Slight)
 } else if (quotedMsg && quotedMsg.type == 'image') {
 const mediaData = await decryptMedia(quotedMsg, uaOverride)
 const getUrle = await uploadImages(mediaData, false)
 const imgnye = await stickerlight(getUrle)
 const Slight = imgnye.result.imgUrl
 await aruga.sendStickerfromUrl(from, Slight)
limitAdd(pengirim)
 } else {
 } e se {
 await aruga.reply(from, `Wrong Format!\n⚠ Harap Kirim Gambar
Dengan ${prefix}stickerlightning`, id)
 }
 pointAdd(pengirim)
 break
 case 'stickerfire':
 case 'sfire':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1
min!`, id)
 if (isMedia && type === 'image') {
 const mediaData = await decryptMedia(message, uaOverride)
 const getUrli = await uploadImages(mediaData, false)
 const imgnya = await stickerburn(getUrli)
 const Sfire = imgnya.result.imgUrl
 await aruga.sendStickerfromUrl(from, Sfire)
 } else if (quotedMsg && quotedMsg.type == 'image') {
 const mediaData = await decryptMedia(quotedMsg, uaOverride)
 const getUrli = await uploadImages(mediaData, false)
 const imgnya = await stickerburn(getUrli)
 const Sfire = imgnya.result.imgUrl
 await aruga.sendStickerfromUrl(from, Sfire)
limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n⚠ Harap Kirim Gambar
Dengan ${prefix}stickerfire`, id)
 }
 pointAdd(pengirim)
 break
 case 'sticker':
 case 'stiker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if ((isMedia || isQuotedImage) && args.length === 0) {
 const encryptMedia = isQuotedImage ? quotedMsg : message
 const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
 const mediaData = await decryptMedia(encryptMedia, uaOverride)
 const imageBase64 =
`data:${_mimetype};base64,${mediaData.toString('base64')}`
 aruga.sendImageAsSticker(from, imageBase64)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 } else if (args[0] === 'nobg') {
 if (isMedia || isQuotedImage) {
 try {
 var mediaData = await decryptMedia(message, uaOverride)
 var imageBase64 =
`data:${mimetype};base64,${mediaData.toString('base64')}`
 var base64img = imageBase64
 var outFile = './media/noBg.png'
 // kamu dapat mengambil api key dari website remove.bg dan ubahnya
difolder settings/api.json
 var result = await removeBackgroundFromImageBase64({
base64img, apiKey: apiNoBg, size: 'auto', type: 'auto', outFile })
 await fs.writeFile(outFile, result.base64img)
await aruga sendImageAsSticker(from
 await aruga.sendImageAsSticker(from,
`data:${mimetype};base64,${result.base64img}`)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 } catch(err) {
 console.log(err)
 await aruga.reply(from, 'Maaf batas penggunaan hari ini sudah
mencapai maksimal', id)
 }
 }
 } else if (args.length === 1) {
 if (!isUrl(url)) { await aruga.reply(from, 'Maaf, link yang kamu
kirim tidak valid.', id) }
 aruga.sendStickerfromUrl(from, url).then((r) => (!r && r !==
undefined)
 ? aruga.sendText(from, 'Maaf, link yang kamu kirim tidak
memuat gambar.')
 : aruga.reply(from, 'Here\'s your sticker'))
 await limitAdd(pengirim)
 pointAdd(pengirim)
.then(() => console.log(`Sticker Processed for ${processTime(t, moment())}
Second`))
 } else {
 await aruga.reply(from, `Tidak ada gambar! Untuk menggunakan
${prefix}sticker\n\n\nKirim gambar dengan caption\n${prefix}sticker
<biasa>\n${prefix}sticker nobg <tanpa background>\n\natau Kirim pesan
dengan\n${prefix}sticker <link_gambar>`, id)
 }
 break
 case 'stickergif':
 case 'stikergif':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1
min!`, id)
 if (isMedia && type === 'video' || mimetype === 'image/gif') {
 try {
 const mediaData = await decryptMedia(message, uaOverride)
 await aruga.sendMp4AsSticker(from, mediaData, {fps: 10,
startTime: `00:00:00.0`, endTime : `00:00:10.0`,loop: 0})
 } catch (e) {
 aruga.reply(from, `Size media terlalu besar! mohon kurangi
durasi video.`)
 }
 } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg &&
quotedMsg.mimetype == 'image/gif') {
 const mediaData = await decryptMedia(quotedMsg, uaOverride)
 await aruga.sendMp4AsSticker(from, mediaData, {fps: 10,
startTime: `00:00:00.0`, endTime : `00:00:10.0`,loop: 0})
 } else {
 aruga.reply(from, `Kesalahan ⚠ Hanya bisa video/gif apabila
file media berbentuk gambar ketik ${prefix}stickergif`, id)
 }
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'stikergiphy':
 case 'stickergiphy':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
 ( s t(pe g )) etu a uga. ep y( o , aa ${pus a e},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length !== 1) return aruga.reply(from, `Maaf, format pesan
salah.\nKetik pesan dengan ${prefix}stickergiphy <link_giphy>`, id)
 const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/,
'gi'))
 const isMediaGiphy = url.match(new
RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
 if (isGiphy) {
 const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-
)))+$/, 'gi'))
 if (!getGiphyCode) { return aruga.reply(from, 'Gagal mengambil
kode giphy', id) }
 const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
 const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode
+ '/giphy-downsized.gif'
 aruga.sendGiphyAsSticker(from, smallGifUrl).then(() => {
 aruga.reply(from, 'Here\'s your sticker')
 console.log(`Sticker Processed for ${processTime(t,
moment())} Second`)
limitAdd(pengirim)
 }).catch((err) => console.log(err))
 } else if (isMediaGiphy) {
 const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/,
'gi'))
 if (!gifUrl) { return aruga.reply(from, 'Gagal mengambil kode
giphy', id) }
 const smallGifUrl = url.replace(gifUrl[0], 'giphydownsized.gif')
 aruga.sendGiphyAsSticker(from, smallGifUrl)
 .then(() => {
 aruga.reply(from, 'Here\'s your sticker')
 console.log(`Sticker Processed for ${processTime(t,
moment())} Second`)
limitAdd(pengirim)
 })
 .catch(() => {
 aruga.reply(from, `Ada yang error!`, id)
 })
 } else {
 await aruga.reply(from, 'Maaf, command sticker giphy hanya bisa
menggunakan link dari giphy. [Giphy Only]', id)
 }
 pointAdd(pengirim)
 break
 case 'meme':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if ((isMedia || isQuotedImage) && args.length >= 2) {
 const top = arg.split('|')[0]
 const bottom = arg.split('|')[1]
 const encryptMedia = isQuotedImage ? quotedMsg : message
 const mediaData = await decryptMedia(encryptMedia, uaOverride)
 const getUrl = await uploadImages(mediaData, false)
 const ImageBase64 = await meme.custom(getUrl, top, bottom)
 aruga.sendFile(from, ImageBase64, 'image.png', '', null, true)
 .then(() => {
 aruga.reply(from, 'Ini makasih!',id)
limitAdd(pengirim)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang error!')
 })
 } else {
 await aruga.reply(from, `Tidak ada gambar! Silahkan kirim gambar
dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme
teks atas | teks bawah`, id)
 }
 pointAdd(pengirim)
 break
 case 'quotemaker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const qmaker = body.trim().split('|')
 if (qmaker.length >= 3) {
 const quotes = qmaker[1]
 const author = qmaker[2]
 const theme = qmaker[3]
 aruga.reply(from, 'Proses kak..', id)
 try {
 const hasilqmaker = await images.quote(quotes, author,
theme)
 aruga.sendFileFromUrl(from, `${hasilqmaker}`, '', 'Ini
kak..', id)
await limitAdd(pengirim)
 } catch {
 aruga.reply('Yahh proses gagal, kakak isinya sudah benar
belum?..', id)
 }
 } else {
 aruga.reply(from, `Pemakaian ${prefix}quotemaker |isi
quote|author|theme\n\ncontoh: ${prefix}quotemaker |aku sayang kamu|-
aruga|random\n\nuntuk theme nya pakai random ya kak..`)
 }
 pointAdd(pengirim)
 break
 case 'nulis':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Membuat bot menulis
teks yang dikirim menjadi gambar\nPemakaian: ${prefix}nulis [teks]\n\ncontoh:
${prefix}nulis i love you 3000`, id)
 const nulisq = body.slice(7)
 const nulisp = await rugaapi.tulis(nulisq)
 await aruga.sendImage(from, `${nulisp}`, '', 'Nih...', id)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 pointAdd(pengirim)
 break
//TESTER
 case 'koin':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
if (isLimit(pengirim)) return aruga reply(from, `Maaf ${pushname},
 if (isLimit(pengirim)) return aruga.reply(from, Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const side = Math.floor(Math.random() * 2) + 1
 if (side == 1) {
 aruga.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-
indonesia-500-rupiah-copy.png', { method: 'get' })
 } else {
 aruga.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-
indonesia-500-rupiah-copy-1.png', { method: 'get' })
 }
 pointAdd(pengirim)
 break
case 'hideteks':
case 'hidetext':
if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}hideteks [pesan]*\nContoh : *${prefix}hideteks anda kena prank*`, id)
if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota Limit
Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
await aruga.sendText(from, ` ${body.slice(10)}`, id)
 limitAdd(pengirim)
break
 case 'fake':
 argz = body.trim().split('|')
 const textnyaa = argz[1]
 const replynya = argz[2]
 const nonya = argz[3]
 const nomorr = (nonya.replace(/@/g, ''))
 const nomoor = ('${nomorr}@s.whatsapp')
 aruga.reply(from, replynya,{ id: textnyaa, nomoor })
 break
 case 'zzzz':
 const fiki = chatId
 aruga.sendText(from, fiki, id)
 break
/*case 'fake':
const no = arg.split(' |')[2]
const no1 = arg.split('|')[3]
const teks = arg.split('|')[4]
const pen = no.replace(' ','')
 console.log(`no: ${pen} isi: ${teks}`)
 aruga.costumreply(from, teks, id, number: ${pen} message: ${no1})
 break*/
case 'qwerty':
aruga.costumreply(from, 'hai sayang', id)
break
 case 'sider':
 if(!isGroupMsg) return aruga.reply(from, 'Hanya untuk di dalam
group', id)
 if(!quotedMsg) return aruga.reply(from,'reply pesan bot')
 try{
 const reader = await aruga.getMessageReaders(quotedMsgObj.id)
 let list = ''
for (let pembaca of reader){
 for (let pembaca of reader){
 list +=`@${pembaca.id.replace(/@c.us/g,'')}\n`
 }
 aruga.sendTextWithMentions(from, `Yakali yang nyimak ga ikutan
nimbrung:\n\n${list}`, id)
 } catch(err) {
 console.log(err)
 aruga.reply(from,'Maaf, Belum ada yang membaca pesan XINZ', id)
 }
 break
 case 'zodiak':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}zodiak [zodiak kamu]*\nContoh : *${prefix}zodiak scorpio*`, id)
 try {
 const resp = await axios.get('https://api.vhtear.com/zodiak?query='
+ body.slice(8) + '&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const anm2 = `➸ Zodiak : ${resp.data.result.zodiak}\n➸ Ramalan :
${resp.data.result.ramalan}\n➸ Nomor Keberuntungan :
${resp.data.result.nomorKeberuntungan}\n➸ Motivasi :
${resp.data.result.motivasi}\n➸ Inspirasi : ${resp.data.result.inspirasi}`
 aruga.reply(from, anm2, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Zodiak tidak ditemukan')
 aruga.sendText(ownerNumber, 'Zodiak Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'caklontong':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 try {
 const resp = await
axios.get('https://api.vhtear.com/funkuis&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const anm2 = `➸ Soal : ${resp.data.result.soal}`
 const jwban = `➸ Jawaban : ${resp.data.result.jawaban}\n➸ Jawaban
: ${resp.data.result.desk}`
 aruga.reply(from, anm2, id)
 aruga.sendText(from, `45 Detik Lagi...`, id)
 await sleep(15000)
 aruga.sendText(from, `30 Detik Lagi...`, id)
 await sleep(15000)
 aruga.sendText(from, `15 Detik Lagi...`, id)
 await sleep(15000)
 aruga.reply(from, jwban, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Soal Quiz tidak ditemukan')
aruga sendText(ownerNumber, 'Zodiak Error : ' + err)
 aruga.sendText(ownerNumber, Zodiak Error : + err)
 }
 pointAdd(pengirim)
 break
 case 'tebakgambar':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 try {
 const resp = await
axios.get('https://api.vhtear.com/tebakgambar&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
 aruga.sendFileFromUrl(from, resp.data.result.soalImg,
'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
 aruga.sendText(from, `45 Detik Lagi...`, id)
 await sleep(15000)
 aruga.sendText(from, `30 Detik Lagi...`, id)
 await sleep(15000)
 aruga.sendText(from, `15 Detik Lagi...`, id)
 await sleep(15000)
 await aruga.reply(from, jwban, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Soal Quiz tidak ditemukan')
 aruga.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'family100':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 try {
 const resp = await
axios.get('https://api.vhtear.com/family100&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const anm2 = `➸ Soal : ${resp.data.result.soal}\n_Silahkan
DiJawab_`
 const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
 aruga.reply(from, anm2, id)
 aruga.sendText(from, `45 Detik Lagi...`, id)
 await sleep(15000)
 aruga.sendText(from, `30 Detik Lagi...`, id)
 await sleep(15000)
 aruga.sendText(from, `15 Detik Lagi...`, id)
 await sleep(15000)
 aruga.reply(from, jwban, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Soal Quiz tidak ditemukan')
 aruga.sendText(ownerNumber, 'Family100 Error : ' + err)
 }
i tAdd( i i )
 pointAdd(pengirim)
 break
 case 'heroml':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}heroml [nama hero]*\nContoh : *${prefix}heroml akai*`, id)
 try {
 const resp = await axios.get('https://api.vhtear.com/herodetail?
query=' + body.slice(8) + '&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const anm2 = `➸ Title : ${resp.data.result.title}\n➸ Quotes :
${resp.data.result.quotes}\n➸ Info : ${resp.data.result.info}\n➸ Atribut :
${resp.data.result.attributes}`
 aruga.sendFileFromUrl(from, resp.data.result.pictHero, 'hero.jpg',
anm2, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Hero tidak ditemukan')
 aruga.sendText(ownerNumber, 'Heroml Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'nomorhoki':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}nomorhoki [no hp kamu]*\nContoh : *${prefix}nomorhoki 0895384009405*`,
id)
 try {
 const resp = await axios.get('https://api.vhtear.com/nomerhoki?no='
+ body.slice(11) + '&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const anm2 = `➸ Hasil :\n ${resp.data.result.hasil}`
 aruga.reply(from, anm2, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Nomor Hoki tidak ditemukan')
 aruga.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'artimimpi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}artimimpi [mimpi]*\nContoh : *${prefix}artimimpi ular*`, id)
 try {
 const resp = await axios.get('https://api.vhtear.com/artimimpi?
query=' + body.slice(10) + '&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error, id)
 const anm2 = `➸ Artimimpi : ${resp.data.result.hasil}`
 aruga.reply(from, anm2, id)
 limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, Mimpi tidak ditemukan')
 aruga.sendText(ownerNumber, 'Artimimpi Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'baka':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 pointAdd(pengirim)
 aruga.reply(from, 'Harap tunggu sebentar', id);
 axios.get('https://nekos.life/api/v2/img/baka').then(res => {
 aruga.sendFileFromUrl(from, res.data.url, 'baka')
 })
 break
 case 'neko':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 q2 = Math.floor(Math.random() * 900) + 300;
 q3 = Math.floor(Math.random() * 900) + 300;
 aruga.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2,
'neko.png','Neko ')
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
case 'nekonime':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const nekonime = await
axios.get('https://api.vhtear.com/randomnekonime&apikey=juwenajaa')
await limitAdd(pengirim)
 if (nekonime.data.error) return aruga.reply(from,
nekonime.data.error, id)
 await aruga.sendFileFromUrl(from, nekonime.data.result.result,
'nekonime.jpg', '', id)
 pointAdd(pengirim)
 break
 case 'lolinsfw':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 aruga.sendText(from, 'Harap tunggu sebentar', id);
 axios.get('http://lolis-lifeapi.herokuapp.com/getNSFWLoli').then(res => {
 aruga.sendFileFromUrl(from, res.data.url, 'Pedo ;-;');
 })
 break
 case 'google':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, '[ WAIT ] Sedang di proses⏳ silahkan tunggu
sebentar', id)
 const googleQuery = body.slice(8)
 if(googleQuery == undefined || googleQuery == ' ') return
aruga.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
 google({ 'query': googleQuery }).then(results => {
 let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
 for (let i = 0; i < results.length; i++) {
 vars += `\n═════════════════\n\n*Judul* :
${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* :
${results[i].link}\n\n`
 }
 aruga.reply(from, vars, id);
limitAdd(pengirim)
 }).catch(e => {
 console.log(e)
 aruga.sendText(ownerNumber, 'Google Error : ' + e);
 })
 pointAdd(pengirim)
 break
 case 'grupinfo':
 case 'groupinfo':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', message.id)
 var totalMem = chat.groupMetadata.participants.length
 var desc = chat.groupMetadata.desc
 var groupname = name
 var grouppic = await aruga.getProfilePicFromServer(chat.id)
 if (grouppic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = grouppic
 }
 await aruga.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO
」*
*➸ Name : ${groupname}*
*➸ Members : ${totalMem}*
*➸ Group Description*
${desc}`)
break
 case 'ramalpasangan':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}ramalpasangan |kamu|pasangan*\nContoh : *${prefix}ramalpasangan
|aruga|XINZ*`, id)
 const ratee = [
 '100%',
 '95%',
 '90%',
 '85%',
 '80%',
 '75%',
 '70%',
 '65%',
 '60%',
 '55%',
 '50%',
 '45%',
 '40%',
 '35%',
 '30%',
 '25%',
 '20%',
 '15%',
 '10%',
 '5%'
 ]
argz = body.trim().split('|')
 if (arg.length >= 2) {
 aruga.reply(from, 'Harap tunggu sebentar', id)
 const kamu = argz[1]
 const pacar = argz[2]
 const rpmn = ratee[Math.floor(Math.random() * (ratee.length))]
 const rpmn2 = ratee[Math.floor(Math.random() * (ratee.length))]
 const rpmn3 = ratee[Math.floor(Math.random() * (ratee.length))]
 const rpmn4 = ratee[Math.floor(Math.random() * (ratee.length))]
 const rpmn5 = ratee[Math.floor(Math.random() * (ratee.length))]
 const rpmn6 = ratee[Math.floor(Math.random() * (ratee.length))]
 const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan
${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸
Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`
 aruga.reply(from, rjh2, id)
await limitAdd(pengirim)
 } else {
 await aruga.reply(from, 'Format salah!', id)
 }
 pointAdd(pengirim)
 break
/*case 'bpink':
const bp = body.slice(4)
 await limitAdd(pengirim)
 aruga.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?
text=${bp}&apikey=(vhtear api punya lu)`, 'titit.jpg', 'neh...', id)
 break*/
 case 'dadu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const dice = Math.floor(Math.random() * 6) + 1
 await aruga.sendStickerfromUrl(from,
'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
 pointAdd(pengirim)
 break
 case 'suit':
const suit = [
 'Batu',
'Gunting'
Gunting ,
'Kertas'
 ]
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const auit = suit[Math.floor(Math.random() * (suit.length))]
 await aruga.sendText(from, `Jawaban: ${auit}`)
 pointAdd(pengirim)
 break
 case 'kapankah':
const kapankah = [
 '1 Minggu lagi',
'2 minggu lagi',
'6 hari lagi',
'5 hari lagi',
'4 hari lagi',
'3 hari lagi',
'2 hari lagi',
'besok',
'kurang dari 24 jam',
 '1 Bulan lagi',
 '1 Tahun lagi'
 ]
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const when = args.join(' ')
 const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
 if (!when) aruga.reply(from, '⚠ Format salah! Ketik *${prefix}menu*
untuk penggunaan.')
 await aruga.sendText(from, `Pertanyaan: *${when}* \n\nJawaban:
${ans}`)
 pointAdd(pengirim)
 break
 case 'afk':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota Limit
Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
 await limitAdd(pengirim)
 if (isAfkOn) return await aruga.reply(from, `Fitur AFK telah
diaktifkan sebelumnya.`, id)
 const reason = args.join(' ') ? args.join(' ') : 'Nothing.'
addAfkUser(sender id time reason)
 addAfkUser(sender.id, time, reason)
 await aruga.sendTextWithMentions(from,
`${monospace(`@${sender.id.replace('@c.us','')}\ sedang afk\n➸ Alasan:
${reason}`)}`, id)
 break
 case 'giveaway':
 if(!isOwnerBot) return aruga.reply(from, 'Cuma buat owner woi', id)
 const userxinz = JSON.parse(fs.readFileSync('./lib/data/user.json'))
 const gipew = Math.floor(Math.random() * userxinz.length)
 const hasilgip = userxinz[gipew]
 await aruga.sendTextWithMentions(from, `═══ 《 Give Away 》 ═══
─────────────────────
*Selamat kepada :*
*Username :@${hasilgip.id.replace(/@c.us/g, '')}*
*Nama : ${hasilgip.nama}*
*Umur : ${hasilgip.umur}*
*Anda telah memenangkan VIP USER
Silahkan hubungi Owner*
─────────────────────
═══ 《 Give Away 》 ═══`)
 break
 case 'tagrandom':
 case 'randomtag':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'perintah ini hanya dapat
digunakan di dalam grup', id)
 if (!args.length === 0) return await aruga.reply(from, 'pesan tidak
boleh kosong', id) ;{
 const text = body.slice(11)
const groupMembers = isGroupMsg ? await aruga.getGroupMembersId(groupId): ' '
 const mem = groupMembers
 const randMem = mem[Math.floor(Math.random() * (mem.length))]
 const sapa = `[ RANDOM TAG ]\n\nDari :
@${sender.id.replace('@c.us','')}\nUntuk : @${randMem}\n\n\n*PESAN*:\n${text}
`
 await aruga.sendTextWithMentions(from, sapa)
 }
 break
 case 'nilai':
 case 'rate':
const rate = [
 '100%',
'99%',
'98%',
'97%',
'96%',
 '95%',
'94%',
'93%',
'92%',
'91%',
 '90%',
'89%',
'88%',
'87%',
'86%',
 '85%',
'84%',
'83%',
'82%',
'81%',
 '80%',
'79%',
'78%',
'77%',
'76%',
 '75%',
 '70%',
 '65%',
 '60%',
 '55%',
 '50%',
 '45%',
 '40%',
 '35%',
 '30%',
 '25%',
 '20%',
 '15%',
 '10%',
 '5%'
 ]
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const rating = args.join(' ')
 const awr = rate[Math.floor(Math.random() * (rate.length))]
 if (!rating) aruga.reply(from, '⚠ Format salah! Ketik
*${prefix}menu* untuk penggunaan.')
 await aruga.sendText(from, `Pertanyaan: *${rating}* \n\nJawaban:
${awr}`)
 pointAdd(pengirim)
 break
 case 'apakah':
const apakah = [
 'Ya',
 'Tidak',
'Hmmmm',
 'Coba Ulangi'
 ]
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const nanya = args.join(' ')
t j b k h[M th fl (M th d () * ( k h l th))]
 const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
 if (!nanya) aruga.reply(from, '⚠ Format salah! Ketik
*${prefix}menu* untuk penggunaan.')
 await aruga.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban:
${jawab}`)
 pointAdd(pengirim)
 break
 case 'bisakah':
const bisakah = [
 'Bisa',
 'Tidak Bisa',
'Meragukan',
'Sangat tidak bisa',
'Sangat bisaa',
 'Coba Ulangi'
 ]
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 const bsk = args.join(' ')
 const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
 if (!bsk) aruga.reply(from, '⚠ Format salah! Ketik *${prefix}menu*
untuk penggunaan.')
 await aruga.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban:
${jbsk}`)
 pointAdd(pengirim)
 break
 /*case 'left':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya
bisa di gunakan dalam group!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Perintah ini hanya
bisa di gunakan oleh Admin group!', id)
 if (args.length === 0) return aruga.reply(from, 'Pilih on atau
off!', id)
 if (args[0].toLowerCase() === 'on') {
 left.push(chat.id)
 fs.writeFileSync('./lib/data/left.json',
JSON.stringify(left))
 aruga.reply(from, 'Fitur left berhasil di aktifkan di group
ini!', id)
 } else if (args[0].toLowerCase() === 'off') {
 left.splice(chat.id, 1)
 fs.writeFileSync('./lib/data/left.json',
JSON.stringify(left))
 aruga.reply(from, 'Fitur left berhasil di nonaktifkan di
group ini!', id)
 } else {
 aruga.reply(from, 'Pilih on atau off udin!', id)
 }
 break
 case 'welcome':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya
bisa di gunakan dalam group!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Perintah ini hanya
bi di k l h Ad i !' id)
bisa di gunakan oleh Admin group!', id)
 if (args.length === 0) return aruga.reply(from, 'Pilih on atau
off!', id)
 if (args[0].toLowerCase() === 'on') {
 welkom.push(chat.id)
 fs.writeFileSync('./lib/data/welcome.json',
JSON.stringify(welkom))
 aruga.reply(from, 'Fitur welcome berhasil di aktifkan di
group ini!', id)
 } else if (args[0].toLowerCase() === 'off') {
 welkom.splice(chat.id, 1)
 fs.writeFileSync('./lib/data/welcome.json',
JSON.stringify(welkom))
 aruga.reply(from, 'Fitur welcome berhasil di nonaktifkan di
group ini!', id)
 } else {
 aruga.reply(from, 'Pilih on atau off udin!', id)
 }
 break*/
case 'gaming':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}gaming [text]. Contoh: *${prefix}gaming aqul*`, id)
 const tekss4 = body.slice(8)
 const kontols4 = await axios.get('https://docsjojo.herokuapp.com/api/gaming?text='+ tekss4)
await limitAdd(pengirim)
 if (kontols4.data.error) return aruga.reply(from,
kontols4.data.error, id)
 await aruga.sendFileFromUrl(from, kontols4.data.result, 'gaming
.jpg', '', id)
 pointAdd(pengirim)
 break
case 'watercolour':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}watercolour [text]. Contoh: *${prefix}watercolour aqul*`, id)
 const water = await
axios.get(`https://api.vhtear.com/watercolour_text?
text1=${body.slice(13)}&apikey=juwenajaa`)
await limitAdd(pengirim)
 if (water.data.error) return aruga.reply(from, water.data.error, id)
 await aruga.sendFileFromUrl(from, water.data.result.imgUrl,
'water.jpg', '', id)
 pointAdd(pengirim)
 break
case 'epep':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}epep [text]. Contoh: *${prefix}epep aqul*`, id)
${p e }epep [te t]. Co to : ${p e }epep aqu , d)
 const tekss3 = body.slice(5)
 const kontols3 = await axios.get('https://docsjojo.herokuapp.com/api/epep?text='+ tekss3)
await limitAdd(pengirim)
 if (kontols3.data.error) return aruga.reply(from,
kontols3.data.error, id)
 await aruga.sendFileFromUrl(from, kontols3.data.result, 'epep.jpg',
'', id)
 pointAdd(pengirim)
 break
 case 'shopee':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}shopee [barang]. Contoh: *${prefix}shopee samsung a50*`, id)
 const shopek = body.slice(8)
 aruga.reply(from, mess.wait, id)
 try {
 const dataplai = await axios.get(`https://api.vhtear.com/shopee?
query=${shopek}&count=5&apikey=juwenajaa`)
 const dataplay = dataplai.data.result
 let shopeq = `*「 SHOPEE 」*\n\n*Hasil Pencarian :
${shopek}*\n`
 for (let i = 0; i < dataplay.items.length; i++) {
 shopeq += `\n─────────────────\n\n• *Nama* :
${dataplay.items[i].nama}\n• *Harga* : ${dataplay.items[i].harga}\n• *Terjual* :
${dataplay.items[i].terjual}\n• *Lokasi Toko* :
${dataplay.items[i].shop_location}\n• *Link Product :
${dataplay.items[i].link_product}*\n• *Deskripsi* :
${dataplay.items[i].description}\n`
 }
 await aruga.sendFileFromUrl(from, dataplay.items[0].image_cover,
`shopee.jpg`, shopeq, id)
 await limitAdd(pengirim)
 } catch (err){
 console.log(err)
 }
 break
case 'playstore':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}playstore [ Query ]*, Contoh : *${prefix}playstore Mobile Legends*`)
 const keywotp = body.slice(11)
 aruga.reply(from, mess.wait, id)
 try {
 const dataplai = await
axios.get(`https://api.vhtear.com/playstore?query=${keywotp}&apikey=juwenajaa`)
 const dataplay = dataplai.data
 let keluarplay = `*「 PLAYSTORE 」*\n\nHasil Pencarian :
${keywotp}*\n`
 for (let i = 0; i < dataplay.result.length; i++) {
 keluarplay += `\n─────────────────\n\n• *Nama* :
${dataplay.result[i].title}\n• *Developer* : ${dataplay.result[i].developer}\n•
*Deskripsi* : ${dataplay.result[i].description}\n• *Paket ID* :
${dataplay.result[i].app_id}\n• *Harga* : ${dataplay.result[i].price}\n• *Link
App* : https://play.google.com${dataplay.result[i].url}\n`
 }
 await aruga.sendFileFromUrl(from, dataplay.result[0].icon,
`iconapk.webp`, keluarplay, id)
 await limitAdd(pengirim)
 } catch (err){
 console.log(err)
 }
 break
 case 'newstickerline':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, mess.wait, id)
 try {
 const stcline = await fetch(`https://api.vhtear.com/newsticker?
apikey=juwenajaa`)
 if (!stcline.ok) throw new Error(`unexpected response
${stcline.statusText}`)
 const stcline2 = await stcline.json()
 const { hasil } = await stcline2.result
 let xixixi = `*「 NEW STICKER LINE 」*\n\n`
 for (let i = 0; i < hasil.length; i++) {
 xixixi += `\n─────────────────\n\n*Title* :
${hasil[i].title}\n*Url* : ${hasil[i].uri}\n`
 }
 await aruga.sendFileFromUrl(from, 'https://playlh.googleusercontent.com/BkvRJsjYiEjb0-
XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs', 'newstc.jpg', xixixi,
id)
 await limitAdd(pengirim)
 } catch (err) {
 console.log(err)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png',
'💔 Maaf, Video tidak ditemukan')
 aruga.sendText(ownerNumber, 'Berita Error : ' + err)
 }
 break
 case 'news':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, mess.wait, id)
 try {
 const response2 = await
fetch(`https://api.vhtear.com/beritaterbaru&apikey=juwenajaa`)
 if (!response2.ok) throw new Error(`unexpected response
${response2.statusText}`)
 const jsonber = await response2.json()
 const { data } = await jsonber.result
 let xixixi = `*「 BERITA TERKINI 」*\n\n`
 for (let i = 0; i < data.length; i++) {
 xixixi += `\n─────────────────\n\n*Source* :
${data[i].url}\n*Penulis* : ${data[i].author}\n*Judul* :
${data[i].title}\n*Deskripsi* : ${data[i].description}\n*Dipublikasi* :
${data[i].publishedAt}\n*Konten* : ${data[i].content}\n`
 }
 await aruga.sendFileFromUrl(from, data[0].urlToImage,
'thumbserc.jpg', xixixi, id)
 await limitAdd(pengirim)
 } catch (err) {
l l ( )
 console.log(err)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png',
'💔 Maaf, Video tidak ditemukan')
 aruga.sendText(ownerNumber, 'Berita Error : ' + err)
 }
 break
 case 'jadwalbola':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 aruga.reply(from, mess.wait, id)
 try {
 const jdbola = await
fetch(`https://api.vhtear.com/jadwalbola&apikey=juwenajaa`)
 if (!jdbola.ok) throw new Error(`unexpected response
${jdbola.statusText}`)
 const jdbola2 = await jdbola.json()
 const { data } = await jdbola2.result
 let xixixi = `*「 JADWAL BOLA 」*\n\n`
 for (let i = 0; i < data.length; i++) {
 xixixi += `\n─────────────────\n\n*Kick-Off* :
${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* :
${data[i].stasiuntv}`
 }
 await aruga.sendText(from, xixixi, id)
 await limitAdd(pengirim)
 } catch (err) {
 console.log(err)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png',
'💔 Maaf, Jadwal tidak ditemukan')
 aruga.sendText(ownerNumber, 'Jadwal Bola Error : ' + err)
 }
 break
case 'blackpink':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}blackpink [text]. Contoh: *${prefix}blackpink aqul*`, id)
 aruga.reply(from, mess.wait, id)
 const blpk = body.slice(11)
 await aruga.sendFileFromUrl(from,
`https://api.vhtear.com/blackpinkicon?text=${blpk}&apikey=juwenajaa`,
'blackpink.jpg', '', id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
case '3dtext':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}3dtext [text]. Contoh: *${prefix}3dtext aqul*`, id)
 aruga.reply(from, mess.wait, id)
 const text3dd = body.slice(8)
 await aruga.sendFileFromUrl(from, `https://docsjojo.herokuapp.com/api/text3d?text=${text3dd}`, '3dtext.jpg', '', id)
 await limitAdd(pengirim)
p g
 pointAdd(pengirim)
 break
case 'galaksi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}galaksi [text]. Contoh: *${prefix}galaksi aqul*`, id)
 aruga.reply(from, mess.wait, id)
 const glk = body.slice(9)
 if (glk.length > 10) return aruga.reply(from, '*Teks Terlalu
Panjang!*\n_Maksimal 10 huruf!_', id)
 await aruga.sendFileFromUrl(from,
`https://api.vhtear.com/galaxytext?text=${glk}&apikey=juwenajaa`, 'galaksi.jpg',
'', id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
case 'joker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}joker [text]. Contoh: *${prefix}joker aqul*`, id)
 aruga.reply(from, mess.wait, id)
 const joker = body.slice(7)
 const jokerr = await axios.get(`https://tobzapi.herokuapp.com/api/textpro?theme=jokerlogo&text=${joker}`)
aruga.sendFileFromUrl(from, jokerr.data.result, 'joker.jpg', 'neh bang', id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
/*case 'fakee':
aruga.reply(from, 'test test', false_${body.slice(8)}@c.us_yooo gan)
break*/
case 'googletext':
case 'googleteks':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}googleteks [ |Teks1|Teks2|Teks3 ]*, contoh *${prefix}googleteks
|XINZ|XINZ adalah bot|XINZ adalah manusia*`, id)
 argz = body.trim().split('|')
 if (argz.length === 4) {
 aruga.reply(from, 'Tunggu sebentar dan pastikan format yang anda
masukkan benar', id)
 const gugel1 = argz[1]
 const gugel2 = argz[2]
const gugel3 = argz[3]
 aruga.sendFileFromUrl(from, `https://api.vhtear.com/googletext?
text1=${gugel1}&text2=${gugel2}&text3=${gugel3}&apikey=juwenajaa`, `google.jpg`,
'', id)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}googleteks [ |Teks1|Teks2|Teks3 ]*, contoh *${prefix}googleteks
|XINZ|XINZ adalah bot|XINZ adalah manusia*`, id)
 }
 pointAdd(pengirim)
 break
 case 'jarak':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}jarak [ |tmpt1|tempat2 ]*, contoh *${prefix}jarak |jakarta|surabaya*`,
id)
 argz = body.trim().split('|')
 if (argz.length === 3) {
 aruga.reply(from, 'Tunggu sebentar dan pastikan format yang anda
masukkan benar', id)
 const jaraq = argz[1]
 const jaraq2 = argz[2]
 const hasilja = await
axios.get(`https://api.vhtear.com/distance?
from=${jaraq}&to=${jaraq2}&apikey=juwenajaa`)
 if (hasilja.data.error) return aruga.reply(from,
hasilja.data.error, id)
 const jaraqq = `${hasilja.data.result.data}`
 aruga.reply(from, jaraqq, id)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}jarak [ |tmpt1|tempat2 ]*, contoh *${prefix}jarak |jakarta|surabaya*`,
id)
 }
 pointAdd(pengirim)
 break
 case 'pornlogo':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}pornlogo [ |Teks1|Teks2 ]*, contoh *${prefix}pornlogo |aqulzz|xinz*`,
id)
 argz = body.trim().split('|')
 if (argz.length === 3) {
 aruga.reply(from, 'Tunggu sebentar dan pastikan format yang anda
masukkan benar', id)
 const lpornhub = argz[1]
 const lpornhub2 = argz[2]
 aruga.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?
text1=${lpornhub}&text2=${lpornhub2}&apikey=juwenajaa`)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}pornlogo [ |Teks1|Teks2 ]*, contoh *${prefix}pornlogo |aqulzz|xinz*`,
id)
 }
 pointAdd(pengirim)
 break
 case 'lion':
if(isReg(obj)) et n
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}lion [ |Teks1|Teks2 ]*, contoh *${prefix}lion |aqulzz|xinz*`, id)
 argz = body.trim().split('|')
 if (argz.length === 3) {
 await aruga.reply(from, 'Tunggu sebentar dan pastikan format
yang anda masukkan benar', id)
 const lion1 = argz[1]
 const lion2 = argz[2]
 const loin = await axios.get(`https://tobzapi.herokuapp.com/api/textpro?theme=lionlogo&text1=${lion1}&text2=${lion2}`)
 aruga.sendFileFromUrl(from, loin.data.result, 'loin.jpg',
'neh bang', id)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}lion [ |Teks1|Teks2 ]*, contoh *${prefix}lion |aqulzz|xinz*`, id)
 }
 pointAdd(pengirim)
 break
case 'wolf2':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}wolf2 [ |Teks1|Teks2 ]*, contoh *${prefix}wolf2 |aqulzz|xinz*`, id)
 argz = body.trim().split('|')
 if (argz.length === 3) {
 aruga.reply(from, 'Tunggu sebentar dan pastikan format yang
anda masukkan benar', id)
 const wolf12 = argz[1]
 const wolf22 = argz[2]
 const wolf2 = await axios.get(`https://tobzapi.herokuapp.com/api/textpro?theme=wolflogo2&text1=${wolf12}&text2=${wolf22}`)
 aruga.sendFileFromUrl(from, wolf2.data.result, 'wolf2.jpg',
'neh bang', id)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}wolf2 [ |Teks1|Teks2 ]*, contoh *${prefix}wolf2 |aqulzz|xinz*`, id)
 }
 pointAdd(pengirim)
 break
case 'wolf':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}wolf [ |Teks1|Teks2 ]*, contoh *${prefix}wolf |aqulzz|xinz*`, id)
 argz = body.trim().split('|')
 if (argz.length === 3) {
 aruga.reply(from, 'Tunggu sebentar dan pastikan format yang
anda masukkan benar', id)
 const wolf1 = argz[1]
 const wolf2 = argz[2]
const wolf = await axios get(`https://tobz-
 const wolf await axios.get( https://tobz
api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${wolf1}&text2=${wolf2}`)
 aruga.sendFileFromUrl(from, wolf.data.result, 'wolf.jpg',
'neh bang', id)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}wolf [ |Teks1|Teks2 ]*, contoh *${prefix}wolf |aqulzz|xinz*`, id)
 }
 pointAdd(pengirim)
 break
 case 'ninja':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}ninja [ |Teks1|Teks2 ]*, contoh *${prefix}ninja |aqulzz|xinz*`, id)
 argz = body.trim().split('|')
 if (argz.length === 3) {
 aruga.reply(from, 'Tunggu sebentar dan pastikan format yang
anda masukkan benar', id)
 const ninja1 = argz[1]
 const ninja2 = argz[2]
 const nanji = await axios.get(`https://tobzapi.herokuapp.com/api/textpro?theme=ninjalogo&text1=${ninja1}&text2=${ninja2}`)
 aruga.sendFileFromUrl(from, nanji.data.result, 'ninja.jpg',
'neh bang', id)
 await limitAdd(pengirim)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
*${prefix}ninja [ |Teks1|Teks2 ]*, contoh *${prefix}ninja |aqulzz|xinz*`, id)
 }
 pointAdd(pengirim)
 break
 case 'qrcode':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}qrcode teks/link*, contoh *${prefix}qrcode xinzbot*`, id)
if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota Limit
Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
if(!args.lenght >= 2) return
let qrcodes = body.slice(8)
await aruga.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?
size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
 await limitAdd(pengirim)
 pointAdd(pengirim)
break
case 'spamtag':
if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan
dalam group!', id)
if (!isAdmin && !isOwnerBot) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan oleh admin XINZ!', id)
if (mentionedJidList.length === 0) return aruga.reply(from, 'Tag orang yang
ingin di spam!', id)
 const nyenye = body.slice(9)
 const nyenye2 = nyenye.replace(/@c.us/g,'')
const janjingg = (` @${sender.id.replace('@c.us','')}`)
const janjingg ( @${sender.id.replace( @c.us , )} )
aruga.sendText(from, 'WARNING!', id)
aruga.sendText(from, 'SPAM TAG STARTING!...', id)
aruga.sendTextWithMentions(from, nyenye2 + ' anda di spam oleh ' + janjingg)
aruga.sendTextWithMentions(from, nyenye2) //1
aruga.sendTextWithMentions(from, nyenye2) //2
aruga.sendTextWithMentions(from, nyenye2) //3
aruga.sendTextWithMentions(from, nyenye2) //4
aruga.sendTextWithMentions(from, nyenye2) //5
aruga.sendTextWithMentions(from, nyenye2) //6
aruga.sendTextWithMentions(from, nyenye2) //7
aruga.sendTextWithMentions(from, nyenye2) //8
aruga.sendTextWithMentions(from, nyenye2) //9
aruga.sendTextWithMentions(from, nyenye2) //10
aruga.sendTextWithMentions(from, nyenye2) //11
aruga.sendTextWithMentions(from, nyenye2) //12
aruga.sendTextWithMentions(from, nyenye2) //13
aruga.sendTextWithMentions(from, nyenye2) //14
aruga.sendTextWithMentions(from, nyenye2) //15
aruga.sendTextWithMentions(from, nyenye2) //16
aruga.sendTextWithMentions(from, nyenye2) //17
aruga.sendTextWithMentions(from, nyenye2) //18
aruga.sendTextWithMentions(from, nyenye2) //19
aruga.sendTextWithMentions(from, nyenye2) //20
aruga.sendTextWithMentions(from, nyenye2) //21
aruga.sendTextWithMentions(from, nyenye2) //22
aruga.sendTextWithMentions(from, nyenye2) //23
aruga.sendTextWithMentions(from, nyenye2) //24
aruga.sendTextWithMentions(from, nyenye2) //25
aruga.sendTextWithMentions(from, nyenye2) //26
aruga.sendTextWithMentions(from, nyenye2) //27
aruga.sendTextWithMentions(from, nyenye2) //28
 aruga.sendTextWithMentions(from, nyenye2) //29
aruga.sendTextWithMentions(from, nyenye2) //30
aruga.sendTextWithMentions(from, 'SPAM TAG DONE TO ' + nyenye2 )
break
 case 'spamcall':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
if(!isAdmin && !isVip) return aruga.reply(from, 'Maaf fitur ini hanya untuk
AdminXINZ dan MemberVip!', id)
 if (args.length !== 1) return aruga.reply(from, `Untuk menggunakan
fitur spamcall, ketik :\n${prefix}spamcall 8xxxxxxxxxx\n\nContoh:
${prefix}spamcall 81288888888`, id)
rugaapi spamcall(args[0])
 rugaapi.spamcall(args[0])
 .then(async (res) => {
 await aruga.reply(from, `${res}`, id)
 })
 break
 case 'spamcall2':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
if(!isAdmin && !isVip) return aruga.reply(from, 'Maaf fitur ini hanya untuk
AdminXINZ dan MemberVip!', id)
 if (args.length !== 1) return aruga.reply(from, `Untuk menggunakan
fitur spamcall, ketik :\n${prefix}spamcall 8xxxxxxxxxx\n\nContoh:
${prefix}spamcall 81288888888`, id)
 rugaapi.spamcall2(args[0])
 .then(async (res) => {
 await aruga.reply(from, `${res}`, id)
 })
 break
case 'romancetext':
if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
if (args.length === 0) return aruga.reply(from, 'Kirim perintah
${prefix}romancetext [text]. Contoh: *${prefix}romancetext aqul*', id)
 aruga.reply(from, mess.wait, id)
 const rmnct = body.slice(13)
 await aruga.sendFileFromUrl(from,
`https://api.vhtear.com/romancetext?text=${rmnct}&apikey=juwenajaa`,
'romancetext.jpg', '', id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
break
case 'valentine':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const sic = await
aruga.getProfilePicFromServer(mentionedJidList[0])
 const sic1 = await
aruga.getProfilePicFromServer(mentionedJidList[1])
 const ab = arg.split('|')[0]
 const bc = arg.split('|')[1]
 if (sic == undefined) {var pfp = errorurl
 } else {var pfp = sic}
 if (sic1 == undefined) {var pfp = errorurl2
 } else {var pfp = sic1}
 const cd = await shortener(sic)
 const de = await shortener(sic1)
 const urlss = 'https://api.vhtear.com/valentine?t1=' + ab + '&t2='
+ bc + '&l1=' + de + '&l2=' + cd + '&apikey=juwenajaa'
 const response = await fetch(urlss)
 const pp = await response.json()
 const cok = pp.result.imgUrl
 await aruga.sendFileFromUrl(from, cok, 'valentine.jpg', ``, id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
'd h t'
 case 'dnhnt':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 if (args.length >=1){
 const code = args[0]
 const url =
'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
 const short = []
 const shortener = await urlShortener(url)
 url['short'] = shortener
 short.push(url)
 const caption = `*NHENTAI DOWNLOADER*\n\nLink: ${shortener}`
 aruga.sendText(from, caption)
 } else {
 aruga.sendText(from, 'Maaf tolong masukan code nuclear')
 }
 break
 case 'loli':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const loli = await axios.get(`https://tobzapi.herokuapp.com/api/randomloli`)
 const loly = loli.data
 aruga.sendFileFromUrl(from, loly.result, `LOLI${ext}`, '*LOLI*', id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'shota':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const imageToBase64 = require('image-to-base64')
 var shouta = ['shota anime','anime shota'];
 var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
 var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
 axios.get(urlshot)
 .then((result) => {
 var sht = JSON.parse(JSON.stringify(result.data));
 var shotaak = sht[Math.floor(Math.random() * sht.length)];
 imageToBase64(shotaak)
 .then(
 (response) => {
 let img = 'data:image/jpeg;base64,'+response
 aruga.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
 limitAdd(pengirim)
 })
 .catch(
 (error) => {
 console.log(error);
 })
 })
 pointAdd(pengirim)
 break
 case 'waifu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
i i i i $ i i i i i
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const waifu = await axios.get('https://tobzapi.herokuapp.com/api/waifu')
 aruga.sendFileFromUrl(from, waifu.data.image, 'Waifu.jpg', `➸ Name
: ${waifu.data.name}\n➸ Description : ${waifu.data.desc}\n\n➸ Source :
${waifu.data.source}`, id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'husbu':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const diti = fs.readFileSync('./lib/data/husbu.json')
 const ditiJsin = JSON.parse(diti)
 const rindIndixx = Math.floor(Math.random() * ditiJsin.length)
 const rindKiyy = ditiJsin[rindIndixx]
 aruga.sendFileFromUrl(from, rindKiyy.image, 'Husbu.jpg',
rindKiyy.teks, id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'nhview':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 if (args.length === 0) return aruga.reply(from, 'Kirim perintah
*${prefix}nhview [212121]*\nContoh : *${prefix}nhview 321421*', id)
 const nhsh = body.slice(11)
 const nhsh2 = await
axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
 for (let i = 0; i < nhsh2.length; i++) {
 await aruga.sendImage(from, nhsh2[i].data, 'thumbserc.jpg', '',
id)
 }
 break
 case 'randomhentai':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)

 const hentai = await axios.get(`https://tobzapi.herokuapp.com/api/hentai`)
 const henta = hentai.data
 if (henta.result.endsWith('.png')) {
 var ext = '.png'
 } else {
 var ext = '.jpg'
 }
 aruga.sendImage(from, henta.result, `RandomHentai${ext}`, 'Random
Hentai!', id)
 break
 case 'randomtrapnime':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const trapnime = await axios.get('https://tobz-
p g p
api.herokuapp.com/api/nsfwtrap')
 aruga.sendFileFromUrl(from, trapnime.data.result, 'trap.jpg', 'Nih
bang', id)
 break
 case 'randomnsfwneko':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const nsfwneko = await axios.get('https://tobzapi.herokuapp.com/api/nsfwneko')
 const nsfwn = nsfwneko.data
 if (nsfwn.result.endsWith('.png')) {
 var ext = '.png'
 } else {
 var ext = '.jpg'
 }
 aruga.sendImage(from, nsfwn.result, `NsfwNeko${ext}`, 'NsfwNeko!',
id)
 break
 case 'randomblowjob':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const sblow = await axios.get('https://tobzapi.herokuapp.com/api/nsfwblowjob')
 const rblow = sblow.data
 aruga.sendFileFromUrl(from, rblow.result, `RandoBlow${ext}`, 'Random
Blowjob!', id)
 break
 case 'randomhug':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const shug = await axios.get('https://tobzapi.herokuapp.com/api/hug')
 const rhug = shug.data
 aruga.sendFileFromUrl(from, rhug.result, `RandomHug${ext}`, 'Random
Hug!', id)
 break
 case 'randomcry':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const scry = await axios.get('https://tobzapi.herokuapp.com/api/cry')
 const rcry = scry.data
 aruga.sendFileFromUrl(from, rcry.result, `RandomCry${ext}`, 'Random
Cry!', id)
 break
 case 'randomkiss':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const skiss = await axios.get('https://tobzapi herokuapp com/api/kiss')
api.herokuapp.com/api/kiss )
 const rkiss = skiss.data
 aruga.sendFileFromUrl(from, rkiss.result, `RandomKiss${ext}`,
'Random Kiss!', id)
 break
case 'howbucin':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}howbucin [nama]*\nContoh : *${prefix}howbucin xinz*`, id)
 const namah = args.join(' ')
 const bcn = await
axios.get('https://arugaz.herokuapp.com/api/howbucins')
 if (bcn.data.error) {
 aruga.reply(from, 'eror ngab', id)
 } else {
 aruga.reply(from, `Howbucin ${namah}:\n${bcn.data.desc}`, id)
 }
 pointAdd(pengirim)
break
case 'lk21':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}lk21 [judul]. Contoh: *${prefix}lk21 joker*`, id)
 lk21(body.slice(6)).then(async(res) => {
 for (let i = 0; i < res.data.length; i++) {
 const { resolusi, urlDownload } = res.data[i]
 const lk21 = `*Judul DITEMUKAN*
➸ *Pencarian : ${body.slice(6)}*
➸ *Resolusi : ${resolusi}*
➸ *Link : ${urlDownload}*`
 aruga.sendText(from, lk21)
 }
 }).catch ((err) => {
 console.error(err.message)
 aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔 Maaf,
film tidak ditemukan')
 aruga.sendText(ownerNumber, 'Error lk21 : '+ err)
 })
 pointAdd(pengirim)
 limitAdd(pengirim)
 break
 case 'pinterest':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}pinterest [query]*\nContoh : *${prefix}pinterest xinz*`, id)
 const ptrsq = body.slice(11)
 const ptrs = await axios.get('https://api.fdci.se/rep.php?
gambar='+ptrsq)
 const b = JSON.parse(JSON.stringify(ptrs.data))
 const ptrs2 = b[Math.floor(Math.random() * b.length)]
 const image = await bent("buffer")(ptrs2)
 const base64 = `data:image/jpg;base64,${image.toString("base64")}`
 aruga.sendImage(from, base64, 'ptrs.jpg', `*Pinterest*\n\n*Hasil
Pencarian : ${ptrsq}*`)
 pointAdd(pengirim)
 break
 case 'thunder':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}thunder [ Teks ]*, contoh *${prefix}thunder aqul*`, id)
 aruga.reply(from, mess.wait, id)
 const thndr = body.slice(9)
 await aruga.sendFileFromUrl(from,
`https://api.vhtear.com/thundertext?text=${thndr}&apikey=juwenajaa`,
'thndr.jpg', '', id)
 break
case 'joox':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}joox [ Optional ]*\nContoh : *${prefix}joox Alan Walker*`, id)
 aruga.reply(from, mess.wait, id)
 joox(body.slice(6)).then(async(res) => {
 let { penyanyi, judul, album, linkImg, linkMp3, filesize, ext,
duration } = await res
 let tjoox = `*「 JOOX DOWNLOADER 」*\n\n➸ *Penyanyi:*
${penyanyi}\n➸ *Judul:* ${judul}\n➸ *Album:* ${album}\n➸ *Ext:* ${ext}\n➸
*Size:* ${filesize}\n➸ *Durasi:* ${duration}\n\n_Silahkan tunggu sebentar
proses pengiriman file membutuhkan waktu beberapa menit._`
 aruga.sendImage(from, linkImg, judul, tjoox)
 aruga.sendFileFromUrl(from, linkMp3, `${judul}.${ext}`, '',
id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 await limitAdd(pengirim)
 }).catch((err) => {
 console.log(err);
 aruga.reply(from, `Maaf, Terjadi Kesalahan`, id)
 })
 pointAdd(pengirim)
 break
 case 'kbbi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}kbbi [ Query ]*\nContoh : *${prefix}kbbi asu*`, id)
 const kbbl = body.slice(6)
 const kbbl2 = await axios.get(`https://tobzapi.herokuapp.com/api/kbbi?kata=` + kbbl)
 if (kbbl2.data.error) {
 aruga.reply(from, kbbl2.data.error, id)
 } else {
aruga sendText(from `*「 KBBI 」*\n\n➸ *Query* : ${kbbl}\n\n➸
 aruga.sendText(from, 「 KBBI 」 \n\n➸ Query : ${kbbl}\n\n➸
*Result* : ${kbbl2.data.result.hasil}`, id)
 await limitAdd(pengirim)
 }
 pointAdd(pengirim)
 break
 case 'brainly':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 pointAdd(pengirim)
 if (args.length >= 2){
 const BrainlySearch = require('./lib/brainly')
 let tanya = body.slice(9)
 let jum = Number(tanya.split('.')[1]) || 2
 if (jum > 10) return aruga.reply(from, 'Max 10!', id)
 if (Number(tanya[tanya.length-1])){
 tanya
 }
 aruga.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')
[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
 await BrainlySearch(tanya.split('.')[0],Number(jum),
function(res){
 res.forEach(x=>{
 if (x.jawaban.fotoJawaban.length == 0) {
 aruga.reply(from, `➸ *Pertanyaan* :
${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
 } else {
 aruga.reply(from, `➸ *Pertanyaan* :
${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto
jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
 }
 })
 })
 } else {
 aruga.reply(from, 'Usage :\n!brainly [pertanyaan]
[.jumlah]\n\nEx : \n!brainly NKRI .2', id)
 }
 break
 case 'math':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 if (args.length === 1) return aruga.reply(from, '[❗] Kirim perintah
*${prefix}math [ Angka ]*\nContoh : ${prefix}math 12 * 12\n*NOTE* :\n- Untuk
Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan
Mennggunakan -\n- Untuk Pembagian Menggunakan /')
 const mtk = body.slice(6)
 if (typeof Math_js.evaluate(mtk) !== "number") {
 aruga.reply(from, `"${mtk}", bukan angka!\n[❗] Kirim perintah
*${prefix}math [ Angka ]*\nContoh : ${prefix}math 12 * 12\n*NOTE* :\n- Untuk
Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan
Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
 } else {
 aruga.reply(from, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} =
${Math_js.evaluate(mtk)}`, id)
}
 }
 pointAdd(pengirim)
break
case 'lovemaker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const love = body.slice(11)
if (!love) return aruga.reply(from, `Kirim perintah ${prefix}lovemaker
[teks]\n\nContoh ${prefix}lovemaker aqul`, id)
aruga.sendText(from, 'Sedang di proses...', id)
await aruga.sendFileFromUrl(from, `https://api.vhtear.com/lovemessagetext?
text=${love}&apikey=juwenajaa`,`${love}.jpg`,`────────────────\n*lovemaker*\n───
─────────────\n By Aqulzz`, id)
 break
 case 'glowmaker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const glow = body.slice(11)
 if (!glow) return aruga.reply(from, 'Kirim perintah
${prefix}glowmaker [teks]\n\nContoh ${prefix}glowmaker aqul', id)
 aruga.sendText(from, 'Sedang di proses...', id)
 await aruga.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?
text=${glow}&apikey=juwenajaa`,`${glow}.jpg`,`────────────────\n*glowmaker*\n───
─────────────\n By Aqulzz`, id)
 break
 case 'glitchtext':
 case 'glitchteks':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}glitchteks |Teks1|Teks2, contoh ${prefix}glitchteks |Teks1|Teks2`,
id)
 argz = body.trim().split('|')
 if (argz.length >= 3) {
 aruga.reply(from, mess.wait, id)
 const glitch1 = argz[1]
 const glitch2 = argz[2]
 aruga.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?
text1=${glitch1}&text2=${glitch2}&apikey=juwenajaa`)
 } else {
 await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah
${prefix}glitchteks |Teks1|Teks2, contoh ${prefix}glitchteks |XINZ|Bot`, id)
 }
 break
 case 'magernulis': // BY MFARELS
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (args.length === 3) return await aruga.reply(from, 'Kirim
Perintah *${prefix}magernulis1 --[Nama]--[Kelas]--[Teks]*\n\n*Contoh
:*\n${prefix}magernulis1 --aqulzz--9.1--Gw suka dia, dianya engga', id) //
https://github.com/MFarelS/RajinNulis-BOT
 args = body.trim().split('--') // INSTALL IMAGEMAGICK KALO MAU
WORK
 const diNama = args[0] // INSTALL, CENTANG KOLOM 1,2,3,5,6
 const diKelas = args[1] // SUBSCRIBE MFARELS CH
 const diTulis = args[2] // FOLLOW INSTAGRAM @mfarelsyahtiawan
await aruga reply(from mess magernulissatu id) // NAMA KELAS
 await aruga.reply(from, mess.magernulissatu, id) // NAMA, KELAS,
WAKTU, BY ST4RZ
 const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g,
'$&\n')
 const panjangNama = diNama.replace(/(\S+\s*){1,10}/g, '$&\n')
 const panjangKelas = diKelas.replace(/(\S+\s*){1,10}/g, '$&\n')
 const panjangBaris = panjangKalimat.split('\n').slice(0,
30).join('\n')
 const panjangBarisNama = panjangNama.split('\n').slice(0,
30).join('\n')
 const panjangBarisKelas = panjangKelas.split('\n').slice(0,
30).join('\n')
 var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6
-', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
 var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis',
'Jumat', 'Sabtu'];
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
'18'
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
 .on('error', () => aruga.reply(from, 'Error Bjeer, Keknya
Scriptnya Lagi Error', id))
 .on('exit', () => {
 aruga.sendImage(from,
'./mager/magernulis√/magernulis1√.jpg', 'FarelZahra.jpg', '*Sukses✓ Nulis
DiBuku ✓*\n\n*YouTube : MFarelS CH*\n*Instagram : @mfarelsyahtiawan*\n*Twitter
: @MSyahtiawan*\n*GitHub : @MFarelS*\n*Saweria : MFarelS*\n\n*© Powered By
BOT✓*', id)
 })
 break // BY MFARELS
 case 'tahta':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const jreng = body.slice(7)
 if (!jreng) return aruga.reply(from, `Kirim perintah
*${prefix}tahta [teks]*\n\nContoh *${prefix}tahta XINZ*`, id)
 if (jreng.length > 7) return aruga.reply(from, 'Maksimal 7 Huruf!',
id)
 aruga.sendText(from, '_Sedang diproses, mohon tunggu
sebentar!..._', id)
 await aruga.sendFileFromUrl(from,
`https://api.vhtear.com/hartatahta?
text=${jreng}&apikey=juwenajaa`,`${jreng}.jpg`,`Harta Tahta ${jreng}`, id)
 break
 case 'stahta':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const jreng1 = body.slice(7)
 if (!jreng1) return aruga.reply(from, 'Kirim perintah
*${prefix}tahta [teks]*\n\nContoh *${prefix}tahta XINZ*', id)
 if (jreng1.length > 7) return aruga.reply(from, 'Maksimal 7
Huruf!', id)
 aruga.sendText(from, '_Sedang diproses, mohon tunggu
sebentar!..._', id)
 await aruga.sendStickerfromUrl(from, `https://api.vhtear.com/hartatahta?
text=${jreng1}&apikey=juwenajaa`, { method: 'get' })
 break
 case 'ttp':
 if(isReg(obj)) return
( g( j))
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus
membervip, chat owner untuk berlangganan`, id)
 try
 {
 const string = body.toLowerCase().includes('${prefix}ttp') ?
body.slice(5) : body.slice(5)
 if(args)
 {
 if(quotedMsgObj == null)
 {
 const gasMake = await getStickerMaker(string)
 if(gasMake.status == true)
 {
 try{
 await aruga.sendImageAsSticker(from,
gasMake.base64)
 }catch(err) {
 await aruga.reply(from, 'Gagal membuat.',
id)
 }
 }else{
 await aruga.reply(from, gasMake.reason, id)
 }
 }else if(quotedMsgObj != null){
 const gasMake = await
getStickerMaker(quotedMsgObj.body)
 if(gasMake.status == true)
 {
 try{
 await aruga.sendImageAsSticker(from,
gasMake.base64)
 }catch(err) {
 await aruga.reply(from, 'Gagal membuat.',
id)
 }
 }else{
 await aruga.reply(from, gasMake.reason, id)
 }
 }

 }else{
 await aruga.reply(from, 'Tidak boleh kosong.', id)
 }
 }catch(error)
 {
 console.log(error)
 }
 break
 case 'bokep': // MFARELS
 case 'randombokep': // MFARELS
 case 'bkp': // MFARELS
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)
 const konsol = fs.readFileSync('./lib/data/18+.json') // MFARELS
 const konsolJsin = JSON.parse(konsol) // MFARELS
 const rindIndix = Math.floor(Math.random() * konsolJsin.length) //
MFARELS
 const rindKiy = konsolJsin[rindIndix] // MFARELS
 aruga.sendFileFromUrl(from, rindKiy.image, 'Bokep.jpg',
rindKiy.teks, id) // MFARELS
rindKiy.teks, id) // MFARELS
 break // MFARELS
 case 'wame':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 const pesann1 = body.slice(6)
 const pesannn = (pesann1.replace(/ /g, '+'))
 const pesann = ('?text='+ pesannn)
 await aruga.reply(from, `*Neh Mhank Link Nomor Wa Lu
${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}${pesann}*`, id)
 break
 case 'point':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if(isOwnerBot) return aruga.reply(from, 'Lu owner ga usah sok2 cek
point segala', id)
 if(isAdmin) return aruga.reply(from, 'Kamu adalah Admin XINZ BOT
\nAdmin Bot tidak memiliki point harian', id)
 if(isVip){
 var pic = await aruga.getProfilePicFromServer(author)
 if (pic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = pic
 }
 aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `${monospace(`═══ 《
USER VIP 》 ═══\n\nName : ${pushname}\npoint : MAX\n\n═══ 《 XINZ BOT 》 ═══`)}`)
 }else{
 var found = false
 const pointdat =
JSON.parse(fs.readFileSync('./lib/data/point.json'))
 for(let pnt of pointdat){
 if(pnt.id === pengirim){
 let pointCounts = pnt.point
 aruga.reply(from, `Point anda adalah :
*${pointCounts}*\nGunakan bot untuk menambah point`, id)
 found = true
 }
 }
 console.log(point)
 console.log(pointdat)
 }
 if (found === false){
 let obj = {id: `${pengirim}`, point:1};
 point.push(obj);
 fs.writeFileSync('./lib/data/point.json',JSON.stringify(point,
1));
 aruga.reply(from, `Point anda adalah : *0*\nGunakan bot untuk
menambah point`, id)
 }
 break
 case 'limit':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if(isOwnerBot) return aruga.reply(from, 'Lu owner ga usah sok2 cek
limit segala', id)
 if(isAdmin) return aruga.reply(from, 'Kamu adalah Admin XINZ BOT
\nAdmin Bot tidak memiliki limit harian', id)
 if(isVip){
 var pic = await aruga.getProfilePicFromServer(author)
 if (pic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = pic
 }
aruga sendFileFromUrl(from pfp 'pfp jpg' `${monospace(` 《
 aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', ${monospace( ═══ 《
USER VIP 》 ═══\n\nName : ${pushname}\nLimit : Unlimited\n\n═══ 《 XINZ BOT 》
═══`)}`)
 }else{
 var found = false
 const limidat = JSON.parse(fs.readFileSync('./lib/data/limit.json'))
 for(let lmt of limidat){
 if(lmt.id === pengirim){
 let limitCounts = limitCount-lmt.limit
 if(limitCounts <= 0) return aruga.reply(from, `Limit request
anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
 aruga.reply(from, `Sisa limit request anda tersisa :
*${limitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
 found = true
 }
 }
 console.log(limit)
 console.log(limidat)
 }
 if (found === false){
 let obj = {id: `${pengirim}`, limit:1};
 limit.push(obj);
 fs.writeFileSync('./lib/data/limit.json',JSON.stringify(limit,
1));
 aruga.reply(from, `Sisa limit request anda tersisa :
*${limitCount}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
 }
 break
 case 'buylimit':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if(isVip && isAdmin && isOwnerBot) return aruga.reply(from,
'Maaf fitur berikut hanya untuk member *gratisan*', id)
 var found = false
 Object.keys(limit).forEach((i) => {
 if(limit[i].id == id){
 found = i
 }
 })
 var foundp = false
 Object.keys(limit).forEach((i) => {
 if(limit[i].id == id){
 foundp = i
 }
 })
 if (found && foundp !== false) {
 point[foundp].point = Math.max(0, point[foundp].point);
 if(point[foundp].point < 10) return aruga.reply(from, `Maaf
point anda tidak cukup`, id)
 limit[found].limit = Math.max(0, limit[found].limit)
 if(limit[found].limit < 2){ // JIKA LIMIT 0 MAKA BISA GIFT
 return aruga.reply(from, `Limit yang tersisa masih
banyak`, id)
 }else{
 limit[found].limit -= 1
 point[foundp].point -= 10
 const updatedli = limit[found]
 const updatedpo = point[foundp]
 const resulti = `Gift kuota limit sukses dengan SN:
${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
「 GIFT KUOTA LIMIT 」
• User : @${updatedli.id.replace('@c.us','')}
• Limit: ${limitCount-updatedli.limit}
• Point: ${updatedpo.point}`
 console.log(limit[found])
 console.log(point[foundp])
 fs.writeFileSync('./lib/data/limit.json',JSON.stringify(limit));
 fs.writeFileSync('./lib/data/point.json',JSON.stringify(point));
 aruga.sendTextWithMentions(from, `${monospace(resulti)}`)
 }
 } else {
 aruga.reply(from, `Maaf, nomor tidak terdaftar di database!`,
id)
 }
 break
 case 'gift': // Hanya Admin & Owner Elaina yang bisa gift Limit
 if (!isAdmin, !isOwnerBot) return aruga.reply(from, `Maaf, perintah
ini hanya dapat dilakukan oleh Admin XINZ!`, id)
 const nomerr = arg.split(' ')[0]
 const jmla = arg.split(' ')[1]
 if(!nomerr) return aruga.reply(from, `Masukkan nomor yang
akan di gift, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift
@62813118507151 15`, id)
 let textaa = nomerr.replace(/[-\s+@c.us]/g,'')
 const cusz = textaa + '@c.us'
 if(!jmla) return aruga.reply(from, `Masukkan Jumlah gift
quota, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift
@62813118507151 15`, id)
 if(jmla > 20) return await aruga.reply(from, `Maximal 20!`,
id)
 var found = false
 Object.keys(limit).forEach((i) => {
 if(limit[i].id == cusz){
 found = i
 }
 })
 if (found !== false) {
 limit[found].limit = Math.max(0,
limit[found].limit);
 if(limit[found].limit < 20) return aruga.reply(from,
`Kuota Limit pada nomor tersebut masih penuh\nUntuk gift pastikan kuota limit
target sudah habis`, id)
 if(limit[found].limit < 1){ // JIKA LIMIT 0 MAKA
BISA GIFT
 return aruga.reply(from, `Kuota limit pada nomor
tersebut sudah penuh!`, id)
 }else{
 limit[found].limit -= jmla
 const updated = limit[found]
 const result = `Gift kuota limit sukses dengan SN:
${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
「 GIFT KUOTA LIMIT 」
• User : @${updated.id.replace('@c.us','')}
• Limit: ${limitCount-updated.limit}`
 console.log(limit[found])

fs.writeFileSync('./lib/data/limit.json',JSON.stringify(limit));
 aruga.sendTextWithMentions(from,
`${monospace(result)}`)
 }
 } else {
 aruga.reply(from, `Maaf, nomor itu tidak
terdaftar di database!`, id)
 }
 break
 case 'spamnumber':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (args.length === 0) return aruga.reply(from, '[❗] Kirim perintah
*${prefix}spamnumber [nomor] [banyak spam]*\ncontoh : *${prefix}spamnumber
${p e }spa u be [ o o ] [ba ya spa ] \ co to : ${p e }spa u be
0812xxxxxxxx 3*')
 const nmbr = body.slice(12)
 if(!nmbr) return
 aruga.sendText(ownerNumber, `*[SPAM NUMBER]*\n*WAKTU* :
${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${nmbr}`)
 aruga.reply(from, 'Spamnumber sudah dilaporkan ke Owner dan akan
segera diproses' ,id)
break
 case 'bugreport':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (args.length === 0) return aruga.reply(from, '[❗] Kirim perintah
*${prefix}bugreport [teks]*\ncontoh : *${prefix}bugreport Permisi Owner, Ada bug
pada command ${prefix}play, Tolong diperbaiki*')
 const bug = body.slice(11)
 if(!bug) return
 if(isGroupMsg){
 aruga.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* :
${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup :
${formattedTitle}\n\n${bug}`)
 aruga.reply(from, 'Masalah telah di laporkan ke owner BOT,
laporan palsu/main2 tidak akan ditanggapi.' ,id)
 }else{
 aruga.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* :
${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
 aruga.reply(from, 'Masalah telah di laporkan ke owner BOT,
laporan palsu/main2 tidak akan ditanggapi.', id)
 }
 break
 case 'saran':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (args.length === 0) return aruga.reply(from, '[❗] Kirim perintah
*${prefix}saran [teks]*\ncontoh : *${prefix}saran Permisi Owner, ada saran
command yaitu joox downloaders*')
 const srn = body.slice(7)
 if(!srn) return
 if(isGroupMsg){
 aruga.sendText(ownerNumber, `*[SARAN]*\n*WAKTU* : ${time}\nNO
PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup :
${formattedTitle}\n\n${srn}`)
 aruga.reply(from, 'Saran sudah dikirim ke OwnerBot \nTerimakasih
atas sarannya.' ,id)
 }else{
 aruga.sendText(ownerNumber, `*[SARAN]*\n*WAKTU* : ${time}\nNO
PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${srn}`)
 aruga.reply(from, 'Saran sudah dikirim ke OwnerBot \nTerimakasih
atas sarannya.', id)
 }
 break
case 'iri':
if(!isCmd){
aruga.sendPtt(from, './media/iri.mpeg' ,id)
}
break
case 'tareksis':
aruga.sendPtt(from, './media/tarek.mp3' ,id)
break
/*case 'halo':
/
aruga.sendPtt(from, './media/halo.mp3' ,id)
break*/
 case 'profile':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isBanned, isBlocked) return false
 if (isGroupMsg) {
 if (!quotedMsg) {
 var block = blockNumber.includes(author)
 var bend = banned.includes(author)
 var pic = await aruga.getProfilePicFromServer(author)
 var namae = pushname
var vipp = VipNumber.includes(author)
var admb = adminNumber.includes(author)
 var sts = await aruga.getStatus(author)
 var adm = isGroupAdmins
 var donate = isAdmin
 const { status } = sts
 if (pic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = pic
 }
 await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User
Profile* \n➸ *Username: ${namae}*\n➸ *User Info: ${status}*\n*➸ Block :
${block ? '✓' : '✕'}*\n*➸ Banned : ${bend ? '✓' : '✕'}*\n➸ *Admin Group:
${adm ? '✓' : '✕'}*\n➸ *Admin Bot : ${admb ? '✓' : '✕'}*\n➸ *VIP User :
${vipp ? '✓' : '✕'}*`)
 } else if (quotedMsg) {
 var qmid = quotedMsgObj.sender.id
 var block = blockNumber.includes(qmid)
 var bend = banned.includes(qmid)
 var pic = await aruga.getProfilePicFromServer(qmid)
 var namae = quotedMsgObj.sender.name
 var vipp = VipNumber.includes(qmid)
 var admb = adminNumber.includes(qmid)
 var sts = await aruga.getStatus(qmid)
 var adm = isGroupAdmins
 var donate = isAdmin
 const { status } = sts
 if (pic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = pic
 }
 await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User
Profile*\n➸ *Username: ${namae}*\n➸ *User Info: ${status}*\n*➸ Block : ${block
? '✓' : '✕'}*\n*➸ Banned : ${bend ? '✓' : '✕'}*\n➸ *Admin Group: ${adm ?
'✓' : '✕'}*\n➸ *Admin Bot : ${admb ? '✓' : '✕'}*\n➸ *VIP User : ${vipp ?
'✓' : '✕'}*`)
 }
 } else {
var pic = await aruga.getProfilePicFromServer(chatId)
 var block = blockNumber.includes(chatId)
var sts = await aruga.getStatus(chatId)
var bend = banned.includes(chatId)
var vipp = VipNumber.includes(chatId)
var admb = adminNumber.includes(chatId)
const { status } = sts
if (pic == undefined) {
 var pfp = errorurl
 } else {
 var pfp = pic
 }
await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile*\n➸ *Username:
${pushname}*\n➸ *User Info: ${status}*\n*➸ Block : ${block ? '✓' : '✕'}*\n*➸
Banned : ${bend ? '✓' : '✕'}*\n➸ *Admin Bot : ${admb ? '✓' : '✕'}*\n➸ *VIP
User : ${vipp ? '✓' : '✕'}*`)
}
 break
 //Islam Command
 case 'listsurah':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota
Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`,
id)
 try {
 axios.get('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/islam/surah.json')
 .then((response) => {
 let hehex = '╔══✪〘 List Surah 〙✪══\n'
 for (let i = 0; i < response.data.data.length; i++) {
 hehex += '╠➥ '
 hehex +=
response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
 }
 hehex += '╚═〘 *X I N Z B O T* 〙'
 aruga.reply(from, hehex, id)
 })
 } catch(err) {
 aruga.reply(from, err, id)
 }
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'infosurah':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `*_${prefix}infosurah
<nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh
penggunan: ${prefix}infosurah al-baqarah`, message.id)
 var responseh = await
axios.get('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/islam/surah.json')
 var { data } = responseh.data
 var idx = data.findIndex(function(post, index) {
 if((post.name.transliteration.id.toLowerCase() ==
args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() ==
args[0].toLowerCase()))
 return true;
 });
 var pesan = ""
 pesan = pesan + "Nama : "+ data[idx].name.transliteration.id +
p p
"\n" + "Asma : " +data[idx].name.short+"\n"+"Arti :
"+data[idx].name.translation.id+"\n"+"Jumlah ayat :
"+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis :
"+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
 aruga.reply(from, pesan, message.id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'surah':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `*_${prefix}surah
<nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya
dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah
1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran
tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh
penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
 var responseh = await
axios.get('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/islam/surah.json')
 var { data } = responseh.data
 var idx = data.findIndex(function(post, index) {
 if((post.name.transliteration.id.toLowerCase() ==
args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() ==
args[0].toLowerCase()))
 return true;
 });
 nmr = data[idx].number
 if(!isNaN(nmr)) {
 var responseh2 = await
axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
 var {data} = responseh2.data
 var last = function last(array, n) {
 if (array == null) return void 0;
 if (n == null) return array[array.length - 1];
 return array.slice(Math.max(array.length - n, 0));
 };
 bhs = last(args)
 pesan = ""
 pesan = pesan + data.text.arab + "\n\n"
 if(bhs == "en") {
 pesan = pesan + data.translation.en
 } else {
 pesan = pesan + data.translation.id
 }
 pesan = pesan + "\n\n(Q.S.
"+data.surah.name.transliteration.id+":"+args[1]+")"
 aruga.reply(from, pesan, message.id)
 await limitAdd(pengirim)
 }
 pointAdd(pengirim)
 break
 case 'tafsir':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `*_${prefix}tafsir
<nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan
tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah
` i
1`, message.id)
 var responsh = await
axios.get('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/islam/surah.json')
 var {data} = responsh.data
 var idx = data.findIndex(function(post, index) {
 if((post.name.transliteration.id.toLowerCase() ==
args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() ==
args[0].toLowerCase()))
 return true;
 });
 nmr = data[idx].number
 if(!isNaN(nmr)) {
 var responsih = await
axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
 var {data} = responsih.data
 pesan = ""
 pesan = pesan + "Tafsir Q.S.
"+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
 pesan = pesan + data.text.arab + "\n\n"
 pesan = pesan + "_" + data.translation.id + "_" + "\n\n"
+data.tafsir.id.long
 aruga.reply(from, pesan, message.id)
 }
 pointAdd(pengirim)
 limitAdd(pengirim)
 break
 case 'alaudio':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `*_${prefix}ALaudio
<nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan
: ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah>
<ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam
bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah
1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat
tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan :
${prefix}ALaudio al-fatihah 1 en`, message.id)
 ayat = "ayat"
 bhs = ""
 var responseh = await
axios.get('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/islam/surah.json')
 var surah = responseh.data
 var idx = surah.data.findIndex(function(post, index) {
 if((post.name.transliteration.id.toLowerCase() ==
args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() ==
args[0].toLowerCase()))
 return true;
 });
 nmr = surah.data[idx].number
 if(!isNaN(nmr)) {
 if(args.length > 2) {
 ayat = args[1]
 }
 if (args.length == 2) {
 var last = function last(array, n) {
 if (array == null) return void 0;
 if (n == null) return array[array.length - 1];
 return array.slice(Math.max(array.length - n, 0));
 };
 ayat = last(args)
 }
 pesan = ""
 if(isNaN(ayat)) {
 var responsih2 = await
axios.get('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/islam/surah/'+nmr+'.json')
 var {name, name_translations, number_of_ayah,
number_of_surah, recitations} = responsih2.data
 pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+"
"+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+"
ayat\n"
 pesan = pesan + "Dilantunkan oleh "+recitations[0].name+" :
"+recitations[0].audio_url+"\n"
 pesan = pesan + "Dilantunkan oleh "+recitations[1].name+" :
"+recitations[1].audio_url+"\n"
 pesan = pesan + "Dilantunkan oleh "+recitations[2].name+" :
"+recitations[2].audio_url+"\n"
 aruga.reply(from, pesan, message.id)
 } else {
 var responsih2 = await
axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
 var {data} = responsih2.data
 var last = function last(array, n) {
 if (array == null) return void 0;
 if (n == null) return array[array.length - 1];
 return array.slice(Math.max(array.length - n, 0));
 };
 bhs = last(args)
 pesan = ""
 pesan = pesan + data.text.arab + "\n\n"
 if(bhs == "en") {
 pesan = pesan + data.translation.en
 } else {
 pesan = pesan + data.translation.id
 }
 pesan = pesan + "\n\n(Q.S.
"+data.surah.name.transliteration.id+":"+args[1]+")"
 await aruga.sendFileFromUrl(from, data.audio.secondary[0])
 await aruga.reply(from, pesan, message.id)
await limitAdd(pengirim)
 }
 }
 pointAdd(pengirim)
 break
 case 'jsolat':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk melihat jadwal
solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list
daerah yang ada\nketik: ${prefix}daerah`, id)
 pointAdd(pengirim)
 const solatx = body.slice(8)
 const solatj = await rugaapi.jadwaldaerah(solatx)
 await aruga.reply(from, solatj, id)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Pastikan daerah kamu ada di list ya!', id)
 })
 break
 case 'daerah':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const daerahq = await rugaapi.daerah()
 await aruga.reply(from, daerahq, id)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 pointAdd(pengirim)
 break
 //Media
 case 'twitterstalk':
 case 'twtstalk':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}twtstalk @username*\nContoh *${prefix}twtstalk @miakhalifah*`, id)
 arg = body.trim().split(' ')
 console.log(...arg[1])
 var slicedArgs = Array.prototype.slice.call(arg, 1);
 console.log(slicedArgs)
 const twstalk = await slicedArgs.join(' ')
 console.log(twstalk)
 try {
 const twstalk2 = await
axios.get('https://mhankbarbars.herokuapp.com/api/twstalk?username=' + twstalk +
'&apiKey=' + barbarkey)
 const { followers_count, full_name, name, profile_pic, status_count
} = twstalk2.data
 const twstalk3 = `*User Ditemukan!*
➸ *Nama:* ${name}
➸ *Nama Panjang:* ${full_name}
➸ *Jumlah Pengikut:* ${followers_count}
➸ *Jumlah Postingan:* ${status_count}`
 const pictk = await bent("buffer")(profile_pic)
 const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
 aruga.sendImage(from, base64, name, twstalk3)
 await limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔 Maaf,
User tidak ditemukan')
 aruga.sendText(ownerNumber, 'Twitter Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'tiktokstalk':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}tiktokstalk @username*\nContoh *${prefix}tiktokstalk @duar_amjay*`,
id)
)
 const tstalk = body.slice(13)
 try {
 const tstalk2 = await
axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk +
'&apikey=juwenajaa')
 const { username, bio, follow, follower, title, like_count,
video_post, description, picture, url_account } = tstalk2.data.result
 const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Judul:* ${title}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Like*: ${like_count}
➸ *Jumlah Postingan:* ${video_post}
➸ *Deskripsi:* ${description}
➸ *Link:* ${url_account}`
 const pictk = await bent("buffer")(picture)
 const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
 aruga.sendImage(from, base64, title, tiktod)
 await limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔 Maaf,
User tidak ditemukan')
 aruga.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
 }
 pointAdd(pengirim)
 break
 case 'smulestalk':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}smulestalk [@username]*\nContoh : *${prefix}smulestalk loli*`, id)
 arg = body.trim().split(' ')
 console.log(...arg[1])
 var slicedArgs = Array.prototype.slice.call(arg, 1);
 console.log(slicedArgs)
 const sstalk = await slicedArgs.join(' ')
 console.log(sstalk)
 try {
 const sstalk2 = await
axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk +
'&apikey=juwenajaa')
 const { username, full_name, follower, follow, biography, is_vip,
picture, recording } = sstalk2.data.result
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
 aruga.sendImage(from, base64, title, smule)
 await limitAdd(pengirim)
 } catch (err) {
console error(err message)
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔 Maaf,
User tidak ditemukan')
 aruga.sendText(ownerNumber, 'Error Smulestalk : '+ err)
 }
 pointAdd(pengirim)
 break
 case 'starmaker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}starmaker [linkStarmaker]*`, id)
 aruga.reply(from, mess.wait, id)
 starmaker(args[0]).then(async(res) => {
 let { image, desc, url, title } = await res
 let tstarmaker = `*「 STARMAKER DOWNLOADER 」*\n\n➸ *Judul* :
${title}\n➸ *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman
file membutuhkan waktu beberapa menit._`
 aruga.sendFileFromUrl(from, image, 'thumb.jpg', tstarmaker, id)
 await aruga.sendFileFromUrl(from, url, `${title}.mp3`, '',
id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 await limitAdd(pengirim)
 }).catch((err) => {
 console.log(err);
 aruga.reply(from, `Maaf, Terjadi Kesalahan`, id)
 })
 pointAdd(pengirim)
 break
 case 'twitter':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}twitter [ Link Twitter ]*`, id)
 aruga.reply(from, mess.wait, id)
 twitter(args[0]).then(async(res) => {
 let { desk, urlVideo } = await res
 let ttwitter = `*「 TWITTER DOWNLOADER 」*\n\n➸ *Aplikasi:*
Twitter\n➸ *Deskripsi:* ${desk}\n\n_Silahkan tunggu sebentar proses pengiriman
file membutuhkan waktu beberapa menit._`
 await aruga.sendFileFromUrl(from, urlVideo, `twit.mp3`,
ttwitter, id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 await limitAdd(pengirim)
 }).catch((err) => {
 console.log(err);
 aruga.reply(from, `Maaf, Terjadi Kesalahan`, id)
 })
 pointAdd(pengirim)
 break
 case 'tiktok':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(aruga)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}tiktok [linkTiktok]*\nContoh : *${prefix}tiktok
https://vt.tiktok.com/yqyjPX/*`, id)
 aruga.reply(from, mess.wait, id)
 tiktok(args[0]).then(async(res) => {
l t { id titl i d k dib t d ti } it
 let { video, title, image, desk, dibuat, duration } = await res
 let ttiktok = `*「 TIKTOK DOWNLOADER 」*\n\n➸ *Judul* :
${title}\n➸ Deskripsi : ${desk}\n➸ Durasi : ${duration}\n➸ Dibuat :
${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu
beberapa menit._`
 aruga.sendFileFromUrl(from, image, 'thumb.jpg', ttiktok, id)
 await aruga.sendFileFromUrl(from, video, `${title}.mp4`, '',
id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 await limitAdd(aruga)
 }).catch((err) => {
 console.log(err);
 aruga.reply(from, `Maaf, Terjadi Kesalahan`, id)
 })
 break
case 'ig':
 case 'instagram':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}ig [ Link Instagram ]*`, id)
 if (!args[0].match(isUrl) && !args[0].includes('instagram.com'))
return aruga.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid
Link]`, id)
 await aruga.reply(from, mess.wait, id);
 instagram(args[0]).then(async(res) => {
 let username = res.owner_username;
 for (let i = 0; i < res.post.length; i++) {
 if (res.post[i].type == "image") {
 await aruga.sendFileFromUrl(from,
res.post[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n➸ *Username* :
${username}\n➸ *Tipe* : Image/Jpg`, id);
 limitAdd(pengirim)
 } else if (res.post[i].type == "video") {
 await aruga.sendFileFromUrl(from,
res.post[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n➸ *Username* :
${username}\n➸ *Tipe* : Video/MP4`);
 limitAdd(pengirim)
 }
 }
 }).catch((err) => {
 console.log(err);
 aruga.reply(from, `Maaf, Terjadi Kesalahan`, id)
 })
 pointAdd(pengirim)
 break
 case 'ytmp3':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}ytmp3 [ Link Yt ]*`, id)
 let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?
youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
 if (!isLinks) return aruga.reply(from, mess.error.Iv, id)
 try {
 aruga.reply(from, mess.wait, id)
 const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?
link=${args[0]}&apikey=juwenajaa`)
if (!vhtearyt3 ok) throw new Error(`Error ytmp3 3 :
 if (!vhtearyt3.ok) throw new Error( Error ytmp3 3 :
${vhtearyt3.statusText}`)
 const vhtearyt33 = await vhtearyt3.json()
const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
 if (vhtearyt33.status == false) {
 aruga.reply(from, `*Maaf Terdapat kesalahan saat mengambil
data, mohon pilih media lain...*`, id)
 } else {
 if(Number(vhtearyt33.result.size.split(' MB')[0]) >= 10.00)
return aruga.sendFileFromUrl(from, vhtearyt33.result.imgUrl, `thumb.jpg`, `*「
YOUTUBE MP3 」*\n\n• *Judul* : ${vhtearyt33.result.title}\n• *Filesize* :
${vhtearyt33.result.size}\n\n_Maaf, Durasi audio melebihi 10 MB. Silahkan
download audio melalui link dibawah_.\n${vhtearyt33.result.UrlMp3}`, id)
 console.log(`VhTear Giliran ${ext}\n${size}\n${status}`)
 const captions = `*「 YOUTUBE MP3 」*\n\n• *Judul* :
${title}\n• *Filesize* : ${size}\n\n_Silahkan tunggu file media sedang dikirim
mungkin butuh beberapa menit_`
 aruga.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions,
id)
 //await aruga.sendFile(from, UrlMp3, `${title}.mp3`, '', id)
 await aruga.sendFileFromUrl(from, UrlMp3, `${title}.mp3`,
'', id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 await limitAdd(pengirim)
 }
 } catch (err) {
 aruga.sendText(ownerNumber, 'Error ytmp3 : '+ err)
 aruga.reply(from, mess.error.Yt3, id)
 }
 pointAdd(pengirim)
 break
 case 'ytmp4':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}ytmp4 [ Link Yt ]*, untuk contoh silahkan kirim perintah
*${prefix}readme*`)
 let isLin = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?
\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
 if (!isLin) return aruga.reply(from, mess.error.Iv, id)
 try {
 aruga.reply(from, mess.wait, id)
 const ytvh = await fetch(`http://api.vhtear.com/ytdl?
link=${args[0]}&apikey=juwenajaa`)
 if (!ytvh.ok) throw new Error(`Error Get Video :
${ytvh.statusText}`)
 const ytvh2 = await ytvh.json()
const { title, UrlVideo, imgUrl, size } = await ytvh2.result
 if (ytvh2.status == false) {
 aruga.reply(from, `*Maaf Terdapat kesalahan saat mengambil
data, mohon pilih media lain...*`, id)
 } else {
 if (Number(ytvh2.result.size.split(' MB')[0]) > 30.00)
return aruga.sendFileFromUrl(from, ytvh2.result.UrlVideo, `${title}.mp4`, `*「
YOUTUBE MP4 」*\n\n• *Judul* : ${ytvh2.result.title}\n• *Filesize* :
${ytvh2.result.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download
video melalui link dibawah_.\n${ytvh2.result.UrlVideo}`, id)
 aruga.sendFileFromUrl(from, imgUrl, 'thumb.jpg', `*「
YOUTUBE MP4 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Silahkan
tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
 /await aruga.sendFileFromUrl(from, UrlVideo, `${title}.mp4`,
'' id) t h(() l (f Yt4 id))
'', id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 await limitAdd(pengirim)
 }
 } catch (err) {
 aruga.sendText(ownerNumber, 'Error ytmp4 : '+ err)
 aruga.reply(from, mess.error.Yt4, id)
 console.log(err)
 }
 pointAdd(pengirim)
 break
case 'fb':
case 'facebook':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 pointAdd(pengirim)
if (args.length == 0) return aruga.reply(from, `Untuk mendownload video dari
link facebook\nketik: ${prefix}fb [link_fb]`, id)
rugaapi.fb(args[0])
.then(async (res) => {
const { link, linkhd, linksd } = res
if (res.status == 'error') return aruga.sendFileFromUrl(from, link, '', 'Maaf
url anda tidak dapat ditemukan', id)
await aruga.sendFileFromUrl(from, linkhd, '', 'Nih ngab videonya', id)
.catch(async () => {
await aruga.sendFileFromUrl(from, linksd, '', 'Nih ngab videonya', id)
.catch(() => {
aruga.reply(from, 'Maaf url anda tidak dapat ditemukan', id)
})
})
})
break
//Primbon Menu
case 'cekzodiak':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length !== 4) return aruga.reply(from, `Untuk mengecek
zodiak, gunakan ${prefix}cekzodiak nama tanggallahir bulanlahir
tahunlahir\nContoh: ${prefix}cekzodiak fikri 13 06 2004`, id)
 const cekzodiak = await rugaapi.cekzodiak(args[0],args[1],args[2])
 await aruga.reply(from, cekzodiak, id)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
pointAdd(pengirim)
 pointAdd(pengirim)
 break
case 'artinama':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
if (args.length == 0) return aruga.reply(from, `Untuk mengetahui arti nama
seseorang\nketik ${prefix}artinama namakamu`, id)
 pointAdd(pengirim)
 try {
 const resp = await axios.get('https://api.vhtear.com/artinama?
nama=' + body.slice(10) + '&apikey=juwenajaa')
 if (resp.data.error) return aruga.reply(from, resp.data.error,
id)
 const anm2 = `➸ Artinama : ${resp.data.result.hasil}`
 aruga.reply(from, anm2, id)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png',
'💔 Maaf, User tidak ditemukan')
 aruga.sendText(ownerNumber, 'Artinama Error : ' + err)
 }
break
case 'cekjodoh':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
if (args.length !== 2) return aruga.reply(from, `Untuk mengecek jodoh melalui
nama\nketik: ${prefix}cekjodoh nama-kamu nama-pasangan\n\ncontoh:
${prefix}cekjodoh bagas siti\n\nhanya bisa pakai nama panggilan (satu kata)`)
rugaapi.cekjodoh(args[0],args[1])
.then(async(res) => {
await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
limitAdd(pengirim)
 })
 pointAdd(pengirim)
break
 // Random Kata
case 'motivasi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
 .then(res => res.text())
 .then(body => {
 let splitmotivasi = body.split('\n')
 let randommotivasi = splitmotivasi[Math.floor(Math.random() *
splitmotivasi.length)]
 aruga.reply(from, randommotivasi, id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
case 'howgay':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota
Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`,
id)
if (args.length == 0) return aruga.reply(from, `Untuk mengetahui seberapa gay
seseorang gunakan ${prefix}howgay namanya\n\nContoh: ${prefix}howgay burhan`,
id)

fetch('https://raw.githubusercontent.com/MrPawNO/howgay/main/howgay.txt')
 .then(res => res.text())
 .then(body => {
 let splithowgay = body.split('\n')
 let randomhowgay = splithowgay[Math.floor(Math.random() *
splithowgay.length)]
 aruga.reply(from, randomhowgay, id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'fakta':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 fetch('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/random/faktaunix.txt')
 .then(res => res.text())
 .then(body => {
 let splitnix = body.split('\n')
 let randomnix = splitnix[Math.floor(Math.random() *
splitnix.length)]
 aruga.reply(from, randomnix, id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'katabijak':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 fetch('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/random/katabijax.txt')
 .then(res => res.text())
 .then(body => {
 let splitbijak = body.split('\n')
 let randombijak = splitbijak[Math.floor(Math.random() *
j p j [ ( ()
splitbijak.length)]
 aruga.reply(from, randombijak, id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'pantun':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 fetch('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/random/pantun.txt')
 .then(res => res.text())
 .then(body => {
 let splitpantun = body.split('\n')
 let randompantun = splitpantun[Math.floor(Math.random() *
splitpantun.length)]
 aruga.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'quote':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 pointAdd(pengirim)
 const quotex = await rugaapi.quote()
 await aruga.reply(from, quotex, id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
limitAdd(pengirim)
 break
 case 'cerpen':
if(isReg(obj)) return
if(cekumur(cekage)) return
if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota Limit
Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 rugaapi.cerpen()
 .then(async (res) => {
 await aruga.reply(from, res.result, id)
 })
 break
 case 'cersex':
if(isReg(obj)) return
if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

 await limitAdd(pengirim)
 pointAdd(pengirim)
 rugaapi.cersex()
 .then(async (res) => {
 await aruga.reply(from, res.result, id)
 })
 break
 case 'puisi':
if(isReg(obj)) return
if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)

await limitAdd(pengirim)
 rugaapi.puisi()
 .then(async (res) => {
 await aruga.reply(from, res.result, id)
 })
 pointAdd(pengirim)
 break
 //Random Images
 case 'anime':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk menggunakan
${prefix}anime\nSilahkan ketik: ${prefix}anime [query]\nContoh: ${prefix}anime
random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, id)
 if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu'
|| args[0] == 'neko') {
 fetch('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/random/anime/' + args[0] + '.txt')
 .then(res => res.text())
 .then(body => {
 let randomnime = body.split('\n')
 let randomnimex = randomnime[Math.floor(Math.random() *
randomnime.length)]
 aruga.sendFileFromUrl(from, randomnimex, '', 'Nee..', id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 } else {
 aruga.reply(from, `Maaf query tidak tersedia. Silahkan ketik
${prefix}anime untuk melihat list query`)
 }
 await limitAdd(pengirim)
pointAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'kpop':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk menggunakan
${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop
bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
 if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts')
{
 fetch('https://raw.githubusercontent.com/ArugaZ/grabbedresults/main/random/kpop/' + args[0] + '.txt')
 .then(res => res.text())
 .then(body => {
 let randomkpop = body.split('\n')
 let randomkpopx = randomkpop[Math.floor(Math.random() *
randomkpop.length)]
 aruga.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 } else {
 aruga.reply(from, `Maaf query tidak tersedia. Silahkan ketik
${prefix}kpop untuk melihat list query`)
 }
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'memes':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 const randmeme = await meme.random()
 aruga.sendFileFromUrl(from, randmeme, '', '', id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break

 // Search Any
case 'dewabatch':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname}, Kuota
Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`,
id)
if (args.length == 0) return aruga.reply(from, `Untuk mencari anime batch, ketik
${prefix}dewabatch judul\n\nContoh: ${prefix}dewabatch naruto`, id)
rugaapi.dewabatch(args[0])
.then(async(res) => {
await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
 limitAdd(pengirim)
 pointAdd(pengirim)
})
break
 case 'images':
 if (args.length == 0) return aruga.reply(from, `Untuk mencari gambar
di pinterest\nketik: ${prefix}images [search]\ncontoh: ${prefix}images naruto`,
id)
 const cariwall = body.slice(8)
 const hasilwall = await images.fdci(cariwall)
 await aruga.sendFileFromUrl(from, hasilwall, '', '', id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 break
 case 'sreddit':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk mencari gambar
di sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit
naruto`, id)
 const carireddit = body.slice(9)
 const hasilreddit = await images.sreddit(carireddit)
 await aruga.sendFileFromUrl(from, hasilreddit, '', '', id)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 pointAdd(pengirim)
 break
 case 'resep':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk mencari resep
makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`,
id)
 pointAdd(pengirim)
 const cariresep = body.slice(7)
 const hasilresep = await resep.resep(cariresep)
 await aruga.reply(from, hasilresep + '\n\nIni kak resep
makanannya..', id)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 break
 /* case 'nekopoi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 rugapoi.getLatest()
 .then((result) => {
 rugapoi.getVideo(result.link)
 .then((res) => {
 let heheq = '\n'
 for (let i = 0; i < res.links.length; i++) {
 heheq += `${res.links[i]}\n`
 }
 aruga.reply(from, `Title:
${res.title}\n\nLink:\n${heheq}\nmasih tester bntr :v`)
 })
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
await limitAdd(pengirim)
 break*/
 case 'stalkig':
 case 'igstalk':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf
${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek
Kuota Limit Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}igstalk username*\nContoh *${prefix}igstalk duar_amjay*`, id)
 const istalk = body.slice(9)
 try {
 const istalk2 = await axios.get('https://tobzapi.herokuapp.com/api/stalk?username=' + istalk)
 const { Biodata, Jumlah_Followers, Jumlah_Following,
Profile_pic, Jumlah_Post, Name, Username } = istalk2.data
 const istalk3 = `*User Ditemukan!*
 ➸ *Username:* ${Username}
➸ *Nama:* ${Name}
➸ *Mengikuti:* ${Jumlah_Followers}
➸ *Pengikut:* ${Jumlah_Following}
➸ *Jumlah Postingan:* ${Jumlah_Post}
➸ *Bio:* ${Biodata}`

 const pictk = await bent("buffer")(Profile_pic)
 const base64 =
`data:image/jpg;base64,${pictk.toString("base64")}`
 aruga.sendImage(from, base64, Username, istalk3)
 await limitAdd(pengirim)
 } catch (err) {
 console.error(err.message)
 await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔
Maaf, User tidak ditemukan')
 aruga.sendText(ownerNumber, 'Igstalk Error : ' + err)
 }
 pointAdd(pengirim)
 break
 case 'wiki':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk mencari suatu
kata dari wikipedia\nketik: ${prefix}wiki [kata]`, id)
 const wikip = body.slice(6)
 const wikis = await rugaapi.wiki(wikip)
 await aruga.reply(from, wikis, id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
limitAdd(pengirim)
 pointAdd(pengirim)
b eak
 break
 case 'cuaca':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk melihat cuaca
pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
 const cuacaq = body.slice(7)
 const cuacap = await rugaapi.cuaca(cuacaq)
 await aruga.reply(from, cuacap, id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'lyrics':
 case 'lirik':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk mencari lirik
dari sebuah lagu\bketik: ${prefix}lirik [judul_lagu]`, id)
 rugaapi.lirik(body.slice(7))
 .then(async (res) => {
 await aruga.reply(from, `Lirik Lagu:
${body.slice(7)}\n\n${res}`, id)
limitAdd(pengirim)
 })
 pointAdd(pengirim)
 break
 case 'chord':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Untuk mencari lirik
dan chord dari sebuah lagu\bketik: ${prefix}chord [judul_lagu]`, id)
 const chordq = body.slice(7)
 const chordp = await rugaapi.chord(chordq)
 await aruga.reply(from, chordp, id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'ss': //jika error silahkan buka file di folder settings/api.json
dan ubah apiSS 'API-KEY' yang kalian dapat dari website https://apiflash.com/
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `Membuat bot menscreenshot sebuah web\n\nPemakaian: ${prefix}ss [url]\n\ncontoh: ${prefix}ss
http://google.com`, id)
 aruga.sendFileFromUrl(from, `https://api.apiflash.com/v1/urltoimage?
access_key=8f7b1cd9edfd49dfb9e36baf1622f6cd&url=${body.slice(4)}`, 'ss.jpg', '',
id)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 pointAdd(pengirim)
limitAdd(pengirim)
 break
 case 'play'://silahkan kalian custom sendiri jika ada yang ingin diubah
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isVip) return aruga.reply(from, `Perintah ini khusus membervip,
chat owner untuk berlangganan`, id)

 if (args.length == 0) return aruga.reply(from, `Untuk mencari lagu
dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
 try {
 aruga.reply(from, mess.wait, id)
 const serplay = body.slice(6)
 const webplay = await fetch(`https://api.vhtear.com/ytmp3?
query=${serplay}&apikey=juwenajaa`)
 if (!webplay.ok) throw new Error(`Error Get Video :
${webplay.statusText}`)
 const webplay2 = await webplay.json()
 if (webplay2.status == false) {
 aruga.reply(from, `*Maaf Terdapat kesalahan saat mengambil
data, mohon pilih media lain...*`, id)
 } else {
 if (Number(webplay2.result.size.split(' MB')[0]) >= 10.00)
return aruga.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10
MB!', id)
 const { image, mp3, size, ext, title, duration } = await
webplay2.result
 const captplay = `*「 PLAY 」*\n\n➸ *Judul* : ${title}\n➸
*Durasi* : ${duration}\n➸ *Filesize* : ${size}\n➸ *Exp* : ${ext}\n\n_*Music
Sedang Dikirim*_`
 aruga.sendFileFromUrl(from, image, `thumb.jpg`, captplay,
id)
 await aruga.sendFileFromUrl(from, mp3, `${title}.mp3`, '',
id).catch(() => aruga.reply(from, mess.error.Yt4, id))
 }
 } catch (err) {
 aruga.sendText(ownerNumber, 'Error Play : '+ err)
 aruga.reply(from, mess.error.Yt3, id)
 }
 break
case 'movie':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
if (args.length == 0) return aruga.reply(from, `Untuk mencari suatu movie dari
website sdmovie.fun\nketik: ${prefix}movie judulnya`, id)
rugaapi.movie((body.slice(7)))
.then(async (res) => {
if (res.status == 'error') return aruga.reply(from, res.hasil, id)
await aruga.sendFileFromUrl(from, res.link, 'movie.jpg', res.hasil, id)
limitAdd(pengirim)
 })
 pointAdd(pengirim)
 po t dd(pe g )
break
 case 'whatanime':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (isMedia && type === 'image' || quotedMsg && quotedMsg.type ===
'image') {
 if (isMedia) {
 var mediaData = await decryptMedia(message, uaOverride)
 } else {
 var mediaData = await decryptMedia(quotedMsg, uaOverride)
 }
 const fetch = require('node-fetch')
 const imgBS4 =
`data:${mimetype};base64,${mediaData.toString('base64')}`
 aruga.reply(from, 'Searching....', id)
 fetch('https://trace.moe/api/search', {
 method: 'POST',
 body: JSON.stringify({ image: imgBS4 }),
 headers: { "Content-Type": "application/json" }
 })
 .then(respon => respon.json())
 .then(resolt => {
 if (resolt.docs && resolt.docs.length <= 0) {
aruga.reply(from, 'Maaf, saya tidak tau ini anime apa, pastikan
gambar yang akan di Search tidak Buram/Kepotong', id)
 }
 const { is_adult, title, title_chinese, title_romaji,
title_english, episode, similarity, filename, at, tokenthumb, anilist_id } =
resolt.docs[0]
 teks = ''
 if (similarity < 0.92) {
 teks = '*Saya memiliki keyakinan rendah dalam hal ini*
:\n\n'
 }
 teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese*
: ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* :
${title_english}\n`
 teks += `➸ *R-18?* : ${is_adult}\n`
 teks += `➸ *Eps* : ${episode.toString()}\n`
 teks += `➸ *Kesamaan* : ${(similarity *
100).toFixed(1)}%\n`
 var video =
`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?
t=${at}&token=${tokenthumb}`;
 aruga.sendFileFromUrl(from, video, 'anime.mp4', teks,
id).catch(() => {
 aruga.reply(from, teks, id)
 })
 })
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 } else {
aruga.reply(from, `Maaf format salah\n\nSilahkan kirim foto dengan caption
${prefix}whatanime\n\nAtau reply foto dengan caption ${prefix}whatanime`, id)
}
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break

 // Other Command
 case 'resi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length !== 2) return aruga.reply(from, `Maaf, format pesan
salah.\nSilahkan ketik pesan dengan ${prefix}resi <kurir> <no_resi>\n\nKurir
yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse,
first, ninja, lion, idl, rex`, id)
 const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap',
'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
 if (!kurirs.includes(args[0])) return aruga.sendText(from, `Maaf,
jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi
pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`)
 console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi',
args[0])
 cekResi(args[0], args[1]).then((result) => aruga.sendText(from,
result))
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'tts':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 try {
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}tts [ Bahasa ] [ Teks ]*, contoh *${prefix}tts id halo semua*\nUntuk
melihat kode bahasa silahkan kirim ${prefix}bahasa`, id)
 var dataBhs = args[0]
 const ttsHZ = require('node-gtts')(dataBhs)
 var dataText = body.slice(8)
 if (dataText === '') return aruga.reply(from, 'Masukkan
teksnya', id)
 if (dataText.length > 500) return aruga.reply(from, 'Teks
terlalu panjang!', id)
 var dataBhs = body.slice(5, 7)
 ttsHZ.save('./media/tts.mp3', dataText, function () {
 aruga.sendPtt(from, './media/tts.mp3', id)
 limitAdd(pengirim)
 })
 } catch (err){
 console.log(err)
 aruga.reply(from, bahasalist, id)
 }
 pointAdd(pengirim)
 break
 case 'translate':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
${prefix}translate [kode bahasa] [text]. Contoh: *${prefix}translate id
aqul*\nUntuk mengetahui kode bahasa silahkan kirim *${prefix}bahasa*`, id)
 if(args[0] == undefined || args[1] == undefined) return
 if(args.length >= 1){
 var codelang = args[0]
 var texta = body.slice(11+codelang.length);
 translatte(texta, {to: codelang}).then(res => {
 aruga.sendText(from,res.text);
 limitAdd(pengirim)
 }).catch(err => {
 aruga.sendText(from,`[ERROR] Teks tidak ada, atau kode
bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode
bahasa`);
 });
 }
 pointAdd(pengirim)
 break
case 'bahasa':
 aruga.sendText(from, bahasalist)
 break
case 'covidindo':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
rugaapi.covidindo()
.then(async (res) => {
await aruga.reply(from, `${res}`, id)
limitAdd(pengirim)
 })
 pointAdd(pengirim)
break
 case 'ceklokasi':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
 if (quotedMsg.type !== 'location') return aruga.reply(from, `Maaf,
format pesan salah.\nKirimkan lokasi dan reply dengan caption
${prefix}ceklokasi`, id)
 console.log(`Request Status Zona Penyebaran Covid-19
(${quotedMsg.lat}, ${quotedMsg.lng}).`)
 const zoneStatus = await getLocationData(quotedMsg.lat,
quotedMsg.lng)
 if (zoneStatus.kode !== 200) aruga.sendText(from, 'Maaf, Terjadi
error ketika memeriksa lokasi yang anda kirim.')
 let datax = ''
 for (let i = 0; i < zoneStatus.data.length; i++) {
 const { zone, region } = zoneStatus.data[i]
 const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone ==
'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
 datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
 }
 const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan
dari lokasi yang anda kirim adalah *${zoneStatus.status}*
${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
 aruga.sendText(from, text)
 await limitAdd(pengirim)
 pointAdd(pengirim)
 break
 case 'shortlink':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
p g
Kamu`, id)
 if (args.length == 0) return aruga.reply(from, `ketik
${prefix}shortlink <url>`, id)
 if (!isUrl(args[0])) return aruga.reply(from, 'Maaf, url yang kamu
kirim tidak valid.', id)
 const shortlink = await urlShortener(args[0])
 await aruga.sendText(from, shortlink)
limitAdd(pengirim)
 .catch(() => {
 aruga.reply(from, 'Ada yang Error!', id)
 })
 pointAdd(pengirim)
 break
case 'bapakfont':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (isLimit(pengirim)) return aruga.reply(from, `Maaf ${pushname},
Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit
Kamu`, id)
if (args.length == 0) return aruga.reply(from, `Mengubah kalimat menjadi
alayyyyy\n\nketik ${prefix}bapakfont kalimat`, id)
rugaapi.bapakfont(body.slice(11))
.then(async(res) => {
await aruga.reply(from, `${res}`, id)
limitAdd(pengirim)
 })
 pointAdd(pengirim)
break
//Fun Menu
 case 'klasemen':
case 'klasmen':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
if (!isGroupAdmins && !isOwnerBot) return aruga.reply(from, 'Maaf, perintah ini
hanya dapat dipakai oleh admin grup', id)
const klasemen = db.get('group').filter({id: groupId}).map('members').value()[0]
 let urut = Object.entries(klasemen).map(([key, val]) => ({id: key,
...val})).sort((a, b) => b.denda - a.denda);
 let textKlas = "*Klasemen Denda Sementara*\n"
 let i = 1;
 urut.forEach((klsmn) => {
 textKlas += i+". @"+klsmn.id.replace('@c.us', '')+" ➤
Rp"+formatin(klsmn.denda)+"\n"
 i++
 });
 await aruga.sendTextWithMentions(from, textKlas)
break
 // Group Commands (group admin only)
 case 'setgrupname':
 case 'setgroupname':
 if (!isGroupMsg) return aruga.reply(from, `Fitur ini hanya bisa di
gunakan dalam group`, id)
 if (!isGroupAdmins) return aruga.reply(from, `Fitur ini hanya bisa
di gunakan oleh admin group`, id)
di gunakan oleh admin group , id)
 if (!isBotGroupAdmins) return aruga.reply(from, `Fitur ini hanya
bisa di gunakan ketika bot menjadi admin`, id)
 const namagrup = body.slice(14)
 let sebelum = chat.groupMetadata.formattedName
 let halaman = global.page ? global.page : await aruga.getPage()
 await halaman.evaluate((chatId, subject) =>
 Store.WapQuery.changeSubject(chatId, subject),groupId,
`${namagrup}`)
 aruga.sendTextWithMentions(from, `Nama group telah diubah oleh admin
@${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After:
${namagrup}`)
 break
 case 'add':
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
 if (args.length !== 1) return aruga.reply(from, `Untuk menggunakan
${prefix}add\nPenggunaan: ${prefix}add <nomor>\ncontoh: ${prefix}add 628xxx`,
id)
 try {
 await aruga.addParticipant(from,`${args[0]}@c.us`)
 } catch {
 aruga.reply(from, 'Tidak dapat menambahkan target', id)
 }
 break
 case 'kick':
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
 if (mentionedJidList.length === 0) return aruga.reply(from, 'Maaf,
format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan',
id)
 if (mentionedJidList[0] === botNumber) return await
aruga.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot
sendiri', id)
 await aruga.sendTextWithMentions(from, `Request diterima,
mengeluarkan:\n${mentionedJidList.map(x => `@${x.replace('@c.us',
'')}`).join('\n')}`)
 for (let i = 0; i < mentionedJidList.length; i++) {
 if (groupAdmins.includes(mentionedJidList[i])) return await
aruga.sendText(from, 'Gagal, kamu tidak bisa mengeluarkan admin grup.')
 await aruga.removeParticipant(groupId, mentionedJidList[i])
 }
 break
 case 'promote':
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
 if (mentionedJidList.length !== 1) return aruga.reply(from, 'Maaf,
hanya bisa mempromote 1 user', id)
 if (groupAdmins.includes(mentionedJidList[0])) return await
aruga.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
 if (mentionedJidList[0] === botNumber) return await
aruga.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot
di i' id)
sendiri', id)
 await aruga.promoteParticipant(groupId, mentionedJidList[0])
 await aruga.sendTextWithMentions(from, `Request diterima,
menambahkan @${mentionedJidList[0].replace('@c.us', '')} sebagai admin.`)
 break
 case 'demote':
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
 if (mentionedJidList.length !== 1) return aruga.reply(from, 'Maaf,
hanya bisa mendemote 1 user', id)
 if (!groupAdmins.includes(mentionedJidList[0])) return await
aruga.reply(from, 'Maaf, user tersebut belum menjadi admin.', id)
 if (mentionedJidList[0] === botNumber) return await
aruga.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot
sendiri', id)
 await aruga.demoteParticipant(groupId, mentionedJidList[0])
 await aruga.sendTextWithMentions(from, `Request diterima, menghapus
jabatan @${mentionedJidList[0].replace('@c.us', '')}.`)
 break
 case 'bye':
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 aruga.sendText(from, 'Byeeeee').then(() =>
aruga.leaveGroup(groupId))
 break
 case 'del':
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!quotedMsg) return aruga.reply(from, `Maaf, format pesan salah
silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
 if (!quotedMsgObj.fromMe) return aruga.reply(from, `Maaf, format
pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
 aruga.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
 break
case 'tagall': // FOR GROUP ADMINS
 if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa
di gunakan dalam group!', id)
 if (!isGroupAdmins && !isOwnerBot) return aruga.reply(from,
'Perintah ini hanya bisa di gunakan oleh admin group', id)
 const groupMem = await aruga.getGroupMembers(groupId)
 let hehe = `PESAN DARI
@${sender.id.replace('@c.us','')}\n─────────────────────\n\n${body.slice(7)}\n\n
─────────────────────\n`
 for (let i = 0; i < groupMem.length; i++) {
 hehe += '↬'
 hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
 }
 await aruga.sendText(from, 'Tunggu! Scanning Anggota...')
 await aruga.sendTextWithMentions(from, hehe)
 break
/*case 'simisimi':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
aruga.reply(from, `Untuk mengaktifkan simi-simi pada Group
Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --
nonaktifkan\n`, id)
b k
break
case 'simi':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
if (args.length !== 1) return aruga.reply(from, `Untuk mengaktifkan simi-simi
pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi
off --nonaktifkan\n`, id)
if (args[0] == 'on') {
simi.push(chatId)
fs.writeFileSync('./settings/simi.json', JSON.stringify(simi))
 aruga.reply(from, 'Mengaktifkan bot simi-simi!', id)
} else if (args[0] == 'off') {
let inxx = simi.indexOf(chatId)
simi.splice(inxx, 1)
fs.writeFileSync('./settings/simi.json', JSON.stringify(simi))
aruga.reply(from, 'Menonaktifkan bot simi-simi!', id)
} else {
aruga.reply(from, `Untuk mengaktifkan simi-simi pada Group
Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --
nonaktifkan\n`, id)
}
break*/
/*case 'katakasar':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
aruga.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih
kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan
denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --
nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
break
case 'kasar':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
if (args.length !== 1) return aruga.reply(from, `Untuk mengaktifkan Fitur Kata
Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang
mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n${prefix}kasar on -
-mengaktifkan\n${prefix}kasar off --nonaktifkan\n\n${prefix}reset --reset jumlah
denda`, id)
if (args[0] == 'on') {
ngegas.push(chatId)
fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
aruga.reply(from, 'Fitur Anti Kasar sudah di Aktifkan', id)
} else if (args[0] == 'off') {
let nixx = ngegas.indexOf(chatId)
ngegas.splice(nixx, 1)
g g p
fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
aruga.reply(from, 'Fitur Anti Kasar sudah di non-Aktifkan', id)
} else {
aruga.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih
kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan
denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --
nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
}
break
case 'reset':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
const reset = db.get('group').find({ id: groupId }).assign({ members:
[]}).write()
 if(reset){
await aruga.sendText(from, "Klasemen telah direset.")
 }
break*/
case 'mutegrup':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
if (args.length !== 1) return aruga.reply(from, `Untuk mengubah settingan group
chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on -
-aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
 if (args[0] == 'on') {
aruga.setGroupToAdminsOnly(groupId, true).then(() => aruga.sendText(from,
'Berhasil mengubah agar hanya admin yang dapat chat!'))
} else if (args[0] == 'off') {
aruga.setGroupToAdminsOnly(groupId, false).then(() => aruga.sendText(from,
'Berhasil mengubah agar semua anggota dapat chat!'))
} else {
aruga.reply(from, `Untuk mengubah settingan group chat agar hanya admin saja
yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --
aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
}
break
case 'setprofile':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
if (isMedia && type == 'image' || isQuotedImage) {
const dataMedia = isQuotedImage ? quotedMsg : message
co st data ed a sQuoted age ? quoted sg : essage
const _mimetype = dataMedia.mimetype
const mediaData = await decryptMedia(dataMedia, uaOverride)
const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
await aruga.setGroupIcon(groupId, imageBase64)
} else if (args.length === 1) {
if (!isUrl(url)) { await aruga.reply(from, 'Maaf, link yang kamu kirim tidak
valid.', id) }
aruga.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
? aruga.reply(from, 'Maaf, link yang kamu kirim tidak memuat gambar.', id)
: aruga.reply(from, 'Berhasil mengubah profile group', id))
} else {
aruga.reply(from, `Commands ini digunakan untuk mengganti icon/profile group
chat\n\n\nPenggunaan:\n1. Silahkan kirim/reply sebuah gambar dengan caption
${prefix}setprofile\n\n2. Silahkan ketik ${prefix}setprofile linkImage`)
}
break
case 'antisticker':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan dalam group!`, id)
 if (!isGroupAdmins) return aruga.reply(from, `Perintah ini hanya
bisa di gunakan oleh Admin group!`, id)
 if (!isBotGroupAdmins) return aruga.reply(from, `Perintah ini hanya
bisa di gunakan jika Bot menjadi Admin!`, id)
 if (args[0] == 'on') {
 var cek = antisticker.includes(chatId);
 if(cek){
 return aruga.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus
: Sudah Aktif`, id)
 } else {
 antisticker.push(chatId)
 fs.writeFileSync('./lib/data/antisticker.json',
JSON.stringify(antisticker))
 aruga.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus :
Aktif`, id)
 }
 } else if (args[0] == 'off') {
 var cek = antisticker.includes(chatId);
 if(cek){
 return aruga.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus
: Sudak DiNonaktif`, id) //if number already exists on database
 } else {
 let nixx = antisticker.indexOf(chatId)
 antisticker.splice(nixx, 1)
 fs.writeFileSync('./lib/data/antisticker.json',
JSON.stringify(antisticker))
 aruga.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus :
Nonaktif`, id)
 limitAdd(pengirim)
 }
 } else {
 aruga.reply(from, `Pilih on atau off udin!`, id)
 }
 break
case 'antibadword':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan dalam group!`, id)
 if (!isGroupAdmins) return aruga.reply(from, `Perintah ini hanya
bisa di gunakan oleh Admin group!`, id)
 if (!isBotGroupAdmins) return aruga.reply(from, `Perintah ini hanya
bisa di gunakan jika Bot menjadi Admin!`, id)
 if (args[0] == 'on') {
 var cek = antibadword.includes(chatId);
 if(cek){
 return aruga.reply(from, `*「 ANTI BADWORD 」*\nSudah
diaktifkan di grup ini`, id)
 } else {
 antibadword.push(chatId)
 fs.writeFileSync('./lib/data/antibadword.json',
JSON.stringify(antibadword))
 aruga.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk
Member Grup ${name} Tercinta\nGosah ngegas`, id)
 }
 } else if (args[0] == 'off') {
 var cek = antibadword.includes(chatId);
 if(!cek){
 return aruga.reply(from, `*「 ANTI BADWORD 」*\nSudah
dinonaktifkan di grup ini`, id)
 } else {
 let nixx = antibadword.indexOf(chatId)
 antibadword.splice(nixx, 1)
 fs.writeFileSync('./lib/data/antibadword.json',
JSON.stringify(antibadword))
 aruga.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk
Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Elaina Akan
Kick!`, id)
 }
 } else {
 aruga.reply(from, `Pilih on atau off udin!`, id)
 }
 break
case 'resetbadword':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if(isLimit(pengirim)) return
 if (!isGroupAdmins) return aruga.reply(from, 'Command ini
hanya dapat digunakan oleh admin grup', id)
if (!args.length === 0) return aruga.reply(from, `Masukkan nomornya, *GUNAKAN
AWALAN 62*\ncontoh: ${prefix}resetbadword 6285112554122 / ${prefix}resetbadword
@member`, id)
 const nomer = args[0]
 let textb = nomer.replace(/[-\s+@c.us]/g,'')
 const cus = textb + '@c.us'
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

fs.writeFileSync('./lib/data/msgBadword.json',JSON.stringify(msgBadword));
 aruga.reply(from, result, from)
 limitAdd(pengirim)
 } else {
 aruga.reply(from, `${monospace(`Di database ngga
ada nomer itu dik`)}`, id)
 }
 break
case 'antilink':
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 if (!isGroupMsg) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan dalam group!`, id)
 if (!isGroupAdmins) return aruga.reply(from, `Perintah ini hanya
bisa di gunakan oleh Admin group!`, id)
 if (!isBotGroupAdmins) return aruga.reply(from, `Perintah ini hanya
bisa di gunakan jika Bot menjadi Admin!`, id)
 if (args[0] == 'on') {
 var cek = antilink.includes(chatId);
 if(cek){
 return aruga.reply(from, `*「 ANTI GROUP LINK 」*\nStatus :
Sudah Aktif`, id) //if number already exists on database
 } else {
 antilink.push(chatId)
 fs.writeFileSync('./lib/data/antilink.json',
JSON.stringify(antilink))
 aruga.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Aktif`,
id)
 }
 } else if (args[0] == 'off') {
 var cek = antilink.includes(chatId);
 if(!cek){
 return aruga.reply(from, `*「 ANTI GROUP LINK 」*\nStatus :
Sudah DiNonaktif`, id) //if number already exists on database
 } else {
 let nixx = antilink.indexOf(chatId)
 antilink.splice(nixx, 1)
 fs.writeFileSync('./lib/data/antilink.json',
JSON.stringify(antilink))
 aruga.reply(from, `*「 ANTI GROUP LINK 」*\nStatus :
Nonaktif`, id)
 }
 } else {
 aruga.reply(from, `Pilih on atau off udin!`, id)
 }
 break
/*case 'welcome':
if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai didalam grup!', id)
 if (!isGroupAdmins) return aruga.reply(from, 'Gagal, perintah ini
hanya dapat digunakan oleh admin grup!', id)
if (args.length === 0) return aruga.reply(from, `Membuat BOT menyapa member yang
baru join kedalam group chat!\n\nPenggunaan:\n${prefix}welcome on --
aktifkan\n${prefix}welcome off --nonaktifkan`, id)
if (args[0] == 'on') {
welcome.push(chatId)
fs.writeFileSync('./settings/welcome.json', JSON.stringify(welcome))
aruga.reply(from, 'Welcome Message sekarang diaktifkan!', id)
} else if (args[0] == 'off') {
let xporn = welcome.indexOf(chatId)
welcome.splice(xporn, 1)
welcome.splice(xporn, 1)
fs.writeFileSync('./settings/welcome.json', JSON.stringify(welcome))
aruga.reply(from, 'Welcome Message sekarang dinonaktifkan', id)
} else {
aruga.reply(from, `Membuat BOT menyapa member yang baru join kedalam group
chat!\n\nPenggunaan:\n${prefix}welcome on --aktifkan\n${prefix}welcome off --
nonaktifkan`, id)
}
break*/
 //Owner Group
 case 'kickall': //mengeluarkan semua member
 if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya
dapat dipakai didalam grup!', id)
 let isOwner = chat.groupMetadata.owner == pengirim
 if (!isOwner) return aruga.reply(from, 'Maaf, perintah ini hanya dapat
dipakai oleh owner grup!', id)
 if (!isBotGroupAdmins) return aruga.reply(from, 'Gagal, silahkan
tambahkan bot sebagai admin grup!', id)
 const allMem = await aruga.getGroupMembers(groupId)
 for (let i = 0; i < allMem.length; i++) {
 if (groupAdmins.includes(allMem[i].id)) {
 } else {
 await aruga.removeParticipant(groupId, allMem[i].id)
 }
 }
 aruga.reply(from, 'Success kick all member', id)
 break
 //Owner Bot
 case 'listgrup':
 case 'listgroup':
 aruga.getAllGroups().then((res) => {
 let berhitung1 = 1
 let gc = `*This is list of group* :\n`
 for (let i = 0; i < res.length; i++) {
 gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* :
${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam*
: ${res[i].notSpam}\n`
 }
 aruga.reply(from, gc, id)
 })
 break
 case 'setprefix':
 if(!isOwnerBot) return aruga.reply(from, `Perintah ini hanya bisa di
gunakan oleh Owner XINZ!`, id)
 if (args.length === 0) return aruga.reply(from, `Kirim perintah
*${prefix}prefix [ NEW PREFIX ]*`, id)
 const prefa = body.slice(11)
 setting.prefix = `${prefa}`
 prefix = `${prefa}`
 fs.writeFileSync('./settings/setting.json', JSON.stringify(setting))
 aruga.sendText(from, `Berhasil Mengganti Prefix Ke *「* ${prefa} *」
*`)
 break
case 'addbadword':
 if (!isAdmin) return aruga.reply(from, `Perintah ini hanya bisa di
gunakan oleh Admin Elaina!`, id)
 if (args.length === 0) return aruga.reply(from, `Masukkan kata kasar
yang akan di blacklist `, id) 
y g , )
 const word = body.slice(12)
 var cek = dbbadword.includes(word);
 if(cek){
 return aruga.reply(from, `Badword Sudah Ada Di Database`, id)
 } else {
 dbbadword.push(word)
 fs.writeFileSync('./lib/data/katakasar.json',
JSON.stringify(dbbadword))
 aruga.reply(from, `Success Menambahkan Blacklist Badword\nTotal
Data Badword Sekarang : *${dbbadword.length - 1}*`, id)
 }
 break
 case 'delbadword':
 if (!isOwnerBot) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan oleh Owner Elaina!`, id)
 const delbd = dbbadword.indexOf(body.slice(12))
 dbbadword.splice(delbd, 1)
 fs.writeFileSync('./lib/data/katakasar.json',
JSON.stringify(dbbadword))
 aruga.reply(from, `Success Menghapus Badword!`, id)
 break
 case 'listbadword':
 if (!isAdmin) return aruga.reply(from, `Perintah ini hanya bisa di
gunakan oleh Admin Elaina!`, id)
 const bad = fs.readFileSync('./lib/data/katakasar.json')
 const liste = JSON.parse(bad)
 let listz = '*「 LIST BADWORD 」*\n'
 listz += `*Total : ${liste.length}*\n`
 let nomre = 1
 for (let i = 0; i < liste.length; i++){
 listz += `\n*${nomre}.* ${liste[i]}`
 nomre++
 }
 aruga.sendText(from, listz)
 break
case 'getses':
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya untuk
Owner XINZ', id)
 const sesPic = await aruga.getSnapshot()
 aruga.sendFile(from, sesPic, 'session.png', 'Nih boss', id)
 break
 case 'setname':
 if (!isOwnerBot) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan oleh Owner XINZ!`, id)
 const setnem = body.slice(9)
 await aruga.setMyName(setnem)
 aruga.sendTextWithMentions(from, `Makasih Nama Barunya
@${sender.id.replace('@c.us','')} 😘`)
 break
 case 'setstatus':
 if (!isOwnerBot) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan oleh Owner XINZ!`, id)
 const setstat = body.slice(11)
 await aruga.setMyStatus(setstat)
 aruga.sendTextWithMentions(from, `Makasih Status Barunya
@${sender.id.replace('@c.us','')} 😘`)
 break
 case 'setprofilepic':
 if (!isOwnerBot) return aruga.reply(from, `Perintah ini hanya bisa
di gunakan oleh Owner XINZ`, id)
 if (isMedia) {
 const mediaData = await decryptMedia(message)
 const imageBase64 =
`data:${mimetype};base64,${mediaData.toString('base64')}`
 await aruga.setProfilePic(imageBase64)
 aruga.sendTextWithMentions(`Makasih
@${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
 } else if (quotedMsg && quotedMsg.type == 'image') {
 const mediaData = await decryptMedia(quotedMsg)
 const imageBase64 =
`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
 await aruga.setProfilePic(imageBase64)
 aruga.sendTextWithMentions(from, `Makasih
@${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
 } else {
 aruga.reply(from, `Wrong Format!\n⚠ Harap Kirim Gambar Dengan
${prefix}setprofilepic`, id)
 }
 break
 case 'getpic':
 if (!isGroupMsg) return aruga.reply(from, `Fitur ini hanya bisa di
gunakan dalam group`, id)
 const texnugm = body.slice(8)
 const getnomber = await aruga.checkNumberStatus(texnugm)
 const useriq = getnomber.id.replace('@','') + '@c.us'
 try {
 var jnck = await aruga.getProfilePicFromServer(useriq)
 aruga.sendFileFromUrl(from, jnck, `awok.jpg`)
 } catch {
 aruga.reply(from, `Tidak Ada Foto Profile!`, id)
 }
 break
 case 'ban':
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya untuk
Owner bot!', id)
 if (args.length == 0) return aruga.reply(from, `Untuk banned
seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban
add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk
nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag
@tag`, id)
 if (args[0] == 'add') {
 banned.push(args[1]+'@c.us')
 fs.writeFileSync('./settings/banned.json',
JSON.stringify(banned))
 aruga.reply(from, 'Success banned target!')
 } else
 if (args[0] == 'del') {
 let xnxx = banned.indexOf(args[1]+'@c.us')
 banned.splice(xnxx,1)
 fs.writeFileSync('./settings/banned.json',
JSON.stringify(banned))
 aruga.reply(from, 'Success unbanned target!')
 } else {
 for (let i = 0; i < mentionedJidList.length; i++) {
 banned.push(mentionedJidList[i])
 fs.writeFileSync('./settings/banned.json',
JSON.stringify(banned))
 aruga.reply(from, 'Success ban target!', id)
 }
 }
 break
 case 'bc': // KASIH CREDIT DONG KALO COPAS
 if (!isOwnerBot) return aruga.reply(from, `Perintah ini hanya untuk
Owner XINZ`, id)
 bctxt2 = body.slice(4)
 txtbc2 = `═══ 《 BROADCAST 》 ═══
─────────────────────
${bctxt2}
─────────────────────
═══ 《 XINZ BOT 》 ═══`
 const semuagrup = await aruga.getAllChatIds();
 if(quotedMsg && quotedMsg.type == 'image'){
 const mediaData = await decryptMedia(quotedMsg)
 const imageBase64 =
`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
 for(let grupnya of semuagrup){
 var cekgrup = await aruga.getChatById(grupnya)
 if(!cekgrup.isReadOnly) aruga.sendImage(grupnya,
imageBase64, 'gambar.jpeg', txtbc2)
 }
 aruga.reply('Broadcast sukses!')
 }else{
 for(let grupnya of semuagrup){
 var cekgrup = await aruga.getChatById(grupnya)
 if(!cekgrup.isReadOnly && isMuted(grupnya))
aruga.sendText(grupnya, txtbc2)
 }
 aruga.reply('Broadcast Success!')
 }
 break
 case 'bcgrup': // KASIH CREDIT DONG KALO COPAS
 if (!isOwnerBot) return aruga.reply(from, `Perintah ini hanya untuk
Owner XINZ`, id)
 bctxt = body.slice(8)
 txtbc = `═══ 《 BROADCAST 》 ═══
─────────────────────
${bctxt}
─────────────────────
═══ 《 XINZ BOT 》 ═══`
 const semuagrup1 = await aruga.getAllGroups();
 if(quotedMsg && quotedMsg.type == 'image'){
 const mediaData = await decryptMedia(quotedMsg)
 const imageBase64 =
`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
 for(let grupnya of semuagrup1){
 var cekgrup = await aruga.getChatById(grupnya)
 if(!cekgrup.isReadOnly) aruga.sendImage(grupnya,
imageBase64, 'gambar.jpeg', txtbc)
 }
 aruga.reply('Broadcast sukses!')
 }else{
 for(let grupnya of semuagrup1){
 var cekgrup = await aruga.getChatById(grupnya)
 if(!cekgrup.isReadOnly && isMuted(grupnya))
aruga.sendText(grupnya, txtbc)
 }
 aruga.reply('Broadcast Success!')
 }
 break
 case 'leaveall': //mengeluarkan bot dari semua group serta menghapus
chatnya
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya untuk
Owner bot', id)
 const allChatz = await aruga.getAllChatIds()
 const allGroupz = await aruga.getAllGroups()
 for (let gclist of allGroupz) {
 await aruga.sendText(gclist.contact.id, `Maaf bot sedang
pembersihan, total chat aktif : ${allChatz.length}`)
 await aruga.leaveGroup(gclist.contact.id)
 await aruga.deleteChat(gclist.contact.id)
 }
aruga reply(from 'Success leave all group!' id)
 aruga.reply(from, Success leave all group! , id)
 break
 case 'clearall': //menghapus seluruh pesan diakun bot
 if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya untuk
Owner bot', id)
 const allChatx = await aruga.getAllChats()
 for (let dchat of allChatx) {
 await aruga.deleteChat(dchat.id)
 }
 aruga.reply(from, 'Success clear all chat!', id)
 break
 default:
/*if(chats.match(/(xinz)/gi)){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
aruga.sendPtt(from, './media/bot.mpeg', id)
}
if(chats.match(/(fbi)/gi)){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
aruga.sendPtt(from, './media/fbi.mpeg', id)
}
if(chats.match(/(pp)/gi)){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
aruga.sendPtt(from, './media/oni.mpeg', id)
}
if(chats.match(/(bot)/gi)){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
aruga.sendTextWithMentions(from, `Ya ada apa @${sender.id.replace('@c.us','')}
Silahkan ketik ${prefix}menu untuk mendapatkan bantuan`, id)
 }
if(chats.match(/(iri)/gi)){
aruga.sendPtt(from, './media/iri.mpeg', id)
}
if(chats.match(/(cekprefix)/gi)){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
aruga.reply(from, `prefix yang digunakan saat ini adalah *「* ${prefix} *」*`,
id)
}
if(chats.match(/(tarek sis)/gi)){
aruga.sendPtt(from, './media/tarek.mp3' ,id)
}
if(chats.match(/(tapi)/gi)){
aruga.sendPtt(from, './media/tapi.mpeg', id)
 }*/
 /*if(chats.match(/)ada ga)/gi)){
 aruga.sendPtt(from, './media/ada.mp3', id)
 }*/
/*if(chats startsWith('sad')){
 / if(chats.startsWith( sad )){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 aruga.sendPtt(from, './media/sad.mpeg', id)
 }*/
 if(chats.match(/(assalamualaikum)/gi)){
 aruga.sendText(from, 'Waalaikumsalam warahmatullahi
wabarakatuh', id)
 }
 if (chats.startsWith(`${prefix}`)) {
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 const args = body.trim().split(' ')
 aruga.sendTextWithMentions(from, `Maaf kak
@${sender.id.replace('@c.us','')} Command *${args[0]}* tidak ada di
${prefix}menu`, id)
 }
 if (chats.match(`@6287772287735`)){
 if(isReg(obj)) return
 if(cekumur(cekage)) return
 aruga.sendTextWithMentions(from, `Ya ada apa
@${sender.id.replace('@c.us','')}
Silahkan ketik ${prefix}menu untuk mendapatkan bantuan`, id)
 }
break
 }
 }
// Simi-simi function
/*if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {
axios.get(`https://arugaz.herokuapp.com/api/simisimi?
kata=${encodeURIComponent(message.body)}&apikey=${apiSimi}`)
.then((res) => {
if (res.data.status == 403) return aruga.sendText(ownerNumber,
`${res.data.result}\n\n${res.data.pesan}`)
aruga.reply(from, `Simi berkata: ${res.data.result}`, id)
})
.catch((err) => {
aruga.reply(from, `${err}`, id)
})
}*/
// Kata kasar function
/*if(!isCmd && isGroupMsg && isNgegas && !isMuted) {
 const find = db.get('group').find({ id: groupId }).value()
 if(find && find.id === groupId){
 const cekuser = db.get('group').filter({id:
groupId}).map('members').value()[0]
 const isIn = inArray(pengirim, cekuser)
 if(cekuser && isIn !== false){
 if(isKasar){
 const denda = db.get('group').filter({id:
groupId}).map('members['+isIn+']').find({ id: pengirim }).update('denda', n => n
+ 5000).write()
 if(denda){
await aruga reply(from "Jangan badword
 await aruga.reply(from, Jangan badword
sahabat\nDenda +5.000\nTotal : Rp"+formatin(denda.denda), id)
 }
 }
 } else {
 const cekMember = db.get('group').filter({id:
groupId}).map('members').value()[0]
 if(cekMember.length === 0){
 if(isKasar){
 db.get('group').find({ id: groupId }).set('members',
[{id: pengirim, denda: 5000}]).write()
 } else {
 db.get('group').find({ id: groupId }).set('members',
[{id: pengirim, denda: 0}]).write()
 }
 } else {
 const cekuser = db.get('group').filter({id:
groupId}).map('members').value()[0]
 if(isKasar){
 cekuser.push({id: pengirim, denda: 5000})
 await aruga.reply(from, "Jangan badword
sahabat\nDenda +5.000", id)
 } else {
 cekuser.push({id: pengirim, denda: 0})
 }
 db.get('group').find({ id: groupId }).set('members',
cekuser).write()
 }
 }
 } else {
 if(isKasar){
 db.get('group').push({ id: groupId, members: [{id: pengirim,
denda: 5000}] }).write()
 await aruga.reply(from, "Jangan badword sahabat\nDenda
+5.000\nTotal : Rp5.000", id)
 } else {
 db.get('group').push({ id: groupId, members: [{id: pengirim,
denda: 0}] }).write()
 }
 }
 }*/
 } catch (err) {
 console.log(color('[EROR]', 'red'), err)
 }
}