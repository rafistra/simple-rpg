const bcrypt = require('bcrypt');
const saltRound = +process.env.SALT_ROUND || 5;

const encryptPwd = data => {
    return bcrypt.hashSync(String(data), saltRound);
}

const decryptPWd = (data, hashPwd) => {
    return bcrypt.compareSync(String(data), hashPwd);
}

module.exports= {
    encryptPwd, decryptPWd
}