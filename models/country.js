import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let CountrySchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre del pais es obligatrio']
    },
}, {timestamps: {}});

export default mongoose.model('Country', CountrySchema);
