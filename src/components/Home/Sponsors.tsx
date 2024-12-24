import Marquee from 'react-fast-marquee'
import Ukas from '../../assets/sponsors/ukas.png'
import Cisco from '../../assets/sponsors/cisco.png'
import CBN from '../../assets/sponsors/cbn.png'
import Gama from '../../assets/sponsors/gama.png'
import Mikrotik from '../../assets/sponsors/mikrotik.png'
import Ultimatics from '../../assets/sponsors/ultimatics.png'
import Bpi from '../../assets/sponsors/bpi.png'
import Qwords from '../../assets/sponsors/qwords.png'
import Oracle from '../../assets/sponsors/oracle.png'
import Preinexus from '../../assets/sponsors/preinexus.png'
import Dataindonesia from '../../assets/sponsors/dataindonesia.png'
import Bts from '../../assets/sponsors/btsid.png'
import Inixindo from '../../assets/sponsors/inixindo.png'

const Sponsors = () => {
   return (
      <div className='container mx-auto py-[10px] my-[15px]'>
         <p className='text-center mb-[40px] text-[17px] font-semibold tracking-wider'>TRUSTED BY THE MOST AMBITIOUS PARTNERS</p>
         <Marquee gradient={true}>
            <div className='mx-[15px]'>
               <img src={Ukas} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Gama} className='w-[105px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={CBN} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Cisco} className='w-[70px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Mikrotik} className='w-[90px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Ultimatics} className='w-[105px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Bpi} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Oracle} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Qwords} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Dataindonesia} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Preinexus} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Bts} className='w-[95px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Inixindo} className='w-[95px]' />
            </div>
         </Marquee>
      </div>
   )
}

export default Sponsors