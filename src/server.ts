/* eslint-disable no-console */

import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bootstrap() {
  try {
      await mongoose.connect(config.jwt.database as string);
      console.log('Database connect successfully');

    app.listen(config.port, () => {
      console.log(
        `Express Backend Setup Application listening on port ${config.port}`
      );
    });
  } catch (error) {
    console.error('failed to connect', error);
  }
}
bootstrap();
