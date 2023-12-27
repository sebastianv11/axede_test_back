import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let BookingSchema = Schema({
    client: {
        type: Schema.Types.ObjectId, ref: 'Client',
        required: [true, 'El cliente es obligatorio']

    },
    hotel: {
        type: Schema.Types.ObjectId, ref: 'Hotel',
        required: [true, 'El hotel es obligatrio']

    },
    startDate: {
        type: Date,
        required: [true, 'La fecha de inicio de la reserva es obligatoria']
    },
    endDate: {
        type: Date,
        required: [true, 'La fecha de fin de la reserva es obligatoria']
    },
    paymentType : String,
    totalAmount : String,
    confirmed : Boolean
}, {timestamps: {}});

export default mongoose.model('Booking', BookingSchema);
