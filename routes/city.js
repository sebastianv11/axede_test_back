import  express from 'express';
import CityController from "../controllers/city_controller.js";

let router = express.Router();

router.route('/cities:id?')
    .get(CityController.get)
    .post(CityController.store)
    .put(CityController.store);


export default router;
