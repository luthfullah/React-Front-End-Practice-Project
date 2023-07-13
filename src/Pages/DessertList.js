import React from 'react'

const DessertList = (props) => {
    const dessertList = props.data
    .filter((dessert)=>{
        return dessert.calories< 500;
    })
    .map((dessert) => {
        return(
                <tr style={{border:'red solid 20px'}}>
                    <td >{dessert.name}</td>
                    <td className='pl5'>{dessert.calories}</td>
                </tr>
       );});

  return (
    <table className='bg-light-gray f1 center  ' 
    style={{border: 'solid black 5px', 
            padding:'50px ',
            marginBottom:'100px'
        }}
    > {dessertList}</table>
  )
}

export default DessertList

