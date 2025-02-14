import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/posts.json')
        .then((res) => res.json())
        .then((data) => {
          const foundPost = data.find((p) => p.id === id);
          setPost(foundPost);
        });
    }
  }, [id]);

  if (!post) return <p className="text-center text-gray-500">در حال بارگذاری...</p>;

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-2 text-center">{post.title}</h1>
      <p className="text-gray-500 text-center mb-4">{post.date}</p>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <Link legacyBehavior href="/">
        <a className="block mt-4 text-blue-500 hover:underline text-center">بازگشت به صفحه اصلی</a>
      </Link>
    </div>
  );
}