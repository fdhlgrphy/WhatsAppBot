const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs-extra')
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let { 
    vhtearkey
    } = setting

/* const instagram = async (url) => new Promise(async (resolve, reject) => {
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
}) */

const tiktok = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/tiktokdl?link=${url}&apikey=${vhtearkey}`
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

const facebook = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/fbdl?link=${url}&apikey=${vhtearkey}`
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

const smule = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/getsmule?link=${url}&apikey=${vhtearkey}`
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

const starmaker = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/starmakerdl?link=${url}&apikey=${vhtearkey}`
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

/* const twitter = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/twitter?link=${url}&apikey=${vhtearkey}`
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
 */

const twt = async (twturl) => {
    const response = await fetch(`http://keepsaveit.com/api/?api_key=3tgDBIOPAPl62b0zuaWNYog2wvRrc4V414AjMi5zdHbU4a&url=${twturl}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    const json = await response.json()
    if (json.status === true) return {
        'exts': json.response.links.ext,'capt': `\n*Title* : ${json.response.title}\n*Resolusi* : ${json.response.links[0].resolution}\n*Size* : ${json.response.links[0].size}`, 'url': json.response.links[0].url
    }
    return {
        'capt': '[ ERROR ] Not found! Hanya menerima link video twitter yang valid.', 'exts': '.jpg', 'url': 'http://mrhrtz-wabot.000webhostapp.com/404.jpg'
    }
}
const lk21 = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/downloadfilm?judul=${url}&apikey=${vhtearkey}`
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

/* const joox = async (url) => new Promise(async (resolve, reject) => {
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
}) */


const twitter2 = async (twturl) => {
    const response = await fetch(`http://keepsaveit.com/api/?api_key=3tgDBIOPAPl62b0zuaWNYog2wvRrc4V414AjMi5zdHbU4a&url=${twturl}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    const json = await response.json()
    if (json.status === true) return {
        'exts': json.response.links.ext,'capt': `\n*Title* : ${json.response.title}\n*Resolusi* : ${json.response.links[0].resolution}\n*Size* : ${json.response.links[0].size}`, 'url': json.response.links[0].url
    }
    return {
        'capt': '[ ERROR ] Not found! Hanya menerima link video twitter yang valid.', 'exts': '.jpg', 'url': 'http://mrhrtz-wabot.000webhostapp.com/404.jpg'
    }
}
exports.tiktok = tiktok;
exports.facebook = facebook;
exports.smule = smule;
exports.starmaker = starmaker;
exports.lk21 = lk21;
exports.twitter2 = twitter2;