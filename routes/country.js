import  express from 'express';
import CountryController from "../controllers/country_controller.js";

let router = express.Router();

router.route('/countries:id?')
    .get(CountryController.get)
    .post(CountryController.store)
    .put(CountryController.store);


export default router;
