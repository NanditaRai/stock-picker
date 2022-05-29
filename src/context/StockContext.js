import React, {useState} from 'react'

export const StockContext = React.createContext()

export const StockProvider = ({children}) => {
    const [stocks, addStocks] = useState([])
    const [selectedStock, setSelectedStock] = useState({})
    const [searchHistory, updateSearchHistory] = useState([])

    const selectStock = (symbol) => {
      console.log("&&&&&&", symbol)
      const stock = stocks.find(({Symbol}) => Symbol === symbol)
      setSelectedStock(stock)
      updateSearchHistory([...searchHistory, stock])
    }

    const getCurrentStockIndex = () => {
      return searchHistory.findIndex(item=> item.Symbol === selectedStock.Symbol)
    }

    const selectPreviousStock = () => {
      let currentStockIndex = getCurrentStockIndex()
      if(currentStockIndex === 0 || currentStockIndex === -1){
        //do nothing
        return
      }else{
        currentStockIndex = currentStockIndex - 1
        setSelectedStock(searchHistory[currentStockIndex])
      }
    }

    const selectNextStock = () => {
      let currentStockIndex = getCurrentStockIndex()
      if(currentStockIndex === searchHistory.length-1 || currentStockIndex === -1){
        //do nothing
        return
      }else{
        currentStockIndex = currentStockIndex + 1
        setSelectedStock(searchHistory[currentStockIndex])
      }
    }
    
    return(
      <StockContext.Provider value={{stocks, addStocks, selectStock, selectedStock, selectNextStock , selectPreviousStock}}>
        {children}
      </StockContext.Provider>
    )
}