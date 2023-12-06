import mongoose, { Schema, Document } from 'mongoose';

export interface RoomModel extends Document {
    name: string,
    description: string,
    pricePerNight: number,
    address: string,
    location: LocationModel,
    guestCapacity: number,
    bedsNumber: number,
    facilities: FacilitiesModel,
    ratings: number,
    numberOfReviews: number,
    images: ImagesModel[],
    category: CategoriesEnum,
    reviews: ReviewsModel[],
    user: Schema.Types.ObjectId,
    createdAt: Date
}

const roomSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of the room'],
        trim: true,
        maxlength: [256, 'Name of the room should be less than 256 symbols']
    },
    description: {
        type: String,
        required: [true, 'Please enter the description of the room']
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Please enter the price per night']
    },
    address: {
        type: String,
        required: [true, 'Please enter the room address']
    },

    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter the guest capacity']
    },
    bedsNumber: {
        type: Number,
        required: [true, 'Please enter the available beds in apartment']
    },

    facilities: {
        isInternet: {
            type: Boolean,
            default: false
        },
        isBreakfast: {
            type: Boolean,
            default: false
        },
        isAirConditioned: {
            type: Boolean,
            default: false
        },
        isParking: {
            type: Boolean,
            default: false
        },
        isPetsAllowed: {
            type: Boolean,
            default: false
        }
    },

    ratings: Number,
    numberOfReviews: Number,
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

    category: {
        type: String,
        required: [true, 'Please enter the room category'],
        enum: {
            values: ['King', 'Single', 'Twins'],
            message: 'Please correct the room category'
        }
    },

    reviews: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String
            }
        }
    ],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.models.Room || mongoose.model<RoomModel>('Room', roomSchema)

export interface LocationModel {
    type: string,
    coordinates: number,
    formattedAddress: string,
    city: string,
    state: string,
    zipCode: string,
    country: string
}

export interface FacilitiesModel {
    isInternet: boolean,
    isBreakfast: boolean,
    isAirConditioned: boolean,
    isParking: boolean,
    isPetsAllowed: boolean
}

export interface ImagesModel {
    public_id: string,
    url: string
}

export enum CategoriesEnum {
    KING = 'King',
    SINGLE = 'Single',
    TWINS = 'Twins'
}

export interface ReviewsModel {
    user: any,
    rating: number,
    comment: string
}
