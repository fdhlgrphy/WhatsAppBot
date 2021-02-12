const fs = require('fs-extra')

const setwelcome = (chatId, pesan, _dib) => {
    const obj = { id: chatId, pesan: pesan }
    _dib.push(obj)
    fs.writeFileSync('./lib/database/setwelkom.json', JSON.stringify(_dib))
}
const cengwelkom = (chatId, pesan, _dib) => {
    let position = null
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        _dib[position].pesan = pesan
        fs.writeFileSync('./lib/database/setwelkom.json', JSON.stringify(_dib))
    }
}
const welkomposition = (chatId, _dib) => {
    let position = null
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            position = i
        }
    })
    return position
}
const getwelkom = (chatId, _dib) => {
    let position = false
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            position = i
        }
    })
    if (position !== false) {
        return _dib[position].pesan
    }
}
const cekwelkom = (chatId, _dib) => {
    let id = false
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            id = true
        }
    })
    return id
}
// left
const setleft = (chatId, pesan, _dib) => {
    const obj = { id: chatId, pesan: pesan }
    _dib.push(obj)
    fs.writeFileSync('./lib/database/setleft.json', JSON.stringify(_dib))
}
const cengleft = (chatId, pesan, _dib) => {
    let position = null
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        _dib[position].pesan = pesan
        fs.writeFileSync('./lib/database/setleft.json', JSON.stringify(_dib))
    }
}
const leftposition = (chatId, _dib) => {
    let position = null
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            position = i
        }
    })
    return position
}
const getleft = (chatId, _dib) => {
    let position = false
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            position = i
        }
    })
    if (position !== false) {
        return _dib[position].pesan
    }
}
const cekleft = (chatId, _dib) => {
    let id = false
    Object.keys(_dib).forEach((i) => {
        if (_dib[i].id === chatId) {
            id = true
        }
    })
    return id
}
module.exports = {
    setwelcome,
    cengwelkom,
    welkomposition,
    getwelkom,
    cekwelkom,
    setleft,
    cengleft,
    leftposition,
    getleft,
    cekleft
}