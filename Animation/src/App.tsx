const App = () => {
  return (
    <div>
      <div className="size-10 bg-red-600 mt-10 ml-10 rounded-full animate-bounce"></div>
      <hr />
      <div className="w-32 h-2 bg-red-600 mt-32 ml-32   animate-spin"></div>
      <hr />
      <img
        className="w-32 m-32 animate-spin"
        src="https://m.media-amazon.com/images/I/51MCgZBuqoL._AC_UF1000,1000_QL80_.jpg"
        alt=""
      />
      <div className="size-10 bg-red-600 m-52 rounded-full animate-ping"></div>
      <div className="size-10 bg-red-600 rounded-full animate-pulse">
        <img
          className="w-32 m-32 animate-pulse"
          src="https://thumbs.dreamstime.com/b/design-can-be-used-as-logo-icon-complement-to-heart-pluse-128205156.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
