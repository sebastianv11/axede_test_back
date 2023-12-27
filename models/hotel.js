import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let HotelSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre del hotel es obligatrio']

    },
    city: {
        type: Schema.Types.ObjectId, ref: 'City',
    },
    roomsCapacity: {
        type: Number,
        default: 0
    },
    peopleCapacity: {
        type: Number,
        default: 0
    },
    standard: {
        roomsLeft: {
            type: Number,
            default: 0
        },
        occupiedRooms: {
            type: Number,
            default: 0
        },
        highSeasonPrice: {
            type: Number,
            default: 0
        },
        lowSeasonPrice: {
            type: Number,
            default: 0
        },
        capacity: {
            type: Number,
            default: 0
        }
    },
    premium: {
        roomsLeft: {
            type: Number,
            default: 0
        },
        occupiedRooms: {
            type: Number,
            default: 0
        },
        highSeasonPrice: {
            type: Number,
            default: 0
        },
        lowSeasonPrice: {
            type: Number,
            default: 0
        },
        capacity: {
            type: Number,
            default: 0
        }
    },
    vip: {
        roomsLeft: {
            type: Number,
            default: 0
        },
        occupiedRooms: {
            type: Number,
            default: 0
        },
        highSeasonPrice: {
            type: Number,
            default: 0
        },
        lowSeasonPrice: {
            type: Number,
            default: 0
        },
        capacity: {
            type: Number,
            default: 0
        }
    }
}, {timestamps: {}});

export default mongoose.model('Hotel', HotelSchema);
