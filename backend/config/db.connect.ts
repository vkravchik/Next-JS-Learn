import * as mongoose from 'mongoose';

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    const DB_URI = process.env.NODE_ENV === 'development' ? process.env.DB_LOCAL_URI! : process.env.DB_URI!;

    await mongoose.connect(DB_URI);
}

export default dbConnect;
