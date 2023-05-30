import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog(props) {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
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

export async function getServerSideProps() {
  let data = await fetch(
    'https://nextjs2dbeyj-ozio--3000--272d3407.local-credentialless.webcontainer.io/api/blogs'
  );
  let allBlogs = await data.json();
  // Pass data to the page via props
  return { props: { allBlogs } };
}
