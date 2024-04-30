import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import SalePage from '../SalePage'
export default function ProductSale() {
  return (
   <div>    
<header>
 {/* <!-- Sidebar --> */}
  <Sidebar/>

  {/* <!-- Sidebar --> */}
 <TopNavbar/>
  </header>
{/* <!--Main Navigation--> */}

{/* <!--Main layout--> */}
<main style={{"margin-top":"58px"}}>
  <div className="container pt-4">
   <SalePage/>
    </div>
  </main>
</div>
  )
}
