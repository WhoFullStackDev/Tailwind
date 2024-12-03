const App = () => {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="bg-red-500 size-full">
        <h1>Learning Tailwind</h1>
      </div>
      <div className="bg-red-500 size-1/2">
        <h1>Learning Tailwind</h1>
      </div>
      <div className="bg-red-500 size-1/4 hover:size-1/2 hover:bg-blue-500">
        <h1>Learning Tailwind</h1>
      </div>
    </div>
  );
};

export default App;
