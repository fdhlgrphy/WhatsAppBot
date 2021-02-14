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
    fetch(`https://naufalhoster.xyz/tools/blurry_zoom?apikey=${naufalkey}&url=${encodeURIComponent(imageUrl)}`, {
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
    fetch(`https://api.zeks.xyz/api/sfire?img=${encodeURIComponent(imageUrl)}&apikey=apivinz`, {
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

const comics = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://naufalhoster.xyz/tools/photo_comic?apikey=${naufalkey}&url=https://naufalhoster.xyz/media/example.jpg${encodeURIComponent(imageUrl)}`, {
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
exports.comics = comics;
