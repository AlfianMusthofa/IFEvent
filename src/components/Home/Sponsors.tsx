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
import Topindoku from '../../assets/sponsors/topindoku.png'
import javacipta from '../../assets/sponsors/javanciptasolusi.png'
import Sasana from '../../assets/sponsors/sasana.png'
import Diskominfo from '../../assets/sponsors/diskominfo.png'
import Dicoding from '../../assets/sponsors/dicoding.png'
import Lsp from '../../assets/sponsors/lsp.png'
import Aeu from '../../assets/sponsors/aeu.png'
import Tata from '../../assets/sponsors/tata.png'
import Nusa from '../../assets/sponsors/nusa.png'
import Aptikom from '../../assets/sponsors/aptikom.png'
import Solusi from '../../assets/sponsors/solusi.png'


const Sponsors = () => {
   return (
      <div className='container mx-auto py-[10px] my-[15px]'>
         <p className='text-center mb-[20px] text-[17px] font-semibold tracking-wider'>TRUSTED BY THE MOST AMBITIOUS PARTNERS</p>
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
            <div className='mx-[15px]'>
               <img src={Topindoku} className='w-[87px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={javacipta} className='w-[95px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Sasana} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Diskominfo} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Dicoding} className='w-[95px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Lsp} className='w-[70px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Aeu} className='w-[80px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Tata} className='w-[50px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Nusa} className='w-[50px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Aptikom} className='w-[80px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={Solusi} className='w-[95px]' />
            </div>
         </Marquee>
      </div>
   )
}

export default Sponsors