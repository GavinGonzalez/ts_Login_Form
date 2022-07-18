const {sign, verify} = require("jsonwebtoken");

const createToken = (data, key) => {
    const token = sign(data, key)
    return token
}


module.exports = createToken