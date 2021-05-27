import React from 'react';
import './Coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                <div className='coin-flex'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                </div>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'><span className='symbol-color'>₹</span> {price.toLocaleString()}</p>
                    <p className='coin-volume'><span className='symbol-color'>₹</span> {volume==null?'N/A':volume.toLocaleString()}</p>
                    {priceChange<0 ? (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>): (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p> )}
                    <p className='coin-marketcap'><span className='symbol-color'>₹</span> {marketcap.toLocaleString()}</p>
                </div>
            </div>
            </div>
    )
}

export default Coin;
