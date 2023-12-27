import UserModel from '../models/client.js';
import make_token from '../helpers/create_token.js';
import bcrypt from 'bcrypt';
import validator from '../helpers/field_validator.js';

let salt = 10;
let controller = {
    get: async (req, res) => {
        try {
            let users = await UserModel.find();
            return res.status(200).send({data: users});
        } catch (e) {
            console.log("ERROR USERS GET", e);
            return res.status(500).send({error: e, message: "ERROR FINDING USERS", code: "100"});
        }

    },
    store: async (req, res) => {
        try {
            let data = req.body;
            let username = await UserModel.findOne({username: req.body.username});
            if (username) return res.status(401).send({message: 'Nombre de usuario ya registrado', error: 'USERNAME_ALREADY_REGISTERED', code: "100.2"});
            let email = await UserModel.findOne({email: req.body.email});
            if (email) return res.status(401).send({message: 'Email ya registrado', error: 'EMAIL_ALREADY_REGISTERED', code: "100.2"});
            if (req.body.password) data.password = await bcrypt.hash(req.body.password, salt);
            let user = await UserModel.create(data);
            user = user.toObject();
            delete user.password;
            return res.status(200).send({data: user});
        } catch (e) {
            console.log("ERROR CREATING USER", e);
            return res.status(500).send({error: e, message: "ERROR CREATING USER", code: "100.1"});
        }

    },
    login: async (req, res) => {
        try {
            const invalid = await validator.fieldsValidation(['username', 'password'], req.body);
            if (invalid.length > 0) return res.status(404).send({error: `Por favor valide los siguientes campos: ${invalid}`});

            let user = await UserModel.findOne({username: req.body.username});
            if (!user) return res.status(401).send({message: 'Por favor verifique sus credenciales', error: 'USER_EMAIL_NOT_FOUND', code: "100.2"});
            bcrypt.compare(req.body.password.toString(), user.password, async function (err, result) {
                if (result === true) {
                    let token = make_token.createToken(user._id, 60);
                    return res.status(200).send({token: token});
                } else {
                    return res.status(401).send({message: 'Por favor verifique sus credenciales', error: 'NO_AUTHORIZATION', code: "100.3"});
                }
            });
        }catch (e) {
            console.log("ERROR LOGIN", e);
            return res.status(500).send({error: e, message: "ERROR LOGIN", code: "100.4"});
        }
    }
}

export default controller;
