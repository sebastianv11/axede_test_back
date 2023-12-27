import HotelModel from '../models/hotel.js';
import validator from "../helpers/field_validator.js";
import HotelHelper from "../helpers/seed_helper.js";

let controller = {
    get: async (req, res) => {
        try {
            let hotels = await HotelModel.find();
            return res.status(200).send({data: hotels});
        } catch (e) {
            console.log("ERROR HOTELS GET", e);
            return res.status(500).send({error: e, message: "ERROR FINDING HOTELS", code: "100"});
        }

    },
    store: async (req, res) => {
        try {
            let data = req.body;
            const invalid = await validator.fieldsValidation(['name', 'city', 'roomsCapacity', 'peopleCapacity', 'standard', 'premium', 'vip'], data);
            if (invalid.length > 0) return res.status(404).send({error: `Por favor valide los siguientes campos: ${invalid}`});

            let hotel = await HotelModel.create(data);
            return res.status(200).send({data: hotel});
        } catch (e) {
            console.log("ERROR CREATING HOTEL", e);
            return res.status(500).send({error: e, message: "ERROR CREATING HOTEL", code: "100.1"});
        }

    },
    getHotelsByCity: async (req, res) => {
        try {
            let hotels = await HotelModel.find({city: req.params.id});
            return res.status(200).send({data: hotels});
        } catch (e) {
            console.log("ERROR FINDING HOTELS", e);
            return res.status(500).send({error: e, message: "ERROR FINDING HOTELS", code: "100.1"});
        }

    }
}

export default controller;
