import CountryModel from '../models/country.js';
import validator from "../helpers/field_validator.js";

let controller = {
    get: async (req, res) => {
        try {
            let countries = await CountryModel.find();
            return res.status(200).send({data: countries});
        } catch (e) {
            console.log("ERROR COUNTRIES GET", e);
            return res.status(500).send({error: e, message: "ERROR FINDING COUNTRIES", code: "100"});
        }

    },
    store: async (req, res) => {
        try {
            let data = req.body;
            const invalid = await validator.fieldsValidation(['name'], data);
            if (invalid.length > 0) return res.status(404).send({error: `Por favor valide los siguientes campos: ${invalid}`});

            let country = await CountryModel.create(data);
            return res.status(200).send({data: country});
        } catch (e) {
            console.log("ERROR CREATING COUNTRY", e);
            return res.status(500).send({error: e, message: "ERROR CREATING COUNTRY", code: "100.1"});
        }

    }
}

export default controller;
