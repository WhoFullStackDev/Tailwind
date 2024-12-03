const App = () => {
  return (
    <div>
      <button className="bg-blue-500 rounded-md p-2 m-4 text-white">
        Login
      </button>
      <button className="bg-blue-500 rounded-md p-2 m-4 text-white hover:bg-blue-800">
        Login
      </button>
      <button className="bg-blue-500 rounded-md p-2 m-4 text-white focus:bg-yellow-600">
        Login
      </button>
      <button className="bg-blue-500 rounded-md p-2 m-4 text-white active:bg-red-600">
        Login
      </button>

      <button
        className="bg-blue-500 rounded-md p-2 m-4 text-white
      hover:bg-blue-800 
      focus:bg-yellow-600
       active:bg-red-600"
      >
        Login
      </button>

      <div>
        <a className="group ">
          <h1 className=" group-hover:bg-black group-hover:text-white">
            Heading click
          </h1>
          <p className="group-hover:bg-black group-hover:text-white">
            Para Click
          </p>
        </a>
      </div>
    </div>
  );
};

export default App;
