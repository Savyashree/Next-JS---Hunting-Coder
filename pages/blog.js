import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      'https://nextjs2dbeyj-ozio--3000--272d3407.local-credentialless.webcontainer.io/api/blogs'
    )
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
        setBlogs(parsedData);
      });
  }, []);
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.title}>
            <Link href={`./blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
