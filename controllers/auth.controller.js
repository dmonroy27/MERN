
const bcrypt = require("bcryptjs")
const User = require("../models/user.model")

function register(req, res){
    const {firtsname, lastname, email, password} = req.body
    console.log(req.body)


    if(!email) res.status(400).send({msg: "Email Obligatorio"})
    if(!password) res.status(400).send({msg: "Contraseña Obligatoria"})

        const user = new User({
            firtsname,
            lastname,
            password,
            email: email.toLowerCase(),
            role: "User",
            active: false,
        })

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)

        user.password = hashPassword

        user.save((error, userStorage) => {
            if (error){
                res.status(400).send({msg: "Error al crear usuario"})
            } else {
                res.status(200).send(userStorage)
            }
        })

    

}

module.exports = {
    register,
}