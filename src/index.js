import dotenv from 'dotenv';
import DBconnect from './db/db.js';

dotenv.config({ path: './env' });

DBconnect()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed!', err);
  });
