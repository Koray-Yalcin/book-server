import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 1
    },
    image: {
        type: String,
        required: false
    }
});

export default mongoose.model('Book', bookSchema);