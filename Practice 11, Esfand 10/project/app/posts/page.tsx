import Link from "next/link";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
  
  export default async function PostsPage() {
    const posts = await getPosts();
  
    return (
      <div>
        <h1 className="text-xl font-bold mb-4">Posts List</h1>
        <ul className="space-y-2">
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  