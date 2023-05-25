import { useRouter } from 'next/router';
export default function slug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      {console.log(router.query, slug)}
      <h1>{slug}</h1>
    </div>
  );
}
