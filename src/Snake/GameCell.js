import React from 'react'

const style = {
    flexBasis: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


const GameCell = (props) => (
    <div
        style={{
            ...style,
            flexBasis: 100 / props.numberOfCells + '%'
        }}
    >
        {props.cell}
    </div>
)
export default GameCell 
