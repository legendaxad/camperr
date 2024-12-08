import React from 'react'
import { Carorder, Divorder, Order, Orderdiv, Wrapper } from './orderstyle'


import { useParams } from 'react-router-dom';
import { usedVehicles } from '../mock/usedcar';
const Usedcarorder = () => {
  const { id } = useParams();
  const car = usedVehicles.find((item) => item.id === parseInt(id));
  return (
      
    <div>
      <Order>
      <h2>My orders</h2><br />
      <h3>№ 23</h3><br />
      <br />

      <Carorder>

        <img src={car.car.photo}  alt="Carimage" />
        <Orderdiv>
          <Divorder><div><h3>{car.car.name}</h3>
          <h4>{car.car.company}</h4></div>
          <span>{car.car.cost}</span>
          </Divorder>

          <Wrapper><p><strong>Location:</strong>{car.car.location}</p>
          <p><strong>Payment:</strong>Credit card</p></Wrapper>
        </Orderdiv>


      </Carorder><br /><br />

      </Order>
    </div>
  )
}

export default Usedcarorder