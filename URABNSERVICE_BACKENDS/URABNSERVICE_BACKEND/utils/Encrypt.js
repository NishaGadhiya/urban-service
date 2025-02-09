const bcrypt = require('bcrypt')
const saltRounds = 10

const encrypPassword = (password)=>{
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPasssword = bcrypt.hashSync(password,salt)
    return hashedPasssword
}

const comparePassword = (password,hash)=>{
    const flag = bcrypt.compareSync(password,hash)
    return flag
}

module.exports={
    encrypPassword,
    comparePassword
}