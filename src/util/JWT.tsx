import {Buffer} from "buffer";

const decodePayload = (jwt:string) => {
    let index1 = jwt.indexOf(".");
    let sub = jwt.substring(index1+1, jwt.length)
    
    let index2 = sub.indexOf(".");
    let payload = sub.substring(0, index2)
    
    
    
    return JSON.parse(Buffer.from(payload, 'base64').toString('ascii'))
}


export default decodePayload