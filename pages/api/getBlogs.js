// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async (req, res) => {
  console.log(req.query.slug);
  fs.readFile('blogsData/' + req.query.slug + '.json', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'No such file found' });
    }
    res.status(200).json(JSON.parse(data));
  });
};
