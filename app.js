import express from 'express';
import _ from './config/global.js';
import cors from 'cors';
import db from './config/db.js';
import bodyParser from 'body-parser';
import {createServer} from "http";
import seeds from './config/seeds.js';
import routerRoot from './routes/root.js';
import routerPublic from './routes/public.js';
import routerCity from './routes/city.js';
import routerCountry from './routes/country.js';
import routerHotel from './routes/hotel.js';
import routerBooking from './routes/booking.js';

let app = express();
let server = createServer(app);

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())

console.log(_.PREFIX + "/public", "prefix_public");

app.use(`${_.PREFIX}/`, routerRoot);
app.use(`${_.PREFIX}/public`, routerPublic);
app.use(`${_.PREFIX}/city`, routerCity);
app.use(`${_.PREFIX}/country`, routerCountry);
app.use(`${_.PREFIX}/hotel`, routerHotel);
app.use(`${_.PREFIX}/booking`, routerBooking);

server.listen(_.PORT, () => {
    console.log('\x1b[42m\x1b[34m%s\x1b[0m', '*****DEV_DATA SERVER STARTED*****', _.PORT);
    db.dbConnection().then(() => {
        console.log('\x1b[42m\x1b[34m%s\x1b[0m', "EXECUTING DB");
        seeds.execute(_.PORT);
    });
});

export default app;
