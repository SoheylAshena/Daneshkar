const ProfileCard = ({ person }) => {
  return (
    <div className="group m-0 flex flex-col rounded-lg bg-gray-100 p-5 shadow-lg transition-all duration-300 hover:bg-green-100 hover:shadow-xl md:m-5 md:w-[500px]">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-800">{person.name}</h2>
        <h3 className="text-md font-medium text-gray-600">{person.title}</h3>
        <p className="text-sm text-gray-500">{person.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
