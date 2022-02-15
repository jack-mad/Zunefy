const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./../models/User');

exports.getSignup = (req, res) => {
    res.render('auth/signup');
}
exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.render('auth/signup',{
            errorMessage: 'Todos los campos deben ser llenados.'
        })
    };
    // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    // if(!regex.test(password)){
	// 	return res.render("auth/signup", {
	// 		errorMessage: "Tu contraseña debe tener al menos 6 caracteres, una mayuscula y un numero"
	// 	})
	// }
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password,salt);
    try {
        const newUser = await User.create({
            username,
            password: hashPassword
        })
        console.log(newUser);
        return res.redirect('/auth/signin')
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            return res.render('auth/signup', {
                errorMessage: 'Algo salio mal, Revisa tus credenciales.'
            })
        }
        return
    }
}

exports.getSignin =  (req, res) => {
    res.render('auth/signin');
}
exports.postSignin = async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    const foundUser = await User.findOne({ username })

    if (!foundUser){
        res.render('auth/signin',{
            errorMessage: 'Usuario no encontrado. Revisa tus credenciales.'
        })
    } else {
        const verifyPass = await bcryptjs.compareSync(password,foundUser.password)
        console.log(verifyPass);
        if(!verifyPass){
            res.render('auth/signin',{
                errorMessage: 'Contraseña incorrecta. Revisa tus credenciales.'
            });
            return;
        }
    }
    return res.redirect('/')
    
}

