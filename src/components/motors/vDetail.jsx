
import React from 'react'
import { Belowdiv, Buttonlast, Buttonsa, CArinfo, Datailback, Firstdiv, MainDetaildiv,  SecondDiv,  Updiv } from './motostyle'
import { useParams } from 'react-router-dom';
import { motordata } from '../mock/motor';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Seconddetail from '../../assets/seconddetail.svg'
import Fourthdetail from '../../assets/fifthdetail.svg'
import FirstDetail from '../../assets/firstdetail.svg'
import thirDetail from '../../assets/thirddetail.svg'
import sixTh from '../../assets/sixdetail.svg'
import BasicTabs from '../tabs';




//tabs

const DetailVmotors = () => {
    
      const { id } = useParams();
      const car = motordata.find((item) => item.id === parseInt(id));
  
  return (
    <div >
      <Datailback>
            <h2>{car.car.name}</h2><br /><br />
            <Stack spacing={3} direction="row">
     
     <Button variant="contained">ADD TO CART</Button>
     <Button 
     variant="outlined">COMPARE</Button>
   </Stack>
            </Datailback>

            <MainDetaildiv>
                  <Firstdiv>
                        <div><img src={car.car.photo} alt="" /></div>
                        <CArinfo>
                            <Updiv>
                              <div><h2>{car.car.name}</h2>
                              <p>aid</p></div>
                              <b>{car.car.cost}</b>
                            </Updiv>
                            {/* <MiddleLine></MiddleLine> */}
                            <Belowdiv>

                              <div style={{paddingRight:170}}><p>Company</p>
                              <p>People</p>
                              <p>License type</p>
                              </div>
                              <div> <p>{car.car.company}</p>
                              <p>{car.car.people}</p>
                              <p>{car.car.license}</p>
                              </div>
                             
                               </Belowdiv>
                             
                        </CArinfo>
                  </Firstdiv>
                  <SecondDiv>
                       <div> <h2>Comfort</h2><br />
                       <p>{car.car.word}</p>
                       </div>
                       <img src={FirstDetail} alt="" />
                         </SecondDiv>
                         <SecondDiv>
                         <img src={Seconddetail} alt="" />
                       <div> <h2>Tidying away is child’s play!</h2><br />
                       <p>{car.car.word1}</p>
                       </div>
                     
                         </SecondDiv>
                         <SecondDiv>
                       <div> <h2>Ventilated , Lit up</h2><br />
                       <p>{car.car.word2}</p>
                       </div>
                       <img src={thirDetail} alt="" />
                         </SecondDiv>
                         <SecondDiv>
                         <img src={Fourthdetail} alt="" />
                       <div> <h2>Easy access</h2><br />
                       <p>{car.car.word3}</p>
                       </div>
                      
                         </SecondDiv>
                         <Buttonlast>
                   <div className='axa'>  <div className='ssss'> 
                       <p><h2>Heating when driving</h2><br />{car.car.word4}</p> 
                      
                        </div> <br /><br />
                       
     <Buttonsa>  
      <Button variant="contained">ADD TO CART</Button>
      <Button variant="outlined">COMPARE</Button> </Buttonsa> 
    
                        </div>  
                       <img src={sixTh} alt="" />
                         </Buttonlast> 

<BasicTabs/>

          </MainDetaildiv>
      
    </div>
  )
}

export default DetailVmotors