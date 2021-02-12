const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs-extra')
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const { getBase64, fetchBase64 } = require("./fetcher")
let { 
    vhtearkey,
    naufalkey
    } = setting

const stickerlight = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://api.vhtear.com/lightning?link=${encodeURIComponent(imageUrl)}&apikey=${vhtearkey}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});
//

const stickerburn = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://api.vhtear.com/burning_fire?link=${encodeURIComponent(imageUrl)}&apikey=${vhtearkey}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});

const sfisheye = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://naufalhoster.xyz/tools/fisheye?apikey=${naufalkey}&url=${encodeURIComponent(imageUrl)}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});
//
const television = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://naufalhoster.xyz/textmaker/television?apikey=${naufalkey}&url=${encodeURIComponent(imageUrl)}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});

const hiyaaa = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://naufalhoster.xyz/textmaker/ryu_fighter?apikey=${naufalkey}&url=${encodeURIComponent(imageUrl)}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});

const gtavv = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${encodeURIComponent(imageUrl)}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});
// 
exports.stickerburn = stickerburn;
exports.stickerlight = stickerlight;
exports.sfisheye = sfisheye;
exports.television = television;
exports.hiyaaa = hiyaaa;
exports.gtavv = gtavv;
