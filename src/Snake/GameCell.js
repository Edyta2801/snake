import React from 'react'

const style = {
    flexBasis: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


const GameCell = (props) => (
    <div
        style={style}
    >
        {props.cell}
    </div>
)
export default GameCell 
