const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('./lib/database/setting.json'))

function help() {
    return `
	*❤️ WELCOME TO ZXCBOT ❤️*

*Jangan menelpon bot!*
*MENELPON BOT : AUTOBLOCK*

	*[ THIS BOT USE ANTI SPAM]*

Kalau pesan kalian belum di respon oleh bot, silahkan ulangi lagi. Bot tidak merespon bukan karena bot error melainkan bot memakai anti spam agar tidak terspam command, silahkan tunggu beberapa saat lalu ketik kembali.



┌─────┤ *ＺＸＣＢＯＴ*
│
├ untuk melihat owner ketik *${prefix}owner*
├ untuk melihat donasi ketik *${prefix}donasi*
├ untuk inv bot ke grup ketik *${prefix}iklan*
├ untuk melihat snk bot ketik *${prefix}snk*
├ untuk melihat limit ketik *${prefix}limit*
├ untuk melihat info bot ketik *${prefix}info*
├ Untuk melihat bahasa ketik *${prefix}bahasa*
│
└───────┤ *PREFIX* = *${prefix}*



	*「  CREATOR MENU  」*

┌  *${prefix}sticker*
├  *${prefix}stickergif*
├  *${prefix}ttp [teks]*
├  *${prefix}ttp2 [teks]*
├  *${prefix}snobg*
├  *${prefix}toimg*
├  *${prefix}slightning*
├  *${prefix}sfire*
├  *${prefix}qrcode [optional]*
├  *${prefix}textmaker [teks1|teks2]*
├  *${prefix}sandwriting [teks]*
├  *${prefix}thunder [teks]*
├  *${prefix}blackpink [teks]*
├  *${prefix}pornhub [|teks1|teks2]*
├  *${prefix}nulis [teks]*
├  *${prefix}nuliskiri [teks]*
├  *${prefix}nuliskanan [teks]*
├  *${prefix}magernulis1 --[Nama Kamu]--[Kelas Kamu]--[Teks]*

├  *${prefix}quotemaker [|teks|author|theme]*
└  *${prefix}tts [kode bhs] [teks]*


	*「  KERANG MENU  」*

┌  *${prefix}apakah [optional]*
├  *${prefix}rate [optional]*
├  *${prefix}bisakah [optional]*
├  *${prefix}brppersen [optional]*
└  *${prefix}kapankah [optional]*


	*「  PRAY (ISLAM)  」*

┌  *${prefix}quran [urutan surah]*
├  *${prefix}infosurah [nama surah]*
├  *${prefix}tafsir [nama surah] [ayat]*
├  *${prefix}jadwalsholat [daerah]*
├  *${prefix}listsurah*
└  *${prefix}listdaerah*


	*「  FUN MENU / GROUP 」*

┌  *${prefix}caklontong*
├  *${prefix}family100*
├  *${prefix}tebakgambar*
├  *${prefix}ramalpasangan [kamu|pasangan]*
├  *${prefix}zodiak [zodiak kamu]*
├  *${prefix}artinama [nama]*
├  *${prefix}artinama [nama]*
├  *${prefix}artimimpi [mimpi]*
├  *${prefix}randomtag [pesan]*
├  *${prefix}cocok*
├  *${prefix}hug [tag]*
├  *${prefix}igprofile [@username]*
└  *${prefix}heroml [nama hero]*


	*「  18+  」*
	
 ─ *${prefix}nsfwmenu*


	*「  DOWNLOADER 」*

┌  *${prefix}ytmp3 [linkYt]*
├  *${prefix}ytmp4 [linkYt]*
├  *${prefix}ig [linkIg]*
├  *${prefix}fb [linkFb]*
├  *${prefix}twitter [linkTwitter]*
├  *${prefix}smule [linkSmule]*
├  *${prefix}tiktok [linkTiktok]*
├  *${prefix}starmaker [linkStarmaker]*
├  *${prefix}xnxx [linkXnxx]*
├  *${prefix}nhder [kodeNuclear]*
├  *${prefix}joox [lagu]*
└  *${prefix}play [lagu]*


	*「  ANIME MENU  」*

┌  *${prefix}loli*
├  *${prefix}shota*
├  *${prefix}waifu*
├  *${prefix}husbu*
├  *${prefix}randomNekoNime*
├  *${prefix}randomTrapNime*
├  *${prefix}randomAnime*
├  *${prefix}quotesnime*
├  *${prefix}wait*
├  *${prefix}koin*
├  *${prefix}malanime [optional]*
├  *${prefix}malcharacter [optional]*
├  *${prefix}kusonime [optional]*
├  *${prefix}otakudesu [optional]*
├  *${prefix}dewabatch [optional]*
└  *${prefix}animesearch [query]*


	*「  EDUCATIONAL MENU  」*

┌  *${prefix}brainly [pertanyaan] [.jumlah]*
├  *${prefix}resepmasakan [optional]*
├  *${prefix}kbbi [query]*
└  *${prefix}wiki [query]*


	*「  RANDOM TEKS MENU  」*

┌  *${prefix}puisi1*
├  *${prefix}puisi2*
├  *${prefix}puisi3*
├  *${prefix}puisi4*
├  *${prefix}cerpen1*
├  *${prefix}cerpen2*
├  *${prefix}cersex*
├  *${prefix}motivasi*
├  *${prefix}quotes*
├  *${prefix}fakta*
├  *${prefix}katabijak*
├  *${prefix}quotes*
└  *${prefix}pantun*


	*「  HELPER MENU  」*

┌  *${prefix}lirik [optional]*
├  *${prefix}chord [optional]*
├  *${prefix}covid [negara]*
├  *${prefix}shorturl [linkWeb]*
├  *${prefix}ssweb [linkWeb]*
├  *${prefix}checkip [ipaddress]*
├  *${prefix}maps [optional]*
├  *${prefix}translate [bahasa] [teks]*
├  *${prefix}infoGempa*
└  *${prefix}wa.me*


	*「  ADMINBOT  MENU  」*

┌  *${prefix}mute*
├  *${prefix}unmute*
├  *${prefix}ban @tagmember*
├  *${prefix}unban @tagmember*
├  *${prefix}daftarulang @tagmember umur*
├  *${prefix}spamtag @tagmember*
├  *${prefix}spamcall [81273xxxx]*
├  *${prefix}addbadword [text]*
├  *${prefix}delbadword [text]*
├  *${prefix}listbadword [text]*
├  *${prefix}resetsticker @tagmember*
├  *${prefix}resetbadword @tagmember*
├  *${prefix}oleave*
├  *${prefix}oadd 62813xxxxx*
└  *${prefix}otagall*


_*zxcbot by @juwenajaa*_`
}
exports.help = help()
function ownercmd() {
    return `
	*「  OWNER MENU  」*

┌  *${prefix}block 62858xxxxx*
├  *${prefix}unblock 62858xxxxx*
├  *${prefix}addadmin @tagmember*
├  *${prefix}deladmin @tagmember*
├  *${prefix}restart*
├  *${prefix}ekickall*
├  *${prefix}banchat*
├  *${prefix}unbanchat*
├  *${prefix}setname [teks]*
├  *${prefix}setstatus [teks]*
└  *${prefix}setprofilepic*`
}
exports.ownercmd = ownercmd()
function admincmd() {
    return `
	*「  ADMINBOT  MENU  」*

┌  *${prefix}mute*
├  *${prefix}unmute*
├  *${prefix}ban @tagmember*
├  *${prefix}unban @tagmember*
├  *${prefix}daftarulang @tagmember umur*
├  *${prefix}spamtag @tagmember*
├  *${prefix}spamcall [81273xxxx]*
├  *${prefix}addbadword [text]*
├  *${prefix}delbadword [text]*
├  *${prefix}listbadword [text]*
├  *${prefix}resetsticker @tagmember*
├  *${prefix}resetbadword @tagmember*
├  *${prefix}oleave*
├  *${prefix}oadd 62813xxxxx*
└  *${prefix}otagall*`
}
exports.admincmd = admincmd()
function nsfwcmd() {
    return `
	*「  18+  」*
	
┌ *${prefix}randombokep* [error]
├ *${prefix}randomhentai*
├ *${prefix}randomnsfwneko*
├ *${prefix}randomtrapnime*
├ *${prefix}nhentai [kode]*
├ *${prefix}nhder [kode]*
└ *${prefix}xnxx [linkXnxx]*

*INGET DOSA YA BANG*`
}
exports.nsfwcmd = nsfwcmd()
function praycmd() {
    return `
	*「  PRAY (ISLAM)  」*

┌ *${prefix}quran [urutan surah]*
├ *${prefix}infosurah [nama surah]*
├ *${prefix}tafsir [nama surah] [ayat]*
├ *${prefix}jadwalsholat [daerah]*
├ *${prefix}listsurah*
└ *${prefix}listdaerah*
`
}
exports.praycmd = praycmd()
function kerangcmd() {
    return `
	*「  KERANG MENU  」*

┌  *${prefix}apakah [optional]*
├  *${prefix}rate [optional]*
├  *${prefix}bisakah [optional]*
├  *${prefix}brppersen [optional]*
└  *${prefix}kapankah [optional]*`
}
exports.kerangcmd = kerangcmd()
function funcmd() {
    return `
	*「  FUN MENU / GROUP  」*

┌  *${prefix}caklontong*
├  *${prefix}family100*
├  *${prefix}tebakgambar*
├  *${prefix}ramalpasangan [kamu|pasangan]*
├  *${prefix}zodiak [zodiak kamu]*
├  *${prefix}artinama [nama]*
├  *${prefix}artinama [nama]*
├  *${prefix}artimimpi [mimpi]*
├  *${prefix}randomtag [pesan]
├  *${prefix}cocok*
├  *${prefix}hug [tag]*
└  *${prefix}heroml [nama hero]*
`
}
exports.funcmd = funcmd()
function mediacmd() {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➥ *${prefix}covid [negara]*
╠➥ *${prefix}jadwalTv [channel]*
╠➥ *${prefix}cuaca [tempat]*
╠➥ *${prefix}resepmasakan [optional]*
╠➥ 
╠➥ 
╠➥ *${prefix}tiktokstalk [@username]*
╠➥ *${prefix}smulestalk [@username]*
╠➥ 
╠➥ 
╠➥ *${prefix}shopee [query]*
╠➥ *${prefix}google [query]*
╠➥ *${prefix}pinterest [query]*
╠➥ *${prefix}playstore [query]*
╠➥ *${prefix}googleimage [query]*
╠➥ *${prefix}brainlysearch [query]*
╠➥ *${prefix}youtubesearch [query]*
╠➥ *${prefix}translate [bahasa] [teks]*
╠➥ *${prefix}brainly [pertanyaan] [.jumlah]*
╠➥ *${prefix}lirik [optional]*
╠➥ *${prefix}chord [optional]*
╠➥ 
╠➥ *${prefix}maps [optional]*
╠➥ 
╠➥ *${prefix}checkip [ipaddress]*
╠➥ *${prefix}ssweb [linkWeb]*
╠➥ *${prefix}shorturl [linkWeb]*
║
╚═〘 ELAINA BOT 〙`
}
exports.mediacmd = mediacmd()
function animecmd() {
    return `
*「  ANIME MENU  」*

┌  *${prefix}loli*
├  *${prefix}shota*
├  *${prefix}waifu*
├  *${prefix}husbu*
├  *${prefix}randomNekoNime*
├  *${prefix}randomTrapNime*
├  *${prefix}randomAnime*
├  *${prefix}quotesnime*
├  *${prefix}wait*
├  *${prefix}koin*
├  *${prefix}malanime [optional]*
├  *${prefix}malcharacter [optional]*
├  *${prefix}kusonime [optional]*
├  *${prefix}otakudesu [optional]*
├  *${prefix}dewabatch [optional]*
└  *${prefix}animesearch [query]*
`
}
exports.animecmd = animecmd()
function othercmd() {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➥ 
╠➥ *${prefix}sticker*
╠➥ 
╠➥ 
╠➥ *
╠➥ *${prefix}ttp [teks]*
╠➥ 
╠➥ *${prefix}neko*
╠➥ *${prefix}pokemon*
╠➥ *${prefix}inu*
╠➥ 
╠➥ *${prefix}quotes*
╠➥ *${prefix}ptl*
╠➥ *${prefix}dadu*
╠➥ *${prefix}koin*
╠➥ 
╠➥ 
║
╚═〘 ELAINA BOT 〙`
}
exports.othercmd = othercmd()
function downloadcmd() {
    return `
	*「  DOWNLOADER 」*

┌ *${prefix}ytmp3 [linkYt]*
├ *${prefix}ytmp4 [linkYt]*
├ *${prefix}ig [linkIg]*
├ *${prefix}fb [linkFb]*
├ *${prefix}twitter [linkTwitter]*
├ *${prefix}smule [linkSmule]*
├ *${prefix}tiktok [linkTiktok]*
├ *${prefix}starmaker [linkStarmaker]*
├ *${prefix}xnxx [linkXnxx]*
├ *${prefix}nhder [kodeNuclear]*
├ *${prefix}joox [lagu]*
├ *${prefix}play [lagu]*
├ *${prefix}music [lagu]*
├ *${prefix}getmusic [IdDownload]*
├ *${prefix}video [video]*
└ *${prefix}getvideo [IdDownload]*
`
}
exports.downloadcmd = downloadcmd()
function groupcmd() {
    return `
*「  GROUP MENU  」*


┌ *${prefix}snk*
├ *${prefix}wame*
├ *${prefix}groupinfo*
├ *${prefix}add 62858xxxxx*
├ *${prefix}kick @tagmember*
├ *${prefix}promote @tagmember*
├ *${prefix}demote @tagadmin*
├ *${prefix}getpic @tagsomeone* 
├ *${prefix}tagall [pesan]*
├ *${prefix}adminList*
├ *${prefix}ownerGroup*
├ *${prefix}leave*
├ *${prefix}kickAll*
├ *${prefix}delete [replyChatBot]*
├ *${prefix}group [open|close]*
├ *${prefix}NSFW [enable|disable]*
├ *${prefix}left [enable|disable]*
├ *${prefix}welcome [enable|disable]*
├ *${prefix}simi [enable|disable]*
├ *${prefix}antilink [enable|disable]*
└ *${prefix}antibadword [enable|disable]*


_*zxcbot by @juwenajaa*_`
}
exports.groupcmd = groupcmd()
function readme() {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme()
function info() {
    return `
*「 INFORMATION 」*

┌ *BOT TYPE   :* NodeJs v12
├ *NAME 	  :* ZXCBOT
├ *OWNER	  :* @Juwenajaa
├ *VERSION    :* 1.3
├ *DEVICE	  :* Emulator
└ *WA Number  :* 085155078806
`
}

exports.info = info()
function snk() {
    return `
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function sewa() {
    return `
*「 IKLAN 」*

 *DAFTAR SEWA:*
 *SEWA : 10K/GRUP (BULAN)*

*「 PEMBAYARAN BISA MELALUI :*
*GOPAY & PULSA (085155078806)  」*

*--------------------------------------*

 *【 KEUNTUNGAN MENJADI ADMIN ZXCBOT 】*
 
┌ *BISA AKSES MENU ADMIN ZXCBOT*
└ *LIMIT JUGA AKAN DITAMBAH*


*【 KEUNTUNGAN MENJADI MEMBER PREMIUM ZXCBOT 】*

┌ *BISA MENDAPATKAN AKSES COMMAND PREMIUM*
└ *LIMIT JUGA AKAN DITAMBAH*

*----------------------------------------*

*JIKA MINAT IKLAN DIATAS*
*HARAP HUBUNGI NOMOR DIBAWAH :*
*wa.me/6289635687240*`
}
exports.sewa = sewa()
function sumbang() {
    return `
DONASI JUWEN YUK, BIAR DIA GA MISKIN. 


Kamu bisa membantu juwen dengan cara 

┌─┤ *GOPAY / PULSA*
│
└─┤ *085155078806*


┌─┤ *SAWERIA*
│
└─┤ *saweria.co/juwenajaa*


*FOLLOW INSTAGRAM :*
*instagram.com/juwendy_s*


*TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*`
}
exports.sumbang = sumbang()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
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
    cy        Welsh
      `
}
exports.bahasalist = bahasalist()
