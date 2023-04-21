import db from '@/utils/db';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
db.connectDb();
db.disconnectDb();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
