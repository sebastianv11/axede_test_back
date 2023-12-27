import CityModel from '../models/city.js';
import validator from "../helpers/field_validator.js";

let controller = {
    get: async (req, res) => {
        try {
            let cities = await CityModel.find().populate('country');
            return res.status(200).send({data: cities});
        } catch (e) {
            console.log("ERROR CITIES GET", e);
            return res.status(500).send({error: e, message: "ERROR FINDING CITIES", code: "100"});
        }

    },
    store: async (req, res) => {
        try {
            let data = req.body;
            const invalid = await validator.fieldsValidation(['name', 'country'], data);
            if (invalid.length > 0) return res.status(404).send({error: `Por favor valide los siguientes campos: ${invalid}`});

            let city = await CityModel.create(data);
            return res.status(200).send({data: city});
        } catch (e) {
            console.log("ERROR CREATING CITY", e);
            return res.status(500).send({error: e, message: "ERROR CREATING CITY", code: "100.1"});
        }

    }
}

export default controller;
