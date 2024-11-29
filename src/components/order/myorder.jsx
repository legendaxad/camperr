import React from 'react'
import { Carorder, Divorder, Order, Orderdiv, Wrapper } from './orderstyle'
import Axad from '../../assets/caravan-20.png'
const Myordercomponent = () => {
  return (
    <div>
      <Order>
      <h2>My orders</h2><br />
      <h3>№ 23</h3><br />
      <br />

      <Carorder>

        <img src={Axad} alt="Carimage" />
        <Orderdiv>
          <Divorder><div><h3>Name of the car</h3>
          <h4>Brand name</h4></div>
          <span>250$</span>
          </Divorder>

          <Wrapper><p><strong>Location:</strong>Korea , Seul</p>
          <p><strong>Payment:</strong>Credit card</p></Wrapper>
        </Orderdiv>


      </Carorder><br /><br />
      <Carorder>

        <img src={Axad} alt="Carimage" />
        <Orderdiv>
          <Divorder><div><h3>Name of the car</h3>
          <h4>Brand name</h4></div>
          <span>250$</span>
          </Divorder>

          <Wrapper><p><strong>Location:</strong>Korea , Seul</p>
          <p><strong>Payment:</strong>Credit card</p></Wrapper>
        </Orderdiv>


      </Carorder>
      </Order>
    </div>
  )
}

export default Myordercomponent