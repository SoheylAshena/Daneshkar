async function getUser(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  }
  
  export default async function UserDetails({ params }: { params: { id: string } }) {
    const user = await getUser(params.id);
  
    return (
      <div>
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  }
  