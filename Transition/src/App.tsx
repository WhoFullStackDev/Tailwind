const App = () => {
  return (
    <div>
      <button className="bg-blue-500 p-2 m-10 text-white rounded hover:bg-blue-900">
        Button 1
      </button>
      <button
        className="bg-blue-500 p-2 m-10 text-white rounded hover:bg-blue-900
    transition duration-1000
    "
      >
        Button 2
      </button>

      <button
        className="bg-blue-500 p-2 m-10 text-white rounded hover:opacity-5
    transition duration-1000
    "
      >
        Button 3
      </button>

      <button
        className="bg-red-500 p-2 m-10 text-white rounded 
    hover:rotate-180 transition-transform duration-1000
    "
      >
        Button 4
      </button>

      <button
        className="bg-red-500 p-2 m-10 text-white rounded 
    hover:scale-150 transition-transform duration-1000
    "
      >
        Button 4
      </button>
      <button
        className="bg-red-500 p-2 m-10 text-white rounded 
    hover:scale-x-150  hover:scale-y-50 transition-transform duration-1000
    "
      >
        Button 4
      </button>
      <img
        src="funny-monkey.png"
        className="m-20 w-56  hover:rotate-45 hover:scale-125 transition-transform duration-1000"
        alt=""
      />
    </div>
  );
};

export default App;
