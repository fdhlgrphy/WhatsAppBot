const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs-extra')
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const { getBase64, fetchBase64 } = require("./fetcher")
let { 
    vhtearkey,
    naufalkey
    } = setting

    const stknobg = (imageUrl) => new Promise((resolve, reject) => {
        fetch(`https://api.vhtear.com/removebgwithurl?link=${encodeURIComponent(imageUrl)}&apikey=${vhtearkey}`, {
            method: 'GET',
        })
        .then(async res => {
            const text = await res.json()
    
            resolve(text)
            
         })
        .catch(err => reject(err))
    });

    const stknobg2 = (imageUrl) => new Promise((resolve, reject) => {
        fetch(`https://naufalhoster.xyz/tools/removebg?apikey=${vhtearkey}&url=${encodeURIComponent(imageUrl)}`, {
            method: 'GET',
        })
        .then(async res => {
            const text = await res.json()
    
            resolve(text)
            
         })
        .catch(err => reject(err))
    });

exports.stknobg = stknobg;
exports.stknobg2 = stknobg2;