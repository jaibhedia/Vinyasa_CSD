import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black p-5'>
         
       
           
            <div className='flex flex-col sm:flex-row justify-between  gap-8 sm:mr-36'> 
            <div className=''>
                <img src="/LOGO_Vinyasa.png" alt="" className='h-36 ml-20 sm:ml-36' />
            </div>
            <div className=''>
            <p className='text-white font-sherif text-lg pl-16 sm:pl-0 pt-8'>Phone : +918239267827 <br /> 1DT21CG049@dsatm.edu.in</p>
            </div>
            

                {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="">
                    <img src="/linkedin.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

             

               {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="https://www.instagram.com/vinyasacsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src="/discord.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

                {/* <ul>
                <li>
                    <button className=''>
                    
                    <a href="https://www.instagram.com/vinyasacsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src="/school.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul> */}

            </div>
        
        <div className='flex flex-col sm:flex-row items-center justify-end mr:0 sm:mr-36'>
        <ul>
                <li>
                    <button className='pt-16 sm:pt-0 pr-6'>
                    
                    <a href="https://www.instagram.com/vinyasacsd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src="/instagram.png" alt="" className='h-8' />
                    </a>
                    </button>
                </li>
                </ul>
            {/*<p className='text-white'>All rights reserved</p>*/}
            <p className='text-white text-lg pr-96 mr-56'>© Vinyasa 2024</p>
           
        </div>
      
    </div>
  )
}

export default Footer
