import React from 'react'
import { Hmenuca } from './usedcarstylem'
import {  Cars, Menucars } from '../motors'
import { usedVehicles } from '../mock/usedcar'
import { Link } from 'react-router-dom'



const UsedcomponentH = ({searchData}) => {
   
const caheckedData=usedVehicles.filter((data)=>data.car.name.toLocaleLowerCase().includes(searchData.toLowerCase()))
      return (
    <>
    <Menucars></Menucars>

    <Hmenuca>
{
      caheckedData.map((value , Hmenu)=>{
            return (
                 
                     
                  <div> <Cars key={value.id}>
                     <Link style={{textDecoration:'none'}} to={`/used-car-detail/${value.id}`}> 
                        <img src={value.car.photo} alt="" />
                        <h3>{value.car.name}</h3>
                        <div><p>{value.car.company}</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M12.8023 5.35491C12.7656 5.24692 12.6982 5.15202 12.6082 5.08195C12.5182 5.01187 12.4097 4.96968 12.296 4.96058L8.9704 4.69633L7.53132 1.51075C7.48548 1.40815 7.41094 1.321 7.31668 1.25983C7.22241 1.19866 7.11246 1.16608 7.00009 1.16602C6.88772 1.16595 6.77773 1.19842 6.6834 1.25948C6.58907 1.32055 6.51442 1.40761 6.46848 1.51016L5.0294 4.69633L1.70382 4.96058C1.59208 4.96943 1.48526 5.01029 1.39614 5.07826C1.30702 5.14623 1.23936 5.23843 1.20127 5.34385C1.16318 5.44926 1.15626 5.56342 1.18135 5.67266C1.20644 5.7819 1.26247 5.8816 1.34273 5.95983L3.80031 8.35558L2.93115 12.1192C2.90476 12.2332 2.91322 12.3524 2.95543 12.4615C2.99764 12.5705 3.07165 12.6644 3.16787 12.7308C3.26408 12.7973 3.37805 12.8333 3.49499 12.8342C3.61193 12.8351 3.72643 12.8008 3.82365 12.7358L6.9999 10.6183L10.1761 12.7358C10.2755 12.8018 10.3927 12.8358 10.5119 12.8331C10.6312 12.8305 10.7468 12.7915 10.8431 12.7212C10.9395 12.6509 11.0121 12.5528 11.051 12.4401C11.09 12.3274 11.0935 12.2054 11.0611 12.0907L9.99415 8.35733L12.6401 5.97616C12.8134 5.81983 12.877 5.576 12.8023 5.35491Z" fill="#FF7A00"/>
</svg>{value.car.rate}</p>
                        </div>
                        <h4>{value.car.cost}</h4></Link> 
                        <div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/used-car-order/${value.id}`}
                ><button>Order</button></Link> 
                 
                 <Link
                  style={{ textDecoration: "none" }}
                  to={`/used-car-compare/${value.id}`}>  <button>Compare</button></Link> 
                </div>
                  </Cars></div>  
                   
            )
      })
}</Hmenuca>  

    </>
  )
}

export default UsedcomponentH