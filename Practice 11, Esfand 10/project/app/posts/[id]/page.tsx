async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  }
  
  export default async function PostDetails({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);
  
    return (
      <div>
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  