import React from 'react'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import FAQ from './FAQ'


function FAQS() {

    const faq = [
        {
            question:'What is IPTV ?',
            ans:`
              Internet Protocol television (IPTV) is the delivery of television content over Internet Protocol networks. 
              This is in contrast to delivery through traditional terrestrial, satellite, and cable television formats. 
              Unlike downloaded media, IPTV offers the ability to stream the source media continuously.`,
        },
        {
          question:'Why Choose IPTV over regular satellite services?',
          ans:`
              Simple, it provides you with thousands or channels, movies on demand, series on demand, 
              sporting events from all around the world at a fraction of the price from traditional satellite TV or Cable TV providers.`
        },
        {
          question:'How much does IPTV cost?',
          ans:`Click here to see our subscription package.`
        },
        {
          question:'Are there any additional costs associated with MegaMax IPTV ?',
          ans:`No, your initial payment includes a brand NEW Amazon FireStick and 12 Month subscription to our Proprietary FireMedia Pro TV.`
        },
        {
          question:'How do I renew my subscription ?',
          ans:`We will notify you by email / SMS 2 weeks prior to the expiration of your subscription.`
        },
        {
          question:'Does MegaMax offer discounts?',
          ans:`Yes, get your next year MegaMax completely free, just refer 10 friends or family to our service by using your personal referral code, 
              each referral is equivalent to 10% discount of your next years subscription.`
        },
        {
          question:'What Payment Methods are available?',
          ans:`Cash On Delivery only, and no hidden fees.`
        },
        {
          question:'Can I use on two devices at the same time on one subscription?',
          ans:`No, you can’t. But you can move the FireStick to any TV at home or take with you on your travels.`
        },
        {
          question:'What Internet speed is recommended to use IPTV?',
          ans:`Any broadband package is suitable for MegaMax IPTV Package preferably above 8MBPS`
        },
        {
          question:'Is VPN required?',
          ans:`No`
        },
        {
          question:'What kind of devices does the MegaMax FireStick support?',
          ans:`Any display device with HDMI port, TV, Smart TV and Monitors (as long as the monitor has sound output).`
        },
        {
          question:'What is MegaMax response time for customer support?',
          ans:`Technical support will be responded within an hour. During peak hours this can take up to 3 hours.`
        },
        {
          question:'Can FireStick turn my tv into smart tv?',
          ans:`Yes. You can pair your FireStick Remote to your TV to `
        },

        {
          question:'Wifi Or Ethernet ?',
          ans:`FireStick is Wifi Only.`
        },
        {
          question:'Im facing to buffering issues with channels. What is happening?',
          ans:`Sometimes you may experience buffering due to low internet speed, high internet traffic . If you experience buffering press “pause” for 10-15 seconds and resume, most of the time that will eliminate the need to buffer. If this doesn’t solve the problem, log out from FireMedia (clicking the top right icon), then click on “Refresh DNS”, then log back in.`
        },
        // {
        //   question:'',
        //   ans:``
        // },
        
    ]
    return (
      <>
      <NavBar/>
        <div className='text-white flex flex-col items-center gap-10 bg-[#121212] py-[5%] mt-24'>
            <div className="">
                <h2 className='text-center text-3xl md:text-5xl'>Frequently Asked Questions</h2>
            </div>
            <div className="divide-y w-[80%] xl:w-3/4 divide-[#333] space-y-5">
                {faq.map(e=><FAQ key={e.question} question={e.question} ans={e.ans} />)}
            </div>
        </div>
        <Footer />
      </>
    )
}

export default FAQS

