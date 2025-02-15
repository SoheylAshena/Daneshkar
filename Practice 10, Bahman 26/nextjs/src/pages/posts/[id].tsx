import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch("/posts.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data: Post[]) => {
        const foundPost = data.find((p) => p.id === id);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Post not found");
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-gray-500 animate-pulse">
          در حال بارگذاری...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-red-500 bg-red-100 p-4 rounded-lg border border-red-200">
          {error}
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-gray-500">پست یافت نشد.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        {post.title}
      </h1>
      <p className="text-gray-500 text-center mb-6">{post.date}</p>
      <p className="text-gray-700 leading-relaxed text-justify">
        {post.content}
      </p>
      <Link href="/" legacyBehavior>
        <a className="block mt-8 text-center text-blue-500 hover:text-blue-600 hover:underline transition duration-300">
          بازگشت به صفحه اصلی
        </a>
      </Link>
    </div>
  );
}
