const fs = require('fs-extra')

const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Premium expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./lib/database/vip.json', JSON.stringify(_dir))
        }
    }, 1000)
}

module.exports = {
    expiredCheck
}