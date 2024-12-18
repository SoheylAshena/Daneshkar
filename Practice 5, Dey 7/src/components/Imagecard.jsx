const Imagecard = ({ person }) => {
  return (
    <div className="group m-0 mt-5 flex flex-col rounded-lg bg-gray-100 p-5 shadow-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-xl md:m-5 md:w-[500px]">
      <img
        className="mb-4 h-96 w-full rounded-md object-cover"
        src="Wooden Mug 4.png"
        alt="Wooden Mug"
      />
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-800">{person.name}</h2>
        <h3 className="text-md font-medium text-gray-600">{person.title}</h3>
        <p className="text-sm text-gray-500">{person.bio}</p>
      </div>
    </div>
  );
};

export default Imagecard;
