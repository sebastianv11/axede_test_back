import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ClientSchema = Schema({
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio'],
        match: /.+\@.+\..+/,
        unique: true
    },
    firstName: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    lastName: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    identification: {
        type: String,
        required: [true, 'La identificacion es obligatoria'],
    },
    identificationType: {
        type: String,
        required: [true, 'El tipo de identificacion es obligatoria'],
    },
    password: String
}, {timestamps: {}});

export default mongoose.model('Client', ClientSchema);
