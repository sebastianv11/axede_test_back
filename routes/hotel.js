import  express from 'express';
import HotelController from "../controllers/hotel_controller.js";

let router = express.Router();

router.route('/hotels:id?')
    .get(HotelController.get)
    .post(HotelController.store)
    .put(HotelController.store);
router.get('/find-hotels/:id', HotelController.getHotelsByCity);

export default router;
