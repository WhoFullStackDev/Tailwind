const App = () => {
  return (
    <div className="bg-gray-500">
      <h1 className="blur-sm">Blur Image</h1>
      <img src="funny-monkey.png" />
      <img className="blur-sm" src="funny-monkey.png" />
      <img className="blur-md" src="funny-monkey.png" />
      <img className="blur-3xl" src="funny-monkey.png" />
      <img className="blur" src="funny-monkey.png" />

      <h1>Brightness</h1>
      <img src="funny-monkey.png" />
      <img className="brightness-50" src="funny-monkey.png" />
      <img className="brightness-100" src="funny-monkey.png" />
      <img className="brightness-125" src="funny-monkey.png" />
      <img className="brightness-200" src="funny-monkey.png" />

      <h1>Contrast</h1>
      <img src="funny-monkey.png" />
      <img className="contrast-0" src="funny-monkey.png" />
      <img className="contrast-50" src="funny-monkey.png" />
      <img className="contrast-100" src="funny-monkey.png" />
      <img className="contrast-125" src="funny-monkey.png" />
      <img className="contrast-200" src="funny-monkey.png" />

      <h1>Grayscale</h1>
      <img src="funny-monkey.png" />
      <img className="grayscale" src="funny-monkey.png" />

      <h1>Invert</h1>
      <img src="funny-monkey.png" />
      <img className="invert" src="funny-monkey.png" />

      <h1>Hue</h1>
      <img src="funny-monkey.png" />
      <img className="hue-rotate-15" src="funny-monkey.png" />
      <img className="hue-rotate-60" src="funny-monkey.png" />
      <img className="hue-rotate-15" src="funny-monkey.png" />
      <img className="hue-rotate-90" src="funny-monkey.png" />
      <img className="hue-rotate-180" src="funny-monkey.png" />
    </div>
  );
};

export default App;
