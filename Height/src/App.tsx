const App = () => {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="bg-green-600 h-52">
        <h1>Learning tailwind</h1>
      </div>
      <div className="bg-red-600 h-52 max-h-20">
        <h1>Learning tailwind</h1>
      </div>
      <div className="bg-green-600 h-52">
        <h1>Learning tailwind</h1>
      </div>
      <div className="bg-blue-600 min-h-40 h-52">
        <h1>Learning tailwind</h1>
      </div>
      <div className="bg-yellow-600 h-1/2">
        <h1>Learning tailwind</h1>
      </div>

      <div className="bg-yellow-600 h-full">
        <h1>Learning tailwind</h1>
      </div>

      <div className="bg-yellow-600 h-[520px]">
        <h1>Learning tailwind</h1>
      </div>
      <div className="bg-yellow-600 h-1/4 hover:h-1/2">
        <h1>Learning tailwind</h1>
      </div>

      <div className="bg-yellow-600 h-1/2">
        <h1 className="bg-red-600 h-full">Learning tailwind</h1>
      </div>
      <input type="text" className="bg-red-400 w-48 h-32" value="" />
    </div>
  );
};

export default App;
