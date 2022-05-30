import './style.css';
import SearchBar from '../../components/SearchBar'
import React, {useEffect, useState, useContext, useCallback, useMemo} from 'react'
import { StockContext } from '../../context/StockContext';
import PrevNextButton from '../../components/PreviousNextButtons';
import filterList from '../../utils/filterList'
import debounce from '../../utils/debounce'
const List = React.lazy(() => import('../../components/List'));

const Search = () => {
  const [filteredList, setFilteredList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const {stocks, selectStock, selectPreviousStock, selectNextStock } = useContext(StockContext) || {}

  const updateFilteredList = useCallback((stocks, searchValue) => {
     const newList = filterList({list: stocks, key: 'Symbol', filterText: searchValue})
     setFilteredList(newList);
  },[])

  const debouncedFilter = useMemo(() => debounce(updateFilteredList, 500), [updateFilteredList])
  
  useEffect(() => {
    debouncedFilter(stocks, searchValue)
  }, [searchValue, debouncedFilter, stocks])
  
  const onSearchButtonClick = () => {
    //look if the searchValue is equal to any symbol value or not
    let searchedItem = stocks.find(item => item.Symbol.toLowerCase() === searchValue.toLowerCase())
    if(searchedItem){
      selectStock(searchedItem.Symbol)
    }else{
      alert('Stock not found')
    }
  }

  const onListItemClick = useCallback((symbol) => {
      selectStock(symbol)
  }, [selectStock])

  const onPrevClick = useCallback(() => {
    selectPreviousStock()
  },[selectPreviousStock])

  const onNextClick = useCallback(() => {
    selectNextStock()
  },[selectNextStock])

  return (
    <div className='searchPage'>
      <div className='historyButtonWrapper'>
        <PrevNextButton onPrevClick={onPrevClick} onNextClick={onNextClick}/>
      </div>
      <div className='searchBarWrapper'>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <button className='searchButton' onClick={onSearchButtonClick}>Search</button>
      </div>
      <div className='listWrapper'>
        {filteredList.length ? <List list={filteredList} onListItemClick={onListItemClick}/> : null}
      </div>
    </div>
  );
}

export default Search;
