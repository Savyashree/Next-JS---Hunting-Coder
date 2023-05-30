// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async (req, res) => {
  let data = await fs.promises.readdir('blogsData');
  let fileItem;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    fileItem = await fs.promises.readFile('blogsData/' + data[i], 'utf-8');
    allBlogs.push(JSON.parse(fileItem));
    console.log(fileItem);
  }

  res.status(200).json(allBlogs);
};
