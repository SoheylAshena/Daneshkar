import Link from "next/link";

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
  
    return (
      <div>
        <h1 className="text-xl font-bold mb-4">Users List</h1>
        <ul className="space-y-2">
          {users.map((user: any) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  