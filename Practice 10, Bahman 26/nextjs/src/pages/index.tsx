import Link from "next/link";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  description: string;
};

type Data = Post[];

export default function Home() {
  const [posts, setPosts] = useState<Data>([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">وبلاگ</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/posts/${post.id}`}>
              <div className="text-blue-500 text-lg font-semibold hover:underline">
                {post.title}
              </div>
            </Link>
            <p className="text-gray-600">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
