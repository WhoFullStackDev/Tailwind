const App = () => {
  return (
    <div className="bg-gray-500">
      <div className="bg-red-200 size-52 absolute bottom-0 right-0"></div>
      <div className="bg-green-200 size-52 absolute top-0 right-0"></div>
      <div className="bg-blue-200 size-52 absolute bottom-0 left-0"></div>
      <div className="bg-yellow-200 size-52 absolute top-0 left-0"></div>
      <div className="bg-red-500 size-96 relative">
        <div className="bg-red-200 size-20 absolute bottom-0 right-0"></div>
        <div className="bg-green-200 size-20 absolute top-0 right-0"></div>
        <div className="bg-blue-200 size-20 absolute bottom-0 left-0"></div>
        <div className="bg-yellow-200 size-20 absolute top-0 left-0"></div>
      </div>
      <div className="bg-blue-500 size-96">
        <h1 className="bg-blue-950 text-white fixed z-20">Learning Tailwind</h1>
      </div>
      <div className="bg-green-500 size-96 relative">
        <div className="bg-green-900 size-32 inset-32 absolute"></div>
      </div>
    </div>
  );
};

export default App;
