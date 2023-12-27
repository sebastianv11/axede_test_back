import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let CitySchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la ciudad es obligatrio']

    },
    country: {
        type: Schema.Types.ObjectId, ref: 'Country',
    },
}, {timestamps: {}});

export default mongoose.model('City', CitySchema);
