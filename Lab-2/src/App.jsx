// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const items = [
  {
    country: 'Indonesia',
    name: 'Gili Air Hotel',
    rating: 4.8,
    price: 589,
    img: './src/assets/images/1.jpg',
  },
  {
    country: 'Seychelles',
    name: 'Hilton Resort',
    rating: 4.2,
    price: 629,
    img: './src/assets/images/2.jpg',
  },
  {
    country: 'US Virgin Islands',
    name: 'Goa Resort',
    rating: 3.5,
    price: 485,
    img: './src/assets/images/3.jpg',
  },
  {
    country: 'Bahamas',
    name: 'Kuredu Resort',
    rating: 4.1,
    price: 729,
    img: './src/assets/images/4.jpg',
  },
  {
    country: 'Mauritius',
    name: "Trou D'eau Douce",
    rating: 4.9,
    price: 877,
    img: './src/assets/images/5.jpg',
  },
  {
    country: 'Bermuda',
    name: 'Staniel Cay Hotel',
    rating: 3.2,
    price: 365,
    img: './src/assets/images/6.jpg',
  },
]

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Resorts Lite</h1>
      <hr />
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.country} />
            <h2>{item.country}</h2>
            <h4>{item.name}</h4>
            <p
              className={`item-rating ${
                item.rating >= 4 ? 'green' : 'red'
              }`}
            >
              {item.rating} ★
            </p>
            <p className="item-price">${item.price}/night</p>
          </div>
        ))}
      </div>
    </div>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
