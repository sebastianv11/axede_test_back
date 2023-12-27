import HotelModel from '../models/hotel.js';
import CountryModel from '../models/country.js';
import CityModel from '../models/city.js';
import SeedHelper from "../helpers/seed_helper.js";

let controller = {
    seed: async (req, res) => {
        try {
            const [hotels, countries, cities] = await Promise.all([
                HotelModel.find(),
                CountryModel.find(),
                CityModel.find()
            ]);

            const createSeed = async (data, model, seed, modelName) => {
                if (data.length === 0) {
                    const data = await model.create(seed);
                    if (!data) {
                        console.log(`ERROR CREATING SEED ${modelName}`);
                    }
                }
            };

            await Promise.all([
                createSeed(hotels, HotelModel, SeedHelper.hotels, 'HOTELS'),
                createSeed(countries, CountryModel, SeedHelper.countries, 'COUNTRIES'),
                createSeed(cities, CityModel, SeedHelper.cities, 'CITIES')
            ]);

            return res.status(200).send({ message: 'SEEDS CREATED', code: 144 });
        } catch (e) {
            console.log(e);
            return res.status(500).send({error: e, code: 145});
        }
    },
}

export default controller;
