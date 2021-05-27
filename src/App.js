import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false


function App() {

  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>                   //Here const filteredCoins is basically an array
    coin.name.toLowerCase().includes(search.toLowerCase())  //Checks and displays the names (coin.name) that include the term search.
  )


  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
        </form>
      </div>
      <div className='cc'>
        <div className='cr'>
          <div className='c'>
            <span>Currency</span>
          </div>
          <div className='c-d'>
            <span className='c-p'>Price</span>
            <span className='c-v'>Volume</span>
            <span className='c-c'>Change</span>
            <span className='c-m'>Market Capital</span>
          </div>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return (
        
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />

        )
      })}
    </div>
  );
}

export default App;
