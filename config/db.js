import mongoose from "mongoose";
import _ from './global.js';

export default {
    dbConnection: async () => {
        try {
            await mongoose.connect(_.MONGODB_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (e) {
            console.log(e);
            throw new Error('Error al iniciar la base de datos');
        }
    }
}
