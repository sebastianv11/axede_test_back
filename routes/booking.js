import  express from 'express';
import BookingController from "../controllers/booking_controller.js";

let router = express.Router();

router.route('/reservation:id?')
    .get(BookingController.get)
    .post(BookingController.store)
    .put(BookingController.store);


export default router;
