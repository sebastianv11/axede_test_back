import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UserSchema = Schema({
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio'],
        match: /.+\@.+\..+/,
        unique: true
    },
    active: {
        type: Number,
        default: 1
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'El nombre de usuario es obligatorio'],
    },
    password: String
}, {timestamps: {}});

export default mongoose.model('User', UserSchema);
