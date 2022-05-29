import React from 'react'
import './style.css'

const SearchBar = ({searchValue, setSearchValue}) => {
   
   const onInputChange = (event) => {
       const value = event.target.value
       setSearchValue(value || '')
   }

    return (
        <input
          style={{'width': '500px', height: '40px'}}
          placeholder={'Type your text here...'}
          data-testid="search-input"
          onChange={onInputChange}
          value={searchValue}
        />
    )
}

export default SearchBar