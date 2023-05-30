// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default (req, res) => {
  fs.readFile('blogsData/how-to-learn-js.json', (err, data) => {
    console.log(data);
  });
  res.status(200).json({ name: 'Hello, world!' });
};
