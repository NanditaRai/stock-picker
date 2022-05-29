import React from 'react'
import './style.css'

const List = ({list, onListItemClick}) => {
    return(
        <div className='listWrapper'>
        {list.map((element, index) => (
            <div onClick={() => onListItemClick(element.Symbol)} className='listItemStyle' key={`${index}-${element.Symbol}`} data-testid="list-item">
                {element.Symbol}
            </div>
        ))}
        </div>
    )
}

export default List