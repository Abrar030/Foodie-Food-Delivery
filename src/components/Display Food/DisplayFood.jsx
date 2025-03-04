import React from 'react'
import Cards from '../Display Food/Cards'
import { listofmenu } from '../../assets/assets'
const DisplayFood = () => {
  return (
    <div>
      <h1 style={{ color: "#F40009" }}>M E N U</h1>
      <div className='d-flex flex-wrap flex-row' style={{ justifyContent: "space-around " }}>
        {listofmenu.map(function (item, idx) {
          return <Cards
          key={idx}
          food_image={item.food_image} 
          food_name={item.food_name} 
          food_price={item.food_price} />
        })}
      </div>
    </div>
  )
}

export default DisplayFood