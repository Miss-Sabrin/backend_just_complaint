import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    inboxId: {
            type: String,
            required: true,
        },
    responderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Compliants'  // Assuming you have a User model
    },
    text: {
        type: String,
        required: true,
    },
    respondedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Response = mongoose.model('Response', responseSchema);

export default Response;
