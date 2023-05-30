import { useRouter } from 'next/router';
import styles from '../../styles/Blogs.module.css';
import { useEffect, useState } from 'react';

export default function slug() {
  const [blogData, setBlogData] = useState({});
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    fetch(
      `https://nextjs2dbeyj-ozio--3000--272d3407.local-credentialless.webcontainer.io/api/getBlogs?slug=${slug}`
    )
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
        setBlogData(parsedData);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.blogItem}>{blogData.title}</h1>
        <hr />
        <p className={styles.blogItem}>{blogData.description}</p>
      </div>
    </div>
  );
}
