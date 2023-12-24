import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const tmp = await mongoose.connect(process.env.MONGODB_URI || '');
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
