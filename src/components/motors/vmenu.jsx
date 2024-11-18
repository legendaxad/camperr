
import React from 'react'
import { Buttun, Carinsideinfo, Insidecar, Maincar, Vmenucar}  from './motostyle'


import { Menucars } from '../motors'
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'
const Vmenucomponent = () => {
     
  return (
    <div>
      <Menucars></Menucars>
     <Vmenucar>
     {
      motordata.map((value , Hmenu)=>{
            return (
                 
                  <>
          
                  <Maincar key={value.id}>
                  <Link style={{textDecoration:'none'}} to={`/motor-detail/${value.id}`}>
                    <img src={value.car.photo} alt="" /></Link>
                   <Carinsideinfo>  <Link style={{textDecoration:'none'}} to={`/used-car-detail/${value.id}`}>
                    <Insidecar>
                          <div><h3>{value.car.name}</h3>
                          <p>{value.car.company}</p></div>
                          <div style={{alignItems:'end'}}><h4>{value.car.cost}</h4>
                          <p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M12.8023 5.35491C12.7657 5.24692 12.6982 5.15203 12.6082 5.08195C12.5182 5.01187 12.4097 4.96968 12.296 4.96058L8.97041 4.69633L7.53133 1.51075C7.4855 1.40815 7.41095 1.321 7.31669 1.25983C7.22243 1.19866 7.11247 1.16608 7.0001 1.16602C6.88773 1.16595 6.77774 1.19842 6.68341 1.25948C6.58908 1.32055 6.51444 1.40761 6.4685 1.51016L5.02941 4.69633L1.70383 4.96058C1.5921 4.96943 1.48528 5.01029 1.39615 5.07826C1.30703 5.14623 1.23938 5.23843 1.20128 5.34385C1.16319 5.44926 1.15628 5.56342 1.18136 5.67266C1.20645 5.7819 1.26248 5.8816 1.34275 5.95983L3.80033 8.35558L2.93116 12.1192C2.90477 12.2332 2.91323 12.3524 2.95544 12.4615C2.99765 12.5705 3.07167 12.6644 3.16788 12.7308C3.2641 12.7973 3.37807 12.8333 3.495 12.8342C3.61194 12.8351 3.72645 12.8008 3.82366 12.7358L6.99991 10.6183L10.1762 12.7358C10.2755 12.8018 10.3927 12.8358 10.5119 12.8332C10.6312 12.8305 10.7468 12.7915 10.8431 12.7212C10.9395 12.6509 11.0121 12.5528 11.051 12.4401C11.09 12.3274 11.0935 12.2054 11.0611 12.0907L9.99416 8.35733L12.6402 5.97616C12.8134 5.81983 12.877 5.576 12.8023 5.35491Z" fill="#FF7A00"/>
        </svg>{value.car.rate}</p>
                          </div>
                    </Insidecar></Link>
                    <Buttun>
                          <button><p>Order</p></button>
                          <button><p>Compare</p></button>
                    </Buttun>
        
                    </Carinsideinfo>
                  </Maincar>
                  
                  </>
                   
            )
      })
}
     </Vmenucar>
     

    </div>
  )
}

export default Vmenucomponent