import Imagecard from "./components/Imagecard";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const person = {
    name: "John Doe",
    title: "Front-End Developer",
    bio: "Passionate about building web-applications with React.",
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-5 md:p-10">
      <ProfileCard person={person} />
      <Imagecard person={person} />
    </div>
  );
};

export default App;
