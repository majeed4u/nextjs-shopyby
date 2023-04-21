import mongoose from 'mongoose';
import env from './env-validator.js';
import logger from './logger.js';

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    logger.info(' already connected to database ');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      logger.info(' use existing connection to database ');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(env.MONGODB_URL);
  logger.info('new connection to database');
  connection.isConnected = mongoose.connections[0].readyState;
  logger.info(' db connected');
  return db;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      logger.info('not disconnecting from database');
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;
