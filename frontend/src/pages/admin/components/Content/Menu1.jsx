import React from 'react'
import { LiveTvOutlined,ArrowCircleUpRounded } from '@mui/icons-material'

function Menu1() {
    return (
        <div>
            <h2 className='text-2xl font-medium'>Dashboard</h2>
            <div className="flex gap-10 flex-wrap mt-5">
                <Box color='#6418C3' icon={<LiveTvOutlined className='text-[#6418C3]'/>} title={'Active Subscription'} />
                <Box color='#E328AF' icon={<LiveTvOutlined className='text-[#E328AF]'/>} title={'Expiring Soon'}/>
            </div>
        </div>
    )
}

export default Menu1


const Box = ({color='#E328AF',icon,title}) =>{
    return(
        <div className="bg-white h-56 w-80 rounded-3xl mt-5 overflow-hidden">
            
            
            
            <div className="w-full h-3/4 flex p-5">

                <div className="h-full space-y-4">
                    {/* <div className="flex gap-5 justify-center items-center">
                        <span className={`text-[${color}]`}>{icon}</span> <p>{title}</p>
                    </div> */}
                    <span >{icon}</span> 
                    <p className='font-medium'>{title}</p>
                    <h2 className='text-lg font-medium'>80</h2>
                    
                </div>

                <div className="h-full">

                </div>
            </div>


            <div className={`w-full h-1/4 flex  text-white p-3`} style={{backgroundColor:color}}>
                <ArrowCircleUpRounded className='text-2xl whatsapp-icon'/> 
                <p className='text-lg font-medium'>+ 18 % than last  Month</p>
            </div>
        </div>
    )
}