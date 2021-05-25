function App() {
  return (
    <div className="w-72 m-auto mt-40">
      <div className="font-mono grid grid-cols-4 grid-rows-6 bg-gray-900 gap-0.5 p-1">
        <div className="col-span-4 bg-gray-900 text-gray-100 pt-5">1234</div>
        <button className="col-span-2 bg-red-600 text-gray-100 p-4 -mt-4 text-center">
          AC
        </button>
        <button className="bg-gray-500 text-gray-100 p-4 text-center -mt-4">
          /
        </button>
        <button className="bg-gray-500 text-gray-100 p-4 text-center -mt-4">
          X
        </button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">7</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">8</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">9</button>
        <button className="bg-gray-500 text-gray-100 p-4 text-center">-</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">4</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">5</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">6</button>
        <button className="bg-gray-500 text-gray-100 p-4 text-center">+</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">1</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">2</button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">3</button>
        <button className="row-span-2 bg-blue-800 text-gray-100 p-4 text-center align-middle">
          =
        </button>
        <button className="col-span-2 bg-gray-700 text-gray-100 p-4 text-center">
          0
        </button>
        <button className="bg-gray-700 text-gray-100 p-4 text-center">.</button>
      </div>
    </div>
  );
}

export default App;
