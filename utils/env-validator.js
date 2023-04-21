import { cleanEnv, str, num, port, url } from 'envalid';
import dotenv from 'dotenv';
dotenv.config();
const env = cleanEnv(process.env, {
  MONGODB_URL: str(),
});

export default env;
