import React from 'react';
import { icons } from '../../assets/assets';
import { useState } from 'react';

const Cards = ({ food_name, food_image, food_price }) => {
  const [count, setcount] = useState(0)
  const handleadd = (setCount, count) => {
    setcount(count + 1);
  }

  const handlesubstract = () => {
    setcount(count - 1);
  }
  return (

    <div className='food-card p-4 ' style={{}} >
      <div class='card'
        style={{ width: "320px", boxShadow: "0px 0px 10px   #00000093", transition: "0.3s", animation: "fadeIn 1s" }}>
        <div
          className='card-header text-white p-2'
          style={{ backgroundColor: "#F40009", display: "flex", justifyContent: "space-between", }}>
          <div className='card-title py-1 my-1' style={{ fontSize: "1rem", fontWeight: "bolder" }}>{food_name}</div>  
        </div>
        <img src={food_image} style={{}} alt="" />
      </div>
      <div className='' style={{}}>
            {!count
              ? <div className=' ' style={{ border: "5px solid white", borderRadius: "30px" }}>
                <img

                  src={icons.add_icon_white}
                  style={{ height: "40px", width: "40px" ,marginTop:"-300px",marginLeft:"115px",position:"absolute"}}
                  alt=""
                  onClick={() => {
                    handleadd(setcount, count)
                  }} />
              </div>
              : <div className='add-remove '
                style={{ backgroundColor: "#ffff", border: "1px solid #ffff", borderRadius: "50px", display: "flex", gap: "10px", alignItems: "center", marginTop:"-60px",marginLeft:"100px",position:"absolute"}}>
                <img
                  src={icons.add_icon_green}
                  alt=""
                  onClick={() => {
                    handleadd(setcount, count)
                  }}
                  style={{ height: "30px", width: "30px", marginTop: "0" }}
                />
                <div>
                  <p className='px-3 py-1 my-2' style={{}}>{count}</p>
                </div>
                <div>
                  <img
                    src={icons.remove_icon}
                    alt=""
                    onClick={() => {
                      handlesubstract(setcount, count)
                    }}
                    style={{ height: "30px", width: "30px", marginTop: "0" }}
                  />
                </div>
              </div>

            }
          </div>

    </div >

  );
}

export default Cards;