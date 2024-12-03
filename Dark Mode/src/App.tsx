const App = () => {
  return (
    <div>
      <button
        id="select-mode"
        className="border border-slate-800 m-2 p-2  rounded hover:bg-slate-100
     dark:bg-slate-900 dark:text-white"
      >
        Apply Dark Mode
      </button>
      <div className="dark:bg-slate-800">
        <h1 className="text-7xl dark:text-white">
          Dark Mode Test with Tailwind css
        </h1>
        <p className="text-4xl  dark:text-white">Learning Tailwind</p>
      </div>

      <div className="flex m-20 border border-slate-700 p-3 dark:bg-slate-600 dark:border-red-600">
        <div className="bg-blue-300 size-12 dark:bg-black"></div>
        <p className="text-2xl ml-10 p-2 text-white">Box with Dark Mode</p>
      </div>
    </div>
  );
};

export default App;
