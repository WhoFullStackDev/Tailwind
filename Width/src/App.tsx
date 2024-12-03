const App = () => {
  return (
    <div>
      <div className="bg-red-600 max-w-64">
        <h1>Learning Tailwind </h1>
      </div>
      <div className="bg-red-600 min-w-96 w-32">
        <h1>Learning Tailwind </h1>
      </div>

      <div className="bg-yellow-600 w-fit">
        <h1>Learning Tailwind...... </h1>
      </div>

      <div className="bg-yellow-600 w-1/2">
        <h1>Learning Tailwind </h1>
      </div>
      <div className="bg-orange-600 w-1/3">
        <h1>Learning Tailwind </h1>
      </div>
      <div className="bg-green-600 w-1/4">
        <h1>Learning Tailwind </h1>
      </div>
      <div className="bg-gray-600 w-2/6">
        <h1>Learning Tailwind </h1>
      </div>

      <div className="bg-gray-600 w-1/4 hover:w-1/2">
        <h1>Learning Tailwind </h1>
      </div>
      <span className="bg-lime-800 w-1/2 inline-block">Learning Tailwind</span>
      <span className="bg-lime-800 w-1/2 inline">Learning Tailwind</span>

      <h1 className="bg-pink-600 w-[169px]">Learning Tailwind </h1>
    </div>
  );
};

export default App;
