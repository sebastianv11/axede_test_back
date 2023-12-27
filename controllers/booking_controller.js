import BookingModel from '../models/booking.js';
import validator from "../helpers/field_validator.js";

let controller = {
    get: async (req, res) => {
        try {
            let reservations = await BookingModel.find();
            return res.status(200).send({data: bookings});
        } catch (e) {
            console.log("ERROR BOOKINGS GET", e);
            return res.status(500).send({error: e, message: "ERROR FINDING RESERVATIONS", code: "100"});
        }

    },
    store: async (req, res) => {
        try {
            let data = req.body;
            const invalid = await validator.fieldsValidation(['client', 'hotel', 'startDate', 'endDate', 'paymentType', 'totalAmount'], data);
            if (invalid.length > 0) return res.status(404).send({error: `Por favor valide los siguientes campos: ${invalid}`});

            let reservation = await BookingModel.create(data);
            return res.status(200).send({data: reservation});
        } catch (e) {
            console.log("ERROR CREATING COUNTRY", e);
            return res.status(500).send({error: e, message: "ERROR CREATING RESERVATION", code: "100.1"});
        }

    }
}

export default controller;
