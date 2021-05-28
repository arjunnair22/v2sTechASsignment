import React from 'react'
function TableRow({data , onClick=()=>{}}){
    const values = Object.values({...data})
    return (
            <tr className={'clickable'} onClick={onClick} >
                {values.map(val =><td key={val}>{val}</td>  )}
            </tr>
    )
}

export default TableRow