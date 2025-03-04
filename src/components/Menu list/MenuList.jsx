import React from 'react'
import {menu} from '../../assets/assets'
import './MenuList.css';
const MenuList = () => {
  return (
    <div className='menu-list container' id='menu-list'>
      <div className='menu-title'style={{color:"#F40009"}}>
        <h1>R E C O M M E N D E D</h1>
      </div>
      <div className='list'>
        {menu.map(function(elements,idx){
          return <div className='image-list'><img src={elements.menu_image} alt="Error" />
          <p>{elements.menu_name}</p>
          </div>
        })}
      </div>
       
    </div>
  )
}

export default MenuList