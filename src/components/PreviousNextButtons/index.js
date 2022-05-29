import React from 'react'
import './style.css'

const PrevNextButton = ({onPrevClick, onNextClick}) => {
    return(
        <div className='buttonWrapper'>
            <button onClick={onPrevClick}>Prev</button>
            <button onClick={onNextClick}>Next</button>
        </div>
    )
}

export default PrevNextButton