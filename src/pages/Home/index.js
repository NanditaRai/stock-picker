import React, {useEffect, useContext} from 'react'
import './style.css'
import SearchPage from '../Search'
import DetailsPage from '../Details'
import { StockContext } from '../../context/StockContext';
import { getStocks } from '../../network/apis';

const Home = () => {
    const {addStocks} = useContext(StockContext)

    useEffect(() => {
        getStocks().then(stocks =>{
            addStocks(stocks)
        } )
    },[addStocks])

    return(
        <div className='homepageWrapper'>
            <div className='homepageChild'>
              <SearchPage />
            </div>
            <div className='homepageChild'>
              <DetailsPage />
            </div>       
        </div>
    )
}

export default Home