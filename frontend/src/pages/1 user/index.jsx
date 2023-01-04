// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import Footer from '../common/Footer'
// import NavBar from '../common/NavBar'
// import GaugeChart from 'react-gauge-chart'


// function UserDashboard() {
//   const {fname,lname,packages} = useSelector(state=>state.user)
//   const [totalDays, setTotalDays] = useState(90)
//   const [balanceDays, setBalanceDays] = useState(90)
//   useEffect(() => {
//     if(Number(packages) === 12){
//         setTotalDays(365)
//         setBalanceDays(365)
//     }else if(Number(packages) === 6){
//       setTotalDays(180)
//       setBalanceDays(180)
//     }else{
//       setTotalDays(90)
//       setBalanceDays(90)
//     }
//     // eslint-disable-next-line
//   }, [])
  
  
//   return (
//     <div>
//       <NavBar/>
//         <div className="mt-24 py-[5%] px-[10%] space-y-10">
//           <h1 className='text-2xl font-medium'>Welcome {fname} {lname}</h1>
//           <div className="text-xl font-medium ">
//             <p>Your Package is: <br />{packages} Months </p>
//           </div>

//           <div className="w-72">
//               <GaugeChart 
//               formatTextValue={value=>`${balanceDays} days left`}
//               textColor='#000'
//               style={{width:'100%'}}
//               nrOfLevels={3}
//               percent={balanceDays/totalDays} 
//               colors={['#FC0100','#FFFB0B','#49FC01']}
//               />
//           </div>
//           <UpgradePlane packages={packages} />
          
//         </div>
//       <Footer />
//     </div>
//   )
// }

// export default UserDashboard



// const UpgradePlane=({packages})=>{
//   return(
//     <div className="upgrade space-y-5">
//             {
//               Number(packages) === 3 && <div className="space-y-2">
//               <label htmlFor="">Upgrade You plan Package</label>
//               <div className="flex gap-3">
                
//                 <div className="">
//                   <input className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='2' />
//                   <label htmlFor="2"> Six Months</label>
//                 </div>
//                 <div className="">
//                   <input  className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='3' />
//                   <label htmlFor="3"> Twelve Months</label>
//                 </div>
//               </div>
//             </div>
//             }

//             {
//               Number(packages) === 6 && <div className="space-y-2">
//               <label htmlFor="">Upgrade You plan Package</label>
//               <div className="flex gap-3">
//                 <div className="">
//                   <input  className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='3' />
//                   <label htmlFor="3"> Twelve Months</label>
//                 </div>
//               </div>
//             </div>
//             }
//             {
//               Number(packages) !==12 && <button  className='h-12 w-28 bg-red-500 rounded-md text-white' >UPGRADE</button>
//             }
//           </div>
//   )
// }

