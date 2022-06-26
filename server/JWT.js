const {sign, verify} = require("jsonwebtoken");

const createToken = (id) => {
    const token = sign({id})
    return token
}


module.exports = {createToken}