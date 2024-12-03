const App = () => {
  return (
    <>
      <div className="bg-red-900">
        <ul className="flex text-white [&>*]:p-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="bg-red-700  h-56">
          <h1 className="text-8xl">Learning Tailwind</h1>
        </div>
        <div className="bg-blue-300  h-56"></div>

        <div className="bg-yellow-300  h-56"></div>
      </div>
    </>
  );
};

export default App;
