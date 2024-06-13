import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zip: { type: String, required: true },
    },
    { _id: false }
);

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        address: addressSchema,
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;