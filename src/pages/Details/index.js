import React, {useContext} from 'react'
import { StockContext } from '../../context/StockContext';
import './style.css'

const Details = () => {
    const { selectedStock} = useContext(StockContext)

    return(
        <div>
            
          <div>
            <div className='detailItem' data-testid="details-name"><span className='title'>Name:</span> {selectedStock.Name}</div>
            <div className='detailItem'><span className='title'>Symbol:</span> {selectedStock.Symbol}</div>
            <div className='detailItem'><span className='title'>Description:</span> {selectedStock.Description}</div>
            <div className='detailItem'><span className='title'>PE Ratio:</span> {selectedStock.PERatio}</div>
            <div className='detailItem'><span className='title'>Industry:</span> {selectedStock.Industry}</div>
            <div className='detailItem'><span className='title'>Market Cap:</span> {selectedStock.MarketCapitalization}</div>
          </div>
        </div>
    )
}

export default Details