import React from 'react'
import Mynavbar from '../../shares/Mynavbar'
import Mysidebar from '../../shares/Mysidebar'
import Myfooter from '../../shares/Myfooter'
import { Outlet } from 'react-router-dom'
// import { Carousel } from '../../shares/Carousel'


function Mylandingpage() {
  return (
    <div className='container-fluid'>
        <div className='row fixed-top'>
            <div className='col-12'>
            <Mynavbar/>
            </div>
        </div>
        <div className='row m-page'>
            <div className='col-md-2 border'>
                <Mysidebar/>
            </div>
            <div className='col-md-10'>
                <div className='page'>
                {/* <Carousel/> */}
                    <Outlet/>
                </div>

            <Myfooter/>
            </div>
            
        </div>

        
    </div>

  )
}

export default Mylandingpage